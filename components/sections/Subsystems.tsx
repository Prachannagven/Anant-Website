import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Info } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const subsystems = [
  {
    name: "EPS",
    fullName: "Electrical Power System",
    description:
      "Advanced power management system featuring Azur Space multi-junction solar cells with 30% efficiency, 2s2p Li-ion battery pack, and MPPT algorithm for optimal energy harvesting under varying illumination conditions",
    image: "/assets/images/rocket2.png",
    link: "/subsystems/eps",
    gradient: "from-green-500 to-green-700",
    keyFeatures: ["22 Solar Cells (30% Efficiency)", "MPPT Algorithm", "2s2p Li-ion Battery", "Overcurrent Protection"],
  },
  {
    name: "OBC",
    fullName: "On-Board Computer",
    description:
      "BeagleBone Black Industrial-based central processing unit running custom OS with autonomous experiment control, fault tolerance, and real-time data acquisition capabilities",
    image: "/assets/images/bus.png",
    link: "/subsystems/obc",
    gradient: "from-yellow-500 to-yellow-700",
    keyFeatures: ["BeagleBone Black Industrial", "Custom OS", "Autonomous Control", "Fault Tolerance"],
  },
  {
    name: "TTC",
    fullName: "Telemetry, Tracking & Command",
    description:
      "UHF band communication system using CC1101 transceiver with deployable turnstile and monopole antennas, implementing AX.25 protocol for reliable ground station contact",
    image: "/assets/images/rocket3.png",
    link: "/subsystems/ttc",
    gradient: "from-purple-500 to-purple-700",
    keyFeatures: ["CC1101 Transceiver", "UHF Band Operation", "AX.25 Protocol", "Deployable Antennas"],
  },
  {
    name: "ADCS",
    fullName: "Attitude Determination & Control System",
    description:
      "Precision attitude control featuring BNO085 IMU, GPS module, and B-dot controller algorithm for detumbling using magnetorquers with PWM control signals",
    image: "/assets/images/rocket1.png",
    link: "/subsystems/adcs",
    gradient: "from-blue-500 to-blue-700",
    keyFeatures: ["BNO085 IMU", "GPS Module", "B-dot Controller", "Magnetorquers"],
  },
  {
    name: "STS",
    fullName: "Structural & Thermal System",
    description:
      "Aluminum 6061-T6 structure following 3U CubeSat standard with passive thermal control using MLI insulation, black anodized radiators, and active TMP117 temperature monitoring",
    image: "/assets/images/astronaut.png",
    link: "/subsystems/sts",
    gradient: "from-indigo-500 to-indigo-700",
    keyFeatures: ["Al 6061-T6 Structure", "MLI Insulation", "Passive Thermal Control", "TMP117 Sensors"],
  },
  {
    name: "Payload",
    fullName: "Hyperspectral Imaging Payload",
    description:
      "Compact hyperspectral camera enabling cost‑effective orbital imaging for remote sensing; 270 spectral bands, 640×480 @ 12‑bit, with on‑board compression feasibility.",
    image: "/assets/images/engines.png",
    link: "/subsystems/payload",
    gradient: "from-red-500 to-red-700",
    keyFeatures: ["Hyperspectral Camera", "270 Bands", "Onboard Compression (CCSDS)", "Remote Sensing Applications"],
  },
];

export function Subsystems() {
  return (
    <section id="subsystems" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Subsystems</h2>
            <div className="h-1 w-16 mx-auto mb-6 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core systems engineered for our mission
            </p>
          </div>

          {/* Mission banner - Blockquote style */}
          <blockquote className="mb-12 text-center py-6 px-8 border-l-4 border-primary bg-muted/20 rounded-r-lg">
            <p className="text-muted-foreground italic">
              &ldquo;Enabling a cost‑effective hyperspectral imaging mission while providing a hands‑on, end‑to‑end
              education in space systems engineering for students at BITS Pilani.&rdquo;
            </p>
          </blockquote>

          {/* Subsystems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subsystems.map((subsystem) => (
              <Link key={subsystem.name} href={subsystem.link} className="group">
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/40">
                  {/* Top illustration band */}
                  <div className={`relative h-40 bg-gradient-to-br ${subsystem.gradient}`}>
                    <Image
                      src={subsystem.image}
                      alt={`${subsystem.name} Illustration`}
                      width={144}
                      height={144}
                      className="absolute right-4 bottom-0 h-32 w-auto opacity-90 mix-blend-screen transition-transform duration-300 group-hover:-translate-y-1"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Content */}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{subsystem.name}</CardTitle>
                        <CardDescription>{subsystem.fullName}</CardDescription>
                      </div>
                      {/* HoverCard for features */}
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <button
                            className="p-1.5 rounded-full hover:bg-muted transition-colors"
                            onClick={(e) => e.preventDefault()}
                            aria-label="View key features"
                          >
                            <Info className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64" align="end">
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold">Key Features</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {subsystem.keyFeatures.map((feat) => (
                                <li key={feat} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                  {feat}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {subsystem.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-medium text-sm flex items-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-4">Interested in Technical Details?</h3>
            <p className="text-muted-foreground mb-6">
              Explore our comprehensive technical documentation and research papers
            </p>
            <Button asChild size="lg">
              <Link href="/publications">
                <BookOpen className="w-5 h-5 mr-2" />
                View Publications
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subsystems;
