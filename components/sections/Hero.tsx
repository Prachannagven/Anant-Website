import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cosmic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 md:mb-10">
          <Image
            src="/assets/logos/anant-logo.png"
            alt="Team Anant Logo"
            width={120}
            height={120}
            className="mx-auto h-24 md:h-32 w-auto"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Team Anant
        </h1>

        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-6">
          BITS Pilani&apos;s Student Satellite Team
        </p>

        <div className="h-px w-32 mx-auto mb-8 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Designing, building, and operating nanosatellites. A hands‑on space program by students, for the future of space exploration.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="min-w-[160px] gap-2">
            <Link href="/about">
              <Rocket className="w-4 h-4" />
              Explore Mission
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-[160px] gap-2">
            <Link href="/contact">
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
