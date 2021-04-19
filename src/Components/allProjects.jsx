import calc from "../img/portImages/calc.jpg";
import lyrics from "../img/portImages/lyrics.jpg";
import shopCart from "../img/portImages/shopCart.jpg";
import moviesApp from "../img/portImages/moviesApp.jpg";
import port6 from "../img/portImages/port5.jpg";
import port7 from "../img/portImages/port6.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = [
	{
		id: 1,
		category: "JavaScript",
		link1: "https://github.com/AvivTarkay/Calculator_Project",
		link2: "https://avivtarkay.github.io/Calculator_Project/",
		icon1: <FontAwesomeIcon icon={faGithub} className="icon gh" />,
		icon2: <FontAwesomeIcon icon={faChrome} className="icon gh" />,
		image: calc,
		title: "Calculator",
	},
	{
		id: 2,
		category: "JavaScript",
		link1: "https://github.com/AvivTarkay/My_LyricsApi_Project",
		link2: "https://avivtarkay.github.io/My_LyricsApi_Project/",
		icon1: <FontAwesomeIcon icon={faGithub} className="icon gh" />,
		icon2: <FontAwesomeIcon icon={faChrome} className="icon gh" />,
		image: lyrics,
		title: "Find Your Lyrics Api Project",
	},
	{
		id: 3,
		category: "React",
		link1: "https://github.com/AvivTarkay/UsersManagement",
		link2: "https://avivtarkay.github.io/ShoppingCart-React-App/",
		icon1: <FontAwesomeIcon icon={faGithub} className="icon gh" />,
		icon2: <FontAwesomeIcon icon={faChrome} className="icon gh" />,
		image: shopCart,
		title: "Redux Shopping Cart, shop for the coolest shoes!!!",
	},
	{
		id: 4,
		category: "React",
		link1: "https://github.com/AvivTarkay/react-movies-app",
		link2: "https://avivtarkay.github.io/react-movies-app/",
		icon1: <FontAwesomeIcon icon={faGithub} className="icon gh" />,
		icon2: <FontAwesomeIcon icon={faChrome} className="icon gh" />,
		image: moviesApp,
		title: "React Movies/Tv - Website",
	},
	{
		id: 5,
		category: "Coming Soon!",
		link1: "www.github.com",
		icon1: <FontAwesomeIcon icon={faGithub} className="icon gh" />,
		icon2: <FontAwesomeIcon icon={faChrome} className="icon gh" />,
		image: port6,
		title: "Coming Soon!",
	},
	{
		id: 6,
		category: "Coming Soon!",
		link1: "www.github.com",
		icon1: <FontAwesomeIcon icon={faGithub} className="icon gh" />,
		image: port7,
		title: "Coming Soon!",
	},
	{
		id: 7,
		category: "Coming Soon!",
		link1: "www.github.com",
		icon1: <FontAwesomeIcon icon={faGithub} className="icon gh" />,
		image: port7,
		title: "Coming Soon!",
	},
];

export default Projects;
