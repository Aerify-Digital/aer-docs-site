---
sidebar_position: 7
---

# System Tray

The system tray is located on the **bottom left** corner of the **Main Display** page.

## SysTray Toggle

:::note[SysTray]
There are **two** methods to **toggle** between the display **modes** for the system tray.
:::

### UI Display Toggle

- Navigate to the **Main Menu**
- Press the **rotary knob** Button on the **front** of the device, **three** times
  - This will toggle **System Tray** between modes

### UI Menu Setting

- Navigate to the **Display** menu section *from the Main Menu*
- Navigate to the **SysTray** entry in the menu
- Press the **rotary knob** Button to adjust the **SysTray** value
  - This will toggle the display mode between [`INF`](#icon-stats) and [`CPU`](#resources)

## System Tray Modes

:::info[SysTray]
There are two display modes for the system tray view.
:::

### Icon Stats

:::tip[INF]
Shows icons with statuses of system functions.
:::

- **WiFi**: Show Wireless connection active
- **Web**: Shows web connection active
- **USB**: Shows Serial connection status
- **CPU Stat**: Shows CPU usage percents

### Resources

:::tip[CPU]
Show system resource usage on the CPU.
:::

- Memory usage updates in real-time
  - Memory usage bars Legend
    * <span style={{color: 'orangered'}}>**ORANGE**</span>: `IRAM` *Available/Usage* - <span style={{color: 'gray'}}>Active Code Memory</span>
    * <span style={{color: 'olive'}}>**YELLOW**</span>: `DRAM` *Available/Usage* - <span style={{color: 'gray'}}>Random Storage Memory</span>
    * <span style={{color: 'forestgreen'}}>**GREEN**</span>: `Heap Space` *Available/Usage* - <span style={{color: 'gray'}}>Overall Memory Heap</span>
  - System Memory: **`320 KB`** of `DRAM`, **`200 KB`** of `IRAM`
- CPU usage graph updates real-time
  - Contains **32** data-points
  - Graph spans about **30 seconds** of time
  - CPU Clock Speed: `32-bit` @ **`240 Mhz`**
  - CPU Core Count: `x2`