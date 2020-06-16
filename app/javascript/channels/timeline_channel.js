import CableReady from "cableready"
import consumer from "./consumer"

consumer.subscriptions.create("TimelineChannel", {
  received(data) {
    if(data.cableReady) CableReady.perform(data.operations)
  }
});
