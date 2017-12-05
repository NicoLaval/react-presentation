import React from 'react';
import PropTypes from 'prop-types';
import Result from './result';
import { shuffle } from './utils';

function Game({
	data,
	gameOver,
	questionIndex,
	onAnswer,
	category,
	correct,
	currentQuestion,
	onPlayAgain,
	showModal,
	message,
}) {
	const currentQuestionUpdate = questionIndex[currentQuestion];
	//Stops reshuffling of options between questions
	if (!showModal) {
		shuffle(data[category].questions[currentQuestionUpdate].options);
	}
	//show modal after an answer has been clicked
	const result = showModal ? (
		<Result
			color={data[category].color}
			correct={correct}
			message={message}
			gameOver={gameOver}
			onAgainClick={onPlayAgain}
		/>
	) : null;

	return (
		<div className="game-container">
			<h1>React Pursuit</h1>
			<div className="questions-container">
				<div className={'category ' + data[category].color}>
					{data[category].category}
				</div>
				<div className="question">
					{data[category].questions[currentQuestionUpdate].question}
				</div>
				<ul
					className="options"
					onClick={e => onAnswer(e, category, currentQuestionUpdate)}
				>
					<li>{data[category].questions[currentQuestionUpdate].options[0]}</li>
					<li>{data[category].questions[currentQuestionUpdate].options[1]}</li>
					<li>{data[category].questions[currentQuestionUpdate].options[2]}</li>
					<li>{data[category].questions[currentQuestionUpdate].options[3]}</li>
				</ul>
			</div>
			{result}
		</div>
	);
}

Game.propTypes = {
	data: PropTypes.array.isRequired,
	gameOver: PropTypes.bool.isRequired,
	questionIndex: PropTypes.array.isRequired,
	onAnswer: PropTypes.func.isRequired,
	category: PropTypes.number.isRequired,
	correct: PropTypes.array.isRequired,
	currentQuestion: PropTypes.number.isRequired,
	onPlayAgain: PropTypes.func.isRequired,
	showModal: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
};

export default Game;
