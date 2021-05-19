import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Overview, OverviewUsers, OverviewRevenue} from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Products from './pages/Products';


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      // console.log("Details do not match!");
      setError("Details do not match!");

    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" });
    setError(" ");
  }

  return (
    <>
      <div className="App">
        {(user.email !== "") ? (
          <div className="welcome">
            <Router>
              <Sidebar />
              <Switch>
                <Route path='/overview' exact component={Overview} />
                <Route path='/overview/users' exact component={OverviewUsers} />
                <Route path='/overview/revenue' exact component={OverviewRevenue} />
                <Route path='/reports' exact component={Reports} />
                <Route path='/reports/reports1' exact component={ReportsOne} />
                <Route path='/reports/reports2' exact component={ReportsTwo} />
                <Route path='/reports/reports3' exact component={ReportsThree} />
                <Route path='/products' exact component={Products} />
              </Switch>
            </Router>
            <h2>Welcome, <span>{user.name}</span></h2>
            <button onClick={Logout}>LOGOUT</button>
          </div>

        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>

    </>

  );
}

export default App;
