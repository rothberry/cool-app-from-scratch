import "./App.css"
import About from "./About"
import Home from "./Home"
import Nav from "./Nav"
import HumanContainer from "./HumanContainer"
import { Route, Routes } from "react-router-dom"

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				{/* <Route exact path="/about" component={About}/> */}
				<Route path="/about" element={<About />} />
				{/* <Route
					path="/humans"
					render={(routeProps) => (
						<HumanContainer {...routeProps} humans={[]} />
					)}
				/> */}
				<Route
					path="/humans"
					element={<HumanContainer humans={[{ name: "Jenipher" }]} />}
				/>

				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	)
}

export default App
