import { Metadata } from "next";
import { SubsystemPage } from "@/components/sections/SubsystemPage";

export const metadata: Metadata = {
  title: "STS - Structural & Thermal System | Team Anant",
  description:
    "Aluminum 6061-T6 structure following 3U CubeSat standard with passive thermal control for Team Anant's nanosatellite.",
};

const specs = [
  { param: "Material", value: "Aluminum 6061-T6" },
  { param: "Form Factor", value: "3U CubeSat" },
  { param: "Total Mass", value: "<4 kg" },
  { param: "Insulation", value: "MLI" },
  { param: "Temperature Sensors", value: "TMP117" },
  { param: "Operating Range", value: "-40°C to +85°C" },
];

const components = [
  {
    id: "structure",
    name: "Structure",
    description: "Aluminum 6061-T6 frame meeting CubeSat Design Specification (CDS) standards. Precision-machined rails and panels ensure compatibility with standard deployers and provide mounting for all subsystems.",
  },
  {
    id: "thermal",
    name: "Thermal Control",
    description: "Passive thermal management using Multi-Layer Insulation (MLI) and black anodized radiator surfaces. Maintains component temperatures within operational limits throughout orbital day/night cycles.",
  },
  {
    id: "monitoring",
    name: "Monitoring",
    description: "TMP117 precision temperature sensors distributed across critical components. Active heater control for battery thermal management during eclipse periods.",
  },
];

const stats = [
  { value: "3U", label: "Form Factor" },
  { value: "<4 kg", label: "Total Mass" },
  { value: "-40°C to +85°C", label: "Operating Range" },
];

export default function STSPage() {
  return (
    <SubsystemPage
      code="STS"
      subtitle="Structural & Thermal System"
      description="3U CubeSat structure with integrated passive and active thermal management."
      overview="The Structural and Thermal System provides mechanical support and thermal regulation for all satellite components. It ensures structural integrity during launch and maintains safe operating temperatures in orbit."
      overviewDetails="Built with Aluminum 6061-T6 following the CubeSat Design Specification, the structure features MLI insulation and precision temperature monitoring. Active heater control protects batteries during eclipse, while passive radiators dissipate excess heat."
      specs={specs}
      components={components}
      stats={stats}
      prevLink={{ href: "/subsystems/ttc", label: "TTC" }}
      nextLink={{ href: "/subsystems/payload", label: "Payload" }}
    />
  );
}
