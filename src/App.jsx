import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Pizza React House</h1>
    </div>
  );
}

function Menu() {
  return (
    <div>
      {pizzaData.map((pizza) => (
        <PizzaList
          key={pizza.name}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          photoName={pizza.photoName}
        />
      ))}
    </div>
  );
}

function Footer() {
  return <p>We're open until 22:00h</p>;
}

function PizzaList({ name, ingredients, price, photoName }) {
  return (
    <div>
      <img src={photoName} alt={name} />
      <span>{name}</span>
      <span>{ingredients}</span>
      <span>{price}</span>
    </div>
  );
}
