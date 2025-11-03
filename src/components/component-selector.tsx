import { useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Plus, X } from "lucide-react";

interface ComponentSelectorProps {
    selectedComponents: string[];
    onToggleComponent: (component: string) => void;
    projectType?: string
    projectPurpose?: string
}

const allComponents = [
    "Accordion", "Alert", "Alert Dialog", "Avatar", "Badge", "Button",
    "Calendar", "Card", "Carousel", "Chart", "Checkbox", "Collapsible",
    "Command", "Context Menu", "Dialog", "Drawer", "Dropdown Menu", "Form",
    "Hover Card", "Input", "Label", "Menubar", "Navigation Menu", "Pagination",
    "Popover", "Progress", "Radio Group", "Scroll Area", "Select", "Separator",
    "Sheet", "Skeleton", "Slider", "Switch", "Table", "Tabs", "Textarea",
    "Toast", "Toggle", "Tooltip"
];

export default function ComponentSelector({ selectedComponents, onToggleComponent, projectType, projectPurpose }: ComponentSelectorProps) {
    const [isLoadingAI, setIsLoadingAI] = useState(false)
    const isSelected = (component: string) => selectedComponents.includes(component)

    const getComponentUrl = (component: string) => {
        const slug = component.toLowerCase().replace(/ /g, '-');
        return `https://ui.shadcn.com/docs/components/${slug}`
        return
    }
    const handleViewComponent = (component: string) => {
        window.open(getComponentUrl(component), "_blank")
    }
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Selected Components</h2>
                    <p className="text-muted-foreground text-sm">
                        {selectedComponents.length} component{selectedComponents.length !== 1 ? 's' : ''} selected
                    </p>
                </div>
                <Button
                    disabled={isLoadingAI}
                    variant="outline"
                    className="gap-2"
                >
                    {isLoadingAI ? 'Generating...' : 'Generate with AI'}
                </Button>
            </div>


            {
                selectedComponents.length > 0 && (
                    <div className="p-5 rounded-lg border border-border bg-card">
                        <div className="flex flex-wrap gap-2">

                        {selectedComponents.map((component) => (
                            <div key={component} className="flex items-center gap-1 bg-foreground text-background rounded-lg">
                                <button
                                    onClick={() => onToggleComponent(component)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm hover:bg-foreground/80 transition-colors group rounded-l-lg">
                                    {component}
                                    <X className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                                </button>
                                <button
                                    onClick={() => handleViewComponent(component)}
                                    className="px-2 py-1.5 border-l border-background/20 hover:bg-foreground/80 transition-colors rounded-r-lg"
                                    title="View documentation"
                                >
                                    <ExternalLink className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                        </div>
                    </div>
                )
            }

            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Available Components</h3>
                <div className="p-5 rounded-lg border border-border bg-card max-h-64 overflow-y-auto">
                    <div className="flex flex-wrap gap-2">
                        {
                            allComponents.filter(comp => !isSelected(comp)).map((component) => (
                                <div key={component} className="flex items-center gap-1 bg-secondary rounded-lg">
                                    <button
                                    onClick={()=> onToggleComponent(component)}
                                        className="flex items-center gap-1.5 px-3 py-1.5 text-secondary-foreground text-sm hover:bg-muted transition-colors group rounded-l-lg"
                                    >
                                        <Plus className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                                        {component}
                                    </button>
                                    <button
                                    onClick={()=> handleViewComponent(component)}
                                        className="px-2 py-1.5 border-l border-border hover:bg-muted transition-colors rounded-r-lg"
                                        title="View documentation"
                                    >
                                        <ExternalLink className="w-3 h-3 opacity-60" />
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

