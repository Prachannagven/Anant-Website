import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Publications", href: "/publications" },
  { name: "Contact", href: "/contact" },
];

const subsystemLinks = [
  { name: "ADCS", href: "/subsystems/adcs" },
  { name: "EPS", href: "/subsystems/eps" },
  { name: "OBC", href: "/subsystems/obc" },
  { name: "Payload", href: "/subsystems/payload" },
  { name: "STS", href: "/subsystems/sts" },
  { name: "TTC", href: "/subsystems/ttc" },
];

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/logos/anant-logo.png"
                alt="Team Anant Logo"
                width={32}
                height={32}
                className="h-8 w-auto mr-3"
              />
              <span className="text-xl font-bold">Team Anant</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building BITS-Pilani&apos;s first indigenously designed nanosatellite with multispectral imaging capabilities for vegetation monitoring and analysis.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/teamanant/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsystems */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subsystems</h3>
            <ul className="grid grid-cols-2 gap-2">
              {subsystemLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Team Anant - BITS Pilani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
