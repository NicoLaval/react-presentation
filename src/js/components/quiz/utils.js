//Shuffle function to shuffle question options taken from http://stackoverflow.com/questions/6274339/
export const shuffle = a => {
	for (let i = a.length; i; i--) {
		const j = Math.floor(Math.random() * i);
		[a[i - 1], a[j]] = [a[j], a[i - 1]];
	}
};

//Get a random array of 6 questions
export const getQuestionsIndex = () => {
	const questionIndexArray = [];
	for (let i = 0; i < 6; i++) {
		questionIndexArray.push(Math.floor(Math.random() * 5));
	}
	return questionIndexArray;
};
