import { mergeClassNames } from "@/lib/utils"
import profilePic from "../images/EHPortfolio2020.jpg"
import resume from "../assets/EthanHeil_Resume.pdf"
import { FaLinkedin } from "react-icons/fa";

export const AboutSection = () =>
{
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Game Developer & Software Engineer</h3>

                        <p className="text-muted-foregound">
                            I have a deep passion for creating immersive gaming experiences and robust software solutions. With expertise in gameplay, 
                            systems, and tools programming, I strive to bring fun and innovative ideas to life.
                        </p>

                        <p className="text-muted-foregound">
                            I have been making games for over 7 years both as a hobby and professionally. Throughout my career, I have worked on a variety of
                            projects ranging from small indie games to large-scale AAA titles. My journey in game development has equipped me with a diverse 
                            skill set, allowing me to tackle complex challenges and deliver high-quality results. I am always looking to step outside my
                            comfort zone, and learn new technologies and techniques to enhance my craft.
                        </p>

                        <p className="text-muted-foregound">
                            I'm a huge gamer at heart, but while playing I often find myself stopping to think about how a feature or mechanic was implemented. 
                            I love knowing the intricacies of how things work, and that is a big motivator for me to learn as much as I can.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="rounded-button">
                                Get In Touch
                            </a>
                            <a 
                            href={resume} 
                            download="EthanHeil_Resume.pdf"
                            className=
                                {mergeClassNames("px-6 py-2 rounded-full border border-primary text-primary",
                                                 "hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 transition-colors duration-300"
                                )}>
                                    Download Resume
                            </a>
                            <a href="https://www.linkedin.com/in/ethancheil/" target="_blank" className="text-primary/80 hover-pop-round-sm">
                                <FaLinkedin size={40}/>
                            </a>
                        </div>

                    </div>
                    <div>
                        <img src={profilePic} alt="Portfolio Picture" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};