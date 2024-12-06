import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Terminal } from "lucide-react";

export const DATA = {
    name: "Shantanu Wable",
    initials: "SW",
    url: "https://shxntanu.tech",
    location: "Pune, Maharashtra",
    locationLink: "https://www.google.com/maps/place/pune",
    description:
        "21 year old Full Stack Developer, occasional Graphic Designer, Systems Programming Enthusiast and also an Engineering Student.",
    summary:
        "I like to say that I am a full-stack developer, but I have most experience with frontend development using **React**. I also have experience in development with a wide variety of frameworks like **NextJS**, **Django**, **Angular**, **Spring**, **Flask**, and **Express**. I'm a versatile programmer and can pick up and learn any framework in a short span of time. I have an interest in low-level programming and like to read in-depth about **computers** and **networking** in my free time.\n\nI'm also proficient in languages like **C, C++, Java, Python and JavaScript / TypeScript** and have got a 2-star rating on Codechef (Max. 1509). I am currently learning low level programming using C. \n\n I also have a knack for competing in Hackathons, having stood **1st** 🥇 in **COEP Mindspark '23**, **3rd 🥉** in **Barclays Hack-O-Hire 2024** (and Winner from the Barclays Pune Campus) and **finalist** in **PICT's TechFiesta '24**. ",
    avatarUrl: "/me.png",
    skills: [
        "React",
        "Next.js",
        "Typescript",
        "Angular",
        "Node.js",
        "Python",
        "Streamlit",
        "GenAI",
        "Go",
        "Postgres",
        "Docker",
        "Java",
        "Spring",
        "C",
        "C++",
    ],
    iconCloud: [
        "react",
        "nextdotjs",
        "typescript",
        "angular",
        "nodedotjs",
        "python",
        "streamlit",
        "go",
        "postgresql",
        "docker",
        "java",
        "spring",
        "c",
        "cplusplus",
        "flutter",
        "firebase",
        "tailwindcss",
        "html5",
        "css3",
        "dart",
        "git",
        "visualstudiocode",
        "cypress",
        "gitlab",
        "figma",
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/blog", icon: NotebookIcon, label: "Blog" },
        {href: "https://terminal.shxntanu.tech", icon: Terminal, label: "Terminal"}
    ],
    contact: {
        email: "shantanuwable2003@gmail.com",
        // tel: "+123456789",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://dub.sh/shxntanu-github",
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://dub.sh/shxntanu-linkedin",
                icon: Icons.linkedin,

                navbar: true,
            },
            // X: {
            //     name: "X",
            //     url: "https://dub.sh/dillion-twitter",
            //     icon: Icons.x,

            //     navbar: true,
            // },
            // Youtube: {
            //     name: "Youtube",
            //     url: "https://dub.sh/dillion-youtube",
            //     icon: Icons.youtube,
            //     navbar: true,
            // },
            Email: {
                name: "Send Email",
                url: "mailto:shantanuwable2003@gmail.com",
                icon: Icons.email,

                navbar: true,
            },
        },
    },

    work: [
        {
            company: "Arista Networks",
            href: "https://arista.com",
            badges: [],
            location: "Pune",
            title: "Summer Intern",
            logoUrl: "/arista.png",
            start: "June 2024",
            end: "July 2024",
            description:
                "Delivered a complete RFE with changes on the server and API, addition of UI elements on the frontend and a complete Integration Test in Go to verify and test an API endpoint of interest. Worked on migration of existing architecture from Postgres to Elasticsearch. Improved performance during unmarshalling of packets by eliminating memory leaks and moving the process to use memory from the stack. Solved AP Side bugs and made changes to allow backward compatibility with older APs. Wrote unit tests for the same. Fixed UI related bugs for better understanding of the same to the end user.",
        },
        {
            company: "RhythmFlows Solutions Pvt. Ltd.",
            badges: [],
            href: "https://rhythmflows.com/",
            location: "Pune",
            title: "Full Stack Developer Intern",
            logoUrl: "/rhythmflows.png",
            start: "September 2023",
            end: "February 2024",
            description:
                "Contributed towards building a data interconversion platform and an MIS Platform. Developed and overhauled the code base of over 20 screens. Built various reusable UI components which are being used in other projects as well.",
        },
        {
            company: "Smart AI PLS",
            href: "#",
            badges: [],
            location: "Remote",
            title: "Product Developer Intern",
            logoUrl: "/smartaipls.png",
            start: "October 2023",
            end: "May 2024",
            description:
                "Built an end-to-end, AI-based Intelligent Document Processing (IDP) SaaS product that automates the process of Invoice management targeted at the B2B industry. Initiated market research and survey, planned out use cases and functional & non-functional requirements, and built the entire frontend of the application.",
        },
    ],
    education: [
        {
            school: "Pune Institute of Computer Technology",
            href: "https://pict.edu",
            degree: "Bachelor's Degree of Engineering (B.E.) in Computer Engineering",
            logoUrl: "/pict.jpg",
            start: "2021",
            end: "2025",
        },
        {
            school: "The Bishop's School, Camp",
            href: "https://www.thebishopsschool.org/tbsweb/Public/Home.aspx",
            degree: "Primary and Secondary Education",
            logoUrl: "/bishops.png",
            start: "2007",
            end: "2019",
        },
    ],
    projects: [
        {
            title: "PageTalk",
            href: "https://github.com/shxntanu/pagetalk",
            dates: "Sept. 2023 - Dec. 2023",
            active: true,
            description:
                "PageTalk allows you to effortlessly converse with your documents. PageTalk is perfect for students, researchers, and professionals who want to quickly understand and analyze documents.",
            technologies: [
                "Next.js",
                "Typescript",
                "MySQL",
                "MongoDB",
                "Supabase",
                "TailwindCSS",
                "Shadcn UI",
                "NextUI",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/shxntanu/pagetalk",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/pagetalk.png",
            video: "",
        },
        {
            title: "aerocode",
            href: "https://aero-code.web.app",
            dates: "April 2023 - May 2023",
            active: true,
            description:
                "☁️ A web-app that enables instant code sharing across the internet without the need for sign-in! Made with ♡ in Flutter. ",
            technologies: ["Flutter", "GetX", "Firebase"],
            links: [
                {
                    type: "Website",
                    href: "https://aero-code.web.app",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/shxntanu/aerocode",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/aerocode.jpg",
            video: "",
        },
        {
            title: "IDP",
            href: "https://idp-sap.vercel.app",
            dates: "Oct. 2023 - Sept. 2024",
            active: true,
            description:
                "Built an end-to-end, AI-based Intelligent Document Processing (IDP) SaaS product that automates the process of Invoice management targeted at the B2B industry.",
            technologies: [
                "NextJS",
                "Redux",
                "Reactflow",
                "Iron Session",
                "Turborepo",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://idp-sap.vercel.app",
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: "/idp.png",
            video: "",
        },
        {
            title: "Email Classifier",
            href: "https://github.com/shxntanu/email-classifier",
            dates: "April 2024",
            active: true,
            description:
                "📤 Email Classification and Automatic Re-routing with the power of LLMs and Distributed Task Queues. 🏆 Winner at Barclays Hack-O-Hire 2024!",
            technologies: [
                "Python",
                "Celery",
                "RabbitMQ",
                "Flask",
                "Mixtral 8x7b",
                "DistilBERT",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/shxntanu/email-classifier",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/email_classifier.png",
            video: "",
        },
        {
            title: "Minima-List",
            href: "https://minima-list-ml.vercel.app/",
            dates: "Feb. 2024 - March 2024",
            active: true,
            description:
                "🎵 Music recommendations system based on the Spotify dataset. ",
            technologies: ["Python", "Flask", "NextJS", "Scikit-Learn"],
            links: [
                {
                    type: "Website",
                    href: "https://minima-list-ml.vercel.app/",
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: "Source",
                    href: "https://github.com/shxntanu/minima-list-ml",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/minimalist.png",
            video: "",
        },
        {
            title: "Compliance Helper",
            href: "https://github.com/shxntanu/compliance-helper",
            dates: "September 2024",
            active: true,
            description:
                "📄 Parse and understand industry compliance documents faster.",
            technologies: [
                "Python",
                "Streamlit",
                "Regex",
                "Qwen2",
                "Google Gemini",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/compliance-helper",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/compliance-helper.png",
            video: "",
        },
        {
            title: "hyperbloom",
            href: "https://github.com/shxntanu/hyperbloom",
            dates: "August 2024",
            active: true,
            description: "High Concurrency Bloom Filter implementations in C.",
            technologies: ["C", "Bloom Filters", "Concurrency"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/shxntanu/hyperbloom",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/hyperbloom.png",
            video: "",
        },
        {
            title: "tinySQL",
            href: "https://github.com/shxntanu/tinysql",
            dates: "August 2024 - Present",
            active: true,
            description: "Writing a SQL Database from scratch in C.",
            technologies: ["C", "SQLite", "B+ Trees"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/shxntanu/tinysql",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/tinysql.png",
            video: "",
        },
        {
            title: "Air Hockey",
            href: "https://github.com/shxntanu/air-hockey",
            dates: "December 2022",
            active: true,
            description: "🏑 Air Hockey game made in Python using PyGame.",
            technologies: ["Python", "PyGame"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/shxntanu/air-hockey",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/airhockey.png",
            video: "",
        },
        {
            title: "Solar Intelligence",
            href: "https://github.com/shxntanu/solar-intelligence",
            dates: "December 2023",
            active: true,
            description:
                "☀️ Solar Data Aggregation platform for powerful Data Analytics! This project emerged as a result of two problem statements from two different hackathons. We created robust and highly configurable API for processing energy solutions data to generate deep-insights on strategy, decision making and growth opportunities.",
            technologies: ["NextJS", "Express", "Flask", "Tailwind CSS"],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/shxntanu/solar-intelligence",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/solarintelligence.png",
            video: "",
        },
    ],
    hackathons: [
        {
            title: "Barclays Hack-O-Hire",
            dates: "April 7 - 8th, 2024",
            location: "Barclays Pune Campus, Pune",
            description:
                "Developed a robust email classification system capable of classifying and routing emails in an organizational heirarchy tree with scale. \n\n Bagged 🥉 3rd Place overall and Winner from the Barclays Pune Campus from a total of 4500+ participants and 1200+ teams. Also got the opportunity to present the solution in front of the global leadership of Barclays including the CIO and CTO of Barclays International.",
            image: "/barclays.png",
            links: [],
        },
        {
            title: "BMC Hackathon",
            dates: "September 28 - 30th, 2024",
            location: "PICT, Pune",
            description:
                "Creating compliance content is a very time consuming process due to the sheer length of the compliance documents and standards. We built a project that aimed at reducing the amount of manual work involved and makes creating audit and remediation scripts faster and easier.",
            image: "/bmc.png",
            links: [],
        },
        {
            title: "Smart India Hackathon 2024",
            dates: "August 2024",
            location: "",
            description:
                "Architected a comprehensive interview platform for DRDO to conduct interviews for various roles. The platform included features like live coding, video conferencing, and a robust backend for managing the interviews.",
            image: "/sih.png",
            links: [],
        },
        {
            title: "TechFiesta 2024",
            dates: "March 31st, 2024",
            location: "PICT, Pune",
            description:
                "Developed a solar energy awareness and onboarding platform for farmers using data from web scraping.",
            image: "/pict.jpg",
            links: [],
        },
        {
            title: "TATA Power SIA Hackathon 2023",
            dates: "28th October, 2023",
            location: "COEP Pune",
            description:
                "Developed a highly configurable API for processing energy solutions data to generate deep-insights on strategy, decision making and growth opportunities. \n\n Bagged 🥇 1st Place overall.",
            image: "/tatapower.png",
            links: [],
        },
        {
            title: "Smart India Hackathon 2023",
            dates: "September 2023",
            location: "Remote",
            description:
                "Developed a complete Know-Your-Rights platform for the public with a custom trained LLM model for legal queries and library of legal documents for ease of access.",
            image: "/sih.png",
            links: [],
        },
        // {
        //     title: "DeveloperWeek Hackathon",
        //     dates: "February 3rd - 4th, 2018",
        //     location: "San Francisco, California",
        //     description:
        //         "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
        //     links: [
        //         {
        //             title: "Github",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/cryptotrends/cryptotrends",
        //         },
        //     ],
        // },
        // {
        //     title: "HackDavis",
        //     dates: "January 20th - 21st, 2018",
        //     location: "Davis, California",
        //     description:
        //         "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
        //     win: "Best Data Hack",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
        //     links: [
        //         {
        //             title: "Devpost",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://devpost.com/software/my6footprint",
        //         },
        //         {
        //             title: "ML",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/Wallet6/my6footprint-machine-learning",
        //         },
        //         {
        //             title: "iOS",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/Wallet6/CarbonWallet",
        //         },
        //         {
        //             title: "Server",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/Wallet6/wallet6-server",
        //         },
        //     ],
        // },
        // {
        //     title: "ETH Waterloo",
        //     dates: "October 13th - 15th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
        //     links: [
        //         {
        //             title: "Organization",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/ethdocnet",
        //         },
        //     ],
        // },
        // {
        //     title: "Hack The North",
        //     dates: "September 15th - 17th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed a virtual reality application allowing users to see themselves in third person.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Streamer Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/justinmichaud/htn2017",
        //         },
        //         {
        //             title: "Client Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/RTSPClient",
        //         },
        //     ],
        // },
        // {
        //     title: "Hack The 6ix",
        //     dates: "August 26th - 27th, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/ShareShip/ShareShip",
        //         },
        //         {
        //             title: "Site",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://share-ship.herokuapp.com/",
        //         },
        //     ],
        // },
        // {
        //     title: "Stupid Hack Toronto",
        //     dates: "July 23rd, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/nsagirlfriend/nsagirlfriend",
        //         },
        //     ],
        // },
        // {
        //     title: "Global AI Hackathon - Toronto",
        //     dates: "June 23rd - 25th, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
        //     win: "1st Place Winner",
        //     links: [
        //         {
        //             title: "Article",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        //         },
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/TinySamosas/",
        //         },
        //     ],
        // },
        // {
        //     title: "McGill AI for Social Innovation Hackathon",
        //     dates: "June 17th - 18th, 2017",
        //     location: "Montreal, Quebec",
        //     description:
        //         "Developed realtime facial microexpression analyzer using AI",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
        //     links: [],
        // },
        // {
        //     title: "Open Source Circular Economy Days Hackathon",
        //     dates: "June 10th, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
        //     win: "1st Place Winner",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/genecis",
        //         },
        //     ],
        // },
        // {
        //     title: "Make School's Student App Competition 2017",
        //     dates: "May 19th - 21st, 2017",
        //     location: "International",
        //     description:
        //         "Improved PocketDoc and submitted to online competition",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
        //     win: "Top 10 Finalist | Honourable Mention",
        //     links: [
        //         {
        //             title: "Medium Article",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        //         },
        //         {
        //             title: "Devpost",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://devpost.com/software/pocketdoc-react-native",
        //         },
        //         {
        //             title: "YouTube",
        //             icon: <Icons.youtube className="h-4 w-4" />,
        //             href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        //         },
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/pocketdoc-react-native",
        //         },
        //     ],
        // },
        // {
        //     title: "HackMining",
        //     dates: "May 12th - 14th, 2017",
        //     location: "Toronto, Ontario",
        //     description:
        //         "Developed neural network to optimize a mining process",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
        //     links: [],
        // },
        // {
        //     title: "Waterloo Equithon",
        //     dates: "May 5th - 7th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
        //     links: [
        //         {
        //             title: "Devpost",
        //             icon: <Icons.globe className="h-4 w-4" />,
        //             href: "https://devpost.com/software/pocketdoc-react-native",
        //         },
        //         {
        //             title: "YouTube",
        //             icon: <Icons.youtube className="h-4 w-4" />,
        //             href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        //         },
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/pocketdoc-react-native",
        //         },
        //     ],
        // },
        // {
        //     title: "SpaceApps Waterloo",
        //     dates: "April 28th - 30th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/earthwatch",
        //         },
        //     ],
        // },
        // {
        //     title: "MHacks 9",
        //     dates: "March 24th - 26th, 2017",
        //     location: "Ann Arbor, Michigan",
        //     description:
        //         "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/threejs-planes",
        //         },
        //     ],
        // },
        // {
        //     title: "StartHacks I",
        //     dates: "March 4th - 5th, 2017",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
        //     win: "1st Place Winner",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source (Mobile)",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/mattBlackDesign/recipic-ionic",
        //         },
        //         {
        //             title: "Source (Server)",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/mattBlackDesign/recipic-rails",
        //         },
        //     ],
        // },
        // {
        //     title: "QHacks II",
        //     dates: "February 3rd - 5th, 2017",
        //     location: "Kingston, Ontario",
        //     description:
        //         "Developed a mobile game which enables city-wide manhunt with random lobbies",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
        //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        //     links: [
        //         {
        //             title: "Source (Mobile)",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/dillionverma/human-huntr-react-native",
        //         },
        //         {
        //             title: "Source (API)",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/mattBlackDesign/human-huntr-rails",
        //         },
        //     ],
        // },
        // {
        //     title: "Terrible Hacks V",
        //     dates: "November 26th, 2016",
        //     location: "Waterloo, Ontario",
        //     description:
        //         "Developed a mock of Windows 11 with interesting notifications and functionality",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        //         },
        //     ],
        // },
        // {
        //     title: "Portal Hackathon",
        //     dates: "October 29, 2016",
        //     location: "Kingston, Ontario",
        //     description:
        //         "Developed an internal widget for uploading assignments using Waterloo's portal app",
        //     image: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
        //     links: [
        //         {
        //             title: "Source",
        //             icon: <Icons.github className="h-4 w-4" />,
        //             href: "https://github.com/UWPortalSDK/crowmark",
        //         },
        //     ],
        // },
    ],
} as const;
