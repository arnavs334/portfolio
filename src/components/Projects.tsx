import { Code2, ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Direct DJ",
    period: "August 2025 - Current",
    technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "Stripe", "ChatGPT API"],
    description: "Full-stack web platform enabling DJs, visual artists, and promoters to manage bookings, contracts, and payments in real time while connecting with other people in the industry.",
    achievements: [
      "Integrated Stripe Connect for escrow-based payments, automated payouts, and identity verification (KYC)",
      "Implemented Supabase-powered realtime chat, notifications, and secure RLS database policies",
      "Developed AI-driven lineup suggestions and DJ matching using ChatGPT API",
      "Designed responsive UI with Tailwind CSS, Radix UI, and shadcn/ui; optimized with Vite and TypeScript for performance"
    ],
    link: "https://directdj.app/"
  },
  {
    title: "Peace of Joy Acres E-Commerce Platform",
    period: "May 2025 – Current",
    technologies: ["React", "Node.js", "TypeScript", "JavaScript", "Calendly API"],
    description: "Built a full stack responsive event/rental venue website for Arhan LLC using React and Node.js.",
    achievements: [
      "Integrated Calendly API to fetch and display real-time Airbnb calendar data for rental availability",
      "Developed features for availability checks, rental details, and direct customer contact",
      "Implemented dynamic inquiry forms and date-checking functionality, streamlining booking communications",
      "Enhanced client experience and facilitated over $100,000 in rental transactions through improved online accessibility"
    ],
    link: "https://peaceofjoyacres.com/"
  },
  {
    title: "Interactive Travel Itinerary App",
    period: "January 2025 - May 2025",
    technologies: ["Java", "Firebase", "MVVM", "Android"],
    description: "Built a fullstack Android app to create and manage personalized travel itineraries.",
    achievements: [
      "Integrated Firebase for authentication, data storage, and retrieval",
      "Applied MVVM architecture and design patterns (Prototype, SOLID, GRASP, Agile) for scalability",
      "Led initial framework setup, resolving early technical challenges"
    ],
    link: "https://github.com/arnavs334/CS2340D_Team20"
  },
  {
    title: "VR Boxing Game – 'Active Knockout'",
    period: "February 2024 - July 2024",
    technologies: ["Unity", "C#", "VR", "3D Modeling"],
    description: "Developed gameplay logic and physics for competitive VR boxing simulation.",
    achievements: [
      "Created optimized 3D models with lighting scripts",
      "Placed 7th nationally in TSA VR Design Competition",
      "Implemented realistic physics for immersive VR experience"
    ]
  },
  {
    title: "Audio Plugin Development",
    period: "Dec 2023 – Current",
    technologies: ["JUCE", "C++", "DSP", "macOS Core Audio"],
    description: "Built cross-platform VST & AU plugins for real-time EQ and compression.",
    achievements: [
      "Integrated with macOS Core Audio APIs for seamless DAW compatibility",
      "Optimized DSP algorithms for low-latency processing",
      "Cross-platform support for multiple plugin formats"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass glow-secondary hover:scale-[1.05] transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/link">
                      <ExternalLink className="h-5 w-5 text-primary/70 hover:text-primary transition-all cursor-pointer hover:scale-110" />
                    </a>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono mb-3">{project.period}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <p key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
