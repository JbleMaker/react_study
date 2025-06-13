import React from "react";
import { Link, Route, Routes } from "react-router-dom";

/**
 * 하위 라우트(서브라우트)
 */
function Page1() {
  return (
    <>
      <div>
        <h1>Page1</h1>
        <Routes>
          <Route path="/page1" element={<h1>페이지1입니다.</h1>}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
        </Routes>
      </div>
    </>
  );
}

function Page2() {
  return (
    <>
      <div>
        <h1>Page2</h1>
      </div>
    </>
  );
}

function Router2(props) {
  return (
    <div>
      <header>
        <Link to={"/pagestudy/page1"}>Page1</Link>
        <Link to={"/pagestudy/page2"}>Page2</Link>
        <Link to={"/pagestudy2/page1"}>Page1</Link>
        <Link to={"/pagestudy2/page2"}>Page2</Link>
      </header>

      <h1>Router2</h1>
      <Routes>
        <Route path="/pagestudy/*" element={<Page1 />} />
        <Route
          path="/pagestudy2/*"
          element={
            <Routes>
              <Route path="/name1" element={<h1>name1</h1>} />
              <Route path="/name2" element={<h1>name2</h1>} />
            </Routes>
          }
        />
      </Routes>
    </div>
  );
}

export default Router2;
