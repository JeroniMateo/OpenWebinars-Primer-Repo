// example.ts

// Define a type for a person
type AppComponent2 = {
  name: string;
  age: number;
};

// Create a function to greet a person
function greet(person: AppComponent2): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

// Example usage
const user: AppComponent2 = {
  name: "Alice",
  age: 30
};

console.log(greet(user));
