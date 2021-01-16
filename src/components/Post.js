import React from "react"
import { Card, Button } from "react-bootstrap"
import "../styles/app.css"
const Post = props => (
  <div>
    <Card className="card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title
          id="cardTitle"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <Card.Text dangerouslySetInnerHTML={{ __html: props.date }} />
        <Card.Text dangerouslySetInnerHTML={{ __html: props.excerpt }} />

        <Button id="readMoreBtn" variant="primary" href={props.readMoreLink}>
          Read More?
        </Button>
      </Card.Body>
    </Card>
  </div>
)

export default Post
