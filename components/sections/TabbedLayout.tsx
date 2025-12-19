"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Hero } from "./Hero";
import { About } from "./About";
import { Subsystems } from "./Subsystems";
import { Team } from "./Team";
import { Publications } from "./Publications";
import { Contact } from "./Contact";

interface Tab {
  id: string;
  label: string;
  component: React.ComponentType;
}

const tabs: Tab[] = [
  { id: "hero", label: "Home", component: Hero },
  { id: "about", label: "About", component: About },
  { id: "subsystems", label: "Subsystems", component: Subsystems },
  { id: "team", label: "Team", component: Team },
  { id: "publications", label: "Publications", component: Publications },
  { id: "contact", label: "Contact", component: Contact },
];

export function TabbedLayout() {
  const [activeTab, setActiveTab] = useState("hero");
  const pathname = usePathname();

  // Sync active tab with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "hero";
      if (tabs.some((t) => t.id === hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab("hero");
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname]);

  // Scroll to top when switching to hero
  useEffect(() => {
    if (typeof window !== "undefined" && activeTab === "hero") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [activeTab]);

  const activeComponent = tabs.find((tab) => tab.id === activeTab)?.component;
  const ActiveComponent = activeComponent || Hero;

  const topPad = activeTab === "hero" ? "pt-0" : "pt-14 md:pt-16";

  return (
    <div className={`min-h-screen bg-transparent ${topPad} pb-8 md:pb-12`}>
      <ActiveComponent />
    </div>
  );
}

export default TabbedLayout;
