import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import RouteGuard from "./Tools/RouteGuard";
import RoutePrivate from "./Tools/RoutePrivate";
import WeatherCurrentFilter from "./Components/WeatherCurrentFilter";
import WeatherCurrentIndex from "./Components/WeatherCurrentIndex";
import WeatherSeveralRectangle from "./Components/WeatherSeveralRectangle";
import WeatherSeveralCircle from "./Components/WeatherSeveralCircle";
import WeatherSeveralFilterRect from "./Components/WeatherSeveralFilterRect";
import WeatherSeveralFilterCirc from "./Components/WeatherSeveralFilterCirc";
import WeatherForecastFilter from "./Components/WeatherForecastFilter";
import WeatherForecastIndex from "./Components/WeatherForecastIndex";
import LoginPage from "./Components/LoginPage";
import Navbar from "./Components/Navbar";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <div className="content">
            <Switch>
              <RouteGuard
                exact
                path="/Login"
                render={routeProps => (
                  <React.Fragment>
                    <Navbar {...routeProps} />
                    <LoginPage {...routeProps} />
                  </React.Fragment>
                )}
              />
              <RoutePrivate
                exact
                path="/current"
                render={routeProps => (
                  <React.Fragment>
                    <Navbar {...routeProps} />
                    <WeatherCurrentFilter {...routeProps} />
                    <WeatherCurrentIndex {...routeProps} />
                  </React.Fragment>
                )}
              />
              <RoutePrivate
                exact
                path="/several/Rectangle"
                render={routeProps => (
                  <React.Fragment>
                    <Navbar {...routeProps} />
                    <WeatherSeveralFilterRect {...routeProps} />
                    <WeatherSeveralRectangle {...routeProps} />
                  </React.Fragment>
                )}
              />
              <RoutePrivate
                exact
                path="/several/Circle"
                render={routeProps => (
                  <React.Fragment>
                    <Navbar {...routeProps} />
                    <WeatherSeveralFilterCirc {...routeProps} />
                    <WeatherSeveralCircle {...routeProps} />
                  </React.Fragment>
                )}
              />
              <RoutePrivate
                exact
                path="/forecast"
                render={routeProps => (
                  <React.Fragment>
                    <Navbar {...routeProps} />
                    <WeatherForecastFilter {...routeProps} />
                    <WeatherForecastIndex {...routeProps} />
                  </React.Fragment>
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
