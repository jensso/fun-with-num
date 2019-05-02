import React from 'react';

export class LuckyNumbers extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      clicked: false,
      winner: false,
      winnerText: '0',
      pickedNum: '?',
      luckyNum: '???',
    })
  }

  handleClick(ev) {
    const lucky = Math.ceil(Math.random()*999);
    const random1 = Math.floor(Math.random()*10);
    const random2 = Math.floor(Math.random()*10);
    const random3 = Math.floor(Math.random()*10);
    const tempArray = [];
    tempArray.push(random1*100);
    tempArray.push(random2*10);
    tempArray.push(random3);
    const picked = tempArray.reduce((sum,nr)=>{return sum + nr} ,0);

    switch (true) {
      case lucky === picked:
      document.getElementById('match').style.background = 'red';
      this.setState({winner: true,
                    winnerText: 'the Jackpot'});
      break;

      case picked.toString().includes('7'):
      document.getElementById('every').style.background = 'red';
      this.setState({winner: true,
                    winnerText: '7$'});
      break;

      case picked % 111===0 :
      document.getElementById('equal').style.background = 'red';
      this.setState({winner: true,
                    winnerText: '111$'});
      break;
      default:
      document.getElementById('match').style.background = 'lime';
      document.getElementById('every').style.background = 'lime';
      document.getElementById('equal').style.background = 'lime';
      this.setState({winner: false});
      }
    this.setState({
      clicked: true,
      random1: random1,
      random2: random2,
      random3: random3,
      luckyNum: lucky,
      pickedNum: picked,
    })
  }

      render() {

        return (
        <React.Fragment>
          <h2>Have Fun with Numbers</h2>
          <div id="luckyNumbers">
            <div id="lottery">
              <p id="every">Win with every 7</p>
              <p id="match">Win with your draw<br/><b>{this.state.luckyNum}</b></p>
              <p id="equal">Win with 3 equal digits</p>
            </div>
            <div id="draw">
              <button onClick={this.handleClick.bind(this)}>try it</button>
              {this.state.clicked && <div>
                  <span id="random1">{this.state.random1}</span>
                  <span id="random2">{this.state.random2}</span>
                  <span id="random3">{this.state.random3}</span>
                </div>}
                {this.state.winner && <p id="winner">YOU WIN {this.state.winnerText}</p>}
            </div>
          </div>
          </React.Fragment>
        )
      }
    }
