import { AboutSection } from "../components/AboutSection";
import { HomeSection } from "../components/HomeSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => 
{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/*Background Effects */}

        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HomeSection />
            <AboutSection />
            <SkillSection />
            <ProjectsSection />
        </main>


        {/* Footer */}

    </div>;
}