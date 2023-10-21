import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";
import './App.css';
import Sidenav from './components/Sidenav';
import HomePage from "./Pages/HomePage";
import Events from "./Pages/Events";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn.js";
import Calendar from "./Pages/Calendar.js";
import Header from './components/header';
  
  function App() {
	return (
	  <div className="App">
		<Sidenav/>
		<main>
		<Routes>
		  <Route path="/" element={<HomePage />}/>
		  <Route path="/events" element={<Events />} />
		  <Route path="/signup" element={<SignUp />}/>
		  <Route path="/signin" element={<SignIn />}/>
		  <Route path="/calendar" element={<Calendar />}/>
		</Routes>
		</main>
	   
	  </div>
	);
  }
  
  export default App;