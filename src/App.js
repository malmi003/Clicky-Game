import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import boats from "./boats.json";
import Column from "./components/Column";
import Row from "./components/Row";
import Container from "./components/Container";
import "./App.css";

function shuffleCards(imageArray) {
  for (let i = imageArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
  }
  return imageArray;
};

class App extends React.Component {
  state = {
    boats,
    score: 0,
    highScore: 0,
    guessingStatus: "",
    clicked: []
  };

  handleShuffle = () => {
    let shuffledCards = shuffleCards(boats);
    this.setState({ boats: shuffledCards })
  };

  handleIncrement = () => {
    const currentScore = this.state.score++;
    this.setState({
      score: currentScore,
      guessingStatus: ""
    });

    if (currentScore >= this.state.highScore) {
      this.setState({ highScore: currentScore });
    } else if (currentScore === 12) {
      this.setState({ guessingStatus: "You win!" })
    };
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      guessingStatus: "Honk, honk",
      clicked: [],
    });
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) })
    } else {
      this.handleReset();
    }
  };

  render = () => (
    <Wrapper>
      <Header
        score={this.state.score}
        highScore={this.state.highScore}
        guessingStatus={this.state.guessingStatus}
      />
      <Container>
        <Row>
          {this.state.boats.map(boat => {
            <Column size="md-3 sm-6">
              <ImageCard
                key={boat.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={boat.id}
                image={boat.image}
              />
            </Column>
          })}
        </Row>
      </Container>
    </Wrapper>
  );
}

export default App;
