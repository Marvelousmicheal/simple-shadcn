"use client"
import { Button } from "@/components/ui/button";
import { spawn } from "child_process";
import { Home, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";



const ComponentGame = () => {
  const [gameStarted, setGameStarted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)
  const [score, setScore] = useState(0)
  const [targets, setTargets] = useState<Array<{ id: number; x: number; y: number; component: string }>>([])


  const components = ["Button", "Card", "Dialog", "Toast", "Badge", "Avatar", "Switch"];

  useEffect(() => {
    if (!gameStarted || timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setGameStarted(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [gameStarted, timeLeft])


  useEffect(() => {
    if (!gameStarted) return

    const spawnTarget = () => {
      const newTarget = {
        id: Date.now(),
        x: Math.random() * 80 + 10,
        y: Math.random() * 70 + 10,
        component: components[Math.floor(Math.random() * components.length)]
      }
      setTargets(prev => [...prev, newTarget])

      setTimeout(() => {
        setTargets(prev => prev.filter(t => t.id !== newTarget.id))
      }, 2000)
    }

    const interval = setInterval(spawnTarget, 800)
    return () => clearInterval(interval)
  }, [gameStarted]
  )

  const handleClick = (id: number) => {
    setTargets(prev => prev.filter(t => t.id !== id))
    setScore(prev => prev + 1)
  }
  const startGame = () => {
    setScore(0);
    setTimeLeft(15);
    setGameStarted(true);
    setTargets([]);
  };
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold">Quick! Click the Components!</h3>
        <p className="text-muted-foreground text-sm">
          {
            gameStarted ? `Time: ${timeLeft} | Score: ${score}` : "Click components as fast as you can!"
          }
        </p>
      </div>

      <div className="relative h-80 rounded-lg border-2 border-dashed border-border bg-card overflow-hidden">
        {
          !gameStarted && timeLeft === 15 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="gap-2" onClick={startGame}>
                <Zap className="w-4 h-4" />
                Start Game
              </Button>
            </div>
          )
        }

        {
          gameStarted && targets.map(target => (
            <button key={target.id}
              className="absolute px-3 py-1.5 bg-foreground text-background rounded-lg text-sm font-medium hover:scale-110 transition-transform animate-fade-in cursor-pointer"
              onClick={() => handleClick(target.id)}
              style={{
                left: `${target.x}%`,
                top: `${target.y}%`,
                transform: "ranslate(-50%, -50%)"

              }}
            >
              {target.component}
            </button>
          ))
        }

        {
          !gameStarted && timeLeft < 15 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 animate-scale-in">
              <div className="text-center space-y-2">
                <div className="text-6xl font-bold">
                  {score}
                </div>
                <p className="text-muted-foreground">Components Clicked!</p>
              </div>
              <Button onClick={startGame} variant="outline" className="gap-2">
                <Zap className="size-4" />
                Play Again
              </Button>
            </div>
          )
        }
      </div>

    </div>
  );
}

export default function DonePage() {

  const [showConfetti, setShowConfetti] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowConfetti(false), 3000)
  }, [])


  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {
        showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-fade-in"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-20px',
                  animation: `fall ${2 + Math.random() * 2}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              >
                <Sparkles
                  className="text-primary"
                  size={16 + Math.random() * 16}
                  style={{ opacity: 0.3 + Math.random() * 0.7 }}
                />
              </div>
            ))}
          </div>
        )
      }
      <div className="max-w-2xl mx-auto text-center space-y-12 relative z-10">

        <div className="space-y-6 animate-scale-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-foreground text-background animate-bounce">
            <Sparkles className="w-10 h-10" />
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-bold">
              All Set!
            </h1>
            <p className="text-xl text-muted-foreground">
              Your components are ready to install.
              <br />
              Thanks for using our installer!
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/">
              <Button
                variant="default"
                size="lg"

                className="gap-2"
              >

                <Home className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

       <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <ComponentGame/>
       </div>


      </div>

    </div>
  )
}
