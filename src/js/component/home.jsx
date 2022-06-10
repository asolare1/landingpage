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
			<NavBar/>
			<Jumbotron/>
			<div class="row">
			<Cards title="card 1" cardtext="card 1 text" btnurl="#" btntitle="Button name" />
			<Cards title="card 2" cardtext="card 2 text" btnurl="#" btntitle="Button name" />
			<Cards title="card 3" cardtext="card 3 text" btnurl="#" btntitle="Button name" />
			<Cards title="card 4" cardtext="card 4 text" btnurl="#" btntitle="Button name" />
			</div>
			<Footer/>
		</React.Fragment>


	);
};

export default Home;
