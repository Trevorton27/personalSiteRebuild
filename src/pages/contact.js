import React, { useState } from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import Header from "../components/Header"
import { Form, Button } from "react-bootstrap"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: "",
    }
    this.encode = this.encode.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
    this.setState({
      name: "",
      email: "",
      message: "",
    })
  }
  render() {
    ;<div>
      <Header />
      <PrimaryLayout column="col-10">
        <div class="container contact-form" id="contact">
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
          <form
            name="contactForm"
            method="POST"
            data-netlify="true"
            style={{ marginBottom: "3em" }}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contactForm" />
            <h2
              style={{
                textAlign: "center",
                fontSize: "50px",
                marginBottom: "1.5em",
              }}
            >
              Contact Trevor
            </h2>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Your Name *"
                    onChange={handleChange}
                    value={this.state.name}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="Your Email *"
                    onChange={handleChange}
                    value={this.state.email}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea
                    name="message"
                    class="form-control"
                    placeholder="Your Message *"
                    onChange={handleChange}
                    value={this.state.message}
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="form-group" style={{ textAlign: "center" }}>
              <input
                style={{
                  marginTop: "1.5em",
                  marginBottom: "2.5em",
                  backgroundColor: "#343a40",
                  color: "#fff",
                  padding: ".4em 1em .4em 1em",
                }}
                type="submit"
                name="btnSubmit"
                class="btnContact"
                value="Send It"
              />
            </div>
          </form>
        </div>
      </PrimaryLayout>
    </div>
  }
}

export default IndexPage
