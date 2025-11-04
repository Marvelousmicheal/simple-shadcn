import { ArrowRight, Boxes, ChevronRight, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { TerminalDemo } from "./terminal-demo";



interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className=" pt-40 pb-8 flex items-center justify-center px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
       
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
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Start Building
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-background/0 via-background/10 to-background/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="gap-2 group relative border-2 hover:border-foreground/40"
          >
            <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
              <Boxes className="w-4 h-4 transition-transform group-hover:rotate-12" />
              Explore Library
              <Sparkles className="w-4 h-4 transition-all group-hover:scale-110" />
            </a>
          </Button>


        </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
          <div className="px-4 py-2 bg-card border border-border rounded-full text-sm flex items-center gap-2 hover:border-foreground/40 transition-all hover:scale-105 cursor-default animate-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium">50+ Components</span>
          </div>
          <div className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-foreground/40 transition-all hover:scale-105 cursor-default animate-fade-in" style={{ animationDelay: "0.1s" }}>
            ⚡ Zero Config
          </div>
          <div className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-foreground/40 transition-all hover:scale-105 cursor-default animate-fade-in" style={{ animationDelay: "0.2s" }}>
            🎯 Fully Typed
          </div>
          <div className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-foreground/40 transition-all hover:scale-105 cursor-default animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Sparkles className="w-3 h-3 inline mr-1" />
            AI Powered
          </div>
        </div>

         <div className="pt-16">
          <TerminalDemo/>
         </div>



      </div>
    </div>
  )
}

