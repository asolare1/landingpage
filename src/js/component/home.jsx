import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<NavBar></NavBar>
			<Jumbotron></Jumbotron>
			<Cards></Cards>
			<Footer></Footer>
		</React.Fragment>


	);
};

export default Home;
