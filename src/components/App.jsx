import React, { Component } from "react";

import styled from 'styled-components';
import PropTyper, { objectOf } from 'prop-types';
import { shape } from "prop-types";

const Title = styled.h2`
  padding: 16px;
    font-size: 32px;
  `;

const Button = styled.button`
  width: 200px;
  height: 100px;
  padding: 4px;
  margin: 8px;
  color: white;
  font-size: 24px;
  text-transform: uppercase;
  background-color: black;
  border-radius: 6px;
  cursor: pointer;
  `;

  const P = styled.p`
  padding: 4px;
  margin: 8px;
   text-transform: uppercase;
  font-size: 24px;`;
  

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

//   StateBtn.propTyper = {
//   btnName: shape({
//     good: PropTyper.number,
//     neutral: PropTyper.number,
//     bad: PropTyper.number,
//   })
// }

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
          Object.keys(btnName).map(item => (<Button type="button" key={item} id={item} onClick={this.handleFidback}>{item}</Button>)) )
    };
    
    const StatisticList = ({ statistics }) => {
      return (
           (Object.entries(statistics)).map((statisticEl) => (<P key={statisticEl[0]}>{statisticEl[0]}: <b>{statisticEl[1]}</b></P>))
      )
    };

    return (
      <>
        <Title>Please leave feedback</Title>

        <StateBtn btnName={this.state}></StateBtn>
        
        <Title>Statistics</Title>

        <P>Total:  <b>{this.countTotalFeedback()}</b></P>
        <P>PositiveFeedback:  <b>{this.countPositiveFeedbackPercentage()}%</b></P>
        
      </>
    );
  };
};

{/* <StatisticList statistics={this.state}></StatisticList> */}

