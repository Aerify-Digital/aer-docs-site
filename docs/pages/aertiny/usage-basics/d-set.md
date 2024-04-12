---
sidebar_position: 6
---

# Set Derivative (kD)

In a PID (Proportional-Integral-Derivative) controller, the "D" stands for Derivative. 

## UI Setting

- Navigate to the **PID** menu section from the Main Menu
- Navigate to the **Derivative** menu
- Use the rotary knob to adjust the **D** value

## Usage Definition

The Derivative component of the PID controller helps to anticipate future trends in the error signal by measuring its rate of change over time. The D value, also known as the derivative gain, determines the controller's response to rapid changes in the error signal.

The D value allows the controller to dampen the response to sudden changes in the error, thus improving stability and reducing overshoot and oscillations. It essentially acts as a predictive element, helping to counteract the tendency of the system to overshoot or oscillate in response to sudden changes in the setpoint or disturbances.

By adjusting the D value, engineers can fine-tune the controller's ability to respond to rapid changes in the system. A higher D value increases the controller's damping effect, which can improve stability and reduce overshoot, but setting it too high may lead to excessive response to noise or fluctuations in the error signal.

Thus, the D value plays a crucial role in enhancing the responsiveness and stability of the controlled system by anticipating and counteracting rapid changes in the error signal.