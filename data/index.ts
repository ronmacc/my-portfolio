export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#about" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Hi there!",
      description: "Hello! I’m Andres. I have hands-on experience in full-stack development, with a strong focus on creating tools and workflows that streamline complex processes. My background includes developing parametric workflows and data-driven solutions during my time at Thornton Tomasetti and building on these skills through my thesis and grad school work at IAAC. I’ve worked with web development, computational modeling, and emerging technologies like AI/ML in practical, project-focused settings—particularly in areas like data visualization and urban simulations. While I’m still growing my expertise in machine learning, I bring a thoughtful and pragmatic approach to integrating technology into actionable solutions. I'm excited to contribute to building platforms that genuinely make an impact. I am passionate about learning and collaboration, so if you think I can contribute to your project, feel free to reach out!",
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
        link: "https://github.com/ronmaccms/macadThesis24",
    },
    {
        id: 2,
        title: "PINNs Certification Projects",
        des: "Showcasing advanced Physics-Informed Neural Networks (PINNs) applications, including fluid dynamics, wave equations, and heat transfer modeling.",
        img: "/pinncert.png",
        iconLists: ["/python.svg", "/modulus.svg", "/pytorch.svg", "/linux.svg", "/ai.svg"],
        link: "https://github.com/ronmaccms/PINNs_studies",
    },
    {
        id: 3,
        title: "AI Governance Chatbot",
        des: "A Streamlit-based AI chatbot analyzing and suggesting AI governance strategies based on uploaded policy documents.",
        img: "/chatbot.gif",
        iconLists: ["/streamlit.svg", "/python.svg", "/openai.svg"],
        link: "https://github.com/ronmaccms/llm-chatbot",
    },
    {
        id: 4,
        title: "Advanced Computation and Innovation",
        des: "Calculates embodied carbon for a steel structure, integrating ML models for comprehensive analysis of building carbon impact.",
        img: "/carbonapp.gif",
        iconLists: ["/shapediver.png", "/python.svg", "/grasshopper.svg", "/ai.svg"],
        link: "https://www.behance.net/gallery/213496567/Advanced-Computation-and-Innovation",
    },
    {
        id: 5,
        title: "Data Visualization and Computational Modeling",
        des: "A tool for visualizing site-specific topographies using OpenStreetMap and Lidar data, integrating workflows for Revit, Rhino, and SAP models.",
        img: "/topoviz.gif",
        iconLists: ["/grasshopper.svg", "/gis.svg", "/osm.svg", "/python.svg", "/ladybug.svg"],
        link: "https://www.behance.net/gallery/213493537/Data-Visualization-and-Computational-Modeling",
    },
    {
        id: 6,
        title: "Parametric Design and Optimization",
        des: "Automated wall diagram generation using Rhino.Inside Revit, Python, and Grasshopper to streamline room geometry tagging.",
        img: "/walld.png",
        iconLists: ["/python.svg", "/grasshopper.svg", "/autodesk.svg"],
        link: "https://www.behance.net/gallery/213495409/Parametric-Design-and-Optimization",
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
            "Led the development of parametric design workflows using Grasshopper and Rhino.Inside Revit, reducing design iteration times by 60% and improving collaboration across design and engineering teams. Created interoperability tools integrating Rhino, Speckle, and Revit, saving an estimated 25% in project delivery time. Developed AI-driven geometric rationalization workflows that optimized structural performance, directly contributing to securing over five large-scale engineering projects."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Research Thesis - Grad Student",
        company: "IAAC",
        desc: [
            "Developed a web-based platform for urban wind simulations using Vue.js, Three.js, and NVIDIA Modulus, reducing data processing times by 40%. Integrated OpenStreetMap and OpenWeather APIs to model real-time urban wind conditions, enabling cost-effective CFD applications for urban planning. Deployed Physics-Informed Neural Networks (PINNs) to simulate fluid dynamics, contributing to sustainable urban design research and influencing urban policy development."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Research Assistant – Robotic Fabrication",
        company: "Pratt Institute",
        desc: [
            "Programmed ABB 6-axis robotic arms for multi-material 3D printing, achieving a 30% reduction in material waste for architectural prototypes. Developed Grasshopper and Python scripts for robotic toolpath generation, reducing setup times by 50%. Conducted research on material performance, enhancing automation processes and advancing robotic fabrication methods within the institute."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Project Manager",
        company: "Island Exterior Fabricators",
        desc: [
            "Managed a $14M façade fabrication and installation project, delivering under budget and ahead of schedule by 20%. Automated project workflows with data-driven scheduling tools, increasing efficiency and reducing delays. Oversaw vendor coordination and logistics for complex façade elements, ensuring seamless on-site assembly and improved client satisfaction."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    {
        id: 5,
        title: "Facade Engineer",
        company: "DeSimone Consulting Engineers",
        desc: [
            "Designed and engineered custom façade solutions for high-profile projects, including complex geometry systems, improving project efficiency by 25%. Conducted structural analysis and detailed engineering reports to ensure compliance with safety standards. Collaborated with architects and contractors to optimize fabrication methods and material usage, enhancing overall project delivery."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp5.svg",
    },
    {
        id: 6,
        title: "Facade Designer",
        company: "KPA Studio",
        desc: [
            "Produced detailed fabrication drawings and installation guides for complex building façades, reducing project errors by 30%. Implemented computational design methods to enhance material efficiency and aesthetics. Trained team members on advanced software tools like Rhino and Grasshopper, streamlining design automation and fostering innovation within the team."
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