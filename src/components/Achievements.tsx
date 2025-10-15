import { Trophy, Music, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const achievements = [
  {
    icon: Trophy,
    title: "FBLA National Champion",
    description: "First Place in Digital Animation at the 2023 National Conference",
    details: "Co-President of School Chapter since June 2023",
    highlight: "Grew membership by 200%"
  },
  {
    icon: Music,
    title: "Music Producer - Mantra",
    description: "Professional music production with significant reach",
    details: "1M+ streams across platforms",
    highlight: "Collaborations include Atlantic Records artists"
  },
  {
    icon: Users,
    title: "Eagle Scout",
    description: "Highest rank in Boy Scouts of America",
    details: "Led and completed Eagle Scout service project",
    highlight: "Demonstrated leadership and community service"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Achievements</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className="glass glow-primary hover:scale-[1.05] transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors animate-float">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {achievement.description}
                    </p>
                    <p className="text-sm text-muted-foreground/80 mb-2">
                      {achievement.details}
                    </p>
                    <p className="text-sm font-semibold text-secondary">
                      {achievement.highlight}
                    </p>
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

export default Achievements;
