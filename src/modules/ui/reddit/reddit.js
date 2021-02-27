import { LightningElement, wire } from "lwc";
import getSubRedditDetails from "data/subRedditDataProvider";

export default class Reddit extends LightningElement {
  subRedditName = "worldnews";
  subRedditData = [];
  updateSubReddit(event) {
    this.subRedditName = event.target.value;
  }

  get hasData() {
    return this.subRedditData;
  }

  decodeHtml(html) {
    let span = document.createElement("span");
    span.innerHTML = html;
    return span.innerText;
  }

  @wire(getSubRedditDetails, { subRedditName: "$subRedditName" })
  wiredSubredditData({ error, data }) {
    if (!error && data) {
      this.subRedditData = data.map((post) => ({
        ...post,
        title: this.decodeHtml(post.title),
      }));
    } else if (error) {
      console.error(error);
    }
  }

  /**
  connectedCallback() {
    getSubRedditDetails({ subRedditName: this.subRedditName }).then(
      (resp) => (this.subRedditData = resp)
    );
  }
  **/
}
