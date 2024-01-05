import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
// export했던 작명 그대로 써줘야함
// import { a, b } from "./data.js";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";

function App() {
  // 훅 : useState
  let [shoes] = useState(data);
  // 훅 : useNavigate - 페이지 이동도와주는
  let navigate = useNavigate();
  // 재미있는 기능 : navigate(1) 앞으로가기 navigate(-1) 뒤로가기
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">무신사샵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 페이지 이동버튼은 <Link> */}
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        {/* 메인페이지 */}
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card key={i} shoes={shoes[i]} i={i}></Card>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

// shoes는 App에 있으니 App ->Card전송해줘야함 (props 문법으로)
function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
