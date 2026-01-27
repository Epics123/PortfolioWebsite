import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HomeSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillSection } from "@/components/SkillsSection";
import { HexagonBackground } from "@/components/HexegonBackground";
import { JourneyTimelineSection } from "@/components/JourneyTimelineSection";
//import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => 
{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
         
        <title>Ethan Heil Personal Portfolio</title>

        {/* Theme Toggle */}
        {/*<ThemeToggle />}
        
        {/*Background Effects */}
        <HexagonBackground className="fixed inset-0 overflow-hidden pointer-events-none z-0"/>

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HomeSection />
            <AboutSection />
            <JourneyTimelineSection />
            <SkillSection />
            <ProjectsSection />
            <ContactSection/>
        </main>


        {/* Footer */}
        <Footer/>

    </div>;
}