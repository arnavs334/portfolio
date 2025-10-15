import { GraduationCap, BookOpen } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass glow-primary animate-slide-in-left">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary">Georgia Institute of Technology</h4>
                <p className="text-muted-foreground">B.S. in Computer Science</p>
                <p className="text-sm text-muted-foreground mt-1">Expected Graduation: May 2027</p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-secondary mb-2">Concentrations:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Intelligence</li>
                  <li>Information Internetworks</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="glass glow-secondary animate-slide-in-right">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Coursework</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Data Structures and Algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Object-Oriented Programming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Objects and Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <span>Computer Organization and Programming</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
