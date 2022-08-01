import "./App.css"
import About from "./About"
import Home from "./Home"
import Nav from "./Nav"
import HumanContainer from "./HumanContainer"
import { Route, Switch } from "react-router-dom"

function App() {
	return (
		<div className="App">
			<Nav />
			<Switch>
				{/* <Route exact path="/about" component={About}/> */}
				<Route path="/about">
					<About />
				</Route>
				<Route
					path="/humans"
					render={(routeProps) => (
						<HumanContainer {...routeProps} humans={[]} />
					)}
				/>
				{/*  <Route path="/humans">
				 	<HumanContainer humans={[{ name: "Jenipher" }]} />
				 </Route> */}
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</div>
	)
}

export default App
