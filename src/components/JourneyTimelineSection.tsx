import { mergeClassNames } from "@/lib/utils";

const timelineElements =
[
    {
        id: 1,
        title: "Champlain College",
        location: "Burlington, VT",
        dates: "2018 - 2022",
        icon: "https://upload.wikimedia.org/wikipedia/en/b/b5/Champlain_College_seal.png",
        description: "Completed my Bachelor's Degree in Game Programming",
    },
    {
        id: 2,
        title: "Starmi Games",
        location: "Atlanta, GA",
        dates: "Aug 2022 - Aug 2023",
        icon: "https://media.licdn.com/dms/image/v2/C560BAQE8tFbPkj27Aw/company-logo_200_200/company-logo_200_200/0/1673401925609/starmi_logo?e=1770854400&v=beta&t=IA7FsJHvWiP20zfldWE72B3BaMgHJmNo4fe75KQ6Y0Q",
        description: "Joined a small startup game studio. Worked on gameplay and networking features.",
    },
    {
        id: 3,
        title: "Prophecy Games",
        location: "Atlanta, GA",
        dates: "Feb 2023 - Apr 2023",
        icon: "https://media.licdn.com/dms/image/v2/D560BAQEd5jJWbawwLw/company-logo_100_100/company-logo_100_100/0/1685929622428/prophecy_games_logo?e=1770854400&v=beta&t=DTe-p8XxK-I4NGZibzmK2VmEHb86jNVB3BFxUbjvMuk",
        description: "Temporary reassignment to Starmi's sister studio to assist with gameplay feature development.",
    },
    {
        id: 4,
        title: "Punch Card Games",
        location: "Atlanta, GA",
        dates: "Aug 2023 - Nov 2023",
        icon: "https://media.licdn.com/dms/image/v2/C560BAQF3EePwI25Qpg/company-logo_100_100/company-logo_100_100/0/1630660541165/punchcardgames_logo?e=1770854400&v=beta&t=WefUIJ4Y_sgtDX7Jz-bOHUC9wEhSwDuYnNatYvvJzgE",
        description: "Joined a small co-development studio as a software engineer. The studio was aquired by Respawn Entertainment in November, 2023.",
    },
    {
        id: 5,
        title: "Respawn Entertainment",
        location: "Atlanta, GA",
        dates: "Nov 2023 - Aug 2025",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyr4hljs8Jpm4HWNIdQqPG6FuICw7J1ZfxNA&s",
        description: "Transitioned to more of a generalist programmer role, with a focus on engine, tools, gameplay, and UI programming.",
    },
].reverse();


export const JourneyTimelineSection = () =>
{
    return( 
        <section id="journey" className="py-24 px-4 relative">
            <div className="flex flex-col justify-center items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Professional <span className="text-primary">Journey</span>
                </h2>
                {timelineElements.map((element, index) => 
                    {
                        const isLast = index === timelineElements.length - 1; 
                        return(<li key={element.id} className={mergeClassNames(
                                                                "relative flex mb-6 text-left card-hover", 
                                                                !isLast ? "after:content-[''] after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:w-0.5 after:h-10 after:bg-secondary-foreground after:opacity-60 after:sm:hidden" : ""
                                                                )}>
                            <div className="hidden sm:grid sm:grid-cols-[12rem_5rem_1fr] sm:gap-x-4 sm:items-center">
                                <div className="w-6/7 font-semibold text-muted-foreground text-right">
                                    {element.dates}
                                </div>
                                <div className="flex flex-col items-center h-full translate-y-1/4">
                                    <img src={element.icon} alt="Timeline Icon" className="rounded-full z-20 border-2 border-primary/60" />
                                    {!isLast && (
                                        <div className="w-0.5 mt-4 bg-secondary-foreground opacity-60 flex-1" />
                                    )}
                                </div>
                            </div>
                            <div className="bg-card rounded-lg ml-5 max-w-90 shadow-xs p-3">
                                <div className="text-center text-xl text-primary">
                                    {element.title}
                                </div>
                                <div className="text-center text-md text-secondary-foreground">
                                    {element.location}
                                    <span className="sm:hidden"> | {element.dates}</span>
                                </div>
                                <div className="text-wrap pt-3 text-center text-muted-foreground">
                                    {element.description}
                                </div>
                            </div>
                        </li>);
                    }
                )}
            </div>
            
        </section>
    );
}