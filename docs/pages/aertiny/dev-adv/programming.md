---
sidebar_position: 3
---

# Updating Firmware - Adv

This will guide you through updating the device firmware using `vscode` with `platformio` to flash your device.

:::info[NOTE]
Please assure you have all the [Required Resources](#required-resources) before you begin.
:::

## Firmware Upload

### Setup Steps
- Clone the project source code [AerPID3](https://github.com/Aerify-Digital/AerPID3/) into a local directory on your computer
  - Git clone command:
    - `git clone https://github.com/Aerify-Digital/AerPID3.git`
- Open the source code using vscode
  - This can be done using the commands:
    - `cd AerPID3` to change directory
    - `code .` to launch `vscode`.
- Wait for `platformio` to load the project and to download all required dependancies
:::info[NOTE]
  If `platformio` fails to find the project and load, you may have to navigate to and select manually...
:::
- Connect device to PC using USB cable
- Assure device is in `Debug Mode`

### Flash Firmware Steps
- Navigate to and open the `platformio` section of `vscode`.
  - Should be located on the left nav-bar and looks like an **Ant** ![platformio](image-1.png)
- Expand the environment section that is assiocated with the device you would like to flash
  - Section: `aerpid` is for the **AerPID-lite**, or **AerTiny**.
  - Section: `aerpid-hp` is for the **AerPID-Dual** or **AerTiny-HP**.
- Expand the sections `General` and `Platform`

### General: Upload 
This section (under `General`) will compile and upload the firmware data.
:::warning[NOTICE]
  Please verify you have the correct environment selected when performing this step.
:::
- To begin the compile and upload process, press `Upload`
- Please wait for this process to complete
- You have now flashed the firmware of the device.

### Platform: Upload Filesystem Image
This section (under `Platform`) will upload the SPIFFS data, aka; the web data.
:::info[NOTE]
  If this section is missing, you may upload the Filesystem Image from the alternate environment.
:::
- To begin the compile and upload process, press `Upload`
- Please wait for this process to complete
- You have now uploaded the SPIFF data to the device.


## Required Resources

- Supported Interface Device (PC)
  - Windows 7 or above, MAC, or Linux
- [VSCode](https://code.visualstudio.com/) installed
- [PlatformIO](https://platformio.org/install/ide?install=vscode) extention installed for VSCode
- AerPID3 [source code](https://github.com/Aerify-Digital/AerPID3/) cloned locally
- USB [Driver](https://ftdichip.com/drivers/vcp-drivers/) *for FTDI FT231X*
  - Installed as Virtual COM Port
- USB Cable connected between device and computer
- [`DEBUG` Mode](/docs/pages/aertiny/dev-adv/debug) eneabled on your device