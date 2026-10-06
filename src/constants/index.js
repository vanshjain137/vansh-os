const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "September 29, 2026",
    title: "Beyond Chatbots: The Rise of Agentic AI and What it Means for 2026",
    image: "/images/blog-1.png",
    link: "https://vansh-blog-app.vercel.app/blog-detail/695ec21ed81b41dd03296107"
  },
  {
    id: 2,
    date: "August 22, 2026",
    title: "The Silicon Shield: How AI and Autonomous Systems are Redefining Modern Defense",
    image: "/images/blog-2.png",
    link: "https://vansh-blog-app.vercel.app/blog-detail/69676ec94654bd60d31ec4cf"
  },
  {
    id: 3,
    date: "July 18, 2026",
    title: "The Art of Clean Code: Why Maintainable JavaScript is the Ultimate Developer Superpower",
    image: "/images/blog-3.png",
    link: "https://vansh-blog-app.vercel.app/blog-detail/6967717b4654bd60d31ec4ea"
  },
  {
    id: 4,
    date: "June 28, 2026",
    title: "Building a Secure MERN Stack Blog: Beyond the Basics of CRUD",
    image: "/images/blog-4.png",
    link: "https://vansh-blog-app.vercel.app/blog-detail/69676cc24654bd60d31ec4bc"
  }
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Redux Toolkit", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Architecture",
    items: ["Node.js", "Express.js", "Microservices", "API Gateway", "RESTful APIs", "Socket.io"],
  },
  {
    category: "AI & Data",
    items: ["LangChain", "LangGraph", "MongoDB", "PostgreSQL", "Redis", "Qdrant", "RAG"],
  },
  {
    category: "DevOps & Tooling",
    items: ["Docker", "AWS (EC2, S3)", "Vercel", "Render", "Firebase Auth", "Git", "Postman"],
  }
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/vanshjain137",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/vanshjain137",
  },
  {
    id: 3,
    text: "Email",
    icon: "/icons/user.svg",
    bg: "#00A154",
    link: "mailto:vanshjainprof@gmail.com",
  }
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/user.svg",
    title: "Personal",
  },
  {
    id: 3,
    icon: "/icons/work.svg",
    title: "Projects",
  },
  {
    id: 4,
    icon: "/icons/file.svg",
    title: "Blogs",
  },
];

const gallery = [
  // Personal Photos
  { id: 1, img: "/images/vansh-1.png", category: "Personal" },
  { id: 2, img: "/images/vansh-2.png", category: "Personal" },
  { id: 3, img: "/images/vansh-3.png", category: "Personal" },
  
  // Project UI Screenshots
  { id: 4, img: "/images/project-1.png", category: "Projects" },
  { id: 5, img: "/images/project-2.png", category: "Projects" },
  { id: 6, img: "/images/project-3.png", category: "Projects" },
  { id: 7, img: "/images/project-4.png", category: "Projects" },
  
  // Blog Post Covers
  { id: 8, img: "/images/blog-1.png", category: "Blogs" },
  { id: 9, img: "/images/blog-2.png", category: "Blogs" },
  { id: 10, img: "/images/blog-3.png", category: "Blogs" },
  { id: 11, img: "/images/blog-4.png", category: "Blogs" },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1: CipherAI
    {
      id: 5,
      name: "CipherAI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "CipherAI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "CipherAI is an autonomous code engine powered by LangGraph agents.",
            "It features a fully functional in-browser terminal connected via Socket.io for real-time execution.",
            "The architecture consists of an Express API Gateway routing to modular microservices, using Redis for session caching.",
            "Built with Node and TypeScript, it leverages Firebase for secure authentication and dotenvx for environment variable management."
          ],
        },
        {
          id: 2,
          name: "cipherai.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://cipher-ai-kappa.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "cipherai-demo.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2: MeshRoute AI
    {
      id: 6,
      name: "MeshRoute AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-40",
      windowPosition: "top-[15vh] left-10",
      children: [
        {
          id: 1,
          name: "MeshRoute AI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "MeshRoute AI is a microservices platform designed for sophisticated AI orchestration.",
            "It leverages multi-agent AI workflows to process and automate complex tasks seamlessly.",
            "Built with distributed systems in mind, the backend infrastructure is containerized using Docker and hosted on AWS.",
            "It heavily utilizes Redis caching to optimize speed and performance across the microservices architecture."
          ],
        },
        {
          id: 2,
          name: "meshroute.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://meshroute-ai.vercel.app",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "meshroute-ui.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3: Full-Stack MERN Blog
    {
      id: 7,
      name: "Full-Stack MERN Blog",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[25vh] left-16",
      children: [
        {
          id: 1,
          name: "MERN Blog Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A comprehensive full-stack blogging application built on the MERN stack with a responsive React frontend.",
            "It features robust custom authentication, including OTP-based password recovery for enhanced security.",
            "Media is managed and hosted reliably via Cloudinary integration.",
            "I developed a custom 'waking up' backend loader to gracefully handle server latency, ensuring a seamless user experience during cold starts.",
          ],
        },
        {
          id: 2,
          name: "mern-blog.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://vansh-blog-app.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "blog-preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },

    // ▶ Project 4: Modern Invoice Creator
    {
      id: 8,
      name: "Modern Invoice Creator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-5",
      windowPosition: "top-[35vh] left-20",
      children: [
        {
          id: 1,
          name: "Invoice Creator Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A modern, highly responsive invoice creator designed to streamline billing processes.",
            "Beyond basic invoice generation, it includes integrated data analytics features to track and visualize financial metrics.",
            "Built with a focus on clean UI and scalable backend infrastructure, bridging high-performance frontends with robust data management.",
          ],
        },
        {
          id: 2,
          name: "invoice-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://invoice-app-pied-alpha.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "invoice-dashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-4.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/vansh-1.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Full-Stack Developer | Microservices & AI Enthusiast",
      image: "/images/vansh-1.png",
      description: [
        "Hi, I'm Vansh Jain, a dynamic Full-Stack Developer based in Delhi, India.",
        "I specialize in building scalable web applications using React and Node.js, with deep hands-on expertise in architecting distributed systems and microservices[cite: 1].",
        "My passion lies in bridging the gap between high-performance frontends and robust DevOps infrastructures, leveraging cloud platforms, Docker, and container orchestration[cite: 1].",
        "Lately, I've been heavily focused on AI integration, building platforms that utilize LangChain, LangGraph, and autonomous multi-agent workflows to push the boundaries of what web applications can do[cite: 1].",
        "I graduated with a Bachelor of Technology from the University of Petroleum And Energy Studies (UPES) in 2024, and I'm always looking for the next complex engineering challenge to tackle[cite: 1]."
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      href: "/files/resume.pdf"
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };