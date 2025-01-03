import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <>
      <div className="bod container-fluid">
        <div className="con">Vusic</div>

        <div className="container  d-flex justify-content-between align-items-center my-5">
          <div style={{ width: "600px" }} className="con2">
            {" "}
            <DotLottieReact
              src="https://lottie.host/0347e521-d010-45d0-96b3-4c9770f0b547/8PexkJQvpV.lottie"
              loop
              autoplay
            />
          </div>

          <div className="text-center">
            <h1 className="fw-bolder">Music For Everyone</h1>
            <p className="fw-bold text-white">
              Without music life would be mistake
            </p>
            <Link to="secmain" className=" btn btn-dark text-white">
              Start Listening
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mainpage;
