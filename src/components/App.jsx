import { Component } from "react"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFidback = ({target}) => {
    this.setState(prevState => { return {[target.id]: prevState[target.id] + 1,} })  
  }
 
  countTotalFeedback = () => {
    return (Object.values(this.state)).reduce((acc, item) => {return acc + item}, 0)
  }
  countPositiveFeedbackPercentage = () => {
    console.log(this.state.good);

    return (Math.round(this.state.good / this.countTotalFeedback() * 100) ) || 0;
  }

  
  render() {

    const StateBtn = ({ btnName }) => {
        return (
          Object.keys(btnName).map(item => (<button type="button" key={item} id={item} onClick={this.handleFidback}>{item}</button>)) )
    };
    
    const StatisticList = ({ statistics }) => {
      console.log(statistics);
      return (
           (Object.entries(statistics)).map((statisticEl) => (<p key={statisticEl[0]}>{statisticEl[0]}: <b>{statisticEl[1]}</b></p>))
      )
    };

    return (
      <>
        <h2>Please leave feedback</h2>

        <StateBtn btnName={this.state}></StateBtn>
        
        <h2>Statistics</h2>

        <StatisticList statistics={this.state}></StatisticList>
        <p>Total:  <b>{this.countTotalFeedback()}</b></p>
        <p>positiveFeedback:  <b>{this.countPositiveFeedbackPercentage()}%</b></p>
        
      </>
    );
  };
};


