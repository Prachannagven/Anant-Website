import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const stats = [
  { value: "6", label: "Subsystems" },
  { value: "3U", label: "Form Factor" },
  { value: "270", label: "Spectral Bands" },
  { value: "LEO", label: "Target Orbit" },
];

const tags = ["Hyperspectral", "CubeSat", "Ground Ops", "Education"];

const keyPoints = [
  {
    title: "Hyperspectral Imaging Mission",
    description: "Demonstrating cost-effective hyperspectral imaging on a nanosatellite platform, capturing 270 spectral bands for vegetation monitoring, water quality assessment, and land classification.",
  },
  {
    title: "End-to-End Systems Learning",
    description: "Hands-on experience across all subsystems—OBC, EPS, TTC, ADCS, STS, and Payload—giving students real-world exposure to complete satellite development.",
  },
  {
    title: "Ground Segment & Operations",
    description: "Building an on-campus ground station with SDR reception and tracking capability, enabling autonomous mission operations and data collection.",
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Team Anant
            </h2>
            <div className="h-1 w-16 mx-auto mb-6 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              BITS Pilani&apos;s student satellite team designing, building, and operating nanosatellites.
            </p>
          </div>

          {/* What we're building - moved up */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/assets/images/rocket-body.png"
                alt="Satellite concept"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">What we&apos;re building</h3>
              <p className="text-muted-foreground leading-relaxed">
                A student-built 3U CubeSat with a compact hyperspectral imaging payload, supported by robust 
                subsystems and a reliable ground segment. The goal is simple: learn by doing and deliver useful data.
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Key Points - with left border accent */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Our Approach</h3>
            <div className="space-y-6">
              {keyPoints.map((point) => (
                <div key={point.title} className="pl-6 border-l-2 border-primary/50">
                  <h4 className="font-semibold text-lg mb-2">{point.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats - Simple grid without cards */}
          <div className="py-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={stat.label} className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  {index < stats.length - 1 && (
                    <Separator orientation="vertical" className="absolute right-0 top-1/2 -translate-y-1/2 h-12 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/subsystems/adcs">Explore subsystems</Link>
            </Button>
            <Button asChild>
              <Link href="/team">Meet the team</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/publications">Publications</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
