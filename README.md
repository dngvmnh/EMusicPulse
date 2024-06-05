## DEMO
**1. Project Setup**


**2. Play Mode**


## Project Description

**1. Overview**
EMusicPulse innovatively merges technology and art by using electromyography (EMG) to play music through muscle signals. This endeavor not only showcases the creative potential of EMG technology but also addresses significant ethical dimensions. It promotes inclusivity by enabling individuals with disabilities to participate in musical creation, thus expanding accessibility in the arts. Additionally, it supports rehabilitation efforts by offering a therapeutic avenue for those regaining muscle control and coordination. Furthermore, the project fosters STEM education and engagement, inspiring students and hobbyists to explore practical applications of biology, electronics, and programming. Through these contributions, the project embodies ethical principles of empowerment, equal opportunity, and the responsible use of technology.

This project primarily targets musicians and artists who are eager to explore innovative ways to create and perform music using their body movements. It also appeals to technology enthusiasts and DIY makers who enjoy building and experimenting with circuits and Arduino-based projects. Additionally, researchers and students studying biomedical engineering, neurology, or related fields can find valuable practical applications of EMG technology through this project. Furthermore, it provides individuals with disabilities new methods to interact with musical instruments or other devices, especially those with limited mobility.

The project addresses several significant social issues. It enhances accessibility in music and art by enabling people with physical disabilities to interact with musical instruments, thereby promoting inclusivity. By utilizing muscle signals to create music, it serves as a form of physical therapy, aiding individuals in regaining muscle control and coordination. Moreover, the project fosters education and STEM engagement by involving students and hobbyists in hands-on learning experiences that integrate biology, electronics, and programming, thus promoting a deeper understanding and interest in these fields.

**Motivation**

This project is carried out as an effort to help music enthusiasts and individuals passionate about creative expression, particularly those facing physical disabilities or challenges. We're inspired by people like Đặng Ngọc Duy, a blind teacher who loves music. Despite losing fingers in an accident, he plays the guitar with incredible skill. His story shows how technology can help anyone make music, no matter their physical challenges. EMusicPulse aims to make music accessible to everyone, just like Duy, by using special technology that turns muscle movements into music. We want to show that anyone can express themselves through music, and that technology can help make that possible. Duy's story reminds us that with determination and the right tools, anything is possible, and we want to share that message with the world through our project.
![image](https://github.com/dngvmnh/EMusicPulse/assets/133772077/8a96e70f-126a-4bc6-b17f-58bb7a1b06fc)
_Image 1. Đặng Ngọc Duy, a blind teacher and music enthusiast, skillfully playing the guitar with a three-fingered hand after an explosive accident._

## Implementation

The implementation of this project includes three main stages: setup Arduino components, processing signals, and establishing web display.

● Our system design:
![system design](https://github.com/dngvmnh/EMusicPulse/assets/133772077/10853052-1546-47bf-9715-01d42129c3fc)
_Image 2. System design._


● We used an Arduino Uno to controll to system; EMG A10-09 sensor to obtain electromyographic signals; a potentiometer to change between modes; and a speaker to play sounds and effects.

● There are two main programs for this project: obtaining signals, processing signals, and displaing on web. Arduino Uno and host device communicate through the serial port. multilayered background musics and sound effects (bass, drum, kick, chord) are joined by multi-threading. 

●  The electrodes are placed as follows:
![Screenshot 2024-06-06 004920](https://github.com/dngvmnh/EMusicPulse/assets/133772077/a549bb97-cd4d-4d81-8a0e-f9bfc0cd5946)
Given the quality of the EMG sensor and the signal noises, the signals' precision is not as accurate as we desired when measuring the muscle groups at the forearm while closing the hand. To enhance signal accuracy, electrodes were strategically positioned at the wrist, one end of the bicep, and the midpoint of the bicep (biceps brachii). Given the biceps' significant size within the arm muscle group, this placement ensures more reliable data capture.

## Results and discussion

We have successfully deployed a system that enables music, rhythm and melody creation as well as plaing musics with a price range of $78 to $118. This result fits the initial scope of this project. However, the EMG signals exhibit a notable delay in responsiveness, which complicates the analysis process due to inherent imprecision. This lag in signal processing poses challenges in accurately interpreting and evaluating muscle activity dynamics. As a result, meticulous attention must be paid to mitigating these limitations through advanced signal processing techniques and calibration methodologies to ensure the fidelity of data analysis and interpretation. Moreover, the initial setup process for the product lacks optimization, as it necessitates the use of a host laptop and the configuration of multi-threading code scripts. This procedural hurdle can be effectively addressed by integrating a WiFi module into the system, enabling direct transmission of data to the web without the dependency on a host laptop. By leveraging this wireless capability, the product can streamline its setup procedure, enhancing user convenience and eliminating the need for additional hardware components. Future research should focus on resolving these proposed issues.

Images and videos of this product can be found here: [Media](https://github.com/dngvmnh/EMusicPulse/tree/main/Media).

