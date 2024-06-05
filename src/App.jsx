import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Subscription from './components/Subscription';
import VideoPlayer from './components/VideoPlayer';
import LanguageData from './components/LanguageData';
import './App.css';
import FooterLink from './components/Footer/FooterLink';
import loding from './images/loading.gif';
import { CounterProvider } from './components/Context';

// Lazy-loaded components
const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const Detail = lazy(() => import('./components/Detail'));
const Rent = lazy(() => import('./components/Rent'));

function App() {
  return (
    <>
      <BrowserRouter>
        <CounterProvider>
          <Navbar />
          <Suspense fallback={<img src={loding} alt="Loading..." />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Rent" component={Rent} />
              <Route exact path="/Subscription" component={Subscription} />
              <Route exact path="/Langauge/:id" component={LanguageData} />
              <Route exact path="/footerlink/:name" component={FooterLink} />
              <Route exact path="/Login" component={Login} />
              <Route path="/detail/:id" component={Detail} />
              <Route exact path="/player" component={VideoPlayer} />
              <Route path="/:name/:id" component={Home} />
              <Redirect to="/" />
            </Switch>
          </Suspense>
          <Footer />
        </CounterProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
