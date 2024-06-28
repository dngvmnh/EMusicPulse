
# define green 10
# define yellow 11
# define red 12


void setup() {
  pinMode(green , OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(red, OUTPUT);
}
void loop(){
  digitalWrite(green, HIGH);
  delay(3000);
  digitalWrite(green, LOW);
  digitalWrite(yellow, HIGH);
  delay(3000);
  digitalWrite(yellow, LOW);
  digitalWrite(red, HIGH);
  delay(3000);
  digitalWrite(red,LOW);
}
