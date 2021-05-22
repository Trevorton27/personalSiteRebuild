import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"
import Header from "../components/Header"

class IndexPage extends React.Component {
  render() {
    return (
      <div>
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
              action="/thankYou"
              style={{ marginBottom: "3em" }}
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
              <div class="row justify-content-center">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Your Name *"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    class="form-control"
                    placeholder="Your Message *"
                    required
                  ></textarea>
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
              </div>
            </form>
          </div>
        </PrimaryLayout>
      </div>
    )
  }
}

export default IndexPage
