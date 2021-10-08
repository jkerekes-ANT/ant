import { UiThemeProvider } from '@ant/ui';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AboutPage } from './about';
import { AppSettingsProvider } from './AppSettings';
import { PageLayout } from './components';
import { DashboardPage } from './dashboard';
import { PlayPage } from './play';

export const App = () => {
  // const [m, setMessage] = useState<Message>({ message: '' });

  // useEffect(() => {
  //   fetch('/api')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);

  return (
    <UiThemeProvider>
      <AppSettingsProvider>
      <Router>
        <Switch>
          <Route path="/about">
            <PageLayout>
              <AboutPage />
            </PageLayout>
          </Route>
          <Route path="/play">
            <PageLayout>
              <PlayPage />
            </PageLayout>
          </Route>
          <Route path="/">
            <PageLayout>
              <DashboardPage />
            </PageLayout>
          </Route>
        </Switch>
      </Router>
      </AppSettingsProvider>
    </UiThemeProvider>
  );
};

export default App;
