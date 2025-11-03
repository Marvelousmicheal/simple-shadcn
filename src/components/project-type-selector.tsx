interface ProjectTypeSelectorProps {
    selectedType: string | null;
    onSelectType: (type: string) => void
}


export default function ProjectTypeSelector({selectedType, onSelectType}: ProjectTypeSelectorProps) {
    const projectTypes = [
  { id: "nextjs", label: "Next.js", description: "React framework" },
  { id: "react", label: "React", description: "JavaScript library" },
  { id: "vue", label: "Vue", description: "Progressive framework" },
  { id: "vite", label: "Vite", description: "Build tool" },
];
  return (
       <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Select Project Type</h2>
        <p className="text-muted-foreground text-sm">Choose your development framework</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
    {projectTypes.map((type)=>(
        <button key={type.id} onClick={() => onSelectType(type.id)} className={`p-5 rounded-lg border transition-all text-left ${
              selectedType === type.id
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card hover:border-foreground/20"}`}>
            <div className="font-medium">{type.label}</div>
            <div className={`text-xs mt-1 ${selectedType === type.id ? 'opacity-70' : 'text-muted-foreground'}`}>{type.description}</div>
        </button>
    ))}
      </div>
      </div>
  )
}

 