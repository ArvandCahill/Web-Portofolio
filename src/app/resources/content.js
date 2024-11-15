import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Arvand',
    lastName:  'Cahil',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Game Programmer',
    avatar:    '/images/avatar.jpg',
    location:  'Malang, Indonesia',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Bahasa', 'English' ]  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/ArvandCahill',
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
    title: `Home`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Game Programmer</>,
    subline: <>Hello, I am Arvand Cahil, a student at <InlineCode>SMK Negeri 4 Malang</InlineCode> majoring in Software Engineering, focusing on game development.</>
}

const about = {
    label: 'About',
    title: 'About Me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>A student at SMK Negeri 4 Malang majoring in Software Engineering, focusing on game development. Through various projects, I strive to constantly update my knowledge and follow the latest technological developments in the field of game development.</>
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
                        src: '/images/projects/SoD.jpg',
                        alt: 'Game Project Image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/SoD1.jpg',
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
                        src: '/images/projects/DWTC.jpg',
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
                        src: '/images/projects/Xavena.jpg',
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
                        src: '/images/projects/BB1.jpg',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    },
                    {
                        src: '/images/projects/BB2.jpg',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    },
                    {
                        src: '/images/projects/BB3.jpg',
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
                        src: '/images/projects/Chess3.jpg',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    },
                    {
                        src: '/images/projects/Chess4.jpg',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    },
                    {
                        src: '/images/projects/Chess1.jpg',
                        alt: 'Game Project Image',
                        width: 9,
                        height: 16
                    },
                    {
                        src: '/images/projects/Chess2.jpg',
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
                        src: '/images/projects/Lostcase.jpg',
                        alt: 'Game Project Image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/Room.jpg',
                        alt: 'Game Project Image',
                        width: 16,
                        height: 9
                    }
                ]
            },
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'SMK Negeri 4 Malang',
                description: <>Software Engineering Major (RPL).</>,
                timeframe:'2020 - 2023'
            },
            {
                name: 'SMP Negeri 11 Malang',
                description: <></>,
                timeframe:'2023 - 2026'
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Unreal Engine',
                description: <>Proficient in Unreal Engine, focusing on game prototyping with Blueprint, developing game mechanics, and optimizing performance. Experienced in implementing animations, creating cutscenes, and conducting world-building to enhance game narratives. Recently explored AMD FidelityFX™ Super Resolution (FSR) 3 for optimizing graphics in Unreal.</>,
                images: [
                    {
                        src: '/images/projects/Unreal Engine.png',
                        alt: 'Unreal Engine Project Image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Unity',
                description: <>Skilled in Unity, with experience in C# scripting for gameplay systems, and sound design. Developed and refined game projects by implementing audio and visual elements to support gameplay ambiance.</>,
                images: [
                    {
                        src: '/images/projects/Unity.jpg',
                        alt: 'Unity Project Image',
                        width: 16,
                        height: 9
                    },
                ]
            },
        ]
    }
}

const work = {
    label: 'Work',
    title: 'My Work',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}


export { person, social, home, about, work };