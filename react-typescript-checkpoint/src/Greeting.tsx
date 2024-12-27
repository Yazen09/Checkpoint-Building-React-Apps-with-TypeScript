import React from 'react';

// Définir une interface pour les props
interface GreetingProps {
  name: string; // La prop 'name' est de type string
}

// Annoter le composant avec les types
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
