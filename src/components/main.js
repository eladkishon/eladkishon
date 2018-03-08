import {h} from "hyperapp"
import Home from "./home";
import Api from "./api";
import {Link,Route} from "@hyperapp/router"

export default ({posts}, {init}) =>

  <div class="container" oncreate={init}>


      <Route path="/" render={Home.bind(this,{posts})} />
      <Route path="/api" render={Api} />


  </div>
