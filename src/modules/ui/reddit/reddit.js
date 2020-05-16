import { LightningElement, wire } from "lwc";
import getSubRedditDetails from "data/subRedditDataProvider";

export default class Reddit extends LightningElement {
  subRedditName = "worldnews";
  updateSubReddit(event) {
    this.subRedditName = event.target.value;
  }

  get hasData() {
    return this.subRedditData && this.subRedditData.data;
  }

  @wire(getSubRedditDetails, { subRedditName: "$subRedditName" })
  subRedditData;

  /**
  connectedCallback() {
    getSubRedditDetails({ subRedditName: this.subRedditName }).then(
      (resp) => (this.subRedditData = resp)
    );
  }
  **/
}
