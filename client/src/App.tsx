import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Consulting from "@/pages/consulting";
import PropertyManagement from "@/pages/property-management";
import Brokerage from "@/pages/brokerage";
import Lending from "@/pages/lending";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/consulting" component={Consulting}/>
      <Route path="/propertymanagement" component={PropertyManagement}/>
      <Route path="/brokerageservices" component={Brokerage}/>
      <Route path="/lending" component={Lending}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
