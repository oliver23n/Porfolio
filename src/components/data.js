import img1 from './images/quiz.png';
import img2 from './images/weatherapp.png';
import img3 from './images/winepairsn.png';
import img4 from './images/passgenerator.png';
import img5 from './images/wherenext.png';
import img6 from './images/blogsite.png';

export const projects = [
    {   
        id:1,
        title: "Quiz - Guess the Capital",
        description:"When the user starts the quiz a countdown of 60 seconds is started, meaning the user has 60 seconds to answer all the questions. Technologies used: HTML, CSS, JAVASCRIPT",
        image: img1,
        link: "https://oliver23n.github.io/quiz/",
        github:"https://github.com/oliver23n/quiz"
        },
    {   
        id:2,
        title: "Weather App",
        description:"When the city is searched, the current weather is displayed, and the forecast for the next 5 days.There is also a History section. Technologies used: HTML, CSS, JAVASCRIPT, Third Party API.",
        image: img2,
        link: "https://oliver23n.github.io/weather-app/",
        github: "https://github.com/oliver23n/weather-app"
    },
    {   
        id:3,
        title: "Wine-Pair",
        description:"Web application that returns recipes for foods that pair with a specified wine.The user is shown a description of the wine, options to select dietary restrictions, and food recommendations.Technologies used: HTML, CSS, JAVASCRIPT, Third Party APIs.",
        image: img3,
        link: "https://oliver23n.github.io/WinePair/",
        github: "https://github.com/oliver23n/WinePair"
    },
    {   
        id:4,
        title: "Password Generator",
        description:"The app provides a randomly generated password that meets certain criteria when the button is clicked. The criteria is set by the user, after answering a seires of prompts. Technologies used: HTML, CSS, JAVASCRIPT",
        image: img4,
        link: "https://oliver23n.github.io/password-generator/",
        github: "https://github.com/oliver23n/password-generator"
    },
    {   
        id:5,
        title: "Where Next",
        description: "Allows you to create a post that shares the location, photo, description and allows other users to interact by liking and commenting .Users must sign in. Technologies used: NODEJs, MySQL, HandleBars,BCrypt, Express, TailWind, Css.",
        image:img5,
        link: "https://wherenext-e8da889fad0c.herokuapp.com/login",
        github: "https://github.com/oliver23n/where-next"
    },
    {   
        id:6,
        title: "Blog-site",
        description:"CMS style Blog site, lets the person view all the posts and create a post/edit a post.Must be logged in. Technologies used: NODEJs, Express, JavaScript, HandleBars, BCrypt,MySQL, Bulma",
        image: img6,
        link: "https://infinite-temple-42269-d5a50674bc55.herokuapp.com/",
        github: "https://github.com/oliver23n/Blog-site1"
    },
];