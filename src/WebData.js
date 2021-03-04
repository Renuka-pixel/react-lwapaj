import React from "react";

class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ id: 1, email: "abc@xyz.com" }, { id: 2, email: "abc@xyz.com" }]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(result => {
        this.setState({ items: result });
      });
  }

  render() {
    const items = this.state.items;
    return (
      <ul>
        {items.map(i => (
          <li key={i.id}>{i.title}</li>
        ))}
      </ul>
    );
  }
}

export default GetData;
