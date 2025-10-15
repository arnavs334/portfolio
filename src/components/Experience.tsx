import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const experiences = [
  {
    company: "Arhan LLC",
    location: "Atlanta, Georgia",
    role: "Website Design",
    period: "May 2025 – Current",
    technologies: "Javascript, Typescript, CSS, React, Node.js",
    link: "https://peaceofjoyacres.com/",
    achievements: [
      "Built a full stack responsive event/rental venue website in WebStorm using React and Node.js with features for availability checks, rental details, and direct customer contact.",
      "Implemented dynamic inquiry forms and date-checking functionality, streamlining booking communications and reducing scheduling conflicts.",
      "Enhanced client experience and facilitated over $100,000 in rental transactions through improved online accessibility and booking efficiency."
    ]
  },
  {
    company: "Atlanta Bread Company",
    location: "Sandy Springs, Georgia",
    role: "Cloud Menu Developer",
    period: "May 2022 – Current",
    technologies: "Java, Firebase, Android, FireTV",
    achievements: [
      "Created Android/Firestick cloud menu signage system enabling daily menu rotation.",
      "Optimized POS integration with DoorDash, UberEats, and Grubhub, improving ordering efficiency."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass glow-primary hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      {exp.link && (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="group">
                          <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                        </a>
                      )}
                    </div>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-mono">{exp.period}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-mono rounded-full">
                    {exp.technologies}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1 flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
