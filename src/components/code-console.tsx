import { useState } from "react"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { Check, Copy } from "lucide-react"

interface codeConsoleProps {
    selectedComponents: string[]
}
type PackageManager = "npm" | "pnpm" | "bun"
export default function CodeConsole({ selectedComponents }: codeConsoleProps) {
    const [activeTab, setActiveTab] = useState<PackageManager>("npm")
    const [copied, setCopied] = useState(false)

    const generateCommand = (pm: PackageManager) => {
        if (selectedComponents.length === 0) return ""


        const components = selectedComponents.map(c => c.toLocaleLowerCase().replace(/\s+/g, "-")).join(" ")

        switch (pm) {
            case "npm":
                return `npx shadcn@latest add ${components}`
            case "pnpm":
                return `pnpm dlx shadcn@latest add ${components}`
            case "bun":
                return `bunx shadcn@latest add ${components}`;
        }
    }

    const handleCopy = async () => {
        const command = generateCommand(activeTab)
        await navigator.clipboard.writeText(command)
        setCopied(true)
        toast.success("Copied to clipboard")
        setTimeout(() => setCopied(false), 2000)
    }


    const command = generateCommand(activeTab)
    return (
        <div className="space-y-4">
            <div>
                <h2 className="text-2xl font-semibold mb-2">Installation Command</h2>
                <p className="text-muted-foreground text-sm">
                    Copy and run this command in your project directory
                </p>
            </div>

            <div className="border border-border rounded-lg overflow-hidden bg-card">
                <div className="flex border-b border-border bg-muted/30">
                    {
                        (["npm", "pnpm", "bun"] as PackageManager[]).map((pm) => (
                            <button
                                key={pm}
                                onClick={() => setActiveTab(pm)}
                                className={`px-5 py-3 text-sm font-medium transition-colors ${activeTab === pm
                                    ? "bg-card text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {pm}
                            </button>
                        ))
                    }
                </div>




                <div className="relative">
                    <div className="p-5 font-mono text-sm bg-foreground/5">
                        {
                            command ? (
                                <code className="text-foreground">
                                    {command}
                                </code>
                            ) : (
                                <code className="text-muted-foreground">
                                    Select components to generate command
                                </code>
                            )
                        }
                    </div>
                    {
                        command && (
                            <Button
                                size="sm"
                                variant="ghost"
                                onClick={handleCopy}
                                className="absolute top-2 right-2"
                            >
                                {copied ? (
                                    <Check className="w-4 h-4" />
                                ) : (
                                    <Copy className="w-4 h-4" />
                                )}
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

