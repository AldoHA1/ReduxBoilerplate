import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";

function App() {
	return (
		<div className="container-fluid">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage}></Route>
				<Route exact path="/courses" component={CoursesPage}></Route>
				<Route exact path="/about" component={AboutPage}></Route>
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;
