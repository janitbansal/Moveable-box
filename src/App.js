import React from 'react';
import './App.css';
import Box from './Box'
class App extends React.Component {

  state = {boxes:[]}
  index =100;
  addbox = ()=>{
    this.index++;
    this.state.boxes.push({id:this.index,name:"janit"})
    this.setState(this.state)
    console.log(this.state,"state");
  }
  onMove = (event) => {
    console.log(event , " ab move karo",event.target.tabIndex);
    let obj = document.getElementById(""+event.target.tabIndex)

    if(event.code==="KeyW"){
      let Y_val = parseInt(obj.style.top?obj.style.top:0, 10);
      obj.style.top = (Y_val>11?(Y_val - 10):0) + "px";

    }else if(event.code==="KeyS"){
      let Y_val = parseInt(obj.style.top?obj.style.top:0, 10);
      obj.style.top = (Y_val<460?(Y_val + 10):470) + "px";

    }else if(event.code==="KeyD"){
      let X_val = parseInt(obj.style.left?obj.style.left:0, 10);
      obj.style.left = (X_val<1040?(X_val + 10):1050) + "px";
      
    }else if(event.code==="KeyA"){
      let X_val = parseInt(obj.style.left?obj.style.left:0, 10);
      obj.style.left = (X_val>11?(X_val - 10):0) + "px";
    }else if(event.code==="Backspace"){
      for(let i=0;i<this.state.boxes.length;i++){
        if(event.target.tabIndex==this.state.boxes[i].id){
          this.state.boxes.splice(i,1)
          this.setState(this.state);
        }
      }
    }

  };
  render() {
    return (
      <div className="App">
        <h1>Moveable Boxes </h1>
          <button className="button" onClick={this.addbox}>Add Box</button>
          <div className="fence">
            {
              this.state.boxes.map((box,i) => (
                <Box keyDown={this.onMove.bind(this)} id={box.id} key={box.id}/>
                
              ))
            }
          </div>
      </div>
    )
  }    
}

export default App;
