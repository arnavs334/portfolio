import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <Card className="glass glow-primary animate-fade-in">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm currently looking for new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              <div className="grid md:grid-cols-2 gap-4 pt-6">
                <a 
                  href="mailto:singh.arnavs443@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-mono text-sm">singh.arnavs443@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+14708107028"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-mono text-sm">(470) 810-7028</p>
                  </div>
                </a>
              </div>

              <div className="flex gap-4 justify-center pt-6">
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
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Designed & Built by Arnav Singh
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
