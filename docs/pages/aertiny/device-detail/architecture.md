---
sidebar_position: 1
---

# Device Hardware

## Main CPU

- ESP32
  - 240 Mhz
  - 32-bit `x2` core
  - 320 KB DRAM
  - 200 KB IRAM
  - 16 MB program space
- Main system processor

## Failsafe MCU

- ATTiny88
  - 8 Mhz
  - 8-bit `x1` core
  - 512 bytes RAM
  - 8 KB program space
- Monitors **heartbeat** from CPU to control secondary disable of the SSR and heating element

---

## Peripherals

### Real-Time-Clock

- RTC
- Super-Capacitor
- Keeps clock time after device power off

### Addressable LEDs

- RGB Addressable LED
- WS2812B chipset

### Module Temperature

- LM75b
- Count of `x2` on PCB

---

## Storage

### Flash

- Winbond
- 128 Mbit (16 MB)

### EEPROM

- 32 Kbit (4 MB)

---

## PID Functionals

### Thermocouple IC

- MAX31850
- `K` Type

### Solid State Relay (SSR)

- High-Power SSR
- 20 Amp max rated
- 800 Volt max rated

---

## USB Interface

- UART to USB serial bridge
- For serial communcation with and programming the ESP32 chip
- USB-C and USB-micro connectors avaiable.


---

## Display Screen

- 2" TFT LCD Screen
- 240x320 pixel resolution