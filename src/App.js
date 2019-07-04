import React from 'react';
import Heading from './components/Heading';
import List from './components/List';
import './App.css';

class App extends React.Component {
  state = {
    items: [
      {
        text: 'eat',
        id: 1,
        completed: false,
        category: 'lifestyle',
        hidden: false
      },
      {
        text: 'sleep',
        id: 2,
        completed: false,
        category: 'rest',
        hidden: false
      },
      {
        text: 'react',
        id: 3,
        completed: false,
        category: 'code',
        hidden: false
      },
      { text: 'node', id: 4, completed: false, category: 'code', hidden: false }
    ]
  };

  render() {
    return (
      <div className='App'>
        <Heading name='Sherpal' />
        <List
          items={this.state.items}
          removeItem={this.removeItem}
          toggleComplete={this.toggleComplete}
          displayCategory={this.displayCategory}
          displayAll={this.displayAll}
        />
      </div>
    );
  }

  toggleComplete = itemToToggle => {
    console.log('toggle this', itemToToggle);
    this.setState(state => {
      return {
        items: state.items.map(item => {
          if (item === itemToToggle) {
            if (item.completed) item.completed = false;
            else item.completed = true;
          }
          return item;
        })
      };
    });
  };

  removeItem = itemToRemove => {
    console.log('removing', itemToRemove.text);
    this.setState(state => {
      return {
        items: state.items.filter(item => item !== itemToRemove)
      };
    });
  };

  displayCategory = category => {
    console.log('displaying category', category);
    this.setState(state => {
      return {
        items: state.items.map(item => {
          if (item.category !== category) item.hidden = true;
          else item.hidden = false;
          return item;
        })
      };
    });
  };

  displayAll = () => {
    console.log('displaying all ');
    this.setState(state => {
      return {
        items: state.items.map(item => {
          item.hidden = false;
          return item;
        })
      };
    });
  };
}

export default App;
