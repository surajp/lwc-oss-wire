import { createElement } from "lwc";
import Reddit from "ui/reddit";

const element = createElement("ui-app", { is: Reddit });
document.querySelector("#main").appendChild(element);
