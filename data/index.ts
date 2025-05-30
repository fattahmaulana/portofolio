import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: "I am Maulana Abdul Fattah, a Bachelor's student in Informatics Engineering, continuously learning and developing skills in technology, programming, and design. I have strong personal skills in teamwork, time management, creativity, and responsibility.",
    title2: "Education",
    description2: "2022 - Present \u00A0\u00A0 Stikubank University, Semarang",
    description3: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Informatics Enginnering",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "",
  },
  
  {
    id: 4,
    title: "Technical Skills",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },

 
] as const;

export const projects = [
  {
    id: 1,
    title: "TanyaAi - Mobile App",
    des: "An AI-powered mobile app for answering questions, providing insights, and assisting with various tasks.",
    img: "/tanyaai.png",
    iconLists: ["/java.svg"],
    link: "https://github.com/fattahmaulana/TanyaAI",
    sourceCode: "https://github.com/fattahmaulana/TanyaAI",
  },
  {
    id: 2,
    title: "Student Graduation Web",
    des: "A student graduation web displays graduation details, student achievements, event schedules, and certificates.",
    img: "/lulus.png",
    iconLists: ["/mysql.svg", "/php.svg", "/laravel.svg"],
    link: "",
    sourceCode: "https://www.behance.net/gallery/222957507/Website-Kelulusan",
  },
  {
    id: 3,
    title: "Semarang City FLS3N Submission and Evaluation Portal",
    des: "A platform for submitting and evaluating student works in the FLS3N (National Student Art Festival and Competition)",
    img: "/fls.png",
    iconLists: ["/mysql.svg", "/php.svg", "/laravel.svg"],
    link: "",
    sourceCode: "https://www.behance.net/gallery/226934973/fls3n-website",
  },
  {
    id: 4,
    title: "Financial Record System for Coffee Shop",
    des: "A system for tracking a coffee shop's income, expenses, and transactions.",
    img: "/cof.png",
    iconLists: ["/mysql.svg", "/php.svg", "/laravel.svg"],
    link: "",
    sourceCode: "https://github.com/fattahmaulana/catatan_keuangan_coffee",
  },
  {
    id: 5,
    title: "Coffeeshop Landing Page",
    des: "A coffeeshop landing page introduces the brand, showcases the menu, promotions, location, and simplifies ordering.",
    img: "/gcc.png",
    iconLists: ["/tailwind.svg", "/php.svg"],
    link: "https://gccoffeeshop.vercel.app/",
    sourceCode: "https://github.com/fattahmaulana/coffeeshop_landingpage",
  },
  {
    id: 6,
    title: "Portofolio Design Graphic",
    des: "A showcase of design works, creativity, and skills to highlight expertise and experience.",
    img: "/graphic.png",
    iconLists: ["/illustrator.svg", "/photoshop.svg"],
    link: "https://www.behance.net/fattahmaulana",
    sourceCode: "https://www.behance.net/fattahmaulana",
  },
] as const;

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "Photosop",
    img: "/photoshop.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "illustrator",
    img: "/illustrator.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Laravel",
    img: "/laravel.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Sql",
    img: "/mysql.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "Ts",
    img: "/three.svg",
    nameImg: "/dockerName.svg",
  },

  {
    id: 6,
    name: "three",
    img: "/brandtypescript.svg",
    nameImg: "/dockerName.svg",
  },

  {
    id: 7,
    name: "next",
    img: "/nextjs.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 8,
    name: "next",
    img: "/blender.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 9,
    name: "next",
    img: "/php.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 10,
    name: "next",
    img: "/java.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/fattahmaulana_",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/maulanaabdulfattah",
  },
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/fattahmaulana",
  },
  {
    name: "Behance",
    img: "/behance.svg",
    link: "https://www.behance.net/fattahmaulana",
  },
  
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
