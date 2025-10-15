import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-24">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1f3a_1px,transparent_1px),linear-gradient(to_bottom,#1a1f3a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="container mx-auto text-center z-10 space-y-8 animate-fade-in">
        {/* Floating Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="relative animate-[float_3s_ease-in-out_infinite]">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
            <img 
              src={profileImage} 
              alt="Arnav Singh" 
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/50 shadow-2xl glow-primary"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-center">
            <p className="text-primary text-lg font-mono tracking-wider overflow-hidden whitespace-nowrap border-r-2 animate-typing inline-block w-0" style={{ animation: 'typing 2s steps(17) 0.5s forwards, blink 0.7s step-end 2.5s infinite' }}>Hi, my name is</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Arnav Singh</span>
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground">
            Software Engineer & Creator
          </h2>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Computer Science student at Georgia Tech crafting innovative solutions from full-stack web apps to VR experiences and audio plugins.
        </p>

        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Button 
            size="lg" 
            className="glow-primary group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://www.linkedin.com/in/arnav-singh-01bb682a2/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/arnavs334" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
