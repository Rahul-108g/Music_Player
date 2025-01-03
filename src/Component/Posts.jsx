import { useDispatch } from "react-redux";
import { selectId } from "../Feature/UserSlice";
import Virtual from "./Virtual";
import { useState } from "react";

const Post = ({ item, chan }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="">
      {/* card */}
      <div
        onMouseOver={() => {
          setShow(true);
        }}
        onMouseOut={() => {
          setShow(false);
        }}
        onClick={() => dispatch(selectId(item.id))}
        className="card hov car mx-3 my-2 pl2 mon"
        style={{ width: "250px" }}
      >
        {show && <Virtual />}
        <img
          style={{ width: "100%", height: "220px" }}
          className="card-img-top img-fluid"
          src={`assets/${item.imgSrc}`}
          alt="imgerror"
        />

        <div className="card-body">
          <h4 className="card-title">{item.text1}</h4>
          <p className="card-text">{item.text2}</p>
        </div>
      </div>
    </div>
  );
};
export default Post;
