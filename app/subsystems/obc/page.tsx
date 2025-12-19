import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "OBC - On-Board Computer | Team Anant",
  description:
    "BeagleBone Black Industrial-based central processing unit for Team Anant's nanosatellite with autonomous experiment control and fault tolerance.",
};

const specs = [
  { param: "Platform", value: "BeagleBone Black Industrial" },
  { param: "Processor", value: "ARM Cortex-A8 @ 1 GHz" },
  { param: "Operating System", value: "Custom RTOS" },
  { param: "Memory", value: "512 MB DDR3" },
  { param: "Storage", value: "4 GB eMMC" },
  { param: "Power Consumption", value: "<2 W" },
];

const components = [
  {
    id: "processor",
    name: "Processing Unit",
    description: "ARM Cortex-A8 processor running custom RTOS for reliable operations. Handles mission scheduling, subsystem coordination, and data processing with fault-tolerant software architecture.",
  },
  {
    id: "storage",
    name: "Data Storage",
    description: "Redundant storage system with 4 GB eMMC and error correction for mission data. Supports payload data buffering and housekeeping log storage.",
  },
  {
    id: "interfaces",
    name: "Interface Controller",
    description: "Multiple communication interfaces (I2C, SPI, UART) for subsystem coordination. Enables seamless data exchange with all satellite subsystems.",
  },
];

const stats = [
  { value: "1 GHz", label: "Clock Speed" },
  { value: "99.99%", label: "Uptime Target" },
  { value: "<2 W", label: "Power Draw" },
];

export default function OBCPage() {
  return (
    <div className="min-h-screen pt-16 md:pt-18">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">OBC</h1>
            <p className="text-xl text-primary mb-2">On-Board Computer</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Central processing unit with autonomous experiment control, fault tolerance, and real-time data acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-primary pl-6 mb-6">
              The On-Board Computer serves as the brain of the satellite, coordinating all subsystem operations
              and managing mission data. It executes the mission schedule and handles autonomous decision-making.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Built on the BeagleBone Black Industrial platform with a custom real-time operating system, 
              the OBC provides reliable space operations with fault-tolerant software architecture. It manages 
              payload scheduling, data storage, and ground communication protocols.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Specifications */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">Parameter</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {specs.map((spec) => (
                <TableRow key={spec.param}>
                  <TableCell className="text-muted-foreground">{spec.param}</TableCell>
                  <TableCell className="font-medium">{spec.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <Separator />

      {/* Components */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">System Components</h2>
          <div className="space-y-6">
            {components.map((component) => (
              <div key={component.id} className="pl-6 border-l-2 border-primary/50">
                <h3 className="font-semibold text-lg mb-2">{component.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Navigation */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
          <Button variant="outline" asChild>
            <Link href="/subsystems/eps">
              <ArrowLeft className="w-4 h-4 mr-2" />
              EPS
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/subsystems/ttc">
              TTC
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
