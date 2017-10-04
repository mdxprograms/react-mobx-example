import React from 'react';
import { render } from 'react-dom';
import Messages from './Messages';
import { Provider } from 'mobx-react';
import messagesStore from './MessagesStore';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <Provider messagesStore={messagesStore}>
    <div>
      <h2>Messages</h2>
      <Messages />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
