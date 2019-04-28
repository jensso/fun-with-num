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
#quote {
width: 44%;
border-radius: 2vw 0;
display: flex;
flex-direction: column;
justify-content: center;

  p {
    border-radius: 2vw 0;
    box-shadow: 1vw 2vw 3vw grey;
    padding: 2vw;
    margin: 1vw;
    &:nth-of-type(2) {
      transform: rotate(15deg);
      color: gold !important;
      opacity: 0.8;
    }
  }
}
