import img from "../../public/assets/img1/profile.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <div>
      <div
        className=" container"
        style={{
          padding: "0px",
          backgroundColor: "rgb(128, 222, 234)",
          height: "500px",
        }}
      >
        <div
          className="h3 fw-5 bg-black text-white"
          style={{ fontWeight: "bolder", padding: "4px" }}
        >
          Meet The Developer
        </div>
        <div className="left mx-4 my-1">
          <div
            className="card bg-secondary  img-fluid p-3"
            style={{ width: "250px" }}
          >
            <img
              className="card-img-top rounded-pill border border-4 border-light "
              style={{ width: "100%" }}
              src={img}
              alt="Title"
            />
            <div className="card-body text-center text-light">
              <h4 className="card-title fw-5">Rahul Giri</h4>
              <p className="card-text">Full Stack Developer</p>
              <p className="card-text">Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="fon1">
            A COMPUTER SCIENCE AND ENGINEERING STUDENT AT The Technological
            Institute of Textile and Sciences,bhiwani, Haryana. GRADUATING IN
            2022 AND LOOKING FOR A RESPONSIBLE POSITION TO GAIN PRACTICAL
            KNOWLEDGE FULL-STACK WEB DEVELOPER AND A COMPETITIVE CODER.
            <br />I LOVE DESIGNING FULLY RESPONSIVE WEBSITES.
            <br />I HAVE A KEEN INTEREST IN DEVELOPING PROJECTS, WHENEVER I WANT
            TO LEARN SOMETHING NEW. AND A BLOGGER.
          </p>
          <br />

          {/* go lik */}
          <div
            className="container d-flex justify-content-around py-3"
            style={{ backgroundColor: "rgb(0, 229, 255)", float: "right" }}
          >
            <div
              className="fb out"
              style={{ backgroundColor: "rgb(26, 35, 126)" }}
            >
              <a href="https://www.facebook.com/" className="">
                <FaFacebookSquare className="in" />
              </a>
            </div>
            <div
              className="twit out"
              style={{ backgroundColor: "rgb(0, 176, 255)" }}
            >
              <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                <FaSquareXTwitter className="in" />
              </a>
            </div>
            <div
              className="link out"
              style={{ backgroundColor: "rgb(57, 73, 171)" }}
            >
              <a href="https://www.linkedin.com/login">
                {" "}
                <FaLinkedin className="in" />
              </a>
            </div>
            <div
              className="insta out"
              style={{ backgroundColor: "rgb(122, 40, 4)" }}
            >
              <a href="https://www.instagram.com/">
                <FaInstagram className="in" />
              </a>
            </div>
            <div
              className="gml out"
              style={{ backgroundColor: "rgb(245, 0, 87)" }}
            >
              <a href="https://mail.google.com/mail/u/0/">
                <SiGmail className="in" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-dark" style={{ margin: "0px", padding: "30px" }}>
        <h3 className=" text-light text-center p-2">Attribution</h3>
        <br />
        <p className="bg-white rounded text-dark text-center">
          Icons made by <span className="text-primary"> Freepik</span> from
          <a className="text-decoration-none" href="www.flaticon.com">
            {" "}
            www.flaticon.com
          </a>{" "}
          <br /> Music by <span className="text-primary"> NCS </span> from
          ncs.io/music
        </p>
      </div>
    </div>
  );
};
export default About;
