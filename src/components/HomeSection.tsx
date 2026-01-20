import { ArrowDown } from "lucide-react";

const skillIconItems = [
    { name: "C++ Logo", url: "https://www.freeiconspng.com/uploads/c--logo-icon-0.png"},
    { name: "C# Logo", url: "https://www.freeiconspng.com/uploads/c-logo-icon-18.png"},
    { name: "Unreal Logo", url: "https://static.wixstatic.com/media/6bde00_22df089e9002465eb6952fb5dfd06121~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01/6bde00_22df089e9002465eb6952fb5dfd06121~mv2.webp"},
    { name: "Unity Logo", url: "https://static.wixstatic.com/media/6bde00_4ab808cb4c58489786825e350b73bd8f~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01/6bde00_4ab808cb4c58489786825e350b73bd8f~mv2.webp"},
    { name: "Visual Studio Logo", url: "https://static.wixstatic.com/media/6bde00_87d4aed1197645c4bcd319c7190b6588~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01/6bde00_87d4aed1197645c4bcd319c7190b6588~mv2.webp"},
    { name: "Git Logo", url: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"},
    { name: "Perforce Logo", url: "https://www.perforce.com/sites/default/files/2025-03/image-logo-p4-resized.svg"},
];

export const HomeSection = () => 
{
    return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl text-center z-10">
            <div className="space-y-8">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi! </span>
                    <span className="opacity-0 animate-fade-in-delay-medium">I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-medium-long">Ethan </span>
                    <span className="text-gradient opacity-0 animate-fade-in-delay-long">Heil</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-longer">
                    I'm a passionate game developer and software engineer who specializes in gameplay, systems, and tools programming.
                </p>

                <div className="container hidden md:flex items-center justify-evenly object-fill opacity-0 animate-fade-in-delay-longer">
                    {skillIconItems.map((item) => 
                    (
                        <img key={item.name} src={item.url} alt={item.name} className="space-x-4 max-w-16 max-h-16"/>
                    ))}
                </div>

                <div className="pt-4 opacity-0 animate-fade-in-delay-longest">
                    <a href="#projects" className="rounded-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>

    </section>;
}