import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, Quote, FileText, BookOpen, FileCode } from "lucide-react";

const publications = [
  {
    id: "pub-1",
    title: "Dynamic Simulation of Electrical and Thermal Systems",
    authors: "Aryan, Vinayak, Sai, Shiv",
    conference: "IAC 2024",
    year: "2024",
    type: "Conference Paper",
    pdf: "/papers/2024_10-IAC75-Dynamic Simulation of Electrical and Thermal Systems-Aryan,Vinayak,Sai,Shiv.pdf",
    abstract:
      "This paper presents a comprehensive dynamic simulation framework for electrical and thermal systems in nanosatellites.",
  },
  {
    id: "pub-2",
    title: "Hardware Architecture of Electrical Power System for 3U Hyperspectral Imaging CubeSat",
    authors: "Nihal Sanjay Singh",
    conference: "IEEE Conference",
    year: "2023",
    type: "Conference Paper",
    pdf: "/papers/Hardware Architecture of Electrical Power System for 3U Hyperspectral Imaging CubeSat - Nihal Sanjay Singh.pdf",
    abstract:
      "Design and implementation of robust electrical power systems for hyperspectral imaging CubeSat missions.",
  },
  {
    id: "pub-3",
    title: "Implementation of CCSDS Hyperspectral Image Compression Algorithm onboard a nanosatellite",
    authors: "Team Anant",
    conference: "Space Systems Conference",
    year: "2023",
    type: "Journal Article",
    pdf: "/papers/Implementation of CCSDS Hyperspectral Image Compression Algorithm onboard a nanosatellite.pdf",
    abstract:
      "Novel approach to implementing CCSDS compression standards for hyperspectral data processing in resource-constrained environments.",
  },
  {
    id: "pub-4",
    title: "Kalman Filter Implementation for Attitude Determination",
    authors: "Aditya Bhardwaj",
    conference: "IAC 2020",
    year: "2020",
    type: "Conference Paper",
    pdf: "/papers/IAC2020-KalmanFilter - Aditya Bhardwaj.pdf",
    abstract:
      "Advanced Kalman filtering techniques for precise attitude determination in nanosatellite systems.",
  },
  {
    id: "pub-5",
    title: "Helmholtz Cage Design for Magnetic Testing",
    authors: "Tushar Goyal",
    conference: "IAC 2017",
    year: "2017",
    type: "Conference Paper",
    pdf: "/papers/IAC2017-HelmholtzCage - Tushar Goyal.pdf",
    abstract:
      "Design and implementation of Helmholtz cage systems for magnetic field testing of satellite components.",
  },
  {
    id: "pub-6",
    title: "Modes of Operation for Nanosatellite Systems",
    authors: "Team Anant",
    conference: "Space Conference",
    year: "2023",
    type: "Technical Report",
    pdf: "/papers/Final_Modes_of_Operation_Paper.pdf",
    abstract: "Comprehensive analysis of operational modes for efficient nanosatellite mission execution.",
  },
];

const stats = [
  { value: "15+", label: "Total Papers" },
  { value: "8", label: "Conference Papers" },
  { value: "4", label: "Journal Articles" },
  { value: "3", label: "Technical Reports" },
];

function getTypeVariant(type: string): "default" | "secondary" | "outline" {
  switch (type) {
    case "Conference Paper":
      return "default";
    case "Journal Article":
      return "secondary";
    default:
      return "outline";
  }
}

function getTypeIcon(type: string) {
  switch (type) {
    case "Conference Paper":
      return FileText;
    case "Journal Article":
      return BookOpen;
    default:
      return FileCode;
  }
}

export function Publications() {
  return (
    <section id="publications" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Publications</h2>
            <div className="h-1 w-16 mx-auto mb-6 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our research contributions to the field of nanosatellite technology and space systems
            </p>
          </div>

          {/* Publications Stats - Simple grid without cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Publications Accordion */}
          <Accordion type="single" collapsible className="mb-16">
            {publications.map((publication) => {
              const TypeIcon = getTypeIcon(publication.type);
              return (
                <AccordionItem key={publication.id} value={publication.id} className="border-b">
                  <AccordionTrigger className="hover:no-underline py-4 group">
                    <div className="flex-1 text-left pr-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={getTypeVariant(publication.type)} className="text-xs">
                          <TypeIcon className="w-3 h-3 mr-1" />
                          {publication.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{publication.year}</span>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors">
                        {publication.title}
                      </h3>
                      <p className="text-sm text-primary/80 mt-1">{publication.authors}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-0 space-y-4">
                      <p className="text-sm text-muted-foreground italic">{publication.conference}</p>
                      <p className="text-muted-foreground leading-relaxed">{publication.abstract}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Button asChild size="sm">
                          <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </a>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Quote className="w-4 h-4 mr-2" />
                          Cite
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* Call to Action - Simple styled div */}
          <div className="text-center py-10 px-6 rounded-2xl bg-muted/30 border border-border/50">
            <h3 className="text-2xl font-semibold mb-2">Interested in Collaborating?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              We&apos;re open to research collaborations and partnerships. Contact us to explore
              opportunities for joint research projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/contact">Contact for Collaboration</Link>
              </Button>
              <Button variant="outline">View All Publications</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publications;
