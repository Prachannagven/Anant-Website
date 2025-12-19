import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const teamData = {
  faculty: {
    name: "Dr. Meetha V. Shenoy",
    position: "Faculty Coordinator",
    image: "/assets/team_files/19-21 team/Meetha Teacher.png",
  },
  leads: [
    {
      name: "Pranav Chandra",
      position: "Student Coordinator",
      image: "/assets/team_files/24-25/PRANAV_CHANDRA.jpg",
    },
    {
      name: "Samridhi Agrawal",
      position: "Joint Student Coordinator",
      image: "/assets/team_files/24-25/SAMRIDHI_AGRAWAL.png",
    },
    {
      name: "Pramit Pal",
      position: "Systems Engineer",
      image: "/assets/team_files/24-25/PRAMIT_PAL.png",
    },
    {
      name: "Rushil Barnwal",
      position: "Systems Engineer",
      image: "/assets/team_files/24-25/RUSHIL_BARNWAL.png",
    },
  ],
  subsystems: [
    {
      name: "Attitude Determination and Control System",
      members: [
        { name: "Aaditya Thakkar", position: "Subsystem Lead", image: "/assets/team_files/24-25/AADITYA_THAKKAR.png" },
        { name: "Nikhil Mathew", position: "Subsystem Lead", image: "/assets/team_files/24-25/NIKHIL_GEORGE_MATHEW.png" },
        { name: "Pranav Chandra", position: "Senior Member", image: "/assets/team_files/24-25/PRANAV_CHANDRA.jpg" },
        { name: "Pramit Pal", position: "Senior Member", image: "/assets/team_files/24-25/PRAMIT_PAL.png" },
        { name: "Anmol Saksena", position: "Member", image: "/assets/team_files/24-25/ANMOL_SAKSENA.png" },
        { name: "Apoorva Prabhala", position: "Member", image: "/assets/team_files/24-25/APOORVA_PRABHALA.png" },
        { name: "Atharva Sonwane", position: "Member", image: "/assets/team_files/24-25/ATHARVA_ABHILASH_SONWANE.png" },
        { name: "Kanav Sharma", position: "Member", image: "/assets/team_files/24-25/KANAV_SHARMA.png" },
        { name: "Vansh Jain", position: "Member", image: "/assets/team_files/24-25/VANSH_JAIN.png" },
      ],
    },
    {
      name: "Electrical Power System",
      members: [
        { name: "Meghadri Ghosh", position: "Subsystem Lead", image: "/assets/team_files/24-25/MEGHADRI_GHOSH.jpg" },
        { name: "Manit Kachhwaha", position: "Senior Member", image: "/assets/team_files/24-25/MANIT_ANAND_KACHHWAHA.png" },
        { name: "Arush Mangalam Bajpai", position: "Senior Member", image: "/assets/team_files/24-25/ARUSH_MANGALAM_BAJPAI.png" },
        { name: "Depak Ravinuthala", position: "Senior Member", image: "/assets/team_files/unknown.png" },
        { name: "Konaark Berwal", position: "Member", image: "/assets/team_files/24-25/KONAARK_BERWAL.png" },
        { name: "Karthik Raj Palleboyina", position: "Member", image: "/assets/team_files/24-25/KARTHIK_RAJ_PALLEBOYINA.png" },
        { name: "Abhirup Tapadar", position: "Member", image: "/assets/team_files/24-25/ABHIRUP_TAPADAR.png" },
        { name: "Advait Mehta", position: "Member", image: "/assets/team_files/24-25/ADVAIT_SNEHALBHAI_MEHTA.png" },
        { name: "Siddhant Patel", position: "Member", image: "/assets/team_files/24-25/SIDDHANT_ANANTKUMAR_PATEL.png" },
        { name: "Yog Panjarle", position: "Member", image: "/assets/team_files/24-25/YOG_SURYAKANT_PANJARALE.png" },
      ],
    },
    {
      name: "On Board Computer System",
      members: [
        { name: "Rushil Barnwal", position: "Subsystem Lead", image: "/assets/team_files/24-25/RUSHIL_BARNWAL.png" },
        { name: "Dhruv Deshpande", position: "Senior Member", image: "/assets/team_files/24-25/DHRUV_PRASAD_DESHPANDE.png" },
        { name: "Neha Gujjari", position: "Senior Member", image: "/assets/team_files/24-25/NEHA_GUJJARI.png" },
        { name: "Samridhi Agrawal", position: "Senior Member", image: "/assets/team_files/24-25/SAMRIDHI_AGRAWAL.png" },
        { name: "Aryan Sharma", position: "Member", image: "/assets/team_files/24-25/ARYAN_SHARMA.jpg" },
        { name: "Aanya Singh", position: "Member", image: "/assets/team_files/24-25/AANYA_SINGH.png" },
        { name: "Arnav Chhabra", position: "Member", image: "/assets/team_files/24-25/ARNAV_CHHABRA.png" },
        { name: "Kushagra Agarwal", position: "Member", image: "/assets/team_files/24-25/KUSHAGRA_AGARWAL.png" },
        { name: "Siddharth Vivek", position: "Member", image: "/assets/team_files/24-25/SIDDHARTH_VIVEK.png" },
        { name: "Sumit Kumar Shah", position: "Member", image: "/assets/team_files/24-25/SUMIT_KUMAR_SHAH.png" },
      ],
    },
    {
      name: "Payload Subsystem",
      members: [
        { name: "Pranav Suryanvanshi", position: "Subsystem Lead", image: "/assets/team_files/unknown.png" },
        { name: "Prakhar Chindalia", position: "Senior Member", image: "/assets/team_files/24-25/PRAKHAR_CHINDALIA.png" },
        { name: "Sannidhya Ray", position: "Senior Member", image: "/assets/team_files/24-25/SANNIDHYA_RAY.png" },
        { name: "Arth Gada", position: "Member", image: "/assets/team_files/24-25/ARTH_GADA.png" },
        { name: "Atharva Gupta", position: "Member", image: "/assets/team_files/24-25/ATHARVA_GUPTA.png" },
        { name: "Bharat Kumar Saxena", position: "Member", image: "/assets/team_files/24-25/BHARAT_KUMAR_SAXENA.png" },
        { name: "Shardul Narayan", position: "Member", image: "/assets/team_files/24-25/SHARDUL_NARAYAN.png" },
      ],
    },
    {
      name: "Structural and Thermal Subsystem",
      members: [
        { name: "Vivek Gunuganti", position: "Subsystem Lead", image: "/assets/team_files/24-25/VIVEK_GUNUGANTI.png" },
        { name: "Aditya Jaikrishnia", position: "Member", image: "/assets/team_files/24-25/ADITYA_PRASHANT_JAIKRISHNIA.png" },
        { name: "Ahaan Chaturvedi", position: "Member", image: "/assets/team_files/24-25/AHAAN_CHATURVEDI.jpg" },
        { name: "Hiya Desai", position: "Member", image: "/assets/team_files/24-25/HIYA_NIRAV_DESAI.png" },
        { name: "Rahul Garg", position: "Member", image: "/assets/team_files/24-25/RAHUL_GARG.png" },
      ],
    },
    {
      name: "Telemetry, Tracking and Command Subsystem",
      members: [
        { name: "Shashank Saha", position: "Subsystem Lead", image: "/assets/team_files/24-25/SHASHANK_SAHA.png" },
        { name: "Harsh Lakshakar", position: "Senior Member", image: "/assets/team_files/unknown.png" },
        { name: "Kanishk Jain", position: "Senior Member", image: "/assets/team_files/24-25/KANISHK_JAIN.png" },
        { name: "Rakshit Jain", position: "Senior Member", image: "/assets/team_files/24-25/RAKSHIT_JAIN.png" },
        { name: "Aarnav Sood", position: "Member", image: "/assets/team_files/24-25/AARNAV_SOOD.png" },
        { name: "Raafey Aziz", position: "Member", image: "/assets/team_files/24-25/RAAFEY_AZIZ.png" },
        { name: "Vatsal Goyal", position: "Member", image: "/assets/team_files/24-25/VATSAL_GOYAL.png" },
        { name: "Y. N. Shashank", position: "Member", image: "/assets/team_files/24-25/YAMMANURU_NARASIMHA_SHASHANK.png" },
      ],
    },
  ],
};

const stats = [
  { value: "60+", label: "Team Members" },
  { value: "6", label: "Subsystems" },
  { value: "12+", label: "Years Experience" },
  { value: "3U", label: "CubeSat" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function getPositionVariant(position: string): "default" | "secondary" | "outline" {
  if (position.includes("Lead")) return "default";
  if (position.includes("Senior")) return "secondary";
  return "outline";
}

export function Team() {
  return (
    <section id="team" className="py-16 md:py-24 scroll-mt-16 md:scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Team</h2>
            <div className="h-1 w-16 mx-auto mb-6 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate individuals behind Team Anant&apos;s compact hyperspectral imaging CubeSat mission
            </p>
          </div>

          {/* Team Photo */}
          <div className="mb-16">
            <Image
              src="/assets/images1/team-anant-picture.jpg"
              alt="Team Anant Group Photo"
              width={1200}
              height={600}
              className="w-full max-w-4xl mx-auto rounded-xl shadow-xl"
            />
          </div>

          {/* Team Stats - Simple grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center relative">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                {index < stats.length - 1 && (
                  <Separator orientation="vertical" className="absolute right-0 top-1/2 -translate-y-1/2 h-10 hidden md:block" />
                )}
              </div>
            ))}
          </div>

          {/* Faculty Coordinator - Simple centered layout */}
          <div className="mb-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Faculty Coordinator</h3>
            <div className="inline-flex flex-col items-center p-6 rounded-2xl bg-muted/30">
              <Avatar className="w-28 h-28 mb-4 ring-4 ring-primary/30">
                <AvatarImage src={teamData.faculty.image} alt={teamData.faculty.name} />
                <AvatarFallback className="text-2xl">{getInitials(teamData.faculty.name)}</AvatarFallback>
              </Avatar>
              <h4 className="text-xl font-semibold mb-1">{teamData.faculty.name}</h4>
              <Badge>{teamData.faculty.position}</Badge>
            </div>
          </div>

          {/* Leadership Team - Horizontal row with hover effect */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Leadership Team</h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              <TooltipProvider>
                {teamData.leads.map((member) => (
                  <Tooltip key={member.name}>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors cursor-default">
                        <Avatar className="w-14 h-14 ring-2 ring-primary/40">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="font-medium">{member.name}</p>
                          <Badge variant="secondary" className="text-xs mt-1">{member.position}</Badge>
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{member.position}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          <Separator className="mb-16" />

          {/* Subsystem Teams - Consistent avatar-based layout */}
          <div className="space-y-12 max-w-6xl mx-auto">
            {teamData.subsystems.map((subsystem) => {
              const seniorMembers = subsystem.members.filter(
                (m) => m.position.includes("Senior") || m.position.includes("Lead")
              );
              const regularMembers = subsystem.members.filter(
                (m) => !m.position.includes("Senior") && !m.position.includes("Lead")
              );

              return (
                <div key={subsystem.name} className="p-6 rounded-xl bg-muted/20">
                  <h3 className="text-xl font-bold text-center mb-6">{subsystem.name}</h3>

                  <TooltipProvider>
                    {seniorMembers.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-primary mb-4 text-center">
                          Senior Members & Leads
                        </h4>
                        <div className="flex flex-wrap justify-center gap-5">
                          {seniorMembers.map((member) => (
                            <Tooltip key={member.name}>
                              <TooltipTrigger asChild>
                                <div className="text-center w-24 cursor-default">
                                  <Avatar className="w-16 h-16 mx-auto mb-2 ring-2 ring-primary/40">
                                    <AvatarImage src={member.image} alt={member.name} />
                                    <AvatarFallback className="text-sm">
                                      {getInitials(member.name)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <p className="text-xs font-medium truncate">{member.name.split(" ")[0]}</p>
                                  <span className="text-[10px] text-primary">
                                    {member.position.includes("Lead") ? "Lead" : "Senior"}
                                  </span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{member.name}</p>
                                <p className="text-xs text-muted-foreground">{member.position}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </div>
                    )}

                    {regularMembers.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground mb-4 text-center">
                          Team Members
                        </h4>
                        <div className="flex flex-wrap justify-center gap-5">
                          {regularMembers.map((member) => (
                            <Tooltip key={member.name}>
                              <TooltipTrigger asChild>
                                <div className="text-center w-24 cursor-default">
                                  <Avatar className="w-16 h-16 mx-auto mb-2">
                                    <AvatarImage src={member.image} alt={member.name} />
                                    <AvatarFallback className="text-sm">
                                      {getInitials(member.name)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <p className="text-xs font-medium truncate">{member.name.split(" ")[0]}</p>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{member.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </div>
                    )}
                  </TooltipProvider>
                </div>
              );
            })}
          </div>

          {/* Call to Action - Simple styled div */}
          <div className="mt-16 max-w-4xl mx-auto text-center py-10 px-6 rounded-2xl bg-muted/30 border border-border/50">
            <h3 className="text-2xl font-semibold mb-2">Interested in Joining Team Anant?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              We&apos;re always looking for passionate students interested in space technology,
              satellite systems, and innovative engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
