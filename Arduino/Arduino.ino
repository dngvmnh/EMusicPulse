#include <Servo.h>
#define THRESHOLD 500
#define EMG_PIN A0
#define SERVO_PIN 9
void setup() {
  Serial.begin(9600);
}
void loop(){
  int mode = analogRead(A5);
  int loop_mode = map(mode,0,1023,1000,1002);
  int value = analogRead(EMG_PIN);
  
  Serial.print(value);
  Serial.print(", ");
  Serial.println(loop_mode);
}
