import React from "react";
import { inject, observer } from "mobx-react";

@inject("messagesStore")
@observer
export default class Messages extends React.Component {
  addMessage = e => {
    if (e.key === "Enter") {
      this.props.messagesStore.addMessage(e.target.value);
      e.target.value = '';
    }
  };

  render() {
    const {
      delMessage,
      messages,
      messageCount
    } = this.props.messagesStore;

    return (
      <div className="messages">
        <input
          type="text"
          onKeyPress={this.addMessage}
          placeholder="New Message"
        />
        <span> <em>(Press Enter to Send)</em></span>
        <div>Total: {messageCount}</div>
        {messages.map(m => <p>{m} <button onClick={() => delMessage(m)}>&times;</button></p>)}
      </div>
    );
  }
}
