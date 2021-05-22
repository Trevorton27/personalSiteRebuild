import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import "../styles/app.css"
import { Link } from "gatsby"
const thankYou = () => (
  <PrimaryLayout>
    <div className="row justify-content-center">
      <div
        class="contact-image"
        style={{
          textAlign: "center",
          marginTop: "5em",
          marginBottom: "3em",
        }}
      >
        <img
          src={require("../images/trevorMearnsMailIcon.png")}
          alt="rocket_contact"
        />
      </div>

      <h2>
        Submission received! <span>&#128526;</span>{" "}
      </h2>
      <h3>
        As long as you're not some kind of a spammer, I'll be in touch soon.{" "}
      </h3>

      <Link to="/" className="homePageButton justify-content-center">
        Back to home{" "}
      </Link>
    </div>
  </PrimaryLayout>
)

export default thankYou
