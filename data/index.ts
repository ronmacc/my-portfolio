export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#footer" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Hi there!",
      description: "Hi, I'm Andres, architect/engineer turned developer. My work focuses on data and automation in the built environment. I like to work in Python, JavaScript and Grasshopper, but I'm happy to use whatever tool is most suited for the job at hand. I enjoy learning and teaching, and listening to Auntie Flo while I do some work. I've recently been down a rabbit hole with cv/dl looking to integrate opencv,  three.js, and mediapipe on the web. And I do some stuff on the side when I have time. I am also interested in geometric rationalization, interoperability workflows, anything related to physics informed neural networks, and how we can build client-first interactive webapps.",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      // img: "/studio.png",
      spareImg: "/grid.svg",
    },
    {
      id: 2,
      className: "min-h-[200px] sm:min-h-[250px] md:col-span-3 md:row-span-2 lg:col-span-2 lg:min-h-[25vh]",
      img: "movedrag.gif",
    },    
    {
      id: 3,
      title: "Education",
      description: `Master in Advanced Computation for Architecture - IAAC
Bachelor of Science in Architecture - Pratt Institute
Associate Degree in Architecture - Miami Dade College`,
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
      title: "Technical Toolkit",
      description: "Python, JavaScript, TypeScript, Vue.js, C#, Java, React.js, Next.js, Vue.js, D3.js, Three.js, HTML, CSS, TailwindCSS, RESTful APIs, Docker, Sentry, GeoPandas, NumPy, Matplotlib, Pandas, Git, OpenCV, Mediapipe, OpenWeatherMap, OpenStreetMap, Google Maps, PyTorch, NVIDIA Modulus, Physics-Informed Neural Networks, NumPy, Matplotlib, Pandas, CUDA, Linux (Ubuntu), Hostinger",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "",
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
      spareImg: "/grid.svg",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Three.js Game Studies",
      des: "Exploring Web-Based Interactive 3D Experiences with Three.js, OpenCV, and Mediapipe",
      img: "/gametest.gif",
      iconLists: ["/three.svg", "/js.svg", "/ai.svg", "/opencv.svg", "/mp.png"],
      link: "https://github.com/ronmaccms/threejs-games",
    },
    {
      id: 2,
      title: "Advanced Computation and Innovation",
      des: "Calculates embodied carbon for a steel structure, integrating ML models for comprehensive analysis of building carbon impact.",
      img: "/carbonapp.gif",
      iconLists: ["/shapediver.png", "/python.svg", "/grasshopper.svg", "/ai.svg"],
      link: "https://www.behance.net/gallery/213496567/Advanced-Computation-and-Innovation",
    },
    {
      id: 3,
      title: "Parametric Design and Optimization",
      des: "Automated wall diagram generation using Rhino.Inside Revit, Python, and Grasshopper to streamline room geometry tagging.",
      img: "/walld.png",
      iconLists: ["/python.svg", "/grasshopper.svg", "/autodesk.svg"],
      link: "https://www.behance.net/gallery/213495409/Parametric-Design-and-Optimization",
    }, 
    {
      id: 4,
      title: "AI Governance Chatbot",
      des: "A Streamlit-based AI chatbot analyzing and suggesting AI governance strategies based on uploaded policy documents.",
      img: "/chatbot.gif",
      iconLists: ["/streamlit.svg", "/python.svg", "/openai.svg"],
      link: "https://github.com/ronmaccms/llm-chatbot",
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
      title: "Urban Wind Flow Modeling with PINNs",
      des: "A web-based platform simulating urban wind flow for pedestrian comfort using Physics-Informed Neural Networks (PINNs) and CFD.",
      img: "/windflow.gif",
      iconLists: ["/vue.svg", "/three.svg", "/pytorch.svg", "/modulus.svg", "/openweathermap.svg"],
      link: "https://github.com/ronmaccms/macadThesis24",
    },  
  ];
  
  export const testimonials = [
    {
      quote:
        "text",
      name: "Name",
      title: "title",
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
            "Led the development of Python-based parametric design tools and automated workflows using Grasshopper and Rhino Inside Revit, reducing design iteration times and automating tasks like room tagging and structural grid layouts, cutting setup time from weeks to minutes. Trained 30 engineers in computational design and scripting, promoting BIM workflow adoption across teams. In the final months, supported agile sprints by managing Git branches, linking issues to updates, and maintaining version control standards. Also contributed to a Vue.js-based platform for Ellipse, implementing custom UI components and optimizing data visualizations, including a sunburst widget built with D3.js"
        ],
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Research Assistant – Robotic Fabrication",
        company: "Pratt Institute",
        desc: [
            "Developed Grasshopper scripts to optimize robotic toolpath generation for large-scale 3D printing, including testing material viscosities and temperatures for adhesive fusing in space frame structures and multi-axis extrusion workflows. Programmed ABB 6-axis robotic arms for PLA and clay printing, advancing digital fabrication processes. Reassembled and reprogrammed a 10'x10' CNC plastic welding machine for fabricating large inflatable structures, integrating G-code generated from Grasshopper and web apps. Conducted tensile studies and carbon fiber weaving experiments using custom 3D-printed tools with the ABB robotic arm, improving structural optimization and material performance in catenary shell designs"
        ],
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Project Manager",
        company: "Island Exterior Fabricators",
        desc: [
            "Managed the $14 million, 70,000 sq. ft. façade fabrication and installation for Cobble Hill NYU Langone Hospital, a Silver LEED-certified project meeting the highest compliance standards for acoustic, impact, seismic, hurricane, structural, and thermal performance. Automated material tracking and scheduling workflows, integrating vendor follow-ups and streamlining procurement and fabrication processes. Developed an innovative hybrid façade system combining European M/F frames with U.S. standards, featuring reinforced terracotta panels with continuous gaskets and metal rods for added durability. Coordinated PMU and VMU testing with contractors and design teams, stress-testing the system to validate its resilience. Oversaw vendor communication and on-site assembly, ensuring seamless project delivery and client satisfaction."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Facade Engineer",
        company: "DeSimone Consulting Engineers/KPA Studio",
        desc: [
          "Designed and engineered façade systems for high-rise projects across Chicago, New Jersey, Florida, Massachusetts, Nevada, and New York, focusing on mullion design and atypical conditions to meet structural, thermal, and acoustic standards. Key projects include 30 Front Street (Hill West), where I developed precast façade studies and edge-of-slab conditions with 3D-printed prototypes; LaGuardia Airport Terminal (HOK), where I produced fabrication drawings and oversaw factory manufacturing; and the 18 Fremont Hotel (Steelman Partners), where I designed sloped façades with double-height panels and integrated lighting in BMU tracks, tested for high temperatures. I also optimized bulkhead panelization with Grasshopper workflows and trained international teams in advanced drafting techniques"
      ],
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
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