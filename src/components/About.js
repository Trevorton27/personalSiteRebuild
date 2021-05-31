import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import { Link } from "gatsby"
import photo from "../images/personalPic.png"
const About = ({ data }) => {
  console.log(photo)
  return (
    <div>
      <div className="row">
        <div className="col-md">
          <img
            src={photo}
            alt=""
            style={{
              borderRadius: "9px",
              boxShadow: "5px 10px 18px #888888",
            }}
          />
          <p
            style={{
              fontSize: "12px",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Trevor Mearns mid ride Kamiyama, Japan 2021
          </p>
        </div>
        <div className="col-md">
          <h2 style={{ fontSize: "40px", marginTop: ".5em" }}>About Me</h2>
          <h3>(the short version)</h3>
          <br />
          <h3>Bio:</h3>
          <ul>
            <li>Born in Seattle WA, child of the 80's</li>
            <li>Love my children, nature and study</li>
            <li>I know Kung Fu.</li>
          </ul>
          <h3>Languages:</h3>
          <ul>
            <li>English</li>
            <li>Japanese</li>
            <li>JavaScript</li>
            <li>C#</li>
          </ul>
          <h3>Interests & Competencies</h3>
          <ul>
            <li>Full stack software engineering</li>
            <li>Teaching</li>
            <li>Learning</li>
            <li>Martial Arts</li>
            <li>Most anything beneficial to oneself and others/challenging.</li>
          </ul>
        </div>
      </div>
      <div className="row ">
        <div
          className="col-md align-items-center"
          style={{ textAlign: "center" }}
        >
          <h2 style={{ fontSize: "40px", marginTop: "2em" }}>About Me</h2>
          <h3>(the longer version)</h3>
        </div>
        <div className="col-md">
          <p>
            I am a naturally curious and hardworking person. My earliest
            memories are ones of trying to understand why things are the way
            they are and how it all fits together. That trait has only grown
            stronger over time. I was born in Seattle Washington and grew up in
            the area. My childhood was an amazing mix of the mountains of the
            Pacific North West, the history and beauty of the city of Seattle
            and everything in between. I was very fortunate to receive a number
            of talented teachers and amazing friends growing up.
          </p>
          <p>
            In 2007, I moved to Japan with my wife who is from there. Learning
            to function in a foreign country by learning the language and
            starting my own business taught me a lot about who I am and how the
            world works. When we take one path in life over another, it's
            impossible to say what might have been. But I am the type that can't
            help but wonder. One thing is for sure though, the challenges I have
            faced and overcome in my life have made me a better person and a
            more positive force in the world. That is a direction I want my
            evolution to continue in.{" "}
          </p>
        </div>
      </div>
      <div>
        {" "}
        <p id="projects">
          Currently, I still live in Japan with my wife and 3 children. I have
          sold my small business and am working remotely as a support coach for
          Software Development Mastery (SDMM). My job is to assist students in
          navigating the learning curve of learning to become a developer as
          they work through a "road map" of projects of increasing difficulty to
          build out their own, personalized portfolio.
        </p>
        <p>
          Since the first day I began my own journey in learning, I have known
          software development is an amazing industry full of creativity,
          generosity and some of the most amazing people you could ever hope to
          meet. My work helping others integrate the skills to find their own
          position as developers is something I am honored to be a part of.I
          wake up everyday looking forward to helping people solve problems,
          learn something new and get one step closer to changing their lives.
        </p>
        <p>
          Want to learn more about me? Check out my <Link to="/blog">blog</Link>{" "}
          .{" "}
        </p>
      </div>
    </div>
  )
}

export default About
