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
        <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
        <Button variant="outline" onClick={() => setDialogOpen(true)}>Open Dialog</Button>
      </div>
      <form className="space-y-4 max-w-sm">
        <Input placeholder="Type something..." />
        <Button type="submit">Submit</Button>
      </form>
      <Card className="max-w-sm">
        <CardHeader>Card Title</CardHeader>
        <CardContent>This is a card content area.</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <h2 className="text-xl font-bold mb-2">Drawer Content</h2>
        <p>This is a simple drawer.</p>
        <Button className="mt-4" onClick={() => setDrawerOpen(false)}>Close</Button>
      </Drawer>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <h2 className="text-xl font-bold mb-2">Dialog Content</h2>
        <p>This is a simple dialog/modal.</p>
        <Button className="mt-4" onClick={() => setDialogOpen(false)}>Close</Button>
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
