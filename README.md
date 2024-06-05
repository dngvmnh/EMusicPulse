## DEMO
**1. Project Setup**


**2. Play Mode**


## Project Description

**1. Overview**
EMusicPulse innovatively merges technology and art by using electromyography (EMG) to play music through muscle signals. This endeavor not only showcases the creative potential of EMG technology but also addresses significant ethical dimensions. It promotes inclusivity by enabling individuals with disabilities to participate in musical creation, thus expanding accessibility in the arts. Additionally, it supports rehabilitation efforts by offering a therapeutic avenue for those regaining muscle control and coordination. Furthermore, the project fosters STEM education and engagement, inspiring students and hobbyists to explore practical applications of biology, electronics, and programming. Through these contributions, the project embodies ethical principles of empowerment, equal opportunity, and the responsible use of technology.

This project primarily targets musicians and artists who are eager to explore innovative ways to create and perform music using their body movements. It also appeals to technology enthusiasts and DIY makers who enjoy building and experimenting with circuits and Arduino-based projects. Additionally, researchers and students studying biomedical engineering, neurology, or related fields can find valuable practical applications of EMG technology through this project. Furthermore, it provides individuals with disabilities new methods to interact with musical instruments or other devices, especially those with limited mobility.

The project addresses several significant social issues. It enhances accessibility in music and art by enabling people with physical disabilities to interact with musical instruments, thereby promoting inclusivity. By utilizing muscle signals to create music, it serves as a form of physical therapy, aiding individuals in regaining muscle control and coordination. Moreover, the project fosters education and STEM engagement by involving students and hobbyists in hands-on learning experiences that integrate biology, electronics, and programming, thus promoting a deeper understanding and interest in these fields.

**Motivation**

This project is carried out as an effort to 
![image](https://github.com/dngvmnh/EMusicPulse/assets/133772077/8a96e70f-126a-4bc6-b17f-58bb7a1b06fc)
![image](https://github.com/dngvmnh/EMusicPulse/assets/133772077/8a96e70f-126a-4bc6-b17f-58bb7a1b06fc)

_Image 1. Đặng Ngọc Duy, a blind teacher and music enthusiast, skillfully playing the guitar with a three-fingered hand after an explosive accident._
## Implementation

The implementation of this robot includes three main stages: designing its mechanics, assembling electronic components, and establishing its software.

● Our 3D design file can be found here: [Design folder](https://github.com/dngvmnh/Trash_Collecting_Robot/tree/main/Robot_Design).

● We used an Arduino Uno and Jetson Nano as controllers; DC motors as actuators; and an RPLidar and webcam as sensors.

● There are three main programs for this robot: bottle detection, obstacle avoidance, and controlling the motors. Arduino Uno and Jetson Nano communicate through the serial port. Bottle detection and obstacle avoidance algorithms are joined by multi-threading. For optimizing the object detection model, we trained the TinyYoloV3 with an available dataset. An equation for calculating the distance to a bottle from the camera's image is formed.

For more details, please see our code repository: [Arduino](https://github.com/dngvmnh/Trash_Collecting_Robot/tree/main/Arduino), [Bottle Detection](https://github.com/dngvmnh/Trash_Collecting_Robot/tree/main/Bottle_Detection).

## Results and discussion

We have successfully deployed a robot system capable of navigating, detecting bottles, and avoiding obstacles with a price range of $341 to $400. This result fits the initial scope of this project. However, the Jetson Nano's processing speed and object detection model's rate are still relatively slow; the lidar can be optimized with the implementation of ROS SLAM simulation. In addition, the robot's electronic components are not covered, making them susceptible to damage and malfunction. Future research should focus on resolving these proposed issues.

Images and videos of this robot can be found here: [Media](https://github.com/dngvmnh/Trash_Collecting_Robot/tree/main/Results/Media).

## Report

For further information, please refer to our report: [View on GitHub](https://github.com/dngvmnh/Trash_Collecting_Robot/blob/main/Results/Report/PII%20-%20Report%20-%20FUV.pdf) or [Download PDF](https://github.com/dngvmnh/Trash_Collecting_Robot/raw/main/Results/Report/PII%20-%20Report%20-%20FUV.pdf).
