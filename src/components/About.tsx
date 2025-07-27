import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Development",
      description: "Full-stack development with modern technologies and best practices."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Design",
      description: "Creating beautiful, user-centered designs that tell your story."
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Pushing boundaries with creative solutions and cutting-edge tech."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer and designer with a love for creating digital experiences 
            that make a difference. With years of experience in modern web technologies, 
            I bring ideas to life through clean code and beautiful design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="border-border hover:shadow-elegant transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-lg p-8 shadow-elegant">
          <h3 className="text-2xl font-bold mb-6 text-center">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            Started as a curious developer, I've evolved into a creative professional who believes 
            in the power of technology to transform businesses and lives. Every project is an 
            opportunity to learn, grow, and push the boundaries of what's possible. 
            I'm constantly exploring new technologies and design trends to deliver exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;