import { MapPin, Mail, Phone, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: (
      <>
        Birla Institute of Technology and Science
        <br />
        Pilani, Rajasthan 333031
        <br />
        India
      </>
    ),
    href: "https://maps.google.com/?q=BITS+Pilani+Rajasthan",
  },
  {
    icon: Mail,
    title: "Email",
    content: "team.anant@pilani.bits-pilani.ac.in",
    href: "mailto:team.anant@pilani.bits-pilani.ac.in",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 90807 96426",
    href: "tel:+919080796426",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/teamanant/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-16 mx-auto mb-6 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions about our project or interested in collaboration? We&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.title === "Address" ? "_blank" : undefined}
                rel={item.title === "Address" ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center text-center p-6 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  {item.content}
                </div>
              </a>
            ))}
          </div>

          <Separator className="my-8" />

          {/* Social Links */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">Connect with us</p>
            <TooltipProvider>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social) => (
                  <Tooltip key={social.name}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
