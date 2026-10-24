/**
 * Authentic project records for Vivek Garg's developer portfolio.
 * Details aligned with verified repositories and coursework.
 */

export const projects = [
  {
    id: "lost-and-found",
    number: "01",
    title: "Campus Lost & Found Management System",
    subtitle: "Production-Grade Web Application & Algorithmic Matching Engine",
    description:
      "A web-based application designed to help users report lost and found items, manage item listings, and support matching and claim workflows.",
    longDescription:
      "Developed for college campuses to systematically recover, identify, verify, and return lost belongings. Built with pure Java MVC architecture without heavy frameworks, running on Jakarta EE 11 and Apache Tomcat 11.",
    image: "/images/lost-and-found.svg",
    category: "Full Stack",
    technologies: [
      "Java",
      "Jakarta Servlets",
      "JSP",
      "Maven",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Apache Tomcat 11",
      "Docker",
    ],
    highlights: [
      "BCrypt password hashing (cost factor 12) & role-aware session authentication",
      "Lost and found item listings with multipart image upload pipeline",
      "Intelligent Algorithmic Matching combining Levenshtein Text Distance & Haversine GPS Proximity",
      "Two-Factor Claim Handover Protocol using cryptographically secure 6-digit OTPs & QR codes",
      "ACID transactional status transitions (ACTIVE → CLAIMED → RETURNED) with atomic rollback",
      "Dynamic administrative analytics dashboard with Chart.js and automated PDF reports via Apache PDFBox",
    ],
    github: "https://github.com/gargv4049/java_project",
    liveDemo: "https://java-project-v2yg.onrender.com",
    liveDemoNote: "Hosted on Render (On-demand cloud instance)",
    featured: true,
  },
  {
    id: "weather-forecast",
    number: "02",
    title: "Weather & Climate Intelligence Dashboard",
    subtitle: "Modern Meteorological Metrics & Hourly Analytics",
    description:
      "A responsive web application providing real-time meteorological metrics, 24-hour hourly trends, and 7-day extended forecasts with dynamic atmospheric indicators.",
    longDescription:
      "Engineered with React and TypeScript to consume live meteorological REST APIs, computing feels-like indices, precipitation probabilities, wind velocity & gusts, dew points, and UV radiation levels with instant client-side responsiveness.",
    image: "/images/weather-dashboard.svg",
    category: "Frontend & APIs",
    technologies: ["React", "TypeScript", "Vite", "REST API", "Tailwind CSS"],
    highlights: [
      "Real-time temperature, humidity, UV index, wind velocity & pressure monitoring",
      "24-hour chronological hourly temperature progression and trend analysis",
      "7-day extended forecast with high/low temperature metrics and precipitation risk",
      "Type-safe component architecture with clean editorial data visualization",
    ],
    github: "https://github.com/gargv4049",
    liveDemo: null,
    featured: true,
  },
  {
    id: "library-management",
    number: "03",
    title: "Desktop Library Administration System",
    subtitle: "Core Java Application & Inventory Management",
    description:
      "A desktop application built with Java to streamline library administration, book inventory tracking, student borrower records, and automated issue/return functionality.",
    longDescription:
      "Applies fundamental Object-Oriented Programming (OOP) concepts, file handling, and graphical user interface architecture to deliver a reliable local library management utility.",
    image: "/images/library-system.svg",
    category: "Systems & Java",
    technologies: ["Java", "Java Swing", "AWT", "OOP Design Patterns"],
    highlights: [
      "Book cataloging with searchable ISBN, title, and author queries",
      "Student account registry with active checkout tracking and due date notifications",
      "Automated issue and return transactions with historical audit logs",
    ],
    github: "https://github.com/gargv4049",
    liveDemo: null,
    featured: false,
  },
  {
    id: "daylist-task-manager",
    number: "04",
    title: "Daylist Task & Productivity Manager",
    subtitle: "Client-Side Task Architecture with State Persistence",
    description:
      "A minimalist personal task and workflow organizer with category separation, priority tags, and client-side browser storage.",
    longDescription:
      "Built to demonstrate clean state management, modular component breakdown, filtering logic, and robust local storage synchronization.",
    image: "/images/daylist-preview.svg",
    category: "Frontend",
    technologies: ["React", "TypeScript", "HTML5 LocalStorage", "Vite"],
    highlights: [
      "Priority categorization (High, Medium, Low) and Work vs. Personal tags",
      "Live task completion counters and status filtering (All, In Progress, Completed)",
      "Instant offline persistence via HTML5 LocalStorage API",
    ],
    github: "https://github.com/gargv4049",
    liveDemo: null,
    featured: false,
  },
];
