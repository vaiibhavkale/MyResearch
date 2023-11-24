﻿//$ = require('jquery');
require("./lib");
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/site.css";
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./reactcomponent";
import FetchData from './fetchdata';
import ES6Lib from "./es6codelib";
ReactDOM.render( <FetchData />, document.getElementById("basicreactcomponent"));
//document.getElementById("fillthis").innerHTML = getText();
//$('#fillthiswithjquery').html('Filled by Jquery??');
//let myES6Object = new ES6Lib();
//$('#fillthiswithes6lib').html(myES6Object.getData());
//We also need to let HMR know that we are ready to “accept” Hotmodule updates from within our module.
module.hot.accept();
