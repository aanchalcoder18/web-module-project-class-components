import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ul>
          <li>go to the gym</li>
          <li>clean my room</li>
          <li>take out trash</li>
        </ul>
        <form>
          <input />
          <button>Add</button>
        </form>
        <button>Clear</button>
      </div>
    );
  }
}

export default App;
