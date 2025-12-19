import { ReactNode } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export type SubsystemLayoutProps = {
  code: string;
  subtitle: string;
  description: string;
  children: ReactNode;
};

export function SectionHeading({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`text-center mb-10 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{children}</h2>
      <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary to-primary/50 rounded-full" />
    </div>
  );
}

export function SubsystemLayout({ code, subtitle, description, children }: SubsystemLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{code}</h1>
              <div className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
              <p className="text-lg text-foreground/85 mb-2">{subtitle}</p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">{description}</p>
            </div>
          </div>
        </section>

        {/* Page content */}
        <div className="container mx-auto px-4">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default SubsystemLayout;
