import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";


interface LandingPageProps {
    onGetStarted: () => void;
}

export default function LandingPage({onGetStarted}: LandingPageProps) {
  return (
      <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
          <span>Announcing 200M seed raised</span>
          <ChevronRight className="w-4 h-4" />
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight text-foreground">
            Install shadcn/ui
            <br />
            Components.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            install all the components you need with a single command and start building your application faster than ever before.
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button 
            variant="default" 
            size="lg"
            onClick={onGetStarted}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
          >
            View Components
          </Button>
        </div>
      </div>
    </div>
  )
}

 