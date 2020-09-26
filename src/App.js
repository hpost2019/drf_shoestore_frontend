import React from 'react';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shoes: []
    }
  }

  componentDidMount(){
    fetch("http://127.0.0.1:8000/api/shoe/")
    .then((res) => res.json())
    .then((data) => this.setState({shoes: data} ))
    
  }
  render(){
    console.log(this.state)
  return (
    <div className="App">
      
        {this.state.shoes.map((s) => (
          <div>
            <ul>
              <li>Brand Name: {s.brand_name}</li>
              <li>Size: {s.size}</li>
              <li>Manufacturer: {s.manufacturer}</li>
              <li>Color: {s.color}</li>
              <li>Material: {s.material}</li>
              <li>Shoe Type: {s.shoe_type}</li>
              <li>Fasten Type: {s.fasten_type}</li>
            </ul>
          </div>
          
        ))}
    </div>
  );
}
}
export default App;
