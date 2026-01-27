import { useState } from "react";
import { mergeClassNames } from "../lib/utils";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

import DragonspireSplash from "../images/DragonspireSplash.png"
import MapstermindLogo from "../images/MapstermindLogo.png"
import ProjectStarImg from "../images/ProjectStar.png"
import VulkanRendererImg from "../images/VulkanMaterials.png"

const projects =
[
    {
        id: 1,
        category: "professional",
        title: "Star Wars: Jedi Survivor (PS4-XB1)",
        description: "PS4/XB1 port of Star Wars: Jedi Survivor. Jedi Survivor is the much anticipated sequel to the critically acclaimed Star Wars: Jedi Fallen Order. The game follows the Jedi Cal Kestis as he uncovers secrets of the High Republic that could provide a safe haven for those oppressed by the Empire.",
        contributions: ["Iterated on and improved existing gameplay features", "Improved player experience through bug fixes and visual polish", "Improved stability and performance on last-gen consoles"],
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202304/1016/66eb1ad90edf540651444d04f0476a463a80a81ba0b46ea0.png",
        tags: ["Unreal Engine 4/5", "C++", "HLSL", "D3D12", "3D Math", "Linear Algebra", "Perforce", "Jira", "Teamwork", "Problem Solving", "Time Management", "Task Prioritization"],
        demoUrl: "https://store.playstation.com/en-us/product/UP0006-CUSA33778_00-APPLEJACKGAME000",
        repoUrl: "#",
        dates: "Nov 2023 - Sept 2024",
    },
    {
        id: 2,
        category: "professional",
        title: "Unannounced AAA Title (PC-PS5-XSX)",
        description: "Unannounced AAA developed by Respawn Entertainment's Jedi Team.",
        contributions: ["Implemented and improved gameplay systems and features", "Implemented various UI features", "Improved existing engine features", "Created and iterated on developer tools to improve designer and artist workflows"],
        image: "https://s25.q4cdn.com/103200307/files/doc_multimedia/EA_Respawn_Lucasfilm.jpg",
        tags: ["Unreal Engine 4/5", "C++", "HLSL", "D3D12", "3D Math", "Linear Algebra", "Perforce", "Jira", "Teamwork", "Problem Solving", "Time Management", "Task Prioritization"],
        demoUrl: "#",
        repoUrl: "#",
        dates: "Sept 2024 - Aug 2025",
    },
    {
        id: 3,
        category: "professional",
        title: "Killing Floor 3 (PC-PS5-XSX)",
        description: "Killing Floor 3 is the next installment in the cooperative first-person shooter franchise developed by Tripwire Interactive. The game builds upon the intense and thrilling gameplay of its predecessors, offering players an immersive experience as they battle against hordes of deadly Zeds in a post-apocalyptic world.",
        contributions: ["Worked with other studios to assist with game feature development", "Implemented proof of concept wound displacement system", "Implemented proof of concept mesh slicing system for limb dismemberment"],
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202409/2813/091f07227f9e4f284157065a3968fee9ce2a520f194e5430.jpg",
        tags: ["Unreal Engine 4/5", "C++", "HLSL", "D3D12", "3D Math", "Linear Algebra", "Perforce", "Jira", "Teamwork", "Problem Solving", "Time Management", "Task Prioritization"],
        demoUrl: "https://store.steampowered.com/app/1430190/Killing_Floor_3/",
        repoUrl: "#",
        dates: "Aug 2023 - Nov 2023",
    },
    {
        id: 4,
        category: "professional",
        title: "Dragonspire",
        description: "Dragonspire is an anime action roguelike where players can team up with friends to take on ever-evolving challenges.",
        contributions: ["Implemented core gameplay systems and features", "Iterated on and improved existing gameplay features", "Implemented frontend lobby functionality", "Implemented multiplayer spectating"],
        image: DragonspireSplash,
        tags: ["Unreal Engine 4/5", "C++", "3D Math", "Linear Algebra", "Perforce", "Jira", "Teamwork", "Problem Solving", "Time Management", "Task Prioritization"],
        demoUrl: "https://store.steampowered.com/app/2160380/Dragonspire/",
        repoUrl: "#",
        dates: "Aug 2022 - Aug 2023",
    },
    {
        id: 5,
        category: "professional",
        title: "Starsiege: Deadzone",
        description: "Starsiege: Deadzone is a corridor extraction shooter set in the far reaches of space. Delve into derelict space stations overrun by hostile Cybrids in search of valuable resources. Group up with 2 squadmates to search for valuable resources and escape alive.",
        contributions: ["Implemented gameplay and weapon features", "Assessed and fixed gameplay bugs"],
        image: "https://cdn1.epicgames.com/offer/c295bb538708462cb6bd764eabf6b80f/EGS_StarsiegeDeadzoneStarterEdition_ProphecyGames_AddOn_G1A_00_1920x1080-02e0f9ab0e9af1da33fbe195253f57c9?resize=1&w=480&h=270&quality=medium",
        tags: ["Unreal Engine 4/5", "C++", "3D Math", "Linear Algebra", "Perforce", "Jira", "Teamwork", "Problem Solving", "Time Management", "Task Prioritization"],
        demoUrl: "https://store.steampowered.com/app/2170420/Starsiege_Deadzone/",
        repoUrl: "#",
        dates: "Feb 2022 - Aug 2023",
    },
    {
        id: 6,
        category: "professional",
        title: "Mapstermind",
        description: "Mapstermind is a couch co-op 3v1 asymmetrical party game where the team of 3 must work together to escape a stage controlled by the opposing player before time runs out!",
        contributions: ["Implemented core gameplay systems and features", "Implemented UI and Menu funtionality", "Implemented various stylized shader effects", "Provided technical leadership and planning for the programming team", "Managed the team's repository and branching strategy"],
        image: MapstermindLogo,
        tags: ["Unreal Engine 4/5", "C++", "HLSL", "3D Math", "Linear Algebra", "Perforce", "Jira", "Teamwork", "Problem Solving", "Time Management", "Task Prioritization"],
        demoUrl: "https://store.steampowered.com/app/1950250/Mapstermind/",
        repoUrl: "https://github.com/Epics123/Mapstermind",
        dates: "May 2021 - May 2022",
    },
    {
        id: 7,
        category: "personal",
        title: "Unannounced Indie Game: Project Star",
        description: "A 2D metroidvania set in a dark magitech world. Players take on the role of a young elf who must navigate through a treacherous world while overcoming her own inner demons.",
        contributions: ["Implementing core gameplay systems and features", "Acting as the project's creative and technical lead", "Planning and managing the project's development timeline", "Organizing and leading the development team"],
        image: ProjectStarImg,
        tags: ["Unity", "C#", "3D Math", "Linear Algebra", "Git", "Problem Solving", "Time Management", "Task Prioritization", "Teamwork"],
        demoUrl: "#",
        repoUrl: "#",
        dates: "Oct 2025 - Present",
    },
    {
        id: 8,
        category: "personal",
        title: "Vulkan Renderer",
        description: "A real-time 3D renderer build from scratch using the Vulkan API. Features include dynamic lighting, PBR materials, multi-pass rendering, gizmos, and custom debug overlays.",
        contributions: [],
        image: VulkanRendererImg,
        tags: ["Vulkan", "C++", "GLSL", "3D Math", "Linear Algebra"],
        demoUrl: "#",
        repoUrl: "https://github.com/Epics123/VulkanRenderer",
        dates: "2021 - 2023",
    }
];

const categories =
[
    { name: "All", value: "all"},
    { name: "Professional", value: "professional"},
    { name: "Personal", value: "personal"},
];

export const ProjectsSection = () =>
{
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory);

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
            </div>

            <div className="flex flex-wrap justify-center mb-12 gap-4">
                {
                    categories.map((category, key) =>
                    (
                        <button 
                            key={key} 
                            onClick={()=> setActiveCategory(category.value)}
                            className={mergeClassNames(
                                       "rounded-button",
                                        activeCategory === category.value ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                                {category.name}
                        </button>
                    ))
                }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-center">
                {
                    filteredProjects.map((project, key) => 
                        (
                            <div 
                                key={key} 
                                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
                                    <div className=" h-110 flex justify-center overflow-hidden">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                                    </div>

                                    <div className="flex flex-col flex-1">
                                        <h3 className="text-xl text-primary font-semibold mt-4">{project.title}</h3>
                                        <h4 className="text-secondary-foreground mt-1">{project.dates}</h4>
                                        
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex-col">
                                                <p className="text-muted-foreground text-m mb-5">
                                                    {project.description}
                                                </p>
                                            
                                                <ContributionsList contributions={project.contributions}/>
                                            </div>

                                            <div className="mt-auto">
                                                <SkillTags tags={project.tags}/>

                                                <div className="flex items-center pt-2">
                                                    <div className="flex space-x-3">
                                                        <DemoUrl url={project.demoUrl}/>
                                                        <RepoUrl url={project.repoUrl}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>                           
                            </div>
                        ))
                }
            </div>

            <div className="text-center mt-12">
                    <a className="rounded-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Epics123" target="_blank">
                        Check Out My GitHub <ArrowRight size={16}/>
                    </a>
            </div>

        </section>
    );
}

function DemoUrl({url}: {url: string})
{
    if (!url || url === "#")
    {
        return null;
    }
    else
    {
        return <a href={url} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
            <ExternalLink size={20}/>
        </a>;
    }
}

function RepoUrl({url}: {url: string})
{
    if (!url || url === "#")
    {
        return null;
    }
    else
    {
        return <a href={url} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
            <Github size={20}/>
        </a>;
    }
}

function ContributionsList({contributions}: {contributions: string[]})
{
    if (!contributions || contributions.length === 0)
    {
        return null;
    }

    return(<div>
        <h3 className="text-md text-left text-primary pl-6 mb-2 font-semibold">
            Contributions
        </h3>

        <ul className="list-disc list-outside ml-6 mr-6 mb-8 pl-5">
        {
            contributions.map((contribution, key) => 
            (
                <li className="text-left text-muted-foreground" key={key}>{contribution}</li>
            ))
            }
        </ul>
    </div>)
}

function SkillTags({tags}: {tags: string[]})
{
    return(
        <div className="flex flex-wrap gap-2 mb-4">
            {
                tags.map((tag, key) =>
                (
                    <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                    </span>
                ))
            }
        </div>
    );
}