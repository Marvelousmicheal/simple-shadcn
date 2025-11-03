

interface Purpose {
    id: string;
    label: string;
    description: string;
    components: string[];
}

interface ProjectPurposeSelectorProps {
    selectedPurpose: string | null;
    onSelectPurpose: (purpose: string) => void
    purposes: Purpose[]
}
export default function ProjectPurposeSelector({selectedPurpose, onSelectPurpose, purposes}: ProjectPurposeSelectorProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Choose Project Purpose</h2>
        <p className="text-muted-foreground text-sm">Each purpose comes with preselected components</p>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
{
    purposes.map((purpose)=>(
        <button 
          className={`p-6 rounded-lg border transition-all text-left ${
              selectedPurpose === purpose.id
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card hover:border-foreground/20"
            }`}
            key={purpose.id}
            onClick={()=>onSelectPurpose(purpose.id)}
        >
            <div className="font-medium text-lg mb-1">{purpose.label}</div>
            <div className={`text-xs mb-3 ${selectedPurpose === purpose.id ? 'opacity-70' : 'text-muted-foreground'}`}>
              {purpose.description}
            </div>
            {purpose.components.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {
                  purpose.components.map((comp)=>(
                    <span key={comp} className={`text-xs px-2 py-0.5 rounded ${
                      selectedPurpose === purpose.id 
                        ? 'bg-background/20 text-background' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {comp}
                    </span>
                  ))
                }

              </div>
    )}
        </button>
    ))
}
       </div>
      </div>
  )
}

 