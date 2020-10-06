import React, { Component } from 'react';
import axios from 'axios';

class Quitz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            isCorrect: false,
            question: String,
            answer: String,
            optiona: String,
            optionb: String
        };
    }
    manageScore(e) {

        if (e.target.value === this.state.answer) {
            this.setState({
                score: (this.state.score + 10)
            });
        } else {
            this.setState({
                score: (this.state.score - 10)
            });
        }
    }


    componentDidMount() {
        this.getapidata.bind(this)

    }
    getapidata() {

        axios.get('https://spreadsheets.google.com/feeds/list/1nHaaxjJnAR266tqjw8NBLeonHeCoMrX0lrKH7E2Grk8/od6/public/values?alt=json')
            .then(
                response => {
                    const i = Math.floor(Math.random() * 6);
                    console.log(response.data)
                    console.log(response.data.feed.entry[i])
                    console.log(response.data.feed.entry[i].gsx$question.$t)
                    console.log(response.data.feed.entry[i].gsx$answer.$t)
                    console.log(response.data.feed.entry.length)

                    this.setState({
                    question: response.data.feed.entry[i].gsx$question.$t
                })
                    this.setState({
                         answer: response.data.feed.entry[i].gsx$answer.$t
                         })
                    this.setState({
                         optiona: response.data.feed.entry[i].gsx$optiona.$t
                         })
                    this.setState({
                         optionb: response.data.feed.entry[i].gsx$optionb.$t
                         })
                 }
            )
         }

         render() {
          return (
            <div>
                <h1>score:{this.state.score}</h1>
                <h2>Question:{this.state.question}</h2>
                <h5><button onClick={this.manageScore.bind(this)} value={this.state.optiona}>{this.state.optiona}</button></h5>
                <h5><button onClick={this.manageScore.bind(this)} value={this.state.optionb}>{this.state.optionb}</button></h5>
                <button onClick={this.getapidata.bind(this)}>Next</button>
             </div>
        );
    }
}

export default Quitz;