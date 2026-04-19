import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { BusinessSection } from "@/components/sections/business";
import { AISection } from "@/components/sections/ai";
import { RoadmapSection } from "@/components/sections/roadmap";
import { TeamSection } from "@/components/sections/team";
import { WhyUsSection } from "@/components/sections/why-us";
import { ChatbotSection } from "@/components/sections/chatbot";
import { DemoSection } from "@/components/sections/demo";
import { DownloadSection } from "@/components/sections/download";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BusinessSection />
      <AISection />
      <RoadmapSection />
      <TeamSection />
      <WhyUsSection />
      <ChatbotSection />
      <DemoSection />
      <DownloadSection />
    </>
  );
}
