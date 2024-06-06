import requests
import time

# Function to send data to the Flask server
def send_data(emg_value, effect_name, mode_value):
    url = 'http://localhost:5000/update_data'  # Replace with your server URL
    data = {'emg_value': emg_value, 'effect_name': effect_name, 'mode_value': mode_value}
    response = requests.post(url, json=data)
    print(response.text)

# Example data
emg_value = 75
effect_name = 'Bass Boost'
mode_value = 2

# Send data to the server
send_data(emg_value, effect_name, mode_value)
