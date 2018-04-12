import React from 'react';
import ReactDOM from 'react-dom';

import base from './rebase';

/*
  Bind to a collection:
    base.bindCollection('chats', {
      context: this,
      state: 'messages',
      withRefs: true
    });
*/

/*
  Add a document to a collection:
    base.addToCollection('chats', {
      message: "message"
    });
*/

/*
  Remove a document from a collection:
    base.removeDoc(item.ref);
*/

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div />
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
