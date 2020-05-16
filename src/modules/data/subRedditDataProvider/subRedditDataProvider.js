import { register, ValueChangedEvent } from "@lwc/wire-service";
import { getSubReddit } from "data/reddit";

export default function getSubRedditDetails(config) {
  return getSubReddit(config.subRedditName);
}

register(getSubRedditDetails, (eventTarget) => {
  eventTarget.addEventListener("config", (config) => {
    getSubReddit(config && config.subRedditName).then((resp) =>
      eventTarget.dispatchEvent(new ValueChangedEvent({ data: resp }))
    );
  });

  eventTarget.addEventListener("connect", (config) => {
    getSubReddit(config && config.subRedditName).then((resp) =>
      eventTarget.dispatchEvent(new ValueChangedEvent({ data: resp }))
    );
  });
});
