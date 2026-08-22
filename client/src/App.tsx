/**
 * CapiLoop — Horta Escultural: rotas institucionais em uma experiência contínua e orgânica.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import ForBusinesses from "@/pages/ForBusinesses";
import HowItWorks from "@/pages/HowItWorks";
import Impact from "@/pages/Impact";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/como-funciona"} component={HowItWorks} />
      <Route path={"/para-estabelecimentos"} component={ForBusinesses} />
      <Route path={"/impacto"} component={Impact} />
      <Route path={"/faq"} component={Faq} />
      <Route path={"/contato"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
