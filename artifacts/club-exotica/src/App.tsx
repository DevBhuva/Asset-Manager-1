import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { SmoothScroll } from '@/components/SmoothScroll';

// Layout & Components
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Pages
import { Home } from '@/pages/Home';
import { Destinations } from '@/pages/Destinations';
import { Memberships } from '@/pages/Memberships';
import { Experiences } from '@/pages/Experiences';
import { Gallery } from '@/pages/Gallery';
import { Testimonials } from '@/pages/Testimonials';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/memberships" component={Memberships} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/about" component={About} />
          <Route path="/book" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SmoothScroll>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </SmoothScroll>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
