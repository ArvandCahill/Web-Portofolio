import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Arvand',
    lastName: 'Cahil',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Game Programmer',
    avatar: '/images/avatar1.jpeg',
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/arvand-cahil',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/arvand-cahil/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:arvand.cahil@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `Arvand Cahil`,
    description: `Welcome to my portfolio, where I showcase my work and journey as a Game Programmer and student at SMKN 4 Malang.`,
    headline: <>Game Programmer</>,
    subline: <>Hello, I am Arvand Cahil, a student at SMKN 4 Malang focusing on game programming. With a dedication to creating engaging and interactive gameplay experiences, I aim to actively develop projects to expand my skills and stay updated with the latest advancements in game development technology.</>
}

const about = {
    label: 'Portfolio',
    title: 'Arvand Cahil',
    description: `Get to know ${person.name}, ${person.role}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true,
        location: 'Malang, Indonesia'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>A student at SMK Negeri 4 Malang majoring in Software Engineering, focusing on game development. Through various projects, I strive to constantly update my knowledge and follow the latest technological developments in the field of game development.</>
    },

    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'SMK Negeri 4 Malang',
                timeframe: 'July 2023 - May 2026',
                description: <>Software Engineering (RPL) Major</>
            },
            {
                name: 'SMP Negeri 11 Malang',
                timeframe: 'July 2020 - May 2023',
                description: <></>
            }
        ]
    },

    work: {
        display: true,
        title: 'Projects',
        experiences: [
            {
                company: 'Shadow of Desolation',
                timeframe: 'January 2024 - February 2024',
                role: 'Indie Game Developer',
                achievements: [
                    <>My first project to learn the basics of game development.</>,
                    <>Used Unreal Engine to understand game engine workflows, basic programming with blueprints, and world building in the game.</>
                ],

                images: [
                    {
                        src: '/images/new/SoD.png',
                        alt: 'Game Project Image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/new/SoD1.png',
                        alt: 'Game Project Image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Dumb Ways to Cheat',
                timeframe: 'January 2024',
                role: 'Sound Design',
                achievements: [
                    <>A group project during the Global Game Jam Malang.</>,
                    <>Searched for sound effects to support the atmosphere and theme of the game.</>,
                    <>Used sound design software to adjust audio quality and effects according to gameplay needs.</>
                ],

                images: [
                    {
                        src: '/images/new/DWTC.png',
                        alt: 'Game Project Image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Xavena',
                timeframe: 'March 2024 - May 2024',
                role: 'Junior Programmer',
                achievements: [
                    <>A senior group project that I joined as part of an internship preparatory class.</>,
                    <>Implemented character combo animations with visual effects (VFX) to enhance attack impact in gameplay.</>,
                ],
                images: [
                    {
                        src: '/images/new/xavena.png',
                        alt: 'Game Project Image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Bouncy Ball',
                timeframe: 'July 2024 - August 2024',
                role: 'Lead Project',
                achievements: [
                    <>My first group project based on Unity Engine.</>,
                    <>Learned game development workflow using Unity Engine.</>,
                    <>Created a game prototype.</>,
                    <>Designed several game UIs using Figma.</>,
                    <>Created some low-poly 3D assets.</>,
                    <>"Tried" using FL Studio to create background music (BGM).</>
                ],

                images: [
                    {
                        src: '/images/new/BB1.jpg',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    },
                    {
                        src: '/images/new/BB2.png',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    },
                    {
                        src: '/images/new/BB3.jpg',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    }
                ]
            },
            {
                company: 'Chess Empire',
                timeframe: 'August 2024 - September 2024',
                role: 'Programmer, Sound Design',
                achievements: [
                    <>A group project based on Unity Engine.</>,
                    <>Searched for and implemented sound effects (SFX) and background music (BGM) to enhance the atmosphere and theme of the game.</>,
                    <>Implemented AI for enemies in gameplay.</>,
                ],
                images: [
                    {
                        src: '/images/new/chess3.png',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    },
                    {
                        src: '/images/new/chess4.png',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    },
                    {
                        src: '/images/new/chess1.png',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    },
                    {
                        src: '/images/new/chess2.jpg',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    }
                ]
            },
            {
                company: 'Lost Case',
                timeframe: 'September 2024 - Present',
                role: 'Programmer',
                achievements: [
                    <>A group project based on Unreal Engine.</>,
                    <>Searched for and selected assets to support visuals and gameplay for use in the game.</>,
                    <>Implemented monster animations for AI usage in the game.</>,
                    <>Created cutscenes to enhance the narrative elements in the game.</>,
                    <>Managed and optimized several aspects of world building to improve game performance.</>,
                    <>Performed bug fixing to ensure smooth gameplay experience.</>,
                    <>Implemented AMD FidelityFX™ Super Resolution 3 (FSR 3) technology into Unreal Engine to enhance game graphics performance.</>,
                ],

                images: [
                    {
                        src: '/images/new/lostcase.png',
                        alt: 'Game Project Image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/new/room.png',
                        alt: 'Game Project Image',
                        width: 16,
                        height: 9
                    }
                ]
            },
        ]
    },

    technical: {
        display: false,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Unity',
                description: <>Experienced in building and optimizing games using Unity3D, including scripting with C#.</>,
                images: [
                    {
                        src: '/images/projects/game-project-02.jpg',
                        alt: 'Project Image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Unreal Engine',
                description: <>Proficient in game development and simulation with Unreal Engine, using Blueprint and C++ programming.</>,
                images: [
                    {
                        src: '/images/projects/game-project-03.jpg',
                        alt: 'Project Image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

export { person, social, home, about, };
