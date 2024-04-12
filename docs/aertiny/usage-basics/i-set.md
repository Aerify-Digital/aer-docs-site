---
sidebar_position: 5
---

# Set Integral (kI)

In a PID (Proportional-Integral-Derivative) controller, the "I" stands for Integral. 

## UI Setting

- Navigate to the **PID** menu section from the Main Menu
- Navigate to the **Integral** menu
- Use the rotary knob to adjust the **I** value

## Usage Definition

The Integral component of the PID controller helps to eliminate steady-state error by integrating the error over time. The I value, also known as the integral gain, determines the response of the controller to the accumulated error signal.

The I value allows the controller to continuously adjust its output based on the history of past errors. It effectively accounts for any bias or sustained discrepancies between the desired setpoint and the actual process variable. This is particularly useful for systems with inherent offset or drift.

By adjusting the I value, engineers can fine-tune the controller's ability to eliminate steady-state error. A higher I value increases the controller's ability to correct for prolonged errors, but it may also lead to slower response times and potential instability if set too high.

Thus, the I value plays a crucial role in improving the accuracy and stability of the controlled system by addressing long-term discrepancies between the setpoint and the process variable.