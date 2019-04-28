import React from 'react';

export class LuckyNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      clicked: false,
      random1: 0,
      random2:0,
      random3: 0
    });
  }

  handleClick(ev) {

    this.state.luckyNum = Math.ceil(Math.random()*999);
    const lucky = this.state.luckyNum;

    this.state.random1 = Math.floor(Math.random()*10);
    this.state.random2 = Math.floor(Math.random()*10);
    this.state.random3 = Math.floor(Math.random()*10);
    const tempArray = [];
    tempArray.push(this.state.random1*100);
    tempArray.push(this.state.random2*10);
    tempArray.push(this.state.random3);
    const tempNum = tempArray.reduce((sum,nr)=>{return sum + nr} ,0);

    this.state.luckyNum === tempNum
    || this.state.luckyNum % 111 === 0
    || this.state.luckyNum.toString().includes("7")
       ?
      this.setState({
        clicked: true,
        luckyNum: lucky,
        random1: tempArray[0],
        random2: tempArray[1],
        random3: tempArray[2],
        pickedNums: tempArray,
        pickedNum: tempNum,
        winner: true,
      })
      :
      this.setState({
        clicked: true,
        luckyNum: lucky,
        random1: tempArray[0],
        random2: tempArray[1],
        random3: tempArray[2],
        pickedNums: tempArray,
        pickedNum: tempNum,
        winner: false,
      });
  }

  render() {
    return (
      <React.Fragment>
      <h2>Have Fun with Numbers</h2>
      <div id="luckyNumbers">
        <div id="lottery">
          <p>Win with every 7</p>
          <p>Win with 3 equal digits</p>
          <p>Win with your draw</p>
        </div>
        <div id="draw">
          <button onClick={this.handleClick.bind(this)}>Draw your lucky number</button>
          <div>
              <span id="random1">{this.state.random1/100}</span>
              <span id="random2">{this.state.random2/10}</span>
              <span id="random3">{this.state.random3}</span>
            </div>
        </div>
        {this.state.clicked && <p id="lucky">the lucky number is {this.state.luckyNum}</p>}

          {this.state.winner && this.state.clicked && <p id="winner">Hooray, a match<br/>YOU WIN!</p>}
          {!this.state.winner && this.state.clicked && <p id="looser">Sorry, no match<br/>YOU LOOSE!</p>}
      </div>
      </React.Fragment>
    )
  } // render ends
}
