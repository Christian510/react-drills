function Header() {
  return (
    <div className="App-header">
      <img src={aboutPicWeb} className="image" alt="logo" />
      <h2>Welcome</h2>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      climbingAreas: [
        "City of Rocks",
        "Joshua Tree",
        "Yosemite",
        "Smith Rock"
      ]
    }
  }
  render() {

    let showClimbingAreas = this.state.climbingAreas.map((elm, i) => {
      return (
        <p key={i}>{elm}</p>
      )
    });

    return (
      <div className="App">
        <Header />
        <div className="container">
            <div className="wrapper">
              <h2>My List</h2>
              <div>
                {showClimbingAreas}
              </div>
            </div>
        </div>
      </div>
    );
  }
}
