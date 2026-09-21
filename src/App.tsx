import { type ReactNode } from 'react';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { Header } from './components/Header';
import { Quiz } from './components/Quiz';
import { Result } from './pages/Result';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Quiz} />
      <Route path="/result" component={Result} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Router />
        </main>
      </div>
    </WouterRouter>
  );
}

export default App;
