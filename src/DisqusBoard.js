import React, { Component } from "react"
import Disqus from "disqus-react"

export default class DisqusBoard extends Component {
  render() {
    const disqusShortname = "biketheftsottawa"
    const disqusConfig = {
      url: "http://localhost:3000/" + this.props.url,
      identifier: this.props.url,
      title: "Join The Discussion!"
    }
    // console.log(this.props.url)

    return (
      <div className="article-container">
        <h1>{(this.props.url == "Click on a district to see the bike theft statistics" || this.props.url == '') ? "Join the Discussion" : "Join the Discussion in " + this.props.url }</h1>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}