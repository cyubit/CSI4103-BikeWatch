import React, { Component } from "react"
import Disqus from "disqus-react"

export default class DisqusBoard extends Component {
  render() {
    const disqusShortname = "biketheftsottawa"
    const disqusConfig = {
      url: "http://localhost:3000",
      identifier: "001",
      title: "My super awesome article"
    }

    return (
      <div className="article-container">
        <h1>My super awesome article</h1>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}