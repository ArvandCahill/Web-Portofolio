import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Arvand',
    lastName:  'Cahil',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Game Programmer',
    avatar:    '/images/avatar1.jpeg',
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
    label: 'Beranda',
    title: `Portofolio Arvand Cahil`,
    description: `Selamat datang di portofolio saya, tempat saya menampilkan karya dan perjalanan saya sebagai seorang Game Programmer serta siswa SMKN 4 Malang.`,
    headline: <>Game Programmer</>,
    subline: <>Halo, saya Arvand Cahil, seorang siswa SMKN 4 Malang yang berfokus pada pemrograman game. Dengan dedikasi untuk menciptakan pengalaman bermain yang menarik dan interaktif, saya secara aktif mengembangkan proyek-proyek untuk memperluas keterampilan saya dan mengikuti perkembangan teknologi terbaru dalam pengembangan game.</>
}



const about = {
    label: 'Portofolio',
    title: 'Portofolio Saya',
    description: `Kenali ${person.name}, ${person.role}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    intro: {
        display: true,
        title: 'Pengantar',
        description: <>Saya adalah seorang programmer game yang berbasis di Malang dengan hasrat untuk mengembangkan pengalaman bermain yang imersif. Dia menguasai mekanika game, optimasi mesin game, dan penceritaan interaktif.</>
    },
    work: {
        display: true,
        title: 'Pengalaman Kerja',
        experiences: [
            {
                company: 'Game Studio X',
                timeframe: '2022 - Sekarang',
                role: 'Programmer Game Senior',
                achievements: [
                    <>Mengembangkan sistem inti game untuk judul AAA, meningkatkan kinerja dan kelancaran gameplay.</>,
                    <>Mengimplementasikan algoritma AI yang meningkatkan perilaku karakter dan interaksi pemain hingga 30%.</>
                ],
                images: [
                    {
                        src: '/images/projects/game-project-01.jpg',
                        alt: 'Gambar Proyek Game',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Indie Studio Creators',
                timeframe: '2018 - 2022',
                role: 'Pengembang Game',
                achievements: [
                    <>Merancang dan mengembangkan game indie pemenang penghargaan yang dipamerkan di pameran game internasional.</>,
                    <>Bekerja sama dengan desainer dan seniman untuk menciptakan integrasi yang mulus antara gameplay dan elemen cerita.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Pendidikan',
        institutions: [
            {
                name: 'SMKN 4 Malang',
                description: <>Pelajar jurusan Rekayasa Perangkat Lunak dengan fokus pada pengembangan game.</>
            }
        ]
    },
    technical: {
        display: true,
        title: 'Kemampuan Teknis',
        skills: [
            {
                title: 'Unity',
                description: <>Berpengalaman dalam membangun dan mengoptimalkan game menggunakan Unity3D, termasuk scripting dengan C#.</>,
                images: [
                    {
                        src: '/images/projects/game-project-02.jpg',
                        alt: 'Gambar Proyek',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Unreal Engine',
                description: <>Menguasai pengembangan game dan simulasi dengan Unreal Engine, menggunakan Blueprint dan pemrograman C++.</>,
                images: [
                    {
                        src: '/images/projects/game-project-03.jpg',
                        alt: 'Gambar Proyek',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}


export { person, social, home, about,};
