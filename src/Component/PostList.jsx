import { useSelector } from "react-redux";
import Post from "./Posts";
import Player from "./Player";

const PostList = () => {
  const { sel_id, user, sear, lang } = useSelector((state) => state.app);

  return (
    <div className="container">
      {sel_id !== 0 && <Player />}
      <div className="pst pl2 d-flex justify-content-center flex-wrap m-3">
        {user &&
          user
            .filter((val) => {
              if (sear.length === 0) {
                return val;
              } else {
                return val.text1.toLowerCase().includes(sear.toLowerCase());
              }
            })
            .filter((val) => {
              if (lang.length === 0) {
                return val;
              } else if (lang === "any") {
                return val;
              } else if (lang === "hindi") {
                return val.language === "hindi";
              } else if (lang === "eng") {
                return val.language === "eng";
              } else {
                return val;
              }
            })
            .map((val) => <Post key={val.id} item={val} />)}
      </div>
    </div>
  );
};

export default PostList;
