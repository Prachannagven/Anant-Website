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
  title: "EPS - Electrical Power System | Team Anant",
  description:
    "Comprehensive electrical power management system for Team Anant's nanosatellite, featuring solar panel control, battery management, and power distribution.",
};

const specs = [
  { param: "Solar Panel Efficiency", value: "28–30%" },
  { param: "Battery Capacity", value: "20–25 Wh" },
  { param: "Battery Configuration", value: "2s2p Li-ion" },
  { param: "Power Generation", value: "8–12 W" },
  { param: "Regulated Rails", value: "3.3V, 5V, 12V" },
  { param: "Mission Duration", value: "2+ years" },
];

const components = [
  {
    id: "solar",
    name: "Solar Panels",
    description: "High-efficiency triple-junction GaAs arrays (28–30% efficiency) with deployable design for maximum surface area. Includes Maximum Power Point Tracking (MPPT) for optimal energy harvesting under varying illumination.",
  },
  {
    id: "battery",
    name: "Battery Management",
    description: "2s2p Li-ion pack with 20–25 Wh capacity. Features intelligent charge/discharge management, cell balancing, and comprehensive protection against overcharge, overdischarge, and thermal runaway.",
  },
  {
    id: "distribution",
    name: "Power Distribution",
    description: "Multiple regulated voltage rails (3.3V, 5V, 12V) with overcurrent protection, load switching, and housekeeping telemetry for real-time power monitoring.",
  },
];

const stats = [
  { value: "8–12 W", label: "Power Generation" },
  { value: "99.9%", label: "System Reliability" },
  { value: "2+ Years", label: "Mission Duration" },
];

export default function EPSPage() {
  return (
    <div className="min-h-screen pt-16 md:pt-18">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">EPS</h1>
            <p className="text-xl text-primary mb-2">Electrical Power System</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced power management with efficient generation, storage, and distribution for continuous operations.
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
              The Electrical Power System generates, stores, and distributes electrical power across the mission.
              It handles demanding payload requirements while maintaining reliability throughout the satellite&apos;s 
              operational lifetime.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              High-efficiency solar arrays with MPPT, intelligent battery management, and robust power distribution 
              ensure continuous operation during both sunlit and eclipse periods. The system includes comprehensive 
              protection circuits and housekeeping telemetry for ground monitoring.
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
            <Link href="/subsystems/adcs">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ADCS
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/subsystems/obc">
              OBC
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
