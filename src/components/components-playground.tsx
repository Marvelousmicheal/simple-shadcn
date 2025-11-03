import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Play, Code2, Palette, Sparkles, CodeSquareIcon } from "lucide-react";
import { toast } from "sonner";

interface ComponentsPlaygroundProps {
    selectedComponents: string[];
}
{ }
export default function ComponentsPlayground({ selectedComponents }: ComponentsPlaygroundProps) {
    const [activeDemo, setActiveDemo] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isSwitched, setIsSwitched] = useState(false);
    const [sliderValue, setSliderValue] = useState([50]);
    const [progressValue, setProgressValue] = useState(60);
    const [selectedRadio, setSelectedRadio] = useState("option1");
    const componentDemos: Record<string, { render: () => React.ReactElement; code: string }> = {
        "Button": {
            render: () => (
                <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                        <Button variant="default" onClick={() => toast.success("Default button clicked!")}>Default</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </div>
            ),
            code: `<Button variant="default" onClick={() => toast.success("Clicked!")}>
  Click Me
</Button>`
        },
        "Card": {
            render: () => (
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>This is a beautiful card component</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            Cards can contain any content and are perfect for organizing information.
                        </p>
                    </CardContent>
                </Card>
            ),
            code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
</Card>`
        },
        "Badge": {
            render: () => (
                <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                </div>
            ),
            code: `<Badge variant="default">Label</Badge>
<Badge variant="secondary">Status</Badge>
<Badge variant="outline">Count</Badge>`
        },
        "Input": {
            render: () => (
                <div className="space-y-3 w-full max-w-md">
                    <div className="space-y-2">
                        <Label htmlFor="demo-input">Email</Label>
                        <Input
                            id="demo-input"
                            type="email"
                            placeholder="Enter your email"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                    {inputValue && (
                        <p className="text-sm text-muted-foreground">You typed: {inputValue}</p>
                    )}
                </div>
            ),
            code: `<Input
  type="email"
  placeholder="Enter your email"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
/>`
        },
        "Checkbox": {
            render: () => (
                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="demo-checkbox"
                            checked={isChecked}
                            onCheckedChange={(checked) => {
                                setIsChecked(checked as boolean);
                                toast.info(checked ? "Checked!" : "Unchecked!");
                            }}
                        />
                        <Label htmlFor="demo-checkbox">Accept terms and conditions</Label>
                    </div>
                    {isChecked && (
                        <p className="text-sm text-muted-foreground">✓ You've accepted the terms</p>
                    )}
                </div>
            ),
            code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>`
        },
        "Switch": {
            render: () => (
                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="demo-switch"
                            checked={isSwitched}
                            onCheckedChange={setIsSwitched}
                        />
                        <Label htmlFor="demo-switch">Enable notifications</Label>
                    </div>
                    {isSwitched && (
                        <Alert>
                            <AlertTitle>Notifications enabled</AlertTitle>
                            <AlertDescription>You'll receive updates about new features</AlertDescription>
                        </Alert>
                    )}
                </div>
            ),
            code: `<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable</Label>
</div>`
        },
        "Slider": {
            render: () => (
                <div className="space-y-3 w-full max-w-md">
                    <Label>Volume: {sliderValue[0]}%</Label>
                    <Slider
                        value={sliderValue}
                        onValueChange={setSliderValue}
                        max={100}
                        step={1}
                    />
                </div>
            ),
            code: `<Slider
  value={[50]}
  onValueChange={(value) => setValue(value)}
  max={100}
  step={1}
/>`
        },
        "Tabs": {
            render: () => (
                <Tabs defaultValue="tab1" className="w-full max-w-md">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="tab1">Account</TabsTrigger>
                        <TabsTrigger value="tab2">Settings</TabsTrigger>
                        <TabsTrigger value="tab3">About</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1" className="space-y-2">
                        <p className="text-sm">Manage your account settings and preferences.</p>
                    </TabsContent>
                    <TabsContent value="tab2" className="space-y-2">
                        <p className="text-sm">Configure application settings.</p>
                    </TabsContent>
                    <TabsContent value="tab3" className="space-y-2">
                        <p className="text-sm">Learn more about this application.</p>
                    </TabsContent>
                </Tabs>
            ),
            code: `<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>`
        },
        "Alert": {
            render: () => (
                <div className="space-y-3 w-full max-w-md">
                    <Alert>
                        <Sparkles className="h-4 w-4" />
                        <AlertTitle>Info</AlertTitle>
                        <AlertDescription>This is an informational alert message.</AlertDescription>
                    </Alert>
                </div>
            ),
            code: `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    Your message here
  </AlertDescription>
</Alert>`
        },
        "Progress": {
            render: () => (
                <div className="space-y-3 w-full max-w-md">
                    <div className="space-y-2">
                        <Label>Loading: {progressValue}%</Label>
                        <Progress value={progressValue} />
                    </div>
                    <Button
                        size="sm"
                        onClick={() => {
                            const newValue = (progressValue + 10) % 110;
                            setProgressValue(newValue);
                        }}
                    >
                        Increase Progress
                    </Button>
                </div>
            ),
            code: `<Progress value={60} />`
        },
        "Avatar": {
            render: () => (
                <div className="flex gap-3">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                        <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                </div>
            ),
            code: `<Avatar>
  <AvatarImage src="image-url" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>`
        },
        "Separator": {
            render: () => (
                <div className="space-y-3 w-full max-w-md">
                    <div>Section 1</div>
                    <Separator />
                    <div>Section 2</div>
                    <Separator />
                    <div>Section 3</div>
                </div>
            ),
            code: `<div>Content 1</div>
<Separator />
<div>Content 2</div>`
        },
        "Radio Group": {
            render: () => (
                <div className="space-y-3">
                    <RadioGroup value={selectedRadio} onValueChange={setSelectedRadio}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option1" id="option1" />
                            <Label htmlFor="option1">Option 1</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option2" id="option2" />
                            <Label htmlFor="option2">Option 2</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option3" id="option3" />
                            <Label htmlFor="option3">Option 3</Label>
                        </div>
                    </RadioGroup>
                    <p className="text-sm text-muted-foreground">Selected: {selectedRadio}</p>
                </div>
            ),
            code: `<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
</RadioGroup>`
        }
    };
    const availableDemos = selectedComponents.filter(comp => comp in componentDemos)
    if (availableDemos.length === 0) {
        return (
            <Card className="w-full">
                <CardContent className="pt-6 text-center text-muted-foreground">
                    <Palette className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Select components to see live previews</p>
                </CardContent>
            </Card>
        )
    }
    return (
        <div className="space-y-6">
          
                <CodeSquareIcon className="w-5 h-5" />
                <div>
                    <h2 className="text-2xl font-semibold">Component Playground</h2>
                    <p className="text-sm text-muted-foreground">
                        Interactive previews of your selected components
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {availableDemos.map((component) => (
                        <Button
                            key={component}
                            variant={activeDemo === component ? "default" : "outline"}
                            size={"sm"}
                            onClick={() => setActiveDemo(component)}
                            className="justify-start"
                        >
                            {component}
                        </Button>
                    ))}
                </div>

                {activeDemo && componentDemos[activeDemo] && (
                    <Card className="animate-fade-in">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Sparkles className="w-5 h-5" />
                            </CardTitle>
                            <CardDescription>
                                Interactive demo - try clicking and interacting!
                            </CardDescription>

                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="p-6 rounded-lg border border-border bg-card/50 min-h-[200px] flex items-center justify-center">
                                {componentDemos[activeDemo].render()}
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <Code2 className="w-4 h-4" />
                                    Code Example
                                </div>
                                <pre className="p-4 rounded-lg bg-foreground/5 border border-border overflow-x-auto">
                                    <Code2 className="w-4 h-4" />
                                    {componentDemos[activeDemo].code}
                                </pre>
                            </div>


                        </CardContent>
                    </Card>
                )}
           
        </div>
    )
}

