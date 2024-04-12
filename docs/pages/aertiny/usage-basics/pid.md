---
sidebar_position: 3
---

# PID Details

A PID controller is a type of feedback control system widely used in engineering and industrial applications to regulate processes and systems. It stands for Proportional-Integral-Derivative, representing the three main components of the controller.

## Function Description

1. **Proportional (P)**: The proportional component generates an output signal that is proportional to the current error, which is the difference between the desired setpoint and the actual process variable. This component provides a quick initial response to changes in the error signal.

2. **Integral (I)**: The integral component eliminates steady-state error by integrating the error over time. It continuously adjusts the output based on the history of past errors, effectively accounting for any bias or sustained discrepancies between the setpoint and the process variable.

3. **Derivative (D)**: The derivative component anticipates future trends in the error signal by measuring its rate of change over time. It helps to dampen the response to sudden changes in the error, thus improving stability and reducing overshoot and oscillations.

By combining these three components, a PID controller can provide precise and stable control over a wide range of systems. Operators adjust the parameters of each component (P, I, and D) to achieve the desired balance between responsiveness and stability, effectively tuning the controller to meet specific control objectives for the given system or process.

### Tuning Example

<div style={{textAlign: 'center', display: 'flex'}}>
    <div style={{textAlign: 'left', display: 'inline-block', marginRight: '1em'}}>
        <img src="/img/PID_Compensation_Animated.gif" style={{height: 'auto', width: '100%'}} />
    </div>
    <div style={{textAlign: 'left', display: 'inline', width: '30%'}}>
        *Effects of varying PID parameters (Kp,Ki,Kd) on the step response of a system*
    </div>
</div>


## Component Value Effects 

| PID Component | Effect of Increasing | Effect of Decreasing |
|---------------|----------------------|----------------------|
| Proportional (P) | Increases response speed, may lead to overshoot and oscillations | Slows response speed, may increase steady-state error |
| Integral (I) | Reduces steady-state error, increases settling time | Increases settling time, may cause instability if set too high |
| Derivative (D) | Improves stability by damping oscillations and reducing overshoot | May introduce noise amplification or instability if set too high |
