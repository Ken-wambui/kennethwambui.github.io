/* ══════════════════════════════════════════════════════════════
   KEN WAMBUI PORTFOLIO — script.js
   All site data + rendering + interactivity

   ── HOW TO UPDATE ────────────────────────────────────────────
   PROFILE PHOTO   → Replace assets/images/profile.jpg
   ADD PROJECT     → Copy a block in projectsData[] below & fill fields
                     Upload photos to assets/images/projects/
   ADD BLOG POST   → Copy a block in blogData[] & fill fields
   UPDATE SKILLS   → Edit skillsData[] percentages
   CONTACT FORM    → Sign up FREE at formspree.io, create a form,
                     paste your Form ID into CONFIG.formspreeId below
   ────────────────────────────────────────────────────────────── */

/* ═══════════════════════ CONFIG ═══════════════════════ */
const CONFIG = {
  name: 'KEN WAMBUI',
  role: 'PCB Design Engineer & Mechatronics Engineer',
  subtitle: 'High-Speed PCB Design · UAV Systems · Embedded Firmware',
  tagline: `Specialized PCB Design Engineer based in <span> Limuru, Kenya</span> — with a proven record designing
    high-speed, impedance-controlled, multi-layer PCBs for UAV, IoT, industrial, and consumer applications.
    From schematic capture to DFM-ready Gerber output.`,
  profilePhoto: 'assets/images/profile.jpg',

  /* ── CONTACT ── Replace placeholders with your real details */
  email:   'kenneth.wambui.n@gmail.com',
  linkedin: { label: 'Ken Wambui', url: 'https://www.linkedin.com/in/ken-wambui-b8051918a/' },
  github:   { label: 'Ken-wambui', url: 'https://github.com/Ken-wambui' },
  fiverr:   { label: 'Hire on Fiverr', url: 'https://www.fiverr.com/s/LdjrrKa' },
  location: 'Kiambu, Kenya · Remote OK',

  /* ── FORMSPREE SETUP ──────────────────────────────────────
     1. Go to https://formspree.io and sign up (free)
     2. Click "New Form", give it a name
     3. Copy the Form ID (the part after /f/ in the endpoint URL)
     4. Paste it below replacing YOUR_FORM_ID
     That's it — submissions will arrive in your email inbox.
  ──────────────────────────────────────────────────────── */
  formspreeId: 'xjgljrlv',

  stats: [
    { num: '1+', label: 'Years Experience' },
    { num: '20+', label: 'PCBs Designed' },
    { num: '4',   label: 'Companies Served' },
    { num: '∞',   label: 'Coffee Consumed' },
  ],

  companies: ['Ailwing Drones Limited', 'TACOS Kenya', 'ZeroBionics', 'AfrifabriLabs'],
};

/* ═══════════════════════ EXPERIENCE ═══════════════════════ */
const experienceData = [
  {
    period: '2025 – 2026',
    role: 'Mechatronics Engineer / Hardware Designer',
    company: 'AfrifabriLabs · ZeroBionics — Nairobi, Kenya',
    desc: 'Led PCB design for embedded systems and drone platforms. Delivered production-ready schematics, multi-layer layouts, and firmware. Responsible for DFM review, BOM management, and manufacturer liaison.',
  },
  {
    period: '2025 – 2026',
    role: 'Electronics Hardware Engineer',
    company: 'Ailwing Drones Limited — Tamil Nandu, India',
    desc: 'Designed flight controller PCBs and ESC hardware for commercial drone applications. Developed ArduPilot integration, custom sensor fusion pipelines, and autonomous flight systems.',
  },
  {
    period: '2025 – 2026',
    role: 'PCB Design Engineer',
    company: 'TACOS Kenya — Nairobi, Kenya',
    desc: 'Designed compact, high-performance flight controller and ESC PCBs. Responsible for schematic capture, multi-layer routing, impedance control, and ArduPilot firmware configuration.',
  },
  {
    period: '2025 – Present',
    role: 'Freelance PCB Design Engineer',
    company: 'Independent · Fiverr · International Clients',
    desc: 'PCB design, embedded firmware, and IoT prototyping for clients globally. Specializing in drone systems, industrial IoT, high-speed interfaces, and custom electronics.',
  },
];

/* ═══════════════════════ SKILLS ═══════════════════════ */
const skillsData = [
  { name: 'PCB Design (KiCad / Altium)', pct: 96 },
  { name: 'STM32 Embedded Dev',          pct: 93 },
  { name: 'ESP32 / FreeRTOS',            pct: 94 },
  { name: 'Signal & Power Integrity',    pct: 91 },
  { name: 'ArduPilot / PX4',            pct: 90 },
  { name: 'Power Electronics',           pct: 93 },
  { name: 'SolidWorks / Inventor',       pct: 90 },
];

const toolsData = ['KiCad 10','Altium Designer','STM32CubeIDE/MX','ESP-IDF / PlatformIO','LTSpice','SolidWorks 2024','MATLAB / Simulink','Git / GitHub'];

/* ═══════════════════════ CERTIFICATIONS ═══════════════════════ */
const certsData = [
  {
    color: 'cyan', icon: '🎓', type: 'Honours Degree',
    title: 'BEng (Hons) Mechatronics Engineering',
    issuer: 'Dedan Kimathi University of Technology',
    year: '2025',
    desc: 'Honours Bachelor\'s degree in Mechatronics Engineering. Coursework spanning embedded systems, control systems, mechanical design, electronics, and robotics. Final year project: MATLAB analysis of drilling experiment data (temperature, vibration, force). Located in Nyeri, Kenya.',
  },
  {
    color: 'green', icon: '📋', type: 'Professional Certificate',
    title: 'Advanced PCB Design',
    issuer: 'FEDEVEL Academy',
    year: '2025',
    desc: 'Advanced coursework in high-speed PCB design, signal integrity analysis, power distribution networks, and professional design review workflows. Covers real-world board design from schematic through to manufacturing handoff.',
  },
  {
    color: 'orange', icon: '⬡', type: 'Professional Certificate',
    title: 'PCB Design & Layout',
    issuer: 'ESTEEM PCB',
    year: '2025',
    desc: 'Specialized training in PCB layout best practices, IPC-2221 design standards, impedance control, and fabrication-ready output generation. Emphasis on DFM principles and production handoff procedures.',
  },
];

/* ═══════════════════════ PROJECTS ═══════════════════════
   ── ADD A NEW PROJECT ────────────────────────────────────
   Copy the block below and fill in your details.
   category options: 'uav' | 'iot' | 'industrial' | 'interface' | 'consumer'
   image: path to your photo (optional — shows SVG placeholder if missing)
   photos: number of upload slots in the modal
   ────────────────────────────────────────────────────── */
const projectsData = [
  {
    id: 'hades',
    badge: 'AUTONOMOUS', category: 'uav', icon: '✈️',
    gradient: 'linear-gradient(135deg,#0d1a2e,#020817)',
    title: 'HADES Flight Control Platform',
    shortDesc: 'Complete autonomous fixed-wing UAV ecosystem — custom PCB, STM32 RTOS, sensor fusion, control logic, ground station, and 6-DOF simulation.',
    techs: ['STM32','Altium','FreeRTOS','Sensor Fusion','6-DOF Sim','Ground Station'],
    image: 'assets/images/projects/hades.jpg',
    photos: 5,
    fullDesc: `HADES is a <span>fully custom flight control platform</span> aimed at autonomous fixed-wing UAVs — designed entirely from scratch with tight integration between electronics, real-time software, estimation, control, and simulation.`,
    specs: [
      {l:'PCB Tool',      v:'Altium Designer'},
      {l:'MCU',           v:'STM32 (ARM Cortex-M)'},
      {l:'RTOS',          v:'FreeRTOS with real-time task scheduling'},
      {l:'Estimation',    v:'Attitude & navigation sensor fusion'},
      {l:'Simulation',    v:'3-DOF & 6-DOF physics-based flight sim'},
      {l:'Ground Station',v:'Desktop app — live mapping, plotting, diagnostics'},
      {l:'Data Link',     v:'Custom command & telemetry exchange protocol'},
      {l:'Flight Phases', v:'Fully autonomous take-off, cruise, land'},
    ],
    challenges: [
      'Custom data link design for reliable command & telemetry exchange in noisy RF environments',
      'Sensor fusion architecture for accurate attitude and navigation without commercial stack',
      'Physics-based 6-DOF simulation to validate all algorithms before any hardware flight test',
      'Real-time task scheduling: ensuring deterministic loop rates across all control phases',
      'Every layer — power electronics, signal integrity, embedded software, control logic — designed intentionally from the ground up',
    ],
    techs_full: ['STM32','Altium Designer','FreeRTOS','Sensor Fusion','6-DOF Simulation','MAVLink','Control Systems','PCB Design','Ground Station','Autonomous UAV'],
  },
  {
    id: 'tacos-fc',
    badge: 'COMPACT FC', category: 'uav', icon: '🎯',
    gradient: 'linear-gradient(135deg,#0a1f3d,#020817)',
    title: 'TACOS Compact Flight Controller',
    shortDesc: '30×30 mm STM32H743 FC. 4-layer stack (Sig/GND/PWR/Sig). Segmented analog/digital power, QSPI flash, SPI sensors, USB, CAN, multi-UART.',
    techs: ['STM32H743','4-Layer','QSPI','CAN','30×30mm'],
    image: 'assets/images/projects/tacos-fc.jpg',
    photos: 4,
    fullDesc: `A compact <span>30×30 mm high-performance flight controller PCB</span> built around the STM32H743 microcontroller. Implemented on a 4-layer stack-up (Signal / Ground / Power / Signal) with a solid ground plane for signal integrity and low EMI.`,
    specs: [
      {l:'MCU',          v:'STM32H743'},
      {l:'Form Factor',  v:'30×30 mm (standard stack mount)'},
      {l:'Stack-up',     v:'4-layer: Signal / GND / PWR / Signal'},
      {l:'Power Design', v:'Segmented analog + digital 3.3V rails, 5V buck, VBAT protection'},
      {l:'Flash',        v:'QSPI NOR Flash'},
      {l:'Interfaces',   v:'SPI sensors, USB, CAN, multiple UARTs'},
      {l:'Sensors',      v:'MEMS IMU isolated from noisy power stages'},
      {l:'Mounting',     v:'30×30 mm standard drone stack pattern'},
    ],
    challenges: [
      'Achieving full flight controller feature set on 30×30 mm form factor with dense component placement',
      'Segmented power domains: separate analog and digital 3.3V rails to keep MEMS sensors clean',
      'Tightly contained 5V buck converter switching node to minimize EMI radiation onto sensor traces',
      'VBAT protection circuitry for reliable operation across all battery cell counts and voltage transients',
      'MEMS sensor placement away from noisy power stage copper areas for stable, accurate flight data',
    ],
    techs_full: ['STM32H743','KiCad 10','4-Layer PCB','QSPI Flash','CAN Bus','SPI','UART','USB','Buck Converter','MEMS IMU'],
  },
  {
    id: 'cube-fc',
    badge: 'FLAGSHIP', category: 'uav', icon: '🛸',
    gradient: 'linear-gradient(135deg,#0a1528,#020817)',
    title: 'STM32H743 Custom Flight Controller',
    shortDesc: 'Cube Orange-level FC. Triple IMU redundancy, dual CAN-FD, dual barometers, QSPI flash, SDMMC, bidirectional DShot. Full ArduPilot hwdef integration.',
    techs: ['STM32H743','ArduPilot','CAN-FD','DShot','Triple IMU'],
    image: 'assets/images/projects/cube-fc.jpg',
    photos: 4,
    fullDesc: `My flagship hardware project — a custom flight controller designed to match <span>Cube Orange performance</span> with a single STM32H743VIT6 MCU on a 6-layer impedance-controlled PCB.`,
    specs: [
      {l:'MCU',          v:'STM32H743VIT6 (480 MHz, 2 MB Flash)'},
      {l:'IMUs',         v:'ICM-42688-P + BMI270 + ICM-20602 (triple)'},
      {l:'Barometers',   v:'Dual MS5611 (independent I2C buses)'},
      {l:'CAN Bus',      v:'Dual CAN-FD (MCP2562FD transceivers)'},
      {l:'Flash',        v:'16 MB QSPI NOR (W25Q128)'},
      {l:'Datalogger',   v:'SDMMC 4-bit microSD'},
      {l:'ESC Protocol', v:'Bidirectional DShot150/300/600'},
      {l:'Layer Count',  v:'6-layer, ENIG finish'},
      {l:'IMU Isolation',v:'Daughter board via 30-pin FFC connector'},
      {l:'Autopilot SW', v:'ArduPilot + PX4 (hwdef.dat complete)'},
    ],
    challenges: [
      'Routing 3 independent SPI buses for IMUs without crosstalk between high-speed sensor lines',
      'SBUS hardware inversion via STM32H7 UART CR2 register — eliminated external inverter IC',
      'DShot timer selection on APB2 for sub-microsecond edge timing accuracy',
      'Power domain isolation between noisy digital logic and IMU analog supply rails',
      'FFC connector routing for vibration-decoupled IMU daughter board',
    ],
    techs_full: ['STM32H743VIT6','KiCad 10','ArduPilot','PX4','ICM-42688-P','BMI270','MCP2562FD','DShot','CAN-FD','QSPI','MS5611'],
  },
  {
    id: 'tacos-esc',
    badge: 'ESC', category: 'uav', icon: '⚡',
    gradient: 'linear-gradient(135deg,#1a0f2e,#020817)',
    title: 'TACOS 4-in-1 45A ESC',
    shortDesc: '4-in-1 ESC for multirotor drones. 45A continuous per channel, 8S LiPo input. MOSFET selection, thermal analysis, DShot600/BLHeli32.',
    techs: ['MOSFET','DShot600','BLHeli32','45A','8S LiPo'],
    image: 'assets/images/projects/tacos-esc.jpg',
    photos: 4,
    fullDesc: `A high-current 4-in-1 ESC designed for multirotor drones. Each of the four motor outputs is rated at <span>45A continuous</span> with 8S LiPo input. Designed with low Rds(on) MOSFET selection, matched switching node geometry, and DShot/BLHeli32 compatibility.`,
    specs: [
      {l:'Channels',        v:'4 independent motor drives'},
      {l:'Continuous',      v:'45A per channel'},
      {l:'Peak',            v:'65A (10-second burst)'},
      {l:'Input Voltage',   v:'3S–8S LiPo (9.9V–33.6V)'},
      {l:'MOSFET',          v:'Dual N-channel per half-bridge, low Rds(on)'},
      {l:'ESC Protocol',    v:'DShot150/300/600, BLHeli32'},
      {l:'Current Sensing', v:'Inline shunt per phase'},
      {l:'Layer Count',     v:'4-layer, 2 oz copper pour'},
    ],
    challenges: [
      'Copper pour sizing for 45A per channel using IPC-2152 current-carrying capacity tables',
      'Switching node layout minimized to reduce ringing and EMI at high dI/dt transitions',
      'Bootstrap capacitor and Schottky diode selection for reliable high-side gate drive',
      'Thermal management: MOSFET junction temperature analysis under sustained 45A load',
      'DShot signal integrity routing from MCU GPIO through gate driver to MOSFET gate',
    ],
    techs_full: ['MOSFET','DShot600','BLHeli32','STM32F051','4-Layer PCB','Gate Driver','Current Sensing','45A ESC','8S LiPo'],
  },
  {
    id: 'hdmi-csi',
    badge: 'INTERFACE', category: 'interface', icon: '📹',
    gradient: 'linear-gradient(135deg,#0a1f3d,#020817)',
    title: 'HDMI to MIPI CSI-2 Bridge',
    shortDesc: 'TC358743XBG-based HDMI-to-CSI-2 adapter PCB for Raspberry Pi. 2-lane MIPI CSI-2, 15-pin FFC, TMDS and MIPI differential pair impedance control.',
    techs: ['TC358743XBG','MIPI CSI-2','HDMI','TMDS','ESD','RPi'],
    image: 'assets/images/projects/hdmi-csi.jpg',
    photos: 3,
    fullDesc: `Designed a high-speed <span>HDMI-to-MIPI CSI-2 adapter PCB</span> based on the Toshiba TC358743XBG for integration with the Raspberry Pi camera interface. Converts HDMI video input into a 2-lane MIPI CSI-2 stream via 15-pin FFC connector.`,
    specs: [
      {l:'Bridge IC',       v:'Toshiba TC358743XBG'},
      {l:'Input',           v:'HDMI (TMDS differential pairs)'},
      {l:'Output',          v:'2-lane MIPI CSI-2 via 15-pin FFC'},
      {l:'ESD Protection',  v:'TPD12S520'},
      {l:'Power Rails',     v:'3.3V, 2.5V, 1.2V regulation'},
      {l:'Configuration',   v:'I²C interface'},
      {l:'EDID/DDC',        v:'HDMI DDC/EDID support'},
      {l:'Reference Clock', v:'27 MHz TCXO'},
    ],
    challenges: [
      'TMDS differential pair routing at multi-Gbps: 100Ω differential impedance, matched length pairs',
      'MIPI CSI-2 D-PHY pairs: 100Ω differential impedance, ±10 mil intra-pair length matching',
      'ESD protection placement at HDMI connector without adding parasitic capacitance to TMDS lines',
      'Multi-rail power sequencing: 3.3V → 2.5V → 1.2V with careful power-on ordering per TC358743XBG datasheet',
      'DDC/EDID routing and HDMI Hot Plug Detect signal conditioning',
    ],
    techs_full: ['TC358743XBG','MIPI CSI-2','TMDS','HDMI','TPD12S520 ESD','27MHz TCXO','I²C','FFC Connector','Raspberry Pi'],
  },
  {
    id: 'usb-hub',
    badge: 'PCB', category: 'interface', icon: '🖧',
    gradient: 'linear-gradient(135deg,#0f1f3d,#020817)',
    title: 'USB7206 Hub with GbE & HDMI 2.0',
    shortDesc: 'Custom USB hub with Gigabit Ethernet (LAN7850), M.2 expansion, HDMI 2.0 (MCDP2900), USB-C PD 100W, and audio codec on one 6-layer board.',
    techs: ['USB7206','GbE','HDMI 2.0','USB-C PD','M.2','PCIe'],
    image: 'assets/images/projects/usb-hub.jpg',
    photos: 4,
    fullDesc: `A feature-dense hub PCB built around the <span>USB7206 SuperSpeed USB hub controller</span>. Combines Gigabit Ethernet, M.2 expansion, HDMI 2.0, USB-C PD sink at up to 100W, and audio codec — all on one compact board.`,
    specs: [
      {l:'USB Hub IC',  v:'Microchip USB7206 (USB 3.2 Gen1)'},
      {l:'GbE',         v:'Microchip LAN7850 (USB-to-GbE bridge)'},
      {l:'HDMI 2.0',    v:'Megachips MCDP2900 retimer'},
      {l:'M.2 Slot',    v:'PI7C9X442SL PCIe switch (M-key)'},
      {l:'USB-C PD',    v:'TPS65987D + BQ25731 (100W sink)'},
      {l:'Audio',       v:'Integrated codec with I2S interface'},
      {l:'Interfaces',  v:'USB-A×4, USB-C×1, RJ45, HDMI, M.2, 3.5mm'},
      {l:'Layer Count', v:'6-layer, controlled impedance'},
    ],
    challenges: [
      'HDMI 2.0 TMDS differential pair routing at 6 Gbps per lane — 100Ω differential, matched length pairs',
      'USB 3.2 SuperSpeed pairs with ±5 mil length matching and 90Ω differential impedance',
      'PCIe M.2 lane routing with via stub minimization and reference plane continuity',
      'USB PD CC pin routing and TPS65987D I2C configuration negotiation',
      'Multi-rail power sequencing: 12V → 5V → 3.3V → 1.8V → 1.0V with PG signal chain',
    ],
    techs_full: ['USB7206','LAN7850','MCDP2900','PI7C9X442SL','TPS65987D','BQ25731','HDMI 2.0','USB 3.2','PCIe','GbE'],
  },
  {
    id: 'gps-logger',
    badge: 'IoT', category: 'iot', icon: '🛰️',
    gradient: 'linear-gradient(135deg,#0a1a30,#020817)',
    title: 'GPS Data Logger',
    shortDesc: 'STM32-based GPS data logger with temperature sensing, accelerometer, 3.2″ TFT touch LCD, dual relays, solenoid control, solar charging, and battery management.',
    techs: ['STM32','GPS','ADXL345','TFT LCD','Solar','KiCad 10'],
    image: 'assets/images/projects/gps-logger.jpg',
    photos: 4,
    fullDesc: `A GPS Data Logger PCB powered by STM32. Integrates <span>GPS tracking, temperature sensing, and accelerometer data logging</span>, all displayed on a 3.2″ TFT touch LCD. Supports dual relays, solenoid control, battery management, and solar charging — a versatile solution for IoT and automation applications.`,
    specs: [
      {l:'MCU',          v:'STM32'},
      {l:'Display',      v:'3.2″ TFT Touch LCD'},
      {l:'GPS',          v:'UART GPS module'},
      {l:'Accelerometer',v:'ADXL345'},
      {l:'Outputs',      v:'Dual relay + solenoid control'},
      {l:'Power',        v:'Solar charging + Li-Po battery management'},
      {l:'Data Logging', v:'Onboard flash / SD card'},
      {l:'PCB Tool',     v:'KiCad 10'},
    ],
    challenges: [
      'Solar charging integration: MPPT-aware charging circuit to handle variable PV panel output',
      'GPS UART and TFT SPI bus coexistence without timing conflicts on shared MCU peripherals',
      'Mixed-signal design: relay coil switching noise isolation from GPS receiver and ADC paths',
      'Touch LCD calibration and touch event handling over SPI with DMA for smooth UI updates',
      'Low-power sleep mode with GPS wake-on-motion to extend battery life in field deployment',
    ],
    techs_full: ['STM32','GPS','ADXL345','TFT Touch LCD','ILI9341','Solar Charging','LiPo BMS','Dual Relay','KiCad 10'],
  },
  {
    id: 'sos',
    badge: 'WEARABLE', category: 'iot', icon: '🆘',
    gradient: 'linear-gradient(135deg,#1a0a0a,#020817)',
    title: 'Emergency SOS Device',
    shortDesc: 'Wearable SOS device — STM32L052 ultra-low-power MCU, SIM7070G LTE Cat-M/NB-IoT, integrated GNSS, BQ24072 charger. Sends GPS alert on button press, no phone needed.',
    techs: ['STM32L052','SIM7070G','LTE Cat-M','GNSS','BQ24072','Wearable'],
    image: 'assets/images/projects/sos.jpg',
    photos: 4,
    fullDesc: `A small, wearable SOS emergency device designed to send a distress alert with the user's <span>real-time GPS location</span> without requiring a smartphone. When a concealed SOS button is pressed, the device activates LTE Cat-M/NB-IoT cellular to transmit an alert containing GNSS location data.`,
    specs: [
      {l:'MCU',          v:'STM32L052K8T6 (ultra-low power)'},
      {l:'Cellular',     v:'SIM7070G LTE Cat-M / NB-IoT'},
      {l:'Positioning',  v:'Integrated GNSS (GPS)'},
      {l:'Comms',        v:'UART between MCU and SIM7070G'},
      {l:'Battery',      v:'3.7V Li-Po'},
      {l:'Charger IC',   v:'BQ24072 with USB input'},
      {l:'LDO',          v:'TPS7A02-33 (3.3V for MCU)'},
      {l:'Activation',   v:'Single hidden SOS push button'},
    ],
    challenges: [
      'SIM7070G peak current draw (800mA+) from small Li-Po — bulk capacitance and LDO sequencing design',
      'Ultra-low standby power: STM32L052 Stop mode + SIM7070G power-down = sub-10µA standby target',
      'Silent operation requirement: no buzzer, no LED flash during SOS transmission for user safety',
      'GNSS cold-start fix time in urban environments — assisted GNSS (A-GPS) via LTE-M data channel',
      'Compact form factor layout with antenna keepout zones for both cellular and GNSS antennas',
    ],
    techs_full: ['STM32L052K8T6','SIM7070G','LTE Cat-M','NB-IoT','GNSS','BQ24072','TPS7A02-33','Ultra-Low Power','Wearable PCB'],
  },
  {
    id: 'remote-listen',
    badge: '4G LTE', category: 'iot', icon: '📻',
    gradient: 'linear-gradient(135deg,#0a1628,#020817)',
    title: 'Remote Monitoring Device',
    shortDesc: 'Compact 4G LTE + battery-powered remote monitoring PCB. USB-C charging, LTE connectivity, mic input, multi-layer layout. Built for field deployment.',
    techs: ['4G LTE','USB-C','Li-Po','Microphone','Multi-layer'],
    image: 'assets/images/projects/remote-listen.jpg',
    photos: 3,
    fullDesc: `A compact <span>4G LTE + battery-powered remote monitoring PCB</span>. Features USB-C charging, LTE connectivity, microphone input, and a tidy multi-layer layout. Designed for real-world field deployment and testing environments where wired connections are not possible.`,
    specs: [
      {l:'Connectivity', v:'4G LTE cellular module'},
      {l:'Power',        v:'Li-Po battery with USB-C charging'},
      {l:'Audio Input',  v:'MEMS microphone input'},
      {l:'PCB Type',     v:'Multi-layer controlled impedance'},
      {l:'Charging',     v:'USB-C with charger IC'},
      {l:'Form Factor',  v:'Compact, field-deployable'},
      {l:'Power Mgmt',   v:'Sleep/wake for battery longevity'},
      {l:'Status',       v:'Built, firmware and field trials ready'},
    ],
    challenges: [
      'Cellular antenna placement and RF keepout zone on compact PCB footprint',
      'USB-C charging circuit integration with battery protection and power path management',
      'MEMS microphone routing: differential signal path isolation from LTE module switching noise',
      'Power management for LTE transmit bursts — local bulk capacitance to handle peak current draw',
      'Multi-layer stack-up selection to shield audio ADC from LTE RF interference',
    ],
    techs_full: ['4G LTE','USB-C','Li-Po','Charger IC','MEMS Microphone','Multi-layer PCB','Power Management','IoT'],
  },
  {
    id: 'farmty',
    badge: 'IoT', category: 'iot', icon: '🌱',
    gradient: 'linear-gradient(135deg,#0a2010,#020817)',
    title: 'Farmty IoT Smart Farming PCB',
    shortDesc: 'ESP32 DIN-rail agricultural monitoring for East African farms. Multi-sensor input, WiFi/GSM fallback, irrigation relay control, OLED, and MQTT cloud streaming.',
    techs: ['ESP32','MQTT','DIN-Rail','SIM800L','Agriculture'],
    image: 'assets/images/projects/farmty.jpg',
    photos: 4,
    fullDesc: `Designed for East African farm deployments where <span>power reliability, connectivity, and durability</span> are the primary constraints. Built around ESP32 in a DIN-rail enclosure with multi-sensor input and MQTT cloud data streaming.`,
    specs: [
      {l:'MCU',        v:'ESP32 (WiFi + BLE)'},
      {l:'Form Factor',v:'DIN-Rail (EN 60715), IP40 enclosure'},
      {l:'Sensors',    v:'Soil moisture, DHT22, flow meter, pH'},
      {l:'Outputs',    v:'4× relay outputs for irrigation control'},
      {l:'Power',      v:'12V DIN rail supply + LiPo backup'},
      {l:'Connectivity',v:'WiFi primary, SIM800L GSM fallback'},
      {l:'Protocol',   v:'MQTT over WiFi / HTTP over GSM'},
      {l:'Display',    v:'0.96″ OLED local readout'},
    ],
    challenges: [
      'Power budget with GSM modem (800mA peak) on LiPo backup — sized for 4-hour blackout cover',
      'Relay isolation from ESP32 logic — optocoupled driver stage prevents solenoid switching noise',
      'ADC accuracy for resistive soil moisture sensor — filtering and reference voltage stabilization',
      'DIN-rail thermal design: 4 relays + ESP32 in enclosed box with venting slot sizing',
      'WiFi antenna placement outside DIN-rail metal enclosure via external SMA connector',
    ],
    techs_full: ['ESP32','MQTT','DIN-Rail','FreeRTOS','SIM800L','OLED','Relay','LiPo BMS','Soil Sensor','Agriculture IoT'],
  },
  {
    id: 'co2',
    badge: 'SENSOR', category: 'iot', icon: '💨',
    gradient: 'linear-gradient(135deg,#0a1628,#020817)',
    title: 'CO₂ Environmental Sensor PCB',
    shortDesc: 'SCD40-based air quality monitor. BLE 5.0 / WiFi, USB-C charging, 128×32 OLED, 24-hour battery life. Compact 50×35 mm 2-layer design.',
    techs: ['SCD40','ESP32','USB-C','BLE 5.0','LiPo'],
    image: 'assets/images/projects/co2.jpg',
    photos: 3,
    fullDesc: `A compact indoor air quality monitor built around the <span>Sensirion SCD40</span> CO₂ sensor. Measures CO₂ (400–2000 ppm), temperature, and humidity with USB-C charging, BLE data streaming, and WiFi cloud upload.`,
    specs: [
      {l:'CO₂ Sensor',  v:'Sensirion SCD40 (photoacoustic, I2C)'},
      {l:'MCU',         v:'ESP32-PICO-D4'},
      {l:'Power',       v:'USB-C charging (TP4056), 400 mAh LiPo'},
      {l:'Connectivity',v:'WiFi 2.4GHz + BLE 5.0'},
      {l:'Display',     v:'128×32 OLED (SSD1306, I2C)'},
      {l:'Battery Life',v:'~24 hours (2-min sample interval)'},
      {l:'PCB Size',    v:'50 × 35 mm, 2-layer'},
      {l:'Charging',    v:'USB-C with TP4056 + DW01A protection'},
    ],
    challenges: [
      'SCD40 I2C address conflict with OLED — resolved via separate I2C bus on ESP32-PICO-D4',
      'SCD40 supply noise sensitivity — local LDO with 10µF bulk + 100nF decoupling at VDD',
      'USB-C connector mechanical stress — 4× via stitching to copper for strain relief',
      'BLE/WiFi antenna placement away from SCD40 to avoid EMI-induced CO₂ measurement drift',
    ],
    techs_full: ['SCD40','ESP32-PICO-D4','USB-C','TP4056','BLE 5.0','WiFi','OLED','LiPo','I2C'],
  },
  {
    id: 'trapx',
    badge: 'LoRa', category: 'industrial', icon: '📡',
    gradient: 'linear-gradient(135deg,#1a1a0a,#020817)',
    title: 'TrapX Wireless Trigger Control',
    shortDesc: 'Wireless trigger PCB for clay pigeon launching machines. E22-900M30S LoRa 900 MHz, 12V supply, long-range reliable remote activation, safe remote operation.',
    techs: ['LoRa E22-900M30S','900 MHz','12V','Remote Trigger'],
    image: 'assets/images/projects/trapx.jpg',
    photos: 3,
    fullDesc: `A wireless trigger control PCB for a clay pigeon launching machine, designed to <span>remotely activate the launcher safely and reliably</span>. Powered from the machine's 12V supply, receiving trigger commands via E22-900M30S LoRa module in the 900 MHz band.`,
    specs: [
      {l:'RF Module',     v:'E22-900M30S LoRa (900 MHz, 1W)'},
      {l:'Frequency',     v:'900 MHz band'},
      {l:'Power Supply',  v:'12V direct from machine supply'},
      {l:'Output',        v:'Trigger driver circuit to launcher mechanism'},
      {l:'Range',         v:'Long-range reliable wireless activation'},
      {l:'Latency',       v:'Low-latency LoRa command reception'},
      {l:'Application',   v:'Shooting ranges, automated training'},
      {l:'Safety',        v:'Remote operation, no physical proximity required'},
    ],
    challenges: [
      '900 MHz antenna routing and ground plane keepout on PCB for maximum LoRa range',
      '12V to 3.3V regulation for MCU with adequate headroom and transient protection from machine supply',
      'Output trigger driver circuit: relay or MOSFET sizing for the launcher solenoid load current',
      'Protocol design for reliable one-way trigger command with acknowledge handshake',
      'Noise immunity on LoRa module supply during launcher solenoid activation transients',
    ],
    techs_full: ['LoRa E22-900M30S','900 MHz','12V Power','MCU','Trigger Driver','Relay','Remote Control','Industrial IoT'],
  },
  {
    id: 'filament',
    badge: 'CONTROL', category: 'industrial', icon: '🔧',
    gradient: 'linear-gradient(135deg,#0a0a1a,#020817)',
    title: 'Filament Extruder Controller',
    shortDesc: 'ESP32-WROOM-32E control PCB for filament extrusion. TMC2209 stepper driver, TB6612 DC motor, SSR burst-fire AC heater, thermistor PID, rotary encoder, 4-layer.',
    techs: ['ESP32','TMC2209','TB6612','SSR','4-Layer','PID'],
    image: 'assets/images/projects/filament.jpg',
    photos: 4,
    fullDesc: `A custom embedded control PCB for a filament extruder system, managing <span>heating, material feed, cooling, and user interaction</span>. Built around ESP32-WROOM-32E with Trinamic TMC2209 stepper driver for NEMA-17 motor and solid-state relay burst-fire heater control.`,
    specs: [
      {l:'MCU',          v:'ESP32-WROOM-32E'},
      {l:'Heater Control',v:'Dual AC SSR outputs (burst-fire PID)'},
      {l:'Temp Sensing', v:'Thermistor + ADC measurement'},
      {l:'Stepper',      v:'TMC2209 (NEMA-17, 24V feed motor)'},
      {l:'DC Motor',     v:'Toshiba TB6612 driver'},
      {l:'Cooling',      v:'2× PWM-controlled 5V fans'},
      {l:'UI',           v:'Rotary encoder + display interface'},
      {l:'Layer Count',  v:'4-layer: dedicated GND and PWR planes'},
    ],
    challenges: [
      'High-voltage AC heater SSR routing: creepage and clearance distances between HV and LV traces per IEC 60950',
      'Thermistor ADC noise: shielding analog measurement traces from switching noise of TMC2209 and fans',
      'Burst-fire SSR control timing synchronized to mains zero-crossing for minimal harmonic injection',
      'TMC2209 UART configuration and StealthChop mode setup for quiet motor operation during extrusion',
      '4-layer power plane design: separating 24V motor power from 5V and 3.3V logic and analog domains',
    ],
    techs_full: ['ESP32-WROOM-32E','TMC2209','TB6612','SSR','Burst-Fire Control','PID','4-Layer PCB','NEMA-17','PWM Fan Control','Thermistor'],
  },
  {
    id: 'relay',
    badge: 'INDUSTRIAL', category: 'industrial', icon: '🔌',
    gradient: 'linear-gradient(135deg,#1a1005,#020817)',
    title: 'ESP32 Industrial Relay Controller',
    shortDesc: '4-layer DIN-rail relay controller. Optocoupled inputs (5–24V), 4× SPDT relay outputs (10A/250VAC), WiFi MQTT, Home Assistant integration.',
    techs: ['ESP32','4-Layer','PC817','MQTT','DIN-Rail'],
    image: 'assets/images/projects/relay.jpg',
    photos: 3,
    fullDesc: `A production-grade 4-layer DIN-rail relay controller for building automation and industrial IoT. <span>Optocoupled inputs</span> protect the ESP32 from field wiring transients. WiFi/MQTT control enables integration with Home Assistant, Node-RED, or custom dashboards.`,
    specs: [
      {l:'MCU',          v:'ESP32 (WiFi + BLE)'},
      {l:'Relay Outputs',v:'4× SPDT mechanical, 10A/250VAC rated'},
      {l:'Digital Inputs',v:'4× optocoupled (PC817), 5–24V compatible'},
      {l:'Layer Count',  v:'4-layer PCB'},
      {l:'Form Factor',  v:'DIN-Rail, 6HP'},
      {l:'Power Input',  v:'12–24V DC via DIN rail'},
      {l:'Connectivity', v:'WiFi 2.4GHz (MQTT / HTTP API)'},
      {l:'Isolation',    v:'3.75 kV optocoupler creepage'},
    ],
    challenges: [
      '4-layer stack-up: power planes on inner layers for EMI shielding from relay coil switching noise',
      'Relay coil flyback suppression — TVS + freewheeling diode on each coil',
      'Optocoupler input resistor sizing for 5V, 12V, and 24V input voltage compatibility',
      'DIN rail 6HP constraint — component density challenge with 4 relays + ESP32 module',
      '5.08mm pitch push-in cage clamp terminal blocks for tool-free field wiring',
    ],
    techs_full: ['ESP32','4-Layer PCB','PC817 Optocoupler','MQTT','DIN-Rail','SPDT Relay','TVS','FreeRTOS','Home Assistant'],
  },
  {
    id: 'nubi',
    badge: 'CONSUMER', category: 'consumer', icon: '🧸',
    gradient: 'linear-gradient(135deg,#0a1a0a,#020817)',
    title: 'Nubi Voice Repeater Carrier Board',
    shortDesc: 'ESP32 DevKit-C carrier board for interactive toys. HW183 boost converter, button-activated microphone recording, speaker playback — repeats voice for doll applications.',
    techs: ['ESP32','HW183 Boost','Microphone','Speaker','Button Trigger'],
    image: 'assets/images/projects/nubi.jpg',
    photos: 3,
    fullDesc: `A carrier board built around the <span>ESP32 DevKit-C</span> for use in interactive toys (dolls). Integrates a HW183 boost converter for stable power, a button-activated microphone for voice capture, and a speaker output to play back the recorded audio — enabling the doll to repeat the user's voice.`,
    specs: [
      {l:'Host Module',   v:'ESP32 DevKit-C (plug-in)'},
      {l:'Power',         v:'HW183 boost converter'},
      {l:'Audio Input',   v:'Microphone (button-activated recording)'},
      {l:'Audio Output',  v:'Speaker driver output'},
      {l:'Trigger',       v:'Push button for record/play cycle'},
      {l:'Application',   v:'Interactive dolls and talking toys'},
      {l:'Audio Storage', v:'On-chip PSRAM or SPIFFS flash'},
      {l:'Power Source',  v:'Battery-powered (boost regulated)'},
    ],
    challenges: [
      'HW183 boost converter output stability: sufficient bulk capacitance for ESP32 WiFi transmit current spikes',
      'Microphone input circuit: pre-amplifier gain and filtering for clear voice capture in toy enclosure acoustics',
      'Speaker driver output power sizing: adequate SPL in small doll form factor without clipping',
      'Button debouncing in firmware: clean record/playback state machine with no false triggers',
      'PCB layout for compact toy integration: keeping all components within carrier board footprint of DevKit-C',
    ],
    techs_full: ['ESP32 DevKit-C','HW183 Boost Converter','MEMS Microphone','Speaker Driver','Push Button','Audio Playback','Toy Electronics'],
  },
];

/* ═══════════════════════ SERVICES ═══════════════════════ */
const servicesData = {
  pcb: {
    tag:'01 // PCB Design & Layout', title:'PCB Design & Layout', sub:'Multi-layer · High-Speed · Impedance-Controlled · DFM-Ready',
    desc:'I design production-grade PCBs from concept through to manufacturing-ready Gerber output. Every board is designed with fabrication, assembly, and performance in mind — no corner-cutting on stack-up, impedance, or ground return paths.',
    specs:[{l:'Layer Count',v:'2 to 12 layers (up to 16 on request)'},{l:'Min Track/Clearance',v:'0.1mm / 0.1mm standard; 0.075mm advanced'},{l:'Impedance Control',v:'±10% — 50Ω / 90Ω / 100Ω differential'},{l:'Min Via',v:'0.2mm drill / 0.4mm pad'},{l:'Standards',v:'IPC-2221, IPC-7351, IPC-2152'},{l:'Tools',v:'KiCad 10, Altium Designer'},{l:'Surface Finish',v:'HASL / ENIG / OSP — per application'},{l:'Fab Integration',v:'JLCPCB, PCBWay, OSH Park compatible'}],
    checks:['Impedance-controlled differential pair routing (HDMI, USB 3.2, Ethernet, CAN-FD)','Return path analysis — solid reference planes, no split planes under fast signals','EMI mitigation: guard traces, shielding cutouts, ferrite bead placement strategy','Decoupling capacitor placement per datasheet recommendations','Thermal relief design for power components','DFM review: courtyard checks, pad-to-pad clearances, panelization design','DFA review: component orientation, paste coverage, testpoint accessibility','BOM with verified LCSC / Mouser / DigiKey alternatives','Complete package: Gerbers, Drill, Pick & Place, BOM'],
    delivs:[{i:'📦',t:'Full Manufacturing Package',d:'Gerber files, drill files, pick & place, and BOM ready to send to fab.'},{i:'📐',t:'Schematic (PDF + native)',d:'Annotated schematic with net names and reference designators.'},{i:'📋',t:'DFM Report',d:'Written DFM/DFA notes and layer stack-up documentation.'},{i:'🔁',t:'Revision Rounds',d:'Up to 2 rounds included. Source files shared on request.'}],
  },
  embedded: {
    tag:'02 // Embedded Systems', title:'Embedded Systems Development', sub:'STM32 · ESP32 · FreeRTOS · Hardware Bring-Up',
    desc:'Firmware development from bare-metal initialization through full RTOS-based applications. Strong suit is hardware bring-up — read a schematic, understand the peripheral layout, and get a new board running fast.',
    specs:[{l:'Primary MCUs',v:'STM32 (H7, F4, F7, G4, L0), ESP32, ESP32-S3'},{l:'RTOS',v:'FreeRTOS (tasks, queues, semaphores, timers)'},{l:'HAL Level',v:'STM32 HAL + LL drivers; ESP-IDF native'},{l:'Interfaces',v:'SPI, I2C, UART/USART, CAN-FD, USB, SDMMC, QSPI'},{l:'Toolchain',v:'STM32CubeIDE, ESP-IDF, PlatformIO, VS Code'},{l:'Protocols',v:'DShot, SBUS, MAVLink, MQTT, Modbus'},{l:'Testing',v:'Hardware-in-the-loop, logic analyser validation'},{l:'Version Control',v:'Git / GitHub workflow'}],
    checks:['Clock tree configuration and power mode setup','Peripheral driver development (SPI sensors, CAN nodes, serial buses)','DShot and PWM signal generation with hardware timer configuration','RTOS task design: priority assignment, stack sizing, deadlock avoidance','Bootloader integration (PX4 bootloader, custom IAP)','ArduPilot hwdef.dat and board configuration for custom flight controllers','OTA firmware update over WiFi / BLE','Hardware bring-up documentation and debug logs'],
    delivs:[{i:'💾',t:'Source Code (Git Repo)',d:'Clean, commented C/C++ with build instructions.'},{i:'📋',t:'Hardware Bring-Up Guide',d:'Board bring-up checklist and peripheral validation procedure.'},{i:'🐛',t:'Debug Support',d:'Logic analyser and oscilloscope traces validating key signals.'},{i:'📝',t:'Config Files',d:'ArduPilot hwdef.dat or PX4 board config for FC targets.'}],
  },
  drone: {
    tag:'03 // Drone Systems', title:'Drone Systems & Flight Controllers', sub:'Custom FC · ArduPilot · PX4 · UAV Hardware',
    desc:'Custom flight controller hardware to commercial aerospace-grade performance levels. My flagship project matches Cube Orange specifications with triple IMU redundancy, dual CAN-FD, and dual barometers on a custom 6-layer PCB.',
    specs:[{l:'Main MCU',v:'STM32H743 / STM32F7 (application specific)'},{l:'IMU Redundancy',v:'Triple IMU (ICM-42688-P, BMI270, ICM-20602)'},{l:'Barometers',v:'Dual (MS5611 or BMP388)'},{l:'CAN Bus',v:'Dual CAN-FD (MCP2562FD transceivers)'},{l:'ESC Protocol',v:'DShot150/300/600, bidirectional DShot'},{l:'Flash',v:'QSPI NOR Flash (W25Q128 or similar)'},{l:'Autopilot SW',v:'ArduPilot, PX4 (hwdef.dat + board config)'},{l:'Datalogger',v:'SDMMC microSD, 4-bit mode'}],
    checks:['Triple IMU with independent SPI buses and hardware interrupt routing','Dual CAN-FD for redundant telemetry and ESC communication','SBUS hardware inversion via STM32H7 UART CR2 register (no external inverter)','Isolated power rails for IMU vs. digital logic noise sensitivity','FFC/FPC connector to daughterboard for vibration-isolated IMU mounting','ArduPilot hwdef.dat configuration including timer map and serial assignment','PX4 bootloader integration and CRC verification','JST-GH connector standard for peripherals (GPS, telemetry, RC)'],
    delivs:[{i:'🛸',t:'Flight Controller PCB',d:'Gerbers, BOM, and assembly files. 6-layer impedance-controlled layout.'},{i:'💾',t:'ArduPilot / PX4 Config',d:'Complete hwdef.dat for immediate compile and flash.'},{i:'📋',t:'Bring-Up Checklist',d:'Power sequencing, IMU validation, motor output verification.'},{i:'🔧',t:'Remote Support',d:'Debug support during bench testing and first flight.'}],
  },
  iot: {
    tag:'04 // IoT Solutions', title:'IoT Solutions & Prototyping', sub:'ESP32 · WiFi · GSM · LoRa · Low Power',
    desc:'End-to-end IoT product development — from sensor selection and power budget, through PCB layout, firmware, and cloud backend connectivity. Focus on East African deployment constraints: intermittent power, unreliable connectivity, harsh environments.',
    specs:[{l:'Main MCUs',v:'ESP32, ESP32-S3, ESP32-C3, STM32L4'},{l:'Connectivity',v:'WiFi, BLE, GSM/LTE-M, LoRa, Ethernet'},{l:'Protocols',v:'MQTT, HTTP/HTTPS, Modbus RTU, CoAP'},{l:'Power',v:'Solar + LiPo, deep sleep < 10 µA achievable'},{l:'Sensors',v:'Temperature, humidity, soil, gas, flow, weight'},{l:'Enclosure',v:'DIN-rail, IP65 field boxes, custom 3D-printed'},{l:'Cloud',v:'AWS IoT, Azure IoT Hub, Thingsboard, MQTT'},{l:'Display',v:'OLED, TFT, e-ink on request'}],
    checks:['Power budget analysis before component selection','Antenna placement and RF keepout zone design','ESD protection on all external-facing interfaces','Watchdog timer and brownout detection for field reliability','OTA firmware update over WiFi / LTE-M','TLS certificate provisioning for secure cloud auth','Low-power mode profiling with current measurement','Field enclosure IP rating and thermal management'],
    delivs:[{i:'📦',t:'Hardware Package',d:'Gerbers, BOM, and firmware — ready to manufacture and deploy.'},{i:'📡',t:'Connectivity Config',d:'Cloud endpoint setup, MQTT topic structure, and provisioning guide.'},{i:'🔋',t:'Power Analysis',d:'Battery life estimation and sleep mode measurement traces.'},{i:'📲',t:'Dashboard',d:'Basic monitoring dashboard (Thingsboard or web UI) on request.'}],
  },
  mechanical: {
    tag:'05 // 3D Mechanical', title:'3D Mechanical Design', sub:'SolidWorks · Inventor · ECAD–MCAD Co-Design',
    desc:'Enclosures, brackets, and mechanical assemblies designed to work with the electronics, not just around them. ECAD–MCAD integration means the PCB and enclosure are co-designed to avoid fitment surprises at prototype stage.',
    specs:[{l:'Tools',v:'SolidWorks 2024, Autodesk Inventor'},{l:'Manufacturing',v:'FDM 3D printing, SLA, CNC milling, sheet metal'},{l:'ECAD–MCAD',v:'KiCad STEP export → SolidWorks assembly'},{l:'Standards',v:'DIN rail (EN 60715), IP65/IP67 sealing'},{l:'Tolerances',v:'±0.2mm FDM; ±0.05mm CNC'},{l:'Fasteners',v:'M2–M6 heat-set inserts for FDM parts'},{l:'Output',v:'STEP, STL, DXF, full drawing package'},{l:'Thermal',v:'Heatsink design and thermal interface specification'}],
    checks:['PCB STEP import into assembly for exact fitment verification','Connector and port clearance checks against housing walls','DIN-rail mounting clip design to EN 60715 standard','IP65 sealing groove design with O-ring cross-section specification','Ventilation slot sizing for passive thermal management','M2–M6 heat-set insert placement for robust screw retention','Wall thickness ≥ 2mm for FDM structural integrity','Full assembly drawing with BOM for mechanical parts'],
    delivs:[{i:'📐',t:'3D Model Package',d:'STEP + STL files ready for 3D printing or CNC quoting.'},{i:'📋',t:'Engineering Drawing',d:'2D drawing with tolerances, material callouts, and finish spec.'},{i:'🔩',t:'Hardware BOM',d:'List of screws, inserts, O-rings, and off-the-shelf parts.'},{i:'🖨',t:'Print-Ready Files',d:'Sliced files with recommended settings on request.'}],
  },
  power: {
    tag:'06 // Power Electronics', title:'Power Electronics Design', sub:'Buck/Boost · USB PD 100W · BMS · ESC · LDO',
    desc:'Power conversion circuits and distribution networks that are efficient, thermally well-managed, and production-ready. From a simple LDO on a sensor board to a 100W USB PD sink or a 45A multi-phase ESC.',
    specs:[{l:'Topologies',v:'Synchronous Buck, Boost, SEPIC, Flyback'},{l:'Voltage Range',v:'3.3V–60V input, 1V–48V output'},{l:'Current Capacity',v:'Up to 45A per phase (ESC), 10A (DC-DC)'},{l:'USB PD',v:'Up to 100W (TPS65987D, BQ25731)'},{l:'Battery Chem',v:'Li-Po, Li-Ion, LFP — BMS cell balancing'},{l:'Protection',v:'TVS, Schottky, reverse polarity, OCP, OVP, UVP'},{l:'Simulation',v:'LTSpice transient and AC analysis pre-layout'},{l:'Thermal',v:'Junction temp and copper pour sizing analysis'}],
    checks:['LTSpice simulation of switcher before PCB layout','Compensation network design for stability across load range','Switching node (VSW) pour minimized for EMI','Output capacitor ESR and ESL selection for ripple target','Thermal resistance analysis: junction-to-ambient vs. power dissipation','TVS / Schottky protection on all external power inputs','USB PD negotiation IC integration (TPS65987D, FUSB302)','BMS cell balancing, overcurrent, overtemperature fault handling','Power rail sequencing with PG signal chain','IPC-2152 copper width vs. current carrying capacity compliance'],
    delivs:[{i:'📊',t:'LTSpice Simulation',d:'Pre-layout simulation with transient and AC Bode plot results.'},{i:'📦',t:'PCB Manufacturing Files',d:'Power stage Gerbers, BOM with rated alternatives, and thermal notes.'},{i:'🌡',t:'Thermal Analysis',d:'Copper pour calculation, junction temperature estimate, heatsink recommendation.'},{i:'📋',t:'Test Procedure',d:'Bench test: soft-start check, load step, OCP trip verification.'}],
  },
};

/* ═══════════════════════ BLOG POSTS ═══════════════════════ */
const blogData = [
  {
    id: 'hades-architecture',
    date: '2026 · UAV Systems',
    readTime: '9 min read',
    title: 'HADES: Designing a Complete Flight Control Ecosystem from Scratch',
    excerpt: 'Building HADES taught me that a flight controller is not just a PCB — it\'s a tightly coupled ecosystem of electronics, firmware, estimation, control, and simulation. Here\'s how I approached each layer.',
    tags: ['PCB Design', 'STM32', 'Altium', 'UAV', 'Control Systems'],
    content: `
      <div class="blog-post">
        <h1>HADES: Designing a Complete Flight Control Ecosystem from Scratch</h1>
        <div class="post-meta">Ken Wambui · May 2026 · 9 min read · UAV Systems, Altium Designer, STM32</div>

        <p>Most flight controller projects start with an existing stack — ArduPilot, PX4, Betaflight — and build a board around it. HADES started with a blank Altium schematic and the question: <span>what would I build if I had no constraints except physics?</span></p>

        <p>This post is a walkthrough of the key architectural decisions I made across every layer of the platform — from the PCB stack-up to the ground station UI — and why I made them.</p>

        <h2>1. The PCB: Why Altium, and Why This Stack-Up</h2>
        <p>I chose <span>Altium Designer</span> for HADES for one reason: it handles the complexity of a dense multi-layer design with high-speed differential pairs better than any other tool in my workflow. KiCad is excellent for many projects, but when you're routing CAN, UART, SPI, USB, and power rails on a compact board simultaneously, Altium's constraint manager saves hours.</p>

        <p>The stack-up decision was the first critical one. I settled on a 4-layer design:</p>
        <ul>
          <li><strong>Layer 1 (Top Signal)</strong> — High-speed traces, SPI bus, sensitive analog lines</li>
          <li><strong>Layer 2 (Ground Plane)</strong> — Solid, unbroken copper pour. This is the reference for all signals above and below</li>
          <li><strong>Layer 3 (Power Plane)</strong> — Split into 3.3V and 5V domains with a defined boundary</li>
          <li><strong>Layer 4 (Bottom Signal)</strong> — Lower-frequency signals, GPIO, and mechanical clearance-limited components</li>
        </ul>

        <p>The critical rule I enforced: <span>no signal layer crosses the boundary between power domains without a stitching capacitor.</span> This alone eliminated 80% of the EMI risk on the board.</p>

        <div class="callout">Key insight: A solid ground plane on Layer 2 gives every trace on Layer 1 a low-impedance return path. Break it, and you've created a loop antenna tuned to your switching frequency.</div>

        <h2>2. Power Architecture: Segmentation Over Simplicity</h2>
        <p>The power architecture for HADES separates three domains: the battery input (variable voltage), the digital 3.3V domain (MCU, peripherals), and the analog 3.3V domain (MEMS sensors, ADC references). This isn't optional for a flight controller — MEMS gyroscopes are sensitive enough to pick up the ripple from a poorly placed decoupling capacitor.</p>

        <p>The analog domain is powered through a separate LDO from the main 3.3V rail, with a ferrite bead at the entry point. The ferrite bead acts as a high-frequency filter, blocking switcher noise from crossing into the analog supply. The <code>100nF</code> capacitor immediately at the LDO output kills any remaining high-frequency noise before it reaches the MEMS VDD pin.</p>

        <h2>3. Software Architecture: Real-Time Task Scheduling</h2>
        <p>FreeRTOS manages five task categories on HADES, each with a defined priority and stack size:</p>
        <ul>
          <li><strong>IMU Task (highest priority)</strong> — Reads sensor data at 1 kHz, feeds estimation pipeline</li>
          <li><strong>Estimation Task</strong> — Runs attitude and navigation filter at 500 Hz</li>
          <li><strong>Control Task</strong> — Executes control law at 250 Hz, outputs to actuators</li>
          <li><strong>Telemetry Task</strong> — Packages and sends data over custom data link at 50 Hz</li>
          <li><strong>Command Task (lowest priority)</strong> — Processes incoming commands from ground station</li>
        </ul>

        <p>The key design principle: <span>higher-priority tasks must never block on lower-priority resources.</span> I used FreeRTOS queues with zero-timeout reads at high-priority levels, and only allowed blocking waits in the telemetry and command tasks.</p>

        <h2>4. The 6-DOF Simulation: Validate Before You Fly</h2>
        <p>Every control algorithm in HADES was validated in a 6-DOF physics simulation before any hardware test. The simulation models the aerodynamic forces and moments on a fixed-wing UAV, runs the same C code as the embedded firmware (with a thin hardware abstraction layer), and drives the control surfaces in real time.</p>

        <p>This approach found three critical bugs in the control law before the first hardware bench test — bugs that would have resulted in immediate crashes if found in flight. <span>Simulation is not optional. It is the cheapest form of iteration you have.</span></p>

        <h2>Takeaway</h2>
        <p>HADES took longer than any project I've done. But it also taught me more. Every layer — PCB, firmware, estimation, control, simulation — forced me to understand the constraints of the layer below it. That understanding is something no amount of using an existing autopilot stack can give you.</p>
        <p>If you're building UAV systems and want to discuss the architecture in detail, reach out — I'm always happy to talk hardware.</p>
      </div>
    `,
  },
  {
    id: 'hdmi-csi-routing',
    date: '2026 · Signal Integrity',
    readTime: '7 min read',
    title: 'HDMI to MIPI CSI-2: Routing TC358743XBG for Sub-1 dB Signal Loss',
    excerpt: 'Routing TMDS pairs at 6 Gbps and MIPI CSI-2 D-PHY lanes simultaneously on a 4-layer PCB is a lesson in constraint discipline. Here\'s exactly what I did and why.',
    tags: ['PCB Design', 'Signal Integrity', 'HDMI', 'MIPI CSI-2', 'High-Speed'],
    content: `
      <div class="blog-post">
        <h1>HDMI to MIPI CSI-2: Routing TC358743XBG for Sub-1 dB Signal Loss</h1>
        <div class="post-meta">Ken Wambui · April 2026 · 7 min read · Signal Integrity, High-Speed PCB</div>

        <p>The Toshiba <span>TC358743XBG</span> is a capable HDMI-to-MIPI CSI-2 bridge IC, but it demands respect from the PCB designer. Both interfaces — HDMI TMDS and MIPI CSI-2 D-PHY — are high-speed differential standards with tight impedance requirements, and they live on the same compact board. Here's how I routed it.</p>

        <h2>Understanding the Two Interfaces</h2>
        <p>HDMI carries video data as TMDS (Transition Minimized Differential Signaling) pairs. For standard HDMI 1.4, each lane carries up to 3.4 Gbps. The characteristic differential impedance is <span>100Ω ± 15%</span>.</p>
        <p>MIPI CSI-2 D-PHY is the output interface — typically 2 lanes going to a Raspberry Pi or similar embedded platform via 15-pin FFC. D-PHY also uses 100Ω differential impedance, but at lower data rates than TMDS.</p>
        <p>The challenge: both interfaces need their own tightly controlled differential pairs, isolated from each other and from the power planes.</p>

        <h2>Stack-Up and Impedance</h2>
        <p>I used a 4-layer stack-up with the TMDS and D-PHY traces on the top signal layer, referenced to a solid ground plane on Layer 2. The trace geometry for 100Ω differential was calculated as:</p>
        <ul>
          <li>Trace width: <code>0.15 mm</code></li>
          <li>Intra-pair spacing: <code>0.15 mm</code></li>
          <li>Layer 1 to Layer 2 dielectric: <code>0.2 mm</code> (standard 4-layer prepreg)</li>
        </ul>
        <p>I verified this with the fab's impedance calculator before submitting. The fab confirmed <span>100Ω ± 8%</span> on the actual boards — within the HDMI spec.</p>

        <h2>Length Matching: How Strict Is Strict?</h2>
        <p>TMDS intra-pair length matching (between P and N of the same pair) must be within <span>≤ 5 mils (0.127 mm)</span>. Inter-pair skew (between the three data pairs and the clock pair) must be within <span>± 10% of the unit interval</span>.</p>
        <p>For the CSI-2 output, MIPI D-PHY requires intra-pair matching within <span>± 10 µm</span> in high-speed mode. I used KiCad's length tuning tool to hit ± 5 µm on all CSI-2 pairs and ± 3 mil on the TMDS pairs.</p>

        <div class="callout">Never route differential pairs with 90° corners. Use 45° bends or curved routing — the impedance discontinuity at a right angle is measurable at multi-Gbps data rates.</div>

        <h2>ESD Protection: TPD12S520 Placement</h2>
        <p>The HDMI connector is an external-facing interface — it will see ESD events in the real world. The <span>TPD12S520</span> is specifically designed for HDMI ESD protection, with clamping diodes on each TMDS pair and the DDC/HEC lines.</p>
        <p>Critical placement rule: <span>the ESD device must be as close to the connector as physically possible</span> — before the trace reaches any other component. I placed the TPD12S520 within 3 mm of the HDMI connector pads. This ensures any ESD event is clamped before it can propagate toward the TC358743XBG.</p>

        <h2>Power Sequencing</h2>
        <p>The TC358743XBG requires a specific power-on sequence: 3.3V must be stable before 2.5V is enabled, and 2.5V before 1.2V. I implemented this with a simple RC delay on the enable pins of the 2.5V and 1.2V regulators, derived from the 3.3V power-good output.</p>

        <h2>Results</h2>
        <p>The assembled board captures clean 1080p60 HDMI input and streams it as 2-lane MIPI CSI-2 to a Raspberry Pi 4 with no dropped frames at sustained operation. The HDMI hot plug detect and DDC/EDID handshake works correctly on the first attempt — a good sign that the I2C routing and EDID EEPROM configuration is solid.</p>
        <p>For any questions on TC358743XBG or HDMI-to-CSI-2 design, get in touch.</p>
      </div>
    `,
  },
  {
    id: 'sos-power-budget',
    date: '2025 · Wearable Electronics',
    readTime: '6 min read',
    title: 'Wearable Emergency SOS: Ultra-Low-Power Design with STM32L052 + SIM7070G',
    excerpt: 'Building a wearable that sends GPS alerts via LTE Cat-M without a phone is a power budget exercise at every step. Here\'s how I kept standby current below 10 µA on a coin-cell-class battery.',
    tags: ['STM32L0', 'LTE Cat-M', 'Ultra-Low Power', 'Wearable', 'GNSS'],
    content: `
      <div class="blog-post">
        <h1>Wearable Emergency SOS: Ultra-Low-Power Design with STM32L052 + SIM7070G</h1>
        <div class="post-meta">Ken Wambui · December 2025 · 6 min read · Wearable Electronics, STM32L0, LTE Cat-M</div>

        <p>The specification for the SOS device was clear: <span>press a hidden button, your GPS coordinates are sent via LTE to a pre-configured contact — no phone, no app, no setup required by the user in a crisis.</span> The hard part is doing that in a device that fits in a keychain and runs for weeks on a small Li-Po.</p>

        <h2>The Power Budget Problem</h2>
        <p>LTE Cat-M (LTE-M) modems like the <span>SIM7070G</span> draw up to 500mA during transmission. That's unavoidable — RF transmitters need power. But the device spends 99.9% of its life doing nothing. The standby power budget drives everything else.</p>

        <p>Target: standby current below <span>10 µA</span> from a 300 mAh Li-Po. That gives theoretical standby life of 1,250 hours (52 days) before the battery drops below the LDO's minimum dropout voltage. Practical target with LDO quiescent current factored in: 30+ days.</p>

        <h2>STM32L052: The Right MCU for This Job</h2>
        <p>The <span>STM32L052K8T6</span> is purpose-built for ultra-low-power applications. In Stop Mode 2, it draws approximately <span>0.4 µA</span> with the RTC running. The device wakes on external interrupt (the SOS button), executes the alert sequence, then returns to Stop Mode 2.</p>

        <p>Key firmware decisions for low power:</p>
        <ul>
          <li>All unused GPIO pins configured as analog (no floating inputs pulling current through internal ESD structures)</li>
          <li>HSI16 clock used for normal operation; MSI at 2 MHz for low-power states</li>
          <li>UART1 used for SIM7070G communication, disabled in Stop mode</li>
          <li>All peripherals clock-gated when idle via RCC registers</li>
        </ul>

        <h2>SIM7070G Power Management</h2>
        <p>The SIM7070G has its own power-down mode (< 1 µA) entered via the PWRKEY pin. In standby, the MCU holds the PWRKEY line asserted — the modem is off. When the SOS button triggers an interrupt:</p>
        <ul>
          <li>MCU wakes from Stop Mode 2 (~5 µs wake time)</li>
          <li>MCU pulses PWRKEY to power on the SIM7070G (takes ~1.8 seconds to boot)</li>
          <li>GNSS fix is acquired (cold start ~30 seconds; warm start ~5 seconds)</li>
          <li>Alert SMS/HTTP POST sent with coordinates</li>
          <li>Modem powered down via PWRKEY</li>
          <li>MCU returns to Stop Mode 2</li>
        </ul>

        <div class="callout">The most important power decision: keep the SIM7070G completely powered off in standby. Even the modem's sleep modes draw milliamperes — too much for weeks of standby on a small battery.</div>

        <h2>Bulk Capacitance for LTE Transmit Bursts</h2>
        <p>The SIM7070G draws up to <span>500mA in short bursts</span> during LTE transmit. The LDO (TPS7A02-33) cannot source this current without drooping. The solution: a <span>1000 µF low-ESR bulk capacitor</span> on the modem's VDD supply. This capacitor sources the burst current while the LDO recovers, preventing a voltage droop that could reset the modem mid-transmission.</p>

        <p>I measured the actual transmit burst profile with a current probe: the peak was 420mA for 4ms, with an average of 85mA over the transmit window. The 1000 µF capacitor droops only 1.5V during the peak, well within the SIM7070G's minimum operating voltage of 3.0V.</p>

        <h2>PCB Layout Considerations</h2>
        <p>Wearable PCBs have an additional constraint: antenna placement. Both the cellular and GNSS antennas need clear sky view and PCB keepout zones. I placed the GNSS antenna at the top corner of the board (furthest from the battery) and the LTE antenna on the opposite long edge. The keepout zones are enforced with copper pour cutouts on all layers within 5mm of each antenna.</p>

        <h2>Results</h2>
        <p>Measured standby current: <span>8.3 µA</span> — hitting the target. A successful SOS transmission including GNSS fix takes 42 seconds from button press and consumes approximately 18 mAh from the battery. On a 300 mAh cell, that's roughly 16 complete alert cycles plus 35+ days of standby. More than sufficient for the intended use case.</p>
      </div>
    `,
  },
];

/* ═══════════════════════ RENDERING ═══════════════════════ */

function renderHome() {
  document.getElementById('page-home').innerHTML = `
    <div class="hero-wrap">
      <div class="hero-tag">PCB Design Engineer · Mechatronics Engineer · Firmware Developer</div>
      <div class="hero-name"><span class="glitch" data-text="${CONFIG.name}">${CONFIG.name}</span></div>
      <div class="hero-sub">${CONFIG.subtitle}</div>
      <p class="hero-desc">${CONFIG.tagline}</p>
      <div class="hero-ctas">
        <button class="btn btn-cyan" onclick="switchPage('projects')"><span>⬡</span> View Projects</button>
        <button class="btn btn-ghost" onclick="switchPage('contact')">⟶ Hire Me</button>
      </div>
      <div class="hero-stats">
        ${CONFIG.stats.map(s => `<div><div class="stat-num">${s.num.replace('+','')}<span>${s.num.includes('+') ? '+' : ''}</span></div><div class="stat-label">${s.label}</div></div>`).join('')}
      </div>
    </div>`;
}

function renderAbout() {
  document.getElementById('page-about').innerHTML = `
    <div class="page-inner">
      <div class="about-grid">
        <div>
          <div class="photo-frame" id="photo-frame">
            <div class="corner corner-tl"></div><div class="corner corner-tr"></div>
            <div class="corner corner-bl"></div><div class="corner corner-br"></div>
            <svg viewBox="0 0 64 64" fill="none"><circle cx="32" cy="22" r="12" stroke="#00d4ff" stroke-width="1.5"/><path d="M10 54c0-12.15 9.85-22 22-22s22 9.85 22 22" stroke="#00d4ff" stroke-width="1.5"/></svg>
            <span style="font-family:'Share Tech Mono',monospace;font-size:.75rem;color:var(--muted)">[replace assets/images/profile.jpg]</span>
          </div>
        </div>
        <div>
          <div class="sec-header">
            <div class="sec-tag">01 // About</div>
            <h2 class="sec-title">PCB Design Engineer<br><span>from Nairobi</span></h2>
          </div>
          <div class="degree-badge">
            <span class="degree-badge-icon">🎓</span>
            <div class="degree-badge-text">
              <strong>BEng (Hons) Mechatronics Engineering</strong>
              Dedan Kimathi University of Technology — Nyeri, Kenya
            </div>
          </div>
          <p class="about-p">Specialized PCB Design Engineer and Mechatronics Engineer with a proven record designing <span>high-speed, impedance-controlled, multi-layer PCBs</span> for UAV, IoT, industrial, and consumer applications.</p>
          <p class="about-p">Proficient in <span>Altium Designer</span> and <span>KiCad 10</span> across the full hardware development lifecycle — from schematic capture through DFM-ready Gerber output. Deep practical expertise in <span>signal integrity, power integrity, EMI/EMC mitigation</span>, mixed-signal design, and high-speed interfaces (HDMI, USB 3.2, CAN-FD, MIPI CSI-2).</p>
          <p class="about-p">Equally capable in embedded firmware (ESP32 / STM32, FreeRTOS) to validate and bring up custom hardware. Served ${CONFIG.companies.join(', ')}.</p>
          <div class="skills-chips">
            ${['KiCad 10 / Altium Designer','STM32 / ESP32 / FreeRTOS','Signal & Power Integrity','EMI/EMC Mitigation','HDMI 2.0 / USB 3.2 Gen2','CAN-FD / MIPI CSI-2','SolidWorks / Inventor','ArduPilot / PX4'].map(s=>`<div class="chip">${s}</div>`).join('')}
          </div>
        </div>
      </div>

      <div style="margin-top:72px">
        <div class="sec-tag">Core Competencies</div>
        <h2 class="sec-title" style="font-size:clamp(1.4rem,3vw,2rem)">Technical <span>Skill Stack</span></h2>
        <div class="core-grid">
          ${[
            {h:'PCB Design',items:['Layout & Routing','Schematic Capture','Multi-layer Design','Impedance Control','DFM / DFA Review','Stack-up Design']},
            {h:'High-Speed Interfaces',items:['HDMI 2.0','USB 3.2 Gen2 (10 Gbps)','CAN-FD','MIPI CSI-2','DDR / LPDDR','PCIe']},
            {h:'Power Electronics',items:['Buck / Boost Converters','LDO Design','USB PD (100W)','Motor Drive / ESC','TVS / ESD Protection']},
            {h:'SI / PI / EMC',items:['Differential Pair Routing','Return Path Management','Decoupling Strategy','EMI Filtering','Ground Plane Design']},
            {h:'Tools',items:['Altium Designer','KiCad 10','STM32CubeMX','ESP-IDF','LTSpice']},
            {h:'Firmware',items:['Embedded C/C++','FreeRTOS','HAL / LL Drivers','STM32 & ESP32','ArduPilot / PX4']},
          ].map(g=>`<div class="core-group"><h4>${g.h}</h4>${g.items.map(i=>`<div class="core-item">${i}</div>`).join('')}</div>`).join('')}
        </div>
      </div>
    </div>`;

  // Try to load profile photo
  const frame = document.getElementById('photo-frame');
  const img = new Image();
  img.onload = () => {
    img.className = '';
    img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover';
    frame.querySelectorAll('svg,span').forEach(el => el.style.display = 'none');
    frame.appendChild(img);
  };
  img.src = CONFIG.profilePhoto;
}

function renderServices() {
  const icons = { pcb:'⬡', embedded:'⚙', drone:'🚁', iot:'📡', mechanical:'🔩', power:'⚡' };
  const nums  = { pcb:'01', embedded:'02', drone:'03', iot:'04', mechanical:'05', power:'06' };
  const descs = {
    pcb:      'Multi-layer PCB design from schematic to manufacturing-ready Gerbers. Impedance control, DFM, and SI-focused layouts.',
    embedded: 'Firmware for STM32, ESP32, and Arduino. RTOS, HAL drivers, and full hardware bring-up.',
    drone:    'Custom FC hardware and firmware. PX4/ArduPilot integration, triple IMU redundancy, CAN-FD, DShot.',
    iot:      'End-to-end IoT product development — sensors, wireless comms, cloud connectivity, and low-power design.',
    mechanical:'Enclosures and mechanical assemblies for 3D printing or CNC. Full MCAD–ECAD co-design workflow.',
    power:    'Buck/boost converters, BMS, ESC design, USB PD 100W, and PDN design with LTSpice simulation.',
  };
  const tagMap = {
    pcb:['KiCad 10','Altium','2–12 Layer','High-Speed'],
    embedded:['STM32H7','ESP32','FreeRTOS','C/C++'],
    drone:['PX4','ArduPilot','DShot','CAN-FD'],
    iot:['MQTT','LoRa','GSM','Low Power'],
    mechanical:['SolidWorks','Inventor','FDM','CNC'],
    power:['Buck/Boost','USB PD 100W','BMS','ESC'],
  };

  document.getElementById('page-services').innerHTML = `
    <div class="page-inner">
      <div class="sec-header">
        <div class="sec-tag">02 // Services</div>
        <h2 class="sec-title">What I <span>Offer</span></h2>
        <p class="sec-subtitle">Click any service for full technical details →</p>
      </div>
      <div class="services-grid">
        ${Object.keys(icons).map(k=>`
          <div class="svc-card" onclick="openServiceModal('${k}')">
            <span class="svc-num">${nums[k]}</span>
            <span class="svc-icon">${icons[k]}</span>
            <div class="svc-title">${servicesData[k].title}</div>
            <p class="svc-desc">${descs[k]}</p>
            <div class="svc-tags">${tagMap[k].map(t=>`<span class="svc-tag">${t}</span>`).join('')}</div>
            <div class="svc-hint">VIEW DETAILS →</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderProjects() {
  const cats = ['all','uav','iot','industrial','interface','consumer'];
  const catLabels = { all:'All Projects', uav:'UAV & Drones', iot:'IoT & Sensors', industrial:'Industrial', interface:'Interface & Comms', consumer:'Consumer' };

  const cards = projectsData.map(p => {
    const imgEl = p.image ? `<img class="photo" src="${p.image}" onerror="this.style.display='none'" alt="${p.title}">` : '';
    const svgPat = `<svg class="pattern" viewBox="0 0 300 160"><line x1="0" y1="80" x2="300" y2="80" stroke="#00d4ff" stroke-width=".5"/><line x1="150" y1="0" x2="150" y2="160" stroke="#00d4ff" stroke-width=".5"/><circle cx="150" cy="80" r="36" stroke="#00d4ff" stroke-width=".5" fill="none"/><rect x="110" y="60" width="80" height="40" stroke="#00ff9f" stroke-width=".5" fill="none"/></svg>`;
    return `
      <div class="prj-card" data-cat="${p.category}" onclick="openProjectModal('${p.id}')">
        <div class="prj-img" style="background:${p.gradient}">
          ${svgPat}${imgEl}
          <span class="prj-icon">${p.icon}</span>
          <div class="prj-badge">${p.badge}</div>
        </div>
        <div class="prj-body">
          <div class="prj-title">${p.title}</div>
          <p class="prj-desc">${p.shortDesc}</p>
          <div class="prj-techs">${p.techs.map(t=>`<span class="tech">${t}</span>`).join('')}</div>
          <div class="prj-more">View Details &amp; Photos</div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('page-projects').innerHTML = `
    <div class="page-inner--wide">
      <div class="sec-header">
        <div class="sec-tag">03 // Projects</div>
        <h2 class="sec-title">Selected <span>Work</span></h2>
        <p class="sec-subtitle">Click any project for full details + photo gallery →</p>
      </div>
      <div class="filter-bar">
        ${cats.map(c=>`<button class="filter-btn${c==='all'?' active':''}" data-cat="${c}">${catLabels[c]}</button>`).join('')}
      </div>
      <div class="projects-grid" id="projects-grid">${cards}</div>
    </div>`;

  // Filter logic
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.prj-card').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
}

function renderResume() {
  const timeline = experienceData.map(e => `
    <div class="tl-item">
      <div class="tl-period">${e.period}</div>
      <div class="tl-role">${e.role}</div>
      <div class="tl-company">${e.company}</div>
      <p class="tl-desc">${e.desc}</p>
    </div>`).join('');

  const sbars = skillsData.map(s => `
    <div class="sbar">
      <div class="sbar-row"><span class="sbar-name">${s.name}</span><span class="sbar-pct">${s.pct}%</span></div>
      <div class="sbar-track"><div class="sbar-fill" data-pct="${s.pct}"></div></div>
    </div>`).join('');

  const toolChips = toolsData.map(t => `<div class="chip">${t}</div>`).join('');

  document.getElementById('page-resume').innerHTML = `
    <div class="page-inner">
      <div class="sec-header">
        <div class="sec-tag">04 // Resume</div>
        <h2 class="sec-title">Experience &amp; <span>Skills</span></h2>
      </div>
      <div class="resume-grid">
        <div>
          <div class="timeline">${timeline}</div>
        </div>
        <div class="skills-col">
          <h3>Technical Proficiency</h3>
          ${sbars}
          <h3 style="margin-top:36px">Toolchain</h3>
          <div class="skills-chips" style="margin-top:14px">${toolChips}</div>
          <div style="margin-top:28px">
            <button class="btn btn-cyan" style="width:100%;justify-content:center" onclick="switchPage('contact')"><span>↓ Request Full CV</span></button>
          </div>
        </div>
      </div>
    </div>`;
}

function renderCertifications() {
  const cards = certsData.map(c => `
    <div class="cert-card ${c.color}">
      <div class="cert-year">${c.year}</div>
      <div class="cert-icon">${c.icon}</div>
      <div class="cert-type">${c.type}</div>
      <div class="cert-title">${c.title}</div>
      <div class="cert-issuer">${c.issuer}</div>
      <p class="cert-desc">${c.desc}</p>
    </div>`).join('');

  document.getElementById('page-certifications').innerHTML = `
    <div class="page-inner">
      <div class="sec-header">
        <div class="sec-tag">05 // Certifications</div>
        <h2 class="sec-title">Education &amp; <span>Credentials</span></h2>
        <p class="sec-subtitle">Academic qualifications and professional certifications.</p>
      </div>
      <div class="certs-grid">${cards}</div>
      <div style="margin-top:56px;padding-top:48px;border-top:1px solid var(--border)">
        <div class="sec-tag" style="margin-bottom:8px">Interfaces &amp; Protocols</div>
        <h3 style="font-family:'Orbitron',sans-serif;font-size:1.1rem;font-weight:600;color:var(--text);margin-bottom:24px">Full Technical <span style="color:var(--cyan)">Competency</span></h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px">
          ${[
            {label:'Interfaces',items:['SPI','I2C','UART/USART','CAN-FD','USB','HDMI','PWM / DShot','Ethernet','PCIe','MIPI CSI-2']},
            {label:'Fabrication',items:['Gerber / Drill Files','Pick & Place Files','IPC-2221 Standards','Hand / Reflow Assembly','JLCPCB / PCBWay Integration']},
            {label:'High-Speed',items:['HDMI 2.0 (TMDS)','USB 3.2 Gen2 (10 Gbps)','Differential Pair Routing','Impedance Matching','Return Path Management']},
          ].map(g=>`
            <div style="background:var(--surface);border:1px solid var(--border);padding:24px">
              <h4 style="font-family:'Orbitron',sans-serif;font-size:.72rem;color:var(--cyan);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px">${g.label}</h4>
              ${g.items.map(i=>`<div class="core-item">${i}</div>`).join('')}
            </div>`).join('')}
        </div>
      </div>
    </div>`;
}

function renderBlog() {
  const cards = blogData.map((p,i) => `
    <div class="blog-card" onclick="openBlogModal(${i})">
      <div class="blog-meta">
        <span class="blog-date">${p.date}</span>
        <span class="blog-read">${p.readTime}</span>
      </div>
      <div class="blog-title">${p.title}</div>
      <p class="blog-excerpt">${p.excerpt}</p>
      <div class="blog-tags">${p.tags.map(t=>`<span class="blog-tag">${t}</span>`).join('')}</div>
      <div class="blog-more">Read Article</div>
    </div>`).join('');

  document.getElementById('page-blog').innerHTML = `
    <div class="page-inner">
      <div class="sec-header">
        <div class="sec-tag">06 // Blog</div>
        <h2 class="sec-title">Technical <span>Writings</span></h2>
        <p class="sec-subtitle">Design notes, lessons learned, and deep dives on hardware engineering.</p>
      </div>
      <div class="blog-grid">${cards}</div>
    </div>`;
}

function renderContact() {
  const formAction = CONFIG.formspreeId === 'YOUR_FORM_ID'
    ? '' : `https://formspree.io/f/${CONFIG.formspreeId}`;

  document.getElementById('page-contact').innerHTML = `
    <div class="page-inner">
      <div class="sec-header">
        <div class="sec-tag">07 // Contact</div>
        <h2 class="sec-title">Let's Build<br><span>Something</span></h2>
      </div>
      <div class="contact-grid">
        <div class="contact-info">
          <h3>Available for Projects</h3>
          <p>Whether you need a full-time electronics engineer or a specialist for your next hardware project, I'm open to both. Based in Kenya — working globally.</p>
          <div class="clink-list">
            <a href="mailto:${CONFIG.email}" class="clink">
              <div class="clink-icon">✉</div>
              <div><span class="clink-label">Email</span>${CONFIG.email}</div>
            </a>
            <a href="${CONFIG.linkedin.url}" target="_blank" class="clink">
              <div class="clink-icon">in</div>
              <div><span class="clink-label">LinkedIn</span>${CONFIG.linkedin.label}</div>
            </a>
            <a href="${CONFIG.github.url}" target="_blank" class="clink">
              <div class="clink-icon">GH</div>
              <div><span class="clink-label">GitHub</span>${CONFIG.github.label}</div>
            </a>
            <a href="${CONFIG.fiverr.url}" target="_blank" class="clink">
              <div class="clink-icon" style="color:var(--green)">5★</div>
              <div><span class="clink-label">Fiverr</span>${CONFIG.fiverr.label}</div>
            </a>
            <div class="clink">
              <div class="clink-icon">📍</div>
              <div><span class="clink-label">Location</span>${CONFIG.location}</div>
            </div>
          </div>
        </div>
        <div>
          ${CONFIG.formspreeId === 'YOUR_FORM_ID' ? `<div class="form-note">⚠ Contact form not yet connected. Sign up at formspree.io, create a form, and paste your Form ID into CONFIG.formspreeId in script.js to activate.</div>` : ''}
          <form class="contact-form" id="contact-form" ${formAction ? `action="${formAction}" method="POST"` : 'onsubmit="handleFormSubmit(event)"'}>
            <div class="f-group"><label class="f-label">Name</label><input type="text" class="f-input" name="name" placeholder="Your full name" required /></div>
            <div class="f-group"><label class="f-label">Email</label><input type="email" class="f-input" name="email" placeholder="you@company.com" required /></div>
            <div class="f-group"><label class="f-label">Project Type</label><input type="text" class="f-input" name="project_type" placeholder="e.g. PCB Design, Drone FC, IoT..." /></div>
            <div class="f-group"><label class="f-label">Message</label><textarea class="f-textarea" name="message" placeholder="Describe your project, requirements, timeline..." required></textarea></div>
            <button type="submit" class="f-submit"><span id="submit-label">⟶ Send Message</span></button>
            <div class="form-status" id="form-status"></div>
          </form>
        </div>
      </div>
    </div>`;
}

function handleFormSubmit(e) {
  e.preventDefault();
  // Placeholder when Formspree not connected
  const status = document.getElementById('form-status');
  status.style.display = 'block';
  status.className = 'form-status error';
  status.textContent = 'Form not connected yet. Email kenneth.wambui.n@gmail.com directly.';
}

/* ═══════════════════════ MODAL HELPERS ═══════════════════════ */
function openModal(id)  { document.getElementById(id).classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('open'); document.body.style.overflow = ''; }
function closeBg(e, id) { if (e.target === document.getElementById(id)) closeModal(id); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') ['service-modal','project-modal','blog-modal'].forEach(closeModal); });

function gallery(n) {
  let h = '<div class="gallery">';
  for (let i = 0; i < n; i++) {
    h += `<div class="g-slot" id="gs_${i}">
      <div class="g-slot-icon">📷</div>
      <div style="font-size:.6rem">${i===0?'Main photo / render':'Photo '+(i+1)}</div>
      <div style="font-size:.55rem;opacity:.5;margin-top:2px">Click to upload</div>
      <input type="file" accept="image/*" onchange="prevImg(this,'gs_${i}')">
    </div>`;
  }
  return h + '</div>';
}
function prevImg(inp, id) {
  const slot = document.getElementById(id), file = inp.files[0]; if (!file) return;
  const r = new FileReader();
  r.onload = e => {
    let img = slot.querySelector('img');
    if (!img) { img = document.createElement('img'); slot.appendChild(img); }
    img.src = e.target.result;
    img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover';
    slot.querySelectorAll(':not(img):not(input)').forEach(el => el.style.display = 'none');
  };
  r.readAsDataURL(file);
}

function mSpecs(arr) {
  return `<div class="m-specs">${arr.map(s=>`<div class="m-spec"><div class="m-spec-l">${s.l}</div><div class="m-spec-v">${s.v}</div></div>`).join('')}</div>`;
}
function mChecks(arr) {
  return `<div class="m-checks">${arr.map(c=>`<div class="m-check">${c}</div>`).join('')}</div>`;
}
function mDelivs(arr) {
  return arr.map(d=>`<div class="m-deliv"><div class="m-deliv-icon">${d.i}</div><div class="m-deliv-text"><strong>${d.t}</strong>${d.d}</div></div>`).join('');
}
function mCta(modalId) {
  return `<div class="m-cta"><button class="btn btn-cyan" style="width:100%;justify-content:center" onclick="closeModal('${modalId}');switchPage('contact')"><span>⟶ Get a Quote</span></button></div>`;
}

/* ── SERVICE MODAL ── */
function openServiceModal(key) {
  const d = servicesData[key]; if (!d) return;
  document.getElementById('svc-tag').textContent = d.tag;
  document.getElementById('svc-body').innerHTML = `
    <div class="m-title">${d.title}</div>
    <div class="m-sub">${d.sub}</div>
    <div class="m-desc">${d.desc}</div>
    <span class="m-label">Specifications & Capabilities</span>
    ${mSpecs(d.specs)}
    <span class="m-label">Design Checklist</span>
    ${mChecks(d.checks)}
    <span class="m-label">Deliverables</span>
    ${mDelivs(d.delivs)}
    ${mCta('service-modal')}`;
  openModal('service-modal');
}

/* ── PROJECT MODAL ── */
function openProjectModal(id) {
  const d = projectsData.find(p => p.id === id); if (!d) return;
  document.getElementById('prj-tag').textContent = `Project // ${d.title}`;
  document.getElementById('prj-body').innerHTML = `
    ${gallery(d.photos)}
    <div class="m-title">${d.title}</div>
    <div class="m-sub">${d.badge} · ${d.category.toUpperCase()}</div>
    <div class="m-desc">${d.fullDesc}</div>
    <span class="m-label">Technical Specifications</span>
    ${mSpecs(d.specs)}
    <span class="m-label">Design Challenges & Solutions</span>
    ${mChecks(d.challenges)}
    <span class="m-label">Technologies Used</span>
    <div class="m-tags">${d.techs_full.map(t=>`<span class="m-tag">${t}</span>`).join('')}</div>
    ${mCta('project-modal')}`;
  openModal('project-modal');
}

/* ── BLOG MODAL ── */
function openBlogModal(idx) {
  const d = blogData[idx]; if (!d) return;
  document.getElementById('blog-tag').textContent = `${d.date} · ${d.readTime}`;
  document.getElementById('blog-body').innerHTML = d.content;
  openModal('blog-modal');
}

/* ═══════════════════════ PAGE SWITCHING ═══════════════════════ */
function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  const page = document.getElementById('page-' + pageId);
  if (page) {
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const btn = document.querySelector(`.nav-btn[data-page="${pageId}"]`);
  if (btn) btn.classList.add('active');

  // Close mobile nav
  document.getElementById('nav-links').classList.remove('open');

  // Animate skill bars when resume page opens
  if (pageId === 'resume') {
    setTimeout(() => {
      document.querySelectorAll('.sbar-fill').forEach(b => { b.style.width = b.dataset.pct + '%'; });
    }, 200);
  }
}

/* ═══════════════════════ PARTICLES ═══════════════════════ */
function createParticles() {
  const c = document.getElementById('particles');
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `left:${Math.random()*100}vw;animation-duration:${8+Math.random()*20}s;animation-delay:${Math.random()*18}s;background:${Math.random()>.5?'var(--cyan)':'var(--green)'}`;
    c.appendChild(p);
  }
}

/* ═══════════════════════ HAMBURGER ═══════════════════════ */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});

/* ═══════════════════════ NAV BUTTONS ═══════════════════════ */
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    switchPage(btn.dataset.page);
  });
});

/* ═══════════════════════ INIT ═══════════════════════ */
function init() {
  renderHome();
  renderAbout();
  renderServices();
  renderProjects();
  renderResume();
  renderCertifications();
  renderBlog();
  renderContact();
  createParticles();
  // Ensure home is active
  switchPage('home');
}

document.addEventListener('DOMContentLoaded', init);
