import React, { Component } from 'react';
import Game from './game';
import { getQuestionsIndex } from './utils';
import { data } from './data';
import './quiz.css';

class Quiz extends Component {
	constructor(props) {
		super();
		this.state = {
			questionIndex: getQuestionsIndex(), //Random questions array
			currentQuestion: 0, //Current question in array
			gameOver: false, //show game over screen on true
			category: 0, //which current category to update cheese
			correct: [], //push correct categories to array
			message: '', //display correct/incorrect message
			showModal: false, //shows modal after question answered
		};

		//Check if answer given is correct
		this.onAnswer = (e, category, currentQuestion) =>
			e.target.innerText === data[category].questions[currentQuestion].answer
				? this.onCorrect()
				: this.onWrong();

		//add colored piece
		this.updateCheese = () => {
			this.setState({
				// correct: this.state.correct.push(data[this.state.category].color),
				correct: [...this.state.correct, data[this.state.category].color],
				message: 'Correct',
				showModal: true,
			});
		};
		//add timeout between modal and next question
		this.updateBoard = () => {
			setTimeout(() => {
				this.setState({
					category: this.state.category + 1,
					currentQuestion: this.state.currentQuestion + 1,
					showModal: false,
				});
			}, 1000);
		};
		//display modal on game end
		this.gameEnd = () => {
			setTimeout(() => {
				this.setState({
					message: 'You Scored ' + this.state.correct.length,
					gameOver: true,
				});
			}, 2000);
		};
		//handle if correct answer given
		this.onCorrect = () => {
			this.updateCheese();
			if (this.state.category < 5) {
				this.updateBoard();
			} else {
				this.gameEnd();
			}
		};
		//handle if correct answer given
		this.onWrong = () => {
			this.setState({
				message: 'Incorrect',
				showModal: true,
			});
			if (this.state.category < 5) {
				this.updateBoard();
			} else {
				this.gameEnd();
			}
		};
		//Reset Game on game end.
		this.onGameEnd = () => {
			this.setState({
				questionIndex: getQuestionsIndex(),
				currentQuestion: 0,
				gameOver: false,
				category: 0,
				correct: [],
				message: '',
				showModal: false,
			});
		};
	}

	render() {
		const {
			questionIndex,
			category,
			currentQuestion,
			correct,
			message,
			gameOver,
			showModal,
		} = this.state;
		return (
			<div className="container">
				<Game
					data={data}
					questionIndex={questionIndex}
					category={category}
					currentQuestion={currentQuestion}
					correct={correct}
					message={message}
					gameOver={gameOver}
					onAnswer={this.onAnswer}
					showModal={showModal}
					onPlayAgain={this.onGameEnd}
				/>
			</div>
		);
	}
}

export default Quiz;
