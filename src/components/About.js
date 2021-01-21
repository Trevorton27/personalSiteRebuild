import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout.js"

const About = ({ data }) => {
  console.log("blog.js data ", data)
  return (
    <div className="aboutWrapper">
      <PrimaryLayout>
        <h2 style={{ fontSize: "40px" }}>About Me</h2>
        <p>
          I am a naturally curious and hardworking person. My earliest memories
          are ones of trying to understand why things are the way they are and
          how it all fits together. That trait has only grown stronger over
          time. I was born in Seattle Washington and grew up in the area. My
          childhood was an amazing mix of the mountains of the Pacific North
          West and guidance and amazing inspiration from the many teachers and
          artists who have made Seattle their home.
        </p>
        <p>
          In 2007, I moved to Japan with my wife who is from there. Learning to
          function in a foreign country by learning the language an d starting
          my own business taught me a lot about who I am and how the world
          works. When we take on path in life over another it's impossible to
          say what might have been. But I am the type that can't help but
          wonder. One thing is for sure though, the challenges I have faced and
          overcome in my life have made me a better person and a more positive
          force in the world.{" "}
        </p>
        <p id="projects">
          Currently, I still live in Japan with my wife and 3 children. I have
          sold my small business and am now focusing full time on software
          development. It is an amazing industry full of creativity, generosity
          and some of the most amazing people you could ever hope to meet. I
          feel blessed to be a part of it and I wake up everyday looking forward
          to being able to help someone solve a problem.
        </p>
      </PrimaryLayout>
      <div></div>
    </div>
  )
}

export default About
