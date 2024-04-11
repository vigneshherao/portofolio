import airb1 from "./Assets/airb1.jpg";
import airb2 from "./Assets/airb2.jpg";
import airb3 from "./Assets/airb1.jpg";
import sw1 from "./Assets/sw1.png";
import sw2 from "./Assets/sw2.png";
import sw3 from "./Assets/sw3.png";
import spot1 from "./Assets/spot1.png";
import spot2 from "./Assets/spot2.png";
import cos from "./Assets/cos.png";
import blog from "./Assets/blog.png";
import sim from "./Assets/simon.png";
import { Link } from "react-router-dom";
import b1 from "./Assets/b1.png";
import b2 from "./Assets/b2.png";
import b3 from "./Assets/b3.png";
import n1 from "./Assets/n1.png";
import n2 from "./Assets/n2.png";
import n3 from "./Assets/n3.png";
const Projects = () => {
  return (
    <div>
      <div className="projects">
        <div className="links">
          <span className="links-1">
            <Link to={"https://github.com/vigneshherao/NetFlix_Gpt"}>
              <i class="fa-brands fa-github fa-xl"></i>
            </Link>
          </span>
          <span className="heading-pro">
            NetFlixGpt - AI Powered Movie Suggestion Streaming Platform
          </span>
          <span className="links-1">
            <Link to={"https://netflix-gpt-9by7.onrender.com"}>
              <i class="fa-solid fa-link fa-xl "></i>
            </Link>
          </span>
        </div>
        <div>
          <div className="para">
            <p className="para-p">
              • Implemented Firebase authentication for seamless Login/Sign Up
              functionality, ensuring secure access and user authentication.
            </p>
            <p className="para-p">
              • Leveraged Redux for state management, enhancing the applications
              scalability and maintainability authentication.
            </p>
            <p className="para-p">
              • Implemented custom hooks and memoization techniques to optimize
              performance and speed up processes. .
            </p>
          </div>
          <div className="images">
            <div className="images-1">
              {" "}
              <img src={n2}></img>
            </div>
            <div className="images-1">
              {" "}
              <img src={n1}></img>
            </div>
            <div className="images-2">
              {" "}
              <img src={n3}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="links">
          <span className="links-1">
            <Link to={"https://github.com/vigneshherao/Brotube_YoutubeClone"}>
              <i class="fa-brands fa-github fa-xl"></i>
            </Link>
          </span>
          <span className="heading-pro">BroTube - Youtube Clone</span>
          <span className="links-1">
            <Link to={"https://brotube.netlify.app/"}>
              <i class="fa-solid fa-link fa-xl "></i>
            </Link>
          </span>
        </div>
        <div>
          <div className="para">
            <p className="para-p">
              • Developed BroTube using ReactJS, Redux, Tailwind CSS, React
              Router DOM, and YouTube API.
            </p>
            <p className="para-p">
              • Implemented an advanced search feature with autocomplete,
              debouncing, memoization, and caching for a swift and efficient
              search experience.<br></br> • Efficient state management using
              Redux for seamless data flow, centralized control, and optimal
              performance in the BroTube project.
            </p>
          </div>
          <div className="images">
            <div className="images-1">
              {" "}
              <img src={b2}></img>
            </div>
            <div className="images-1">
              {" "}
              <img src={b1}></img>
            </div>
            <div className="images-2">
              {" "}
              <img src={b3}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="links">
          <span className="links-1">
            <Link to={"https://github.com/vigneshherao/WanderLust_AirBnB"}>
              <i class="fa-brands fa-github fa-xl"></i>
            </Link>
          </span>
          <span className="heading-pro">WanderLust - Airbnb Clone</span>
          <span className="links-1">
            <Link to={"https://delta-project-8k0n.onrender.com/listing"}>
              <i class="fa-solid fa-link fa-xl "></i>
            </Link>
          </span>
        </div>
        <div>
          <div className="para">
            <p className="para-p">
              • Optimized Express.js/Node.js stack for efficiency, enhancing
              seamless routing and powerful server-side scripting.
            </p>
            <p className="para-p">
              • Reduced technical debt via MVC architecture, ensuring a robust
              structure and smooth user experience in account creation and
              authentication.
            </p>
          </div>
          <div className="images">
            <div className="images-1">
              {" "}
              <img src={airb1}></img>
            </div>
            <div className="images-1">
              {" "}
              <img src={airb2}></img>
            </div>
            <div className="images-2">
              {" "}
              <img src={airb3}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="links">
          <span className="links-1">
            <Link to={"https://github.com/vigneshherao/Swiggy_Clone_REACTJS"}>
              <i class="fa-brands fa-github fa-xl"></i>
            </Link>
          </span>
          <span className="heading-pro">JustFoodie-Swiggy clone</span>
          <span className="links-1">
            <Link to={"justfoodies.netlify.app"}>
              <i class="fa-solid fa-link fa-xl "></i>
            </Link>
          </span>
        </div>
        <div>
          <div className="para">
            <p className="para-p">
              • Fast and responsive food ordering app with carousel, restaurant
              list, filters, search, accordion, and cart functionality, all
              using real data from the swiggy app.
            </p>
            <p className="para-p">
              • Utilized Redux Toolkit for efficient data management and state
              control throughout the project.
            </p>
          </div>
          <div className="images">
            <div className="images-1">
              {" "}
              <img src={sw1}></img>
            </div>
            <div className="images-1">
              {" "}
              <img src={sw2}></img>
            </div>
            <div className="images-2">
              {" "}
              <img src={sw3}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="links">
          <span className="heading-pro">FrontEnd - Spotify Clone</span>
        </div>
        <div>
          <div className="images">
            <div className="images-1">
              {" "}
              <img src={spot1}></img>
            </div>
            <div className="images-1">
              {" "}
              <img src={spot2}></img>
            </div>
            <div className="images-2">
              {" "}
              <img src={spot1}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <h2 className="head-about">OTHER PROJECTS</h2>
        <hr></hr>
        <div className="other">
          <div className="other-img">
            <img src={cos}></img>
          </div>
          <div className="other-img">
            <Link to={""}>
              <img src={blog}></img>
            </Link>
          </div>
          <div className="other-img">
            <Link to={""}>
              <img src={sim}></img>
            </Link>
          </div>
          <div className="other-img">
            <Link to={""}>
              <img src={""}></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
