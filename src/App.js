/* eslint-disable prettier/prettier */
import { ChakraProvider } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Suspense
          fallback={<img alt="Loading..." src="/images/LoadingImage.gif" />}
        >
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </ChakraProvider>
  );
}

export default App;
