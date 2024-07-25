import serial
import pygame
import time
import threading
import brainflow

arduino_port = 'COM6'
baud_rate = 9600
ser = serial.Serial(arduino_port, baud_rate)

pygame.mixer.init()


loop1 = pygame.mixer.Sound('loop1.wav')
loop2 = pygame.mixer.Sound('loop2.wav')
bass = pygame.mixer.Sound('bass.wav')
kick = pygame.mixer.Sound('kick.wav')

# Function to stop all loops
def stop_all_loops():
    loop1.stop()
    loop2.stop()

# Function to play the selected loop
def play_loop(loop):
    loop.play(loops=-1)  # Loop indefinitely

def play_bass():
    bass.play()

def play_kick():
    kick.play()

def stop_bass():
    bass.stop()

def stop_kick():
    kick.stop()

previous_emg_value = None
previous_time = time.time()
bass_played_this_second = False

def clean_emg_value(emg_str):
    cleaned_emg_str = ''.join(filter(str.isdigit, emg_str))
    if cleaned_emg_str:
        return int(cleaned_emg_str)
    else:
        return None

# Thread function to handle serial communication and audio control
def serial_thread():
    global previous_emg_value, previous_time, bass_played_this_second
    loop1_playing = False
    loop2_playing = False
    while True:
        if ser.in_waiting > 0:
            message = ser.readline().decode('latin-1').strip()
            try:
                EMG, mode = message.split(", ")
                if mode == "1000":
                    stop_all_loops()
                    loop1_playing = False
                    loop2_playing = False
                if mode == "1002" and not loop1_playing:
                    stop_all_loops()
                    play_loop(loop1)
                    loop1_playing = True
                    loop2_playing = False
                if mode == "1001" and not loop2_playing:
                    stop_all_loops()
                    play_loop(loop2)
                    loop2_playing = True
                    loop1_playing = False

                # Clean and convert EMG value to integer
                current_emg_value = clean_emg_value(EMG)

                if current_emg_value is not None:
                    # Get the current time
                    current_time = time.time()

                    # Check if 1 second has passed
                    if current_time - previous_time >= 0.1:
                        bass_played_this_second = False  # Reset the flag for the new second

                    if current_time - previous_time >= 0.01:
                        if previous_emg_value is not None:
                            # Compare the current EMG value to the previous value from 1 second ago
                            difference = current_emg_value - previous_emg_value

                            if mode == "1002" and  difference > 400:
                                threading.Thread(target=play_kick).start()
                                bass_played_this_second = True  # Set the flag to indicate bass played

                            if mode == "1001" and difference > 400:
                                threading.Thread(target=play_bass).start()
                                bass_played_this_second = True  # Set the flag to indicate bass played

                        # Update the previous EMG value and time
                        previous_emg_value = current_emg_value
                        previous_time = current_time

            except ValueError:
                pass

        time.sleep(0.01)

threading.Thread(target=serial_thread).start()