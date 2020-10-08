import React, { Component } from 'react';
import axios from 'axios';

class Quitz extends Component {
    constructor(props) {
        super(props);
        
       this.state = {
            score : 0,
            isCorrect : true,
            question: String,
            answer: String,
            optiona: String,
            optionb: String,
            colour: String,
            btn1_class: String,
            btn2_class: String,
            isValid: true

        };
        this.getapidata();
    }
    manageScorebtn1(e) {
        if(this.state.isValid) {
            if (e.target.value === this.state.answer) {
                this.setState({
                    score: (this.state.score + 10),
                    isCorrect:true,
                    btn1_class: "greenButton",
                    isValid: false
                });
            } else {
                this.setState({
                    score: (this.state.score - 10),
                    isCorrect:false,
                    btn1_class: "redButton",
                    isValid: false
                });
            }
        }
    }

    manageScorebtn2(e) {
        if(this.state.isValid) {
        if (e.target.value === this.state.answer) {
            this.setState({
                score: (this.state.score + 10),
                isCorrect:true,
                btn2_class: "greenButton",
                isValid: false
            });
        } else {
            this.setState({
                score: (this.state.score - 10),
                isCorrect:false,
                btn2_class: "redButton",
                isValid: false
            });
        }
    }
    }
    
    componentDidMount() {
        this.getapidata.bind(this)
    }
getapidata() {

        axios.get('https://spreadsheets.google.com/feeds/list/1nHaaxjJnAR266tqjw8NBLeonHeCoMrX0lrKH7E2Grk8/od6/public/values?alt=json')
            .then(
                response => {
                    const i = Math.floor(Math.random() * 25);
                    console.log(response.data)
                    console.log(response.data.feed.entry[i])
                    console.log(response.data.feed.entry[i].gsx$question.$t)
                    console.log(response.data.feed.entry[i].gsx$answer.$t)
                    console.log(response.data.feed.entry.length)
                    this.setState({question: response.data.feed.entry[i].gsx$question.$t})
                    this.setState({answer: response.data.feed.entry[i].gsx$answer.$t})
                    this.setState({optiona: response.data.feed.entry[i].gsx$optiona.$t })
                    this.setState({optionb: response.data.feed.entry[i].gsx$optionb.$t })
                    this.setState({btn1_class: "transparentButton",
                                   btn2_class: "transparentButton",
                                   isValid: true})
            }

            )
    }

    render() {
        return (
            <div>
                <h1>score:{this.state.score}</h1>
                <h2>Question:{this.state.question}</h2>
                <h5><button className={this.state.btn1_class} onClick={this.manageScorebtn1.bind(this)} value={this.state.optiona} >{this.state.optiona}</button></h5>
                <h5><button className={this.state.btn2_class} onClick={this.manageScorebtn2.bind(this)} value={this.state.optionb}>{this.state.optionb}</button></h5>
                <button onClick={this.getapidata.bind(this)}>Next</button>
            </div>
        );
    }
}

export default Quitz;