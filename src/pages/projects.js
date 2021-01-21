import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import Header from "../components/Header"
import { Link } from "react-bootstrap"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <PrimaryLayout column="col-10">
        <div class="container projectContainer ">
          <h2 style={{ fontSize: "40px" }}>Projects</h2>
          <div className="row projectRow">
            <div className="col-sm">
              <div className="projectTitle">
                {" "}
                <h3>JavaScript Snake Game</h3>
              </div>

              <img
                src={require("../images/TrevorMearnsJavaScriptSnakeGame.png")}
                alt=""
              />
            </div>
            <div class="col-sm">
              <div>
                <span>
                  {" "}
                  <Link to="https://github.com/Trevorton27/Application-1SnakeGame">
                    <button className="projectButton">GitHub</button>
                  </Link>
                </span>
                <span>
                  {" "}
                  <Link to="https://trevorton27.github.io/Application-1SnakeGame/">
                    <button className="projectButton">Deployment</button>
                  </Link>
                </span>
              </div>
              <p>
                This was my first experience working with JS Canvas and
                implementing JavaScript language to build a game. It was
                definitely challenging but a lot of fun in the end. This app
                really helped me to understand just how many ways there are to
                use code in the real world.
              </p>
            </div>
          </div>
          //project 2
          <div className="row projectRow">
            <div className="col-sm">
              <div className="projectTitle">
                {" "}
                <h3>JavaScript Snake Game</h3>
              </div>

              <img
                src={require("../images/TrevorMearnsJavaScriptSnakeGame.png")}
                alt=""
              />
            </div>
            <div class="col-sm">
              <div>
                <span>
                  {" "}
                  <Link to="https://github.com/Trevorton27/Application-1SnakeGame">
                    <button className="projectButton">GitHub</button>
                  </Link>
                </span>
                <span>
                  {" "}
                  <Link to="https://trevorton27.github.io/Application-1SnakeGame/">
                    <button className="projectButton">Deployment</button>
                  </Link>
                </span>
              </div>
              <p>
                This was my first experience working with JS Canvas and
                implementing JavaScript language to build a game. It was
                definitely challenging but a lot of fun in the end. This app
                really helped me to understand just how many ways there are to
                use code in the real world.
              </p>
            </div>
          </div>
          //project 3
          <div className="row projectRow">
            <div className="col-sm">
              <div className="projectTitle">
                {" "}
                <h3>JavaScript Snake Game</h3>
              </div>

              <img
                src={require("../images/TrevorMearnsJavaScriptSnakeGame.png")}
                alt=""
              />
            </div>
            <div class="col-sm">
              <div>
                <span>
                  {" "}
                  <Link to="https://github.com/Trevorton27/Application-1SnakeGame">
                    <button className="projectButton">GitHub</button>
                  </Link>
                </span>
                <span>
                  {" "}
                  <Link to="https://trevorton27.github.io/Application-1SnakeGame/">
                    <button className="projectButton">Deployment</button>
                  </Link>
                </span>
              </div>
              <p>
                This was my first experience working with JS Canvas and
                implementing JavaScript language to build a game. It was
                definitely challenging but a lot of fun in the end. This app
                really helped me to understand just how many ways there are to
                use code in the real world.
              </p>
            </div>
          </div>
          //project 4
          <div className="row projectRow">
            <div className="col-sm">
              <div className="projectTitle">
                {" "}
                <h3>JavaScript Snake Game</h3>
              </div>

              <img
                src={require("../images/TrevorMearnsJavaScriptSnakeGame.png")}
                alt=""
              />
            </div>
            <div class="col-sm">
              <div>
                <span>
                  {" "}
                  <Link to="https://github.com/Trevorton27/Application-1SnakeGame">
                    <button className="projectButton">GitHub</button>
                  </Link>
                </span>
                <span>
                  {" "}
                  <Link to="https://trevorton27.github.io/Application-1SnakeGame/">
                    <button className="projectButton">Deployment</button>
                  </Link>
                </span>
              </div>
              <p>
                This was my first experience working with JS Canvas and
                implementing JavaScript language to build a game. It was
                definitely challenging but a lot of fun in the end. This app
                really helped me to understand just how many ways there are to
                use code in the real world.
              </p>
            </div>
          </div>
        </div>
      </PrimaryLayout>
    </div>
  )
}

export default IndexPage
