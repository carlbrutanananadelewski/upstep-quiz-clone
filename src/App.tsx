import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Header } from './components/Header';
import { Quiz } from './components/Quiz';
import { ProductDetail } from './pages/ProductDetail';

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <h1 className="text-2xl font-semibold">404 - Page Not Found</h1>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Quiz} />
      <Route path="/products/:id" component={ProductDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <div className="min-h-[100dvh] flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex flex-col">
          <Router />
        </main>
      </div>
    </WouterRouter>
  );
}

export default App;
