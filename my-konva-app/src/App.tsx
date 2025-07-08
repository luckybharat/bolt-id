import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Card, CardHeader, CardContent, CardFooter } from './components/Card';
import { Drawer } from './components/Drawer';
import { Dialog } from './components/Dialog';

function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Konva + Shadcn UI App</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <Button onClick={() => setDrawerOpen(true)} variant="default" size="md">Open Drawer</Button>
        <Button variant="outline" size="md" onClick={() => setDialogOpen(true)}>Open Dialog</Button>
        <Button variant="ghost" size="sm">Ghost Small</Button>
        <Button variant="destructive" size="lg">Destructive Large</Button>
        <Button variant="secondary" size="icon" aria-label="icon button">★</Button>
      </div>
      <form className="space-y-4 max-w-sm">
        <Input label="Name" placeholder="Type your name..." inputSize="md" description="Enter your full name." />
        <Input label="Email" placeholder="Type your email..." inputSize="sm" variant="outline" error="Invalid email address" />
        <Button type="submit" loading>Submit</Button>
      </form>
      <Card className="max-w-sm">
        <CardHeader>Card Title</CardHeader>
        <CardContent>This is a card content area.</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
      <Drawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        title="Drawer Content"
        description="This is a simple drawer."
        footer={<Button onClick={() => setDrawerOpen(false)}>Close</Button>}
      >
        <p>This is a simple drawer using Radix Dialog primitive.</p>
      </Drawer>
      <Dialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title="Dialog Content"
        description="This is a simple dialog/modal."
        footer={<Button onClick={() => setDialogOpen(false)}>Close</Button>}
      >
        <p>This is a simple dialog/modal using Radix Dialog primitive.</p>
      </Dialog>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
