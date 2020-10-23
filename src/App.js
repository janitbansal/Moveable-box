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
    let obj = document.getElementById(""+event.target.tabIndex)
    switch(event.code){
      case "KeyW":
        let W_val = parseInt(obj.style.top?obj.style.top:0, 10);
        obj.style.top = (W_val>11?(W_val - 10):0) + "px";
        break;
      case "KeyS":
        let S_val = parseInt(obj.style.top?obj.style.top:0, 10);
        obj.style.top = (S_val<460?(S_val + 10):470) + "px";
        break;

      case "KeyD":
        let D_val = parseInt(obj.style.left?obj.style.left:0, 10);
        obj.style.left = (D_val<1040?(D_val + 10):1050) + "px";
        break;
        
      case "KeyA":
        let A_val = parseInt(obj.style.left?obj.style.left:0, 10);
        obj.style.left = (A_val>11?(A_val - 10):0) + "px";
        break;

      case "Backspace":
        for(let i=0;i<this.state.boxes.length;i++){
          if(event.target.tabIndex===this.state.boxes[i].id){
            this.state.boxes.splice(i,1)
            this.setState(this.state);
          }
        }
        break;
      default:
        break;
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
