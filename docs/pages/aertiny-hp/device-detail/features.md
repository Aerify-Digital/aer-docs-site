---
sidebar_position: 2
---

# Device Features

- Hardware design revision `4.0`, *based on AerTiny v3 design*
- Dedicated PID Controller allows stable temperature management of heating element
  - FreeRTOS based Architecture, Built with Arduino
  - Dual Core 240 MHz CPU with WiFi
- K Type Thermocouple Supported (x2)
  - 1,260°C max measure temperature
- `5 Amp` Solid State Relay for load Element (x2)
  - Supports up to a `5 Amp` (`120v`) load, when using a higher rated fuse
  - Fuse Protected (1.6 Amp) AC Plug on back of device with `C14` Connection to `C13` Power Cord
  - Support for up to `15 Amp` (`120v`) load available on High-Power edition
- USB Interface for setup and control usage (*Data only*)
  - USB Connection on side (*USB-C and Micro USB*)
  - Connectable to PC for software updates and configuration
- Wifi Interface for remote configuration and control
  - Web application accessible via browser when device is network connected
  - Full Device control via GUI control panel from web browser
- Intuitive graphical user interface with controls from a rotary-knob, two buttons and display
  - Control all device options locally from the device for Standalone Operation
- `2″ LCD` (IPS) Display Screen with full color and crisp picture
  - Total `240 x 320` pixel resolution, `2.0″` size
  - Full color display with fast response times
  - Status LED’s on front interface
- Controllable ambient internal lighting effects
  - Onboard LED’s for ambient display in case
- 5-Pin Female `XLR` (x2) Connection on front of case
- Safety features and fail-safes
  - Heating Element and Thermocouple fault detection; Coil Protection Circuit
  - Configurable Auto-shut off and heating element dip detection
- Data-Logging: Temperature charting and graphs
  - Live temperature measurement shown with additional rolling one-minute average
  - Verbose user feedback for complete element control
