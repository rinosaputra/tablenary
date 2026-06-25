import React from "react";
import { Button } from "@/shared/components/ui/button";

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Vite + React + Tailwind</h1>
        <p className="text-lg">Count: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </div>
  );
};

export default App;
