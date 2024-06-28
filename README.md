## DEMO
**1. Project Introduction**

https://github.com/dngvmnh/EMusicPulse/assets/133772077/6b565f47-4c07-4358-90b7-ffcfa9d729f2

**2. Project Setup**

https://github.com/dngvmnh/EMusicPulse/assets/133772077/957e46db-2db2-46be-be2f-43182c783874

## Project Description

**1. Overview**

EMusicPulse innovatively merges technology and art by using electromyography (EMG) to play music through muscle signals. This endeavor not only showcases the creative potential of EMG technology but also addresses significant ethical dimensions. It promotes inclusivity by enabling individuals with disabilities to participate in musical creation, thus expanding accessibility in the arts. Additionally, it supports rehabilitation efforts by offering a therapeutic avenue for those regaining muscle control and coordination. Furthermore, the project fosters STEM education and engagement, inspiring students and hobbyists to explore practical applications of biology, electronics, and programming. Through these contributions, the project embodies ethical principles of empowerment, equal opportunity, and the responsible use of technology.

This project primarily targets musicians and artists who are eager to explore innovative ways to create and perform music using their body movements. It also appeals to technology enthusiasts and DIY makers who enjoy building and experimenting with circuits and Arduino-based projects. Additionally, researchers and students studying biomedical engineering, neurology, or related fields can find valuable practical applications of EMG technology through this project. Furthermore, it provides individuals with disabilities new methods to interact with musical instruments or other devices, especially those with limited mobility.

The project addresses several significant social issues. It enhances accessibility in music and art by enabling people with physical disabilities to interact with musical instruments, thereby promoting inclusivity. By utilizing muscle signals to create music, it serves as a form of physical therapy, aiding individuals in regaining muscle control and coordination. Moreover, the project fosters education and STEM engagement by involving students and hobbyists in hands-on learning experiences that integrate biology, electronics, and programming, thus promoting a deeper understanding and interest in these fields.

**2. Motivation**

This project, inspired by people like Đặng Ngọc Duy - a blind teacher who loves music, is carried out as an effort to help music enthusiasts and individuals passionate about creative expression, particularly those facing physical disabilities or challenges. Despite losing fingers in an accident, he plays the guitar with incredible skill. His story shows how technology can help anyone make music, no matter their physical challenges. EMusicPulse aims to make music accessible to everyone, just like Duy, by using special technology that turns muscle movements into music. The aim is to demonstrate that music can be a means of self-expression for anyone, facilitated by technology. Duy's story illustrates that with determination and the appropriate tools, anything can be achieved, and the intention is to disseminate that message globally through this project.
![image](https://github.com/dngvmnh/EMusicPulse/assets/133772077/8a96e70f-126a-4bc6-b17f-58bb7a1b06fc)
<p align=center><em>Image 1. Đặng Ngọc Duy, a blind teacher and music enthusiast, skillfully playing the guitar with a three-fingered hand after an explosive accident.</em></p>

## Implementation

The implementation of this project includes three main stages: setup Arduino components, processing signals, and establishing web display.

● System design:
![system design](https://github.com/dngvmnh/EMusicPulse/assets/133772077/10853052-1546-47bf-9715-01d42129c3fc)
<p align=center><em>Image 2. System design.</em></p>


● An Arduino Uno was used to controll to system; EMG A10-09 sensor to obtain electromyographic signals; a potentiometer to change between modes; and a speaker to play sounds and effects.

● There are two main programs for this project: obtaining signals, processing signals, and displaing on web. Arduino Uno and host device communicate through the serial port. multilayered background musics and sound effects (bass, drum, kick, chord) are joined by multi-threading. 

● Given the quality of the EMG sensor and the signal noises, the signals' precision is not perfectly accurate when measuring the muscle groups at the forearm while closing the hand. To enhance signal accuracy, electrodes were strategically positioned at the wrist, one end of the bicep, and the midpoint of the bicep (biceps brachii). Given the biceps' significant size within the arm muscle group, this placement ensures more reliable data capture.


●  The User Interface (UI) is designed as follow:
![image](https://github.com/dngvmnh/EMusicPulse/assets/133772077/daa5135d-e520-4e14-b453-8d9ec509bf34)
<p align=center><em>Image 3. User Interface.</em></p>

The EMG Signal Dashboard web application serves as an interactive interface for monitoring real-time data received from an EMG sensor connected to an Arduino. This dashboard displays the latest EMG values, the current effect being applied, and the mode in which the system is operating. It fetches updated data from the Flask server at regular intervals, providing users with a dynamic and current view of the EMG signals and system status. This setup is particularly useful for immediate feedback and visualization of EMG data, such as in biofeedback therapy, muscle activity monitoring, and interactive audio-visual systems.


## Results and discussion

A system that enables music, rhythm and melody creation as well as playing musics was successfully deployed with a price range of $48 to $68. This result fits the initial scope of this project. However, the EMG signals exhibit a notable delay in responsiveness, which complicates the analysis process due to inherent imprecision. This lag in signal processing poses challenges in accurately interpreting and evaluating muscle activity dynamics. As a result, meticulous attention must be paid to mitigating these limitations through advanced signal processing techniques and calibration methodologies to ensure the fidelity of data analysis and interpretation. Moreover, the initial setup process for the product lacks optimization, as it necessitates the use of a host laptop and the configuration of multi-threading code scripts. This procedural hurdle can be effectively addressed by integrating a WiFi module into the system, enabling direct transmission of data to the web without the dependency on a host laptop. By leveraging this wireless capability, the product can streamline its setup procedure, enhancing user convenience and eliminating the need for additional hardware components. Future research should focus on resolving these proposed issues.

Images and videos of this product can be found here: [Media](https://github.com/dngvmnh/EMusicPulse/tree/main/Media).

