import { useState, useEffect } from "react";
import { Terminal, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const TerminalDemo = () => {
  const [step, setStep] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const fullCommand = "npm install simple-shadcn";
  const components = ["button", "card", "input", "dialog", "toast", "avatar"];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (step === 0) {
      setTypedCommand("");
      let i = 0;
      const typingInterval = setInterval(() => {
        setTypedCommand(fullCommand.substring(0, i + 1));
        i++;
        if (i > fullCommand.length) {
          clearInterval(typingInterval);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    }
  }, [step]);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
          Coming Soon
        </Badge>
        <span className="text-muted-foreground">Simple CLI Installation</span>
      </div>

      <div className="rounded-lg border border-border bg-card overflow-hidden shadow-lg">

        <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full bg-[hsl(45,93%,47%)]" />
            <div className="w-3 h-3 rounded-full bg-[hsl(142,71%,45%)]" />
          </div>
          <div className="flex items-center gap-2 ml-auto text-xs text-muted-foreground">
            <Terminal className="w-3 h-3" />
            <span>terminal</span>
          </div>
        </div>


        <div className="p-6 font-mono text-sm space-y-4 bg-card min-h-[300px]">

          <div className="flex items-center gap-2">
            <span className="text-accent">→</span>
            <span className="text-foreground">
              {step === 0 ? typedCommand : fullCommand}
            </span>
            {step === 0 && <span className="animate-pulse">|</span>}
          </div>


          {step >= 1 && (
            <div className="space-y-2 animate-fade-in">
              <div className="text-muted-foreground">
                ✓ Initializing simple-shadcn installer...
              </div>
              <div className="text-muted-foreground">
                ✓ Detecting project configuration...
              </div>
            </div>
          )}


          {step >= 2 && (
            <div className="space-y-4 animate-fade-in border-l-2 border-accent pl-4">
              <div className="text-foreground font-semibold">
                ? Select components to install:
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {components.map((comp, idx) => (
                  <div
                    key={comp}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-4 h-4 border-2 border-accent rounded flex items-center justify-center bg-accent/10">
                      <Check className="w-3 h-3 text-blue" />
                    </div>
                    <span>{comp}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-xs text-muted-foreground border-t border-border mt-4">
                <span className="text-accent">Space</span> to select · <span className="text-accent">Enter</span> to confirm
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Install multiple shadcn/ui components with a single command
      </p>
    </div>
  );
};
