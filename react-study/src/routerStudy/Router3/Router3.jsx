import React, { useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

/**
 *  경로(path) 관리
 *  이동기록(history) 관리
 */

function Router3(props) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("경로를 이동하였습니다.");
    console.log(location.pathname);
    if (location.pathname === "/location/2") {
      navigate("/location/3", {
        state: {
          name: "김종보",
          age: 35,
        },
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    console.log("queryParams");
    console.log(decodeURI(location.search));
  }, [location.search]);
  
  useEffect(() => {
    console.log(location.state);
  }, [location.state]);

  const handleBackOnClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <Link to={"/location/1"}>location1</Link>
      <Link to={"/location/2"}>location2</Link>
      <Link to={"/location/3"}>location3</Link>
      <Link to={"/location/3?name=종"}>location3-1</Link>
      <Link to={"/location/3?name=보"}>location3-2</Link>
      <Link to={"/location/3?name=김"}>location3-3</Link>
      <button onClick={handleBackOnClick}>뒤로가기</button>
      <Routes>
        <Route path="/location/1" element={<h1>Location1</h1>} />
        <Route path="/location/2" element={<h1>Location2</h1>} />
        <Route path="/location/3" element={<h1>Location3</h1>} />
      </Routes>
    </div>
  );
}

export default Router3;
