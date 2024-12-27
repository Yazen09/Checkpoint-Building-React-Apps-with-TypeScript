import React, { Component } from 'react';

// Définir le type de l'état
interface CounterState {
  count: number; // La propriété 'count' est de type number
}

// Annoter le composant avec les types
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0, // Initialisation de l'état
  };

  // Définir la méthode increment avec une fonction fléchée
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
