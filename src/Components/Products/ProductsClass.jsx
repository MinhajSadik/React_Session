import React, { Component } from "react";

export default class ProductsClass extends Component {
  state = {
    products: [
      { id: 1, name: "profile", title: "Profile" },
      { id: 2, name: "recruit", title: "Recruitment" },
      { id: 3, name: "arts", title: "Arts" },
      { id: 4, name: "talents", title: "Talents" },
      { id: 5, name: "affection", title: "Affection" },
    ],
    selected: "",
  };

  changeColor = (id) => {
    this.setState({ selected: id });
  };

  render() {
    const { selected, products } = this.state;
    console.log(selected);
    return (
      <div>
        <h2>Click to items</h2>
        <ul>
          {products.map(({ name, id, title }) => (
            <li key={id}>
              <h3
                style={{
                  color: selected === id ? "red" : "",
                }}
                onClick={() => this.changeColor(id)}
                name={name}
              >
                {title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
