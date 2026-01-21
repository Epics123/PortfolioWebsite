import { useState } from "react";
import { mergeClassNames } from "../lib/utils";

const skills =
[
    { name: "C++", level: 85, category: "languages"},
    { name: "C#", level: 75, category: "languages"},
    { name: "GLSL", level: 70, category: "languages"},
    { name: "HLSL", level: 65, category: "languages"},
    { name: "Python", level: 55, category: "languages"},
    { name: "Java", level: 65, category: "languages"},
    { name: "Typescript", level: 35, category: "languages"},
    { name: "HTML/CSS", level: 45, category: "languages"},

    { name: "Unreal Engine 4/5", level: 93, category: "engines"},
    { name: "Unity", level: 85, category: "engines"},
    { name: "Godot", level: 30, category: "engines"},

    { name: "OpenGL", level: 65, category: "frameworks"},
    { name: "D3D12", level: 65, category: "frameworks"},
    { name: "Vulkan", level: 65, category: "frameworks"},
    { name: "React", level: 35, category: "frameworks"},

    { name: "Git/Github", level: 80, category: "tools"},
    { name: "Perforce", level: 80, category: "tools"},
    { name: "Visual Studio", level: 85, category: "tools"},
    { name: "Jira", level: 75, category: "tools"},

    { name: "3D Math", level: 85, category: "math"},
    { name: "Calculus", level: 75, category: "math"},
    { name: "Linear Algebra", level: 75, category: "math"},

    { name: "Oral Communication", level: 85, category: "softskills"},
    { name: "Written Communication", level: 90, category: "softskills"},
    { name: "Problem Solving", level: 90, category: "softskills"},
    { name: "Teamwork", level: 90, category: "softskills"},
    { name: "Time Management", level: 80, category: "softskills"},
    { name: "Task Prioritization", level: 82, category: "softskills"},
]

const categories =
[
    { name: "All", value: "all"},
    { name: "Languages", value: "languages"},
    { name: "Engines", value: "engines"},
    { name: "Frameworks", value: "frameworks"},
    { name: "Tools", value: "tools"},
    { name: "Math", value: "math"},
    { name: "Soft Skills", value: "softskills"},
]

export const SkillSection = () =>
{
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

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
                                )}>
                                    {category.name}
                            </button>
                        ))
                    }
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        filteredSkills.map((skill, key) => 
                        (
                            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                </div>

                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div 
                                        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                        style={{ width: skill.level + "%" }}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};