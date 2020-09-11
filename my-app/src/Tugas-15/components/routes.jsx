import React from "react";
import { Route, Switch } from "react-router-dom";

import Settings from "./settings";
import Tugas9 from "../../Tugas-9/tugas9";
import Tugas10 from "../../Tugas-10/tugas10";
import Tugas11 from "../../Tugas-11/tugas11";
import Tugas12 from "../../Tugas-12/tugas12";
import Tugas13 from "../../Tugas-13/tugas13";
import Tugas14 from "../../Tugas-14/BuahIndex";

const Routes = () => (
  <main style={{ margin: "0 auto", paddingTop: "20px", width: "65%" }}>
    <Switch>
      <Route path="/tugas-9" component={Tugas9} />

      <Route path="/tugas-10" component={Tugas10} />

      <Route path="/tugas-11" component={Tugas11} />

      <Route path="/tugas-12" component={Tugas12} />

      <Route path="/tugas-13" component={Tugas13} />

      <Route path="/tugas-14" component={Tugas14} />

      <Route path="/settings" component={Settings} />
    </Switch>
  </main>
);

export default Routes;
