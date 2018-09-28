import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Heading from  "./components/Heading"
import PeopleCard from './components/PeopleCard';
import people from "./people.json";
import countries from "./country.json";
import Wrapper from "./components/Wrapper"
import GameOverModal from "./components/gameOverModal/GameOver"

class App extends React.Component {

  //State
  state = {
    people : people,
    highestScore : 0,
    yourScore : 0,
    yourMisses : 0,
    totalPlays : 1,
    correctAnswer : "",
  }

  //Component did mount TDO remve total play
  componentDidMount(){
    this.setState({
      correctAnswer : countries[0]
    })

  }

  //Handling clicks
  handleClicks = (event) =>{

    //Checks if your score is greater then the existing highest score TDO - not working fix it
    const checkHighestScore = () =>{
      if(this.state.yourScore >= this.state.highestScore){
        this.setState({
          highestScore : this.state.yourScore
        })
      }
    }

    let totalPlay = this.state.yourScore + this.state.yourMisses + this.state.totalPlays;
  
    if(totalPlay < 9){
      this.setState({
        correctAnswer : countries[totalPlay]
      })
    }else{
      this.setState({
        people : people,
        yourScore : 0,
        yourMisses : 0,
        totalPlays : 1,
        correctAnswer : "",
      })
    }

    
  //This function checks if user clicked the right image or not
  const checkIfCorrect = () => { 
    let currentPick = event.target.id;
    console.log(currentPick);

    if(currentPick === this.state.correctAnswer){
      console.log("right answer");
      this.setState({
        yourScore :  this.state.yourScore + 1
      }, checkHighestScore())  
         
    }else{
      this.setState({
        yourMisses : this.state.yourMisses +=1
      })
    }
  }

 
  checkIfCorrect();

   

  }

  render() {
    return (
      <div>
        <Navbar
           yourScore = {this.state.yourScore}
           highestScore = {this.state.highestScore}
          />
          <Heading
            correctAnswer = {this.state.correctAnswer}
            />

        <Wrapper>
          {this.state.people.map( people =>(
            <PeopleCard 
              key = {people.id}
              name = {people.name}
              image = {people.image}
              handleClicks = {this.handleClicks}
            />
          ))}

        </Wrapper>
        <div>Corect Answer : {this.state.correctAnswer} | 
              Misses : {this.state.yourMisses} | 
              Correct : {this.state.yourScore} |
              Total Play : {this.state.totalPlays} |
              Highest Score : {this.state.highestScore}
        </div>

        <GameOverModal />
      </div>
    );
  }
}
export default App;
