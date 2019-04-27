import React from 'react';

export class LuckyNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      clicked: false,
    }); // this.state ends
  } // constructor ends

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
      <div className="container">
        <h2 className="lead mx-2 p-2">Have Fun with Numbers</h2>
      </div>
      <div id="jso_luckyNumbers" className="jumbotron m-1 p-2">
        <div id="quote">
          <p className="bg-dark text-light">
          „Life is not a problem to be solved, but a reality to be experienced.“
          <br />Søren Kierkegaard (*1813 - †1855)
          </p>
          {this.state.clicked && <p className="bg-dark text-light">
          „Life is not a problem to be solved, but a reality to be experienced.“
          <br />Søren Kierkegaard (*1813 - †1855)
          </p>}
        </div>

        <div id="lottery">
          {this.state.clicked && <p>the lucky number is <span>{this.state.luckyNum}</span></p>}
          {!this.state.clicked && <p>Run the lottery</p>}
          <p><button onClick={this.handleClick.bind(this)}></button></p>

            {this.state.clicked && <p>
              - Win with every 7<br />
              - Win with 3 equal digits<br />
              - Win with your draw:<br />
              <span id="random1">{this.state.random1/100}</span>
              <span id="random2">{this.state.random2/10}</span>
              <span id="random3">{this.state.random3}</span>
            </p>}
          {this.state.winner && this.state.clicked && <p id="winner">Hooray, a match<br/>YOU WIN!</p>}
          {!this.state.winner && this.state.clicked && <p id="looser">Sorry, no match<br/>YOU LOOSE!</p>}
        </div>
      </div>
      </React.Fragment>
    )
  } // render ends
}
