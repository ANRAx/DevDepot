import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import DeveloperSignup from './components/DeveloperSignup';
import EmployerSignup from './components/EmployerSignup';
import history from './components/history';
import Homepage from './components/Homepage';
import DeveloperAboutMe from './components/DeveloperAboutMe';
import EmployerAboutMe from './components/EmployerAboutMe';
import AboutMe from './components/AboutMe';
import UserContainer from './components/UserContainer';

const App = () => {
  const [is_logged_in, set_login] = useState(false);
  const [is_dev_user, set_user] = useState(false);
  const [devs, set_devs] = useState([]);
  const [in_cart, set_cart] = useState([]);
  const [dev_selected, set_selection] = useState(false);
  const [filter_options, set_filter_options] = useState([]);
  const [username, set_username] = useState('');
  const [password, set_password] = useState('');
  const [stack, set_stack] = useState('');
  const [name, set_name] = useState('');
  const [email, set_email] = useState('');
  const [about, set_about] = useState('');
  const [company, set_company] = useState('');
  const [hourly_rate, set_hourly_rate] = useState('');

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={RegistrationPage}>
            <RegistrationPage
              is_logged_in={is_logged_in}
              is_dev_user={is_dev_user}
              username={username}
            />
          </Route>
          <Route exact path="/dev-signup" component={DeveloperSignup}>
            <DeveloperSignup
              is_logged_in={is_logged_in}
              is_dev_user={is_dev_user}
              username={username}
            />
          </Route>
          <Route exact path="/employer-signup" component={EmployerSignup}>
            <EmployerSignup
              is_logged_in={is_logged_in}
              is_dev_user={is_dev_user}
              username={username}
            />
          </Route>
          <Route exact path="/user-container" component={UserContainer}>
            <UserContainer is_dev_user={is_dev_user} />
          </Route>
          <Route exact path="/homepage" component={Homepage}>
            <Homepage
              devs={devs}
              in_cart={in_cart}
              dev_selected={dev_selected}
              filter_options={filter_options}
              username={username}
            />
          </Route>
          <Route exact path="/dev-aboutme" component={DeveloperAboutMe}>
            <DeveloperAboutMe
              username={username}
              password={password}
              email={email}
              name={name}
              stack={stack}
              hourly_rate={hourly_rate}
              about={about}
            />
          </Route>
          <Route exact path="/employer-aboutme" component={EmployerAboutMe}>
            <EmployerAboutMe
              username={username}
              password={password}
              email={email}
              name={name}
              company={company}
              about={about}
            />
          </Route>
          <Route exact path="/aboutme" component={AboutMe}>
            <AboutMe
              username={username}
              password={password}
              email={email}
              name={name}
              company={company}
              about={about}
            />
          </Route>
          <Route exact path="/login" component={LoginPage}>
            <LoginPage
              is_logged_in={is_logged_in}
              is_dev_user={is_dev_user}
              username={username}
              password={password}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
