export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#about" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Hi there!",
      description: "Hello! I’m Andres. With a background in computational design, machine learning, and facade engineering, I specialize in applying advanced computation to architecture and engineering. Recently, as part of the R&D team at Thornton Tomasetti, I focused on geometric rationalization and developing new interoperability workflows. I hold a Master’s in Advanced Computation for Architecture from IAAC, where my thesis centered on creating a web platform using Physics-Informed Neural Networks (PINNs) for pedestrian wind assessment. Currently, I am completing the Google Advanced Data Science Certificate to deepen my knowledge of data manipulation and its applications in neural networks and machine learning. I am passionate about learning and collaboration, so if you think I can contribute to your project, feel free to reach out!",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      // img: "/hola.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "My Work",
      description: `Developed a web platform for urban wind simulations using Vue.js, NVIDIA Modulus, and Three.js.
Built automated workflows integrating Python and Rhino Inside Revit for architectural projects.
Conducted CFD modeling with Physics-Informed Neural Networks (PINNs) for fluid dynamics.
Delivered technical training to engineering teams on computational design and scripting.`,
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[30vh]",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },    
    {
      id: 3,
      title: "Technical Toolkit",
      description: "Python, Vue.js, Three.js, NVIDIA Modulus, PyTorch, D3.js, Docker, GeoPandas, Grasshopper, OpenWeatherMap, OpenStreetMap, Git",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Educational Material",
      description:
        "Here are my latest tutorials on algorithms and Physics Informed Neural Networks",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    
    {
      id: 5,
      title: "Education",
      description: `Master of Science in Advanced Computation for Architecture - IAAC
Bachelor of Science in Architecture - Pratt Institute
Associate Degree in Architecture - Miami Dade College`,
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",      
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
  
    
    {
      id: 6,
      title: "Get in Touch",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
        id: 1,
        title: "Urban Wind Flow Modeling with PINNs",
        des: "A web-based platform simulating urban wind flow for pedestrian comfort using Physics-Informed Neural Networks (PINNs) and CFD.",
        img: "/windflow.gif",
        iconLists: ["/vue.svg", "/three.svg", "/pytorch.svg", "/modulus.svg", "/openweathermap.svg"],
        link: "/ui.windflowmodeling.com",
    },
    {
        id: 2,
        title: "PINNs Certification Projects",
        des: "Showcasing advanced Physics-Informed Neural Networks (PINNs) applications, including fluid dynamics, wave equations, and heat transfer modeling.",
        img: "/pinncert.GIF",
        iconLists: ["/python.svg", "/modulus.svg", "/pytorch.svg", "/linux.svg", "/ai.svg"],
        link: "/ui.pinncert.com",
    },
    {
        id: 3,
        title: "AI Governance Chatbot",
        des: "A Streamlit-based AI chatbot analyzing and suggesting AI governance strategies based on uploaded policy documents.",
        img: "/chatbot.gif",
        iconLists: ["/streamlit.svg", "/python.svg", "/openai.svg"],
        link: "/https://github.com/ronmaccms/llm-chatbot",
    },
    {
        id: 4,
        title: "Embodied Carbon Steel ShapeDiver App",
        des: "Calculates embodied carbon for a steel structure, integrating ML models for comprehensive analysis of building carbon impact.",
        img: "/carbonapp.gif",
        iconLists: ["/shapediver.png", "/python.svg", "/grasshopper.svg", "/ai.svg"],
        link: "/ui.embodiedcarbon.com",
    },
    {
        id: 5,
        title: "Topographic and Context Site Visualization",
        des: "A tool for visualizing site-specific topographies using OpenStreetMap and Lidar data, integrating workflows for Revit, Rhino, and SAP models.",
        img: "/topoviz.gif",
        iconLists: ["/grasshopper.svg", "/gis.svg", "/osm.svg", "/python.svg", "/ladybug.svg"],
        link: "/ui.topoviz.com",
    },
    {
        id: 6,
        title: "Special Wall Diagram Automation",
        des: "Automated wall diagram generation using Rhino.Inside Revit, Python, and Grasshopper to streamline room geometry tagging.",
        img: "/walld.png",
        iconLists: ["/python.svg", "/grasshopper.svg", "/autodesk.svg"],
        link: "/ui.walldiagram.com",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      // name: "DeSimone",
      // img: "/desimone.svg",
      nameImg: "/desimone.svg",
    },
    {
      id: 2,
      name: "Thornton Tomasetti",
      // img: "/thornton.svg",
      nameImg: "/thornton.svg",
    },
    {
      id: 3,
      name: "Pratt Institute",
      // img: "/pratt.svg",
      nameImg: "/pratt.svg",
    },
    {
      id: 4,
      name: "IAAC",
      // img: "/s.svg",
      nameImg: "/iaac.png",
    },
    {
      id: 5,
      name: "MDC.",
      // img: "/dock.svg",
      nameImg: "/MDC.png",
    },
    {
      id: 6,
      name: "island.",
      // img: "/dock.svg",
      nameImg: "/island.png",
    },
  ];
  
  export const workExperience = [
    {
        id: 1,
        title: "Senior Computational Designer",
        company: "Thornton Tomasetti",
        desc: [
            "Led the development of parametric design workflows using Grasshopper and Rhino Inside Revit for large-scale engineering projects.",
            "Created interoperability tools to integrate Rhino, Speckle, and Revit, improving collaboration across design and engineering teams.",
            "Developed AI-driven geometric rationalization workflows to optimize structural performance and facade design."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Urban Wind Flow Modeling Research",
        company: "IAAC",
        desc: [
            "Developed a web-based platform for urban wind simulations using Vue.js, Three.js, and NVIDIA Modulus for CFD applications.",
            "Integrated data from OpenStreetMap and OpenWeather APIs to model real-time urban wind conditions.",
            "Deployed Physics-Informed Neural Networks (PINNs) for fluid dynamics modeling, contributing to sustainable urban design research."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Research Assistant – Robotic Fabrication",
        company: "Pratt Institute",
        desc: [
            "Programmed ABB 6-axis robotic arms for multi-material 3D printing of architectural prototypes.",
            "Developed custom scripts in Grasshopper and Python for robotic toolpath generation.",
            "Conducted research on material performance and its application to automated architectural fabrication."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Project Manager",
        company: "Island Exterior Fabricators",
        desc: [
            "Managed a $14 million facade fabrication and installation project, ensuring timely delivery and budget control.",
            "Automated project workflows with data-driven scheduling tools, increasing efficiency by 20%.",
            "Oversaw vendor coordination and logistics for complex facade elements, ensuring seamless on-site assembly."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    {
        id: 5,
        title: "Facade Engineer",
        company: "DeSimone Consulting Engineers",
        desc: [
            "Designed and engineered custom facade solutions for high-profile projects, including complex geometry systems.",
            "Conducted structural analysis and detailed engineering reports to ensure compliance with safety standards.",
            "Collaborated with architects and contractors to optimize fabrication methods and materials."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp5.svg",
    },
    {
        id: 6,
        title: "Facade Designer",
        company: "Miami Dade College",
        desc: [
            "Produced detailed fabrication drawings and installation guides for complex building facades.",
            "Implemented computational design methods to enhance material efficiency and aesthetics.",
            "Trained team members on advanced software tools such as Rhino and Grasshopper for design automation."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp6.svg",
    },
];


  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/ronmaccms",
    },
    {
      id: 2,
      img: "/youtube.svg",
      link: "https://www.youtube.com/@madmaresearch",
    },
    {
      id: 3,
      img: "/linkedin.svg",
      link: "https://www.linkedin.com/in/andres-roncal-1b148a132/",
    },
    {
      id: 4,
      img: "/blog.svg",
      link: "https://blog.iaac.net/user/ronmacc/",
    },
    {
      id: 5,
      img: "/behance.svg",
      link: "https://www.behance.net/Ronmacc",
    },
  ];