"use client";
import ComponentSelector from "@/components/component-selector";
import ComponentsPlayground from "@/components/components-playground";
import LandingPage from "@/components/landing-page";
import ProjectPurposeSelector from "@/components/project-purpose-selector";
import ProjectTypeSelector from "@/components/project-type-selector";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { useEffect, useState } from "react";


const purposes = [
  {
    id: "landing",
    label: "Landing Page",
    description: "Marketing and promotional sites",
    components: ["Button", "Card", "Badge", "Alert", "Avatar", "Separator"]
  },
  {
    id: "webapp",
    label: "Web App",
    description: "Interactive applications",
    components: ["Button", "Input", "Form", "Dialog", "Toast", "Tabs", "Select", "Checkbox"]
  },
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Data-driven interfaces",
    components: ["Table", "Chart", "Card", "Badge", "Tabs", "Select", "Calendar", "Progress"]
  },
  {
    id: "custom",
    label: "Custom Setup",
    description: "Manual component selection",
    components: []
  },
];

export default function Home() {
  const [showLanding, setShowLanding] = useState(true)
  const [selectedComponents, setSelectedComponents] = useState<string[]>([])
  const [selectedProjectType, setSelectedProjectType] = useState<string | null>(null);
  const [selectedPurpose, setSelectedPurpose] = useState<string | null>(null);

  useEffect(() => {
    if (selectedPurpose) {
      const purpose = purposes.find(p => p.id === selectedPurpose)
      if (purpose) {
        setSelectedComponents(purpose.components)
      }
    }
  }, [selectedPurpose])
  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />
  }
  const handleToggleComponent = (component: string) => {
    setSelectedComponents(prev =>
      prev.includes(component)
        ? prev.filter(c => c !== component)
        : [...prev, component]
    )
  }
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* header section */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Button onClick={() => setShowLanding(true)} size="sm" variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <div className="h-4 w-px bg-border" />
              <h1 className="text-3xl font-bold">shadcn/ui Installer</h1>
            </div>
            <p className="text-muted-foreground pl-20">Configure your component installation</p>
          </div>
          {
            selectedComponents.length > 0 && (
              <Button variant="default" size="sm" className="gap-2" >
                <Check className="w-4 h-4" />
                Done
              </Button>
            )
          }
        </div>



        <ProjectTypeSelector selectedType={selectedProjectType} onSelectType={setSelectedProjectType} />



        {
          selectedProjectType && (
            <ProjectPurposeSelector
              selectedPurpose={selectedPurpose}
              onSelectPurpose={setSelectedPurpose}
              purposes={purposes}
            />
          )
        }

        {
          selectedPurpose && (
            <ComponentSelector
              selectedComponents={selectedComponents}
              onToggleComponent={handleToggleComponent}
              projectPurpose={selectedPurpose}
              projectType={selectedProjectType || undefined}

            />
          )
        }

        {
          selectedPurpose && selectedComponents.length > 0 && (
            <ComponentsPlayground selectedComponents={selectedComponents} />
          )
        }

        {
          selectedPurpose && selectedComponents.length > 0 && (
            
          )
        }

      </div>
    </div>
  );
}