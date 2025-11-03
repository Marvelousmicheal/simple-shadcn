"use client";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Sparkles } from "lucide-react";
import React from "react";
import { Toaster, toast } from "sonner";

export function ButtonDemo() {
  return (
    <div className="space-y-3">
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button
          variant="default"
          onClick={() => toast.success("Default button clicked!")}
        >
          Default
        </Button>
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
  );
}

export function CardDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a beautiful card component</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Cards can contain any content and are perfect for organizing
          information.
        </p>
      </CardContent>
    </Card>
  );
}

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}

export function InputDemo() {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className="w-full max-w-md space-y-3">
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
        <p className="text-sm text-muted-foreground">
          You typed: {inputValue}
        </p>
      )}
    </div>
  );
}

export function CheckboxDemo() {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
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
        <p className="text-sm text-muted-foreground">
          ✓ You've accepted the terms
        </p>
      )}
    </div>
  );
}

export function SwitchDemo() {
  const [isSwitched, setIsSwitched] = React.useState(false);
  return (
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
          <AlertDescription>
            You'll receive updates about new features
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

export function SliderDemo() {
  const [sliderValue, setSliderValue] = React.useState([50]);
  return (
    <div className="w-full max-w-md space-y-3">
      <Label>Volume: {sliderValue[0]}%</Label>
      <Slider
        value={sliderValue}
        onValueChange={setSliderValue}
        max={100}
        step={1}
      />
    </div>
  );
}

export function TabsDemo() {
  return (
    <Tabs defaultValue="tab1" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Settings</TabsTrigger>
        <TabsTrigger value="tab3">About</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="space-y-2">
        <p className="text-sm">
          Manage your account settings and preferences.
        </p>
      </TabsContent>
      <TabsContent value="tab2" className="space-y-2">
        <p className="text-sm">Configure application settings.</p>
      </TabsContent>
      <TabsContent value="tab3" className="space-y-2">
        <p className="text-sm">Learn more about this application.</p>
      </TabsContent>
    </Tabs>
  );
}

export function AlertDemo() {
  return (
    <div className="w-full max-w-md space-y-3">
      <Alert>
        <Sparkles className="h-4 w-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          This is an informational alert message.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export function ProgressDemo() {
  const [progressValue, setProgressValue] = React.useState(60);
  return (
    <div className="w-full max-w-md space-y-3">
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
  );
}

export function AvatarDemo() {
  return (
    <div className="flex gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  );
}

export function SeparatorDemo() {
  return (
    <div className="w-full max-w-md space-y-3">
      <div>Section 1</div>
      <Separator />
      <div>Section 2</div>
      <Separator />
      <div>Section 3</div>
    </div>
  );
}

export function RadioGroupDemo() {
  const [selectedRadio, setSelectedRadio] = React.useState("option1");
  return (
    <div className="space-y-3">
      <RadioGroup
        value={selectedRadio}
        onValueChange={setSelectedRadio}
      >
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
      <p className="text-sm text-muted-foreground">
        Selected: {selectedRadio}
      </p>
    </div>
  );
}

export function SonnerDemo() {
  return (
    <div>
      <Toaster />
      <Button
        variant="default"
        onClick={() => toast.success("Sonner toast clicked!")}
      >
        Show Toast
      </Button>
    </div>
  );
}
