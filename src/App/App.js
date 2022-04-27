import React from 'react';
import Button from './components/Button/Button';
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      compteur:0,
      uneData:"bonjour",
    };
  }
  componentDidMount(){
    console.log("le composant est monté");
  }
componentDidUpdate(prevProps, prevState){
  console.log(prevProps,this.props);
  console.log("%c%s","color:red","-------------")
  console.log(prevState,this.state);
}
  render(){
    return (
    <div className="App" data-testid="App">
      <div>Valeur du compteur: {this.state.compteur}</div>
      <Button 
        bgColor='skyblue' 
        onButtonClick={()=>{
          this.setState({compteur:this.state.compteur+1})
          console.log(this.state.compteur);
          }}>          
          +1
      </Button>
      <Button 
        bgColor='tomato'
        onButtonClick={()=>{
          if(this.state.compteur>0){
            this.setState({compteur:this.state.compteur-1})
            console.log(this.state.compteur)
          }
        }}
      >
        -1
      </Button>
    </div>
    );
  }
}
export default App;
