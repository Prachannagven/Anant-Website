import { Metadata } from "next";
import { SubsystemPage } from "@/components/sections/SubsystemPage";

export const metadata: Metadata = {
  title: "TTC - Telemetry, Tracking & Command | Team Anant",
  description:
    "UHF band communication system for Team Anant's nanosatellite with CC1101 transceiver and AX.25 protocol.",
};

const specs = [
  { param: "Transceiver", value: "CC1101" },
  { param: "Frequency Band", value: "UHF (433 MHz)" },
  { param: "Protocol", value: "AX.25" },
  { param: "Data Rate", value: "9.6 kbps" },
  { param: "Pass Duration", value: "10+ min" },
  { param: "Antenna Type", value: "Deployable Turnstile/Monopole" },
];

const components = [
  {
    id: "transceiver",
    name: "Transceiver",
    description: "CC1101-based UHF transceiver with low power consumption and high sensitivity. Operates at 433 MHz with configurable data rates and modulation schemes.",
  },
  {
    id: "antennas",
    name: "Antennas",
    description: "Deployable turnstile and monopole antennas for omnidirectional coverage. Spring-loaded deployment mechanism activates post-separation from launch vehicle.",
  },
  {
    id: "ground",
    name: "Ground Station",
    description: "Yagi antenna setup with SDR reception for command uplink and telemetry downlink. Located at BITS Pilani campus with tracking capability.",
  },
];

const stats = [
  { value: "9.6 kbps", label: "Data Rate" },
  { value: "433 MHz", label: "Frequency" },
  { value: "10+ min", label: "Pass Duration" },
];

export default function TTCPage() {
  return (
    <SubsystemPage
      code="TTC"
      subtitle="Telemetry, Tracking & Command"
      description="UHF band communication system for reliable ground station contact and data transmission."
      overview="The Telemetry, Tracking, and Command subsystem enables two-way communication between the satellite and ground station. It handles command uplink, telemetry downlink, and mission data transmission."
      overviewDetails="Using the CC1101 transceiver with deployable antennas and AX.25 protocol for data framing, the TTC provides reliable communication links during ground station passes. The system supports both beacon transmission and commanded data downloads."
      specs={specs}
      components={components}
      stats={stats}
      prevLink={{ href: "/subsystems/obc", label: "OBC" }}
      nextLink={{ href: "/subsystems/sts", label: "STS" }}
    />
  );
}
