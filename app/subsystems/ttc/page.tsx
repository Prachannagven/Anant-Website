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
    <div className="min-h-screen pt-16 md:pt-18">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">TTC</h1>
            <p className="text-xl text-primary mb-2">Telemetry, Tracking & Command</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              UHF band communication system for reliable ground station contact and data transmission.
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
              The Telemetry, Tracking, and Command subsystem enables two-way communication between 
              the satellite and ground station. It handles command uplink, telemetry downlink, and 
              mission data transmission.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Using the CC1101 transceiver with deployable antennas and AX.25 protocol for data framing,
              the TTC provides reliable communication links during ground station passes. The system 
              supports both beacon transmission and commanded data downloads.
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
            <Link href="/subsystems/obc">
              <ArrowLeft className="w-4 h-4 mr-2" />
              OBC
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/subsystems/sts">
              STS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
