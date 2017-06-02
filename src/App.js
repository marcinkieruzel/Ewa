import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
  {
    super()
    {
      this.state = {
        pytanie1: [
          {answer: 1, sore: 0, sweet: 3, bitter: 3, text: "Tak" },
          {answer: 2, sore: 3, sweet: 1, bitter: 3, text: "Nie" },
          {answer: 3, sore: 4, sweet: 1, bitter: 3, text: "Trochę" }
        ],
        odpowiedz1: '',
        pytanie2: [
          {answer: 1, sore: 0, sweet: 3, bitter: 3, text: "Uwielbiam" },
          {answer: 2, sore: 3, sweet: 1, bitter: 3, text: "Kocham" },
          {answer: 3, sore: 4, sweet: 1, bitter: 3, text: "Ubóstwiam" }
        ],
        odpowiedz2: ''
      }
    }
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this)
    this.sum = this.sum.bind(this);
  }

  handleChange1(event){
    console.log(event.target);
    this.setState({
      odpowiedz1: {answer: event.target.value, sore: event.target.dataset.sore, sweet: event.target.dataset.sweet, bitter: event.target.dataset.bitter}
    })
  }

  handleChange2(event){
    console.log(event.target);
    this.setState({
      odpowiedz2: {answer: event.target.value, sore: event.target.dataset.sore, sweet: event.target.dataset.sweet, bitter: event.target.dataset.bitter}
    })
  }

  sum() {

      let sore = parseInt(this.state.odpowiedz1.sore ? this.state.odpowiedz1.sore : 0) + parseInt(this.state.odpowiedz2.sore ? this.state.odpowiedz2.sore : 0);

      let bitter = parseInt(this.state.odpowiedz1.bitter ? this.state.odpowiedz1.sore : 0) + parseInt(this.state.odpowiedz2.bitter ? this.state.odpowiedz2.bitter : 0);

      let sweet = parseInt(this.state.odpowiedz1.sweet ? this.state.odpowiedz1.sweet : 0) + parseInt(this.state.odpowiedz2.sweet ? this.state.odpowiedz2.sweet : 0);

      console.log("Słodycz: " + sweet + " Gorycz: " + bitter + " Kwaśność: " + sore);


      return {sore: sore, bitter: bitter, sweet: sweet};

  }

  render() {
    return (
      <div className="App">
      <form>
      <h3>Czy lubisz sernik?</h3>
        { this.state.pytanie1.map((pyt, index) => {

          return (<label key={pyt.answer}>{pyt.text}<input key={pyt.answer} data-sore={pyt.sore} data-sweet={pyt.sweet} data-bitter={pyt.bitter} name="pytanie1" type="radio" value={pyt.answer} onChange={this.handleChange1} /></label>)
        })}

        <h3>Czy lubisz musztardę?</h3>
          { this.state.pytanie2.map((pyt, index) => {

            return (<label key={pyt.answer}>{pyt.text}<input key={pyt.answer} data-sore={pyt.sore} data-sweet={pyt.sweet} data-bitter={pyt.bitter} name="pytanie2" type="radio" value={pyt.answer} onChange={this.handleChange2} /></label>)
          })}
      </form>
      <button onClick={this.sum
      }>Wynik</button>
      </div>
    );
  }
}

export default App;
