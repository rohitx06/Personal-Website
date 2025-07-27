import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Portfolio
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('work')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Contact
          </button>
          <Button variant="default" className="bg-gradient-primary hover:shadow-glow">
            Hire Me
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;