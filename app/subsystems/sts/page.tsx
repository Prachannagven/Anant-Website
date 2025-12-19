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
    <div className="min-h-screen pt-16 md:pt-18">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">STS</h1>
            <p className="text-xl text-primary mb-2">Structural & Thermal System</p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              3U CubeSat structure with integrated passive and active thermal management.
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
              The Structural and Thermal System provides mechanical support and thermal regulation 
              for all satellite components. It ensures structural integrity during launch and 
              maintains safe operating temperatures in orbit.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Built with Aluminum 6061-T6 following the CubeSat Design Specification, the structure 
              features MLI insulation and precision temperature monitoring. Active heater control 
              protects batteries during eclipse, while passive radiators dissipate excess heat.
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
            <Link href="/subsystems/ttc">
              <ArrowLeft className="w-4 h-4 mr-2" />
              TTC
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/subsystems/payload">
              Payload
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
