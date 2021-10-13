import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Top from "./top/Top";
import Footer from "./common/Footer";
import { Pages } from "./Pages";
import Project from "./project/Project";
import Left from "./common/Left";
import ProjectMap from "./project/map/ProjectMap";
import ProjectGroup from "./project/group/ProjectGroup";

const App: React.FC = () => (
  <div className="bg-cream h-full w-full relative">
    <BrowserRouter>
      <div className="container h-full w-full font-serif bg-cream">
        <div className="h-full w-full">
          <div className="flex h-full pc:w-full">
            <div className="hidden pc:inline-block pc:h-screen pc:w-1/4">
              <Left />
            </div>
            <div className="h-full pc:w-3/4 pc:overflow-y-scroll">
              <div className="min-h-screen h-full w-full">
                <Switch>
                  <Route exact path={Pages.top.path} component={Top} />
                  <Route exact path={Pages.project.path} component={Project} />
                  <Route
                    exact
                    path={Pages.projectGroup.path}
                    component={ProjectGroup}
                  />
                  <Route
                    exact
                    path={Pages.projectMap.path}
                    component={ProjectMap}
                  />
                </Switch>
              </div>
              <div className="w-full">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
