import { Code, Wrench, Languages, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML/CSS", "C++", "C#"],
    color: "primary"
  },
  {
    icon: Wrench,
    title: "Tools & Frameworks",
    skills: ["IntelliJ", "Xcode", "PyCharm", "Git", "Bootstrap", "JUCE", "React", "Node.js"],
    color: "secondary"
  },
  {
    icon: Languages,
    title: "Languages",
    skills: ["English", "Hindi", "Urdu", "Spanish (functioning)"],
    color: "primary"
  },
  {
    icon: Award,
    title: "Certifications",
    skills: ["Pearson Software Development", "Unity Certified Associate: Game Developer"],
    color: "secondary"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="glass hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 bg-${category.color}/10 rounded-lg`}>
                      <Icon className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1.5 bg-${category.color}/10 text-${category.color} rounded-lg text-sm font-medium hover:bg-${category.color}/20 transition-colors cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
