"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
import { MotionSection, MotionItem, MotionH2, MotionP } from "@/components/motion";
import { TiltCard, Magnetic, SlideReveal } from "@/components/effects";
import { containerReveal, itemReveal, listContainer, listItem } from "@/lib/motion";

export type SubsystemSpec = {
  param: string;
  value: string;
};

export type SubsystemComponent = {
  id: string;
  name: string;
  description: ReactNode;
};

export type SubsystemStat = {
  value: string;
  label: string;
};

export type SubsystemNavLink = {
  href: string;
  label: string;
};

type SubsystemPageProps = {
  code: string;
  subtitle: string;
  description: string;
  overview: ReactNode;
  overviewDetails?: ReactNode;
  specs: SubsystemSpec[];
  components: SubsystemComponent[];
  stats?: SubsystemStat[];
  prevLink?: SubsystemNavLink;
  nextLink?: SubsystemNavLink;
};

export function SubsystemPage({
  code,
  subtitle,
  description,
  overview,
  overviewDetails,
  specs,
  components,
  stats,
  prevLink,
  nextLink,
}: SubsystemPageProps) {
  return (
    <div className="min-h-screen pt-16 md:pt-18">
      {/* Hero */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <MotionSection className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {code}
            </motion.h1>
            <MotionItem>
              <div className="h-1 w-24 mx-auto mb-6 bg-linear-to-r from-primary to-primary/50 rounded-full" />
            </MotionItem>
            <SlideReveal delay={0.2}>
              <p className="text-xl text-primary mb-2">{subtitle}</p>
            </SlideReveal>
            <SlideReveal delay={0.3}>
              <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
            </SlideReveal>
          </MotionSection>
        </div>
      </section>

      {/* Quick Stats */}
      {stats && stats.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              className="flex flex-wrap justify-center gap-8 md:gap-16"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-lg hover:bg-muted/20 transition-colors duration-300"
                  variants={listItem}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary drop-shadow-[0_0_8px_rgba(180,120,90,0.3)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Overview */}
      <section className="py-12 container mx-auto px-4">
        <MotionSection className="max-w-4xl mx-auto">
          <MotionH2 className="text-2xl font-bold mb-6">Overview</MotionH2>
          <motion.div
            className="prose prose-neutral dark:prose-invert max-w-none"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg border-l-4 border-primary pl-6 mb-6">
              {overview}
            </p>
            {overviewDetails && (
              <p className="text-muted-foreground leading-relaxed">{overviewDetails}</p>
            )}
          </motion.div>
        </MotionSection>
      </section>

      <Separator />

      {/* Specifications */}
      <section className="py-12 container mx-auto px-4">
        <MotionSection className="max-w-4xl mx-auto">
          <MotionH2 className="text-2xl font-bold mb-6">Specifications</MotionH2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TiltCard tiltAmount={3} glareOpacity={0.04} className="rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/2">Parameter</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {specs.map((spec, index) => (
                    <motion.tr
                      key={spec.param}
                      className="border-b transition-colors hover:bg-muted/50"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <TableCell className="text-muted-foreground">{spec.param}</TableCell>
                      <TableCell className="font-medium">{spec.value}</TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </TiltCard>
          </motion.div>
        </MotionSection>
      </section>

      <Separator />

      {/* Components */}
      <section className="py-12 container mx-auto px-4">
        <MotionSection className="max-w-4xl mx-auto">
          <MotionH2 className="text-2xl font-bold mb-6">System Components</MotionH2>
          <motion.div
            className="space-y-6"
            variants={containerReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {components.map((component) => (
              <motion.div
                key={component.id}
                className="pl-6 border-l-2 border-primary/50 hover:border-primary hover:bg-muted/10 rounded-r-lg p-4 -ml-4 transition-all duration-300"
                variants={itemReveal}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="font-semibold text-lg mb-2">{component.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{component.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </MotionSection>
      </section>

      <Separator />

      {/* Navigation */}
      <section className="py-12 container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {prevLink ? (
            <Magnetic strength={10} radius={80}>
              <motion.div whileHover={{ scale: 1.05, x: -4 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline" asChild>
                  <Link href={prevLink.href}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {prevLink.label}
                  </Link>
                </Button>
              </motion.div>
            </Magnetic>
          ) : (
            <div />
          )}
          {nextLink && (
            <Magnetic strength={10} radius={80}>
              <motion.div whileHover={{ scale: 1.05, x: 4 }} whileTap={{ scale: 0.97 }}>
                <Button variant="outline" asChild>
                  <Link href={nextLink.href}>
                    {nextLink.label}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </Magnetic>
          )}
        </motion.div>
      </section>
    </div>
  );
}

export default SubsystemPage;
