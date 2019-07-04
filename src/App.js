import React from 'react';
import Heading from './components/Heading';
import List from './components/List';
import './App.css';

class App extends React.Component {
  state = {
    items: [
      { text: 'eat', id: 1, completed: false },
      { text: 'sleep', id: 2, completed: false },
      { text: 'react', id: 3, completed: true }
    ]
  };

  render() {
    return (
      <div className="App">
        <Heading name="Sherpal" />
        <List
          items={this.state.items}
          removeItem={this.removeItem}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }

  toggleComplete = itemToToggle => {
    console.log('toggle this>', itemToToggle);
  };

  removeItem = itemToRemove => {
    console.log('removing', itemToRemove);
    // this.setState(state => {
    //   return {
    //     items:
    //   }
    // })
  };
}

export default App;
