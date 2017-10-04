import { observable, action, computed } from "mobx";

class MessagesStore {
  // observable state
  @observable messages = [];
  @observable current = "";

  // actions
  @action addMessage = message => this.messages.push(message);
  @action
  delMessage = message =>
    (this.messages = this.messages.filter(m => m !== message));

  // getters
  @computed
  get messageCount() {
    return this.messages.length;
  }
}

const storeInstance = new MessagesStore();

export default storeInstance;
