const questions = [
	{
		question: 'Что изучает предмет "Станции и узлы"?',
		answers: [
			{ text: 'Природу железнодорожных станций', correct: false },
			{ text: 'Конструкции и функциональные особенности железнодорожных станций и узлов', correct: true },
			{ text: 'Развитие транспорта в городах', correct: false },
			{ text: 'Историю железных дорог', correct: false },
		]
	},
	{
		question: 'Какие аспекты включает в себя проектирование железнодорожных станций и узлов?',
		answers: [
			{ text: 'Технологии производства железных дорог', correct: false },
			{ text: 'Выбор места, планировка и организация движения', correct: true },
			{ text: 'Составление финансовых отчетов', correct: false },
			{ text: 'Разработка поездов', correct: false },
		]
	},
	{
		question: 'Что является одной из функциональных задач станций и узлов?',
		answers: [
			{ text: 'Только пересадка пассажиров', correct: false },
			{ text: 'Производство железнодорожных конструкций', correct: false },
			{ text: 'Построение мостов', correct: false },
			{ text: 'Пересадка, загрузка и разгрузка', correct: true },
		]
	},
	{
		question: 'Какие аспекты технологии эксплуатации станций важны для безопасности и эффективности?',
		answers: [
			{ text: 'Процессы обслуживания и эксплуатации станций', correct: true },
			{ text: 'Только строительство новых путей', correct: false },
			{ text: 'Программирование железнодорожных систем', correct: false },
			{ text: 'Контроль качества топлива', correct: false },
		]
	},
	{
		question: 'Какие современные технологии могут быть использованы на железнодорожных станциях и узлах?',
		answers: [
			{ text: 'Управление движением с помощью информационных систем', correct: true },
			{ text: 'Только традиционные методы эксплуатации', correct: false },
			{ text: 'Ручной труд', correct: false },
			{ text: 'Использование телескопических кранов', correct: false },
		]
	},
	{
		question: 'Как станция и узел влияют на структуру транспортной сети?',
		answers: [
			{ text: 'Не влияют на структуру', correct: false },
			{ text: 'Увеличивают поток пассажиров', correct: false },
			{ text: 'Влияют на общую структуру и эффективность железнодорожного транспорта', correct: true },
			{ text: 'Создают дополнительные проблемы для управления движением', correct: false },
		]
	},
	{
		question: 'Какое экономическое влияние могут иметь станции и узлы?',
		answers: [
			{ text: 'Оценка затратности работы станций и их влияние на экономику региона', correct: true },
			{ text: 'Только рост налоговых поступлений', correct: false },
			{ text: 'Снижение затрат на производство железнодорожных путей', correct: false },
			{ text: 'Уменьшение количества рейсов поездов', correct: false },
		]
	},
]

const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')
const startButton = document.getElementById('start')
const appElement = document.querySelector('.app')
const container = document.getElementById("container")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
	currentQuestionIndex = 0
	score = 0
	nextButton.innerHTML = 'Следующий'
	showQuestion()
}

function showQuestion() {
	resetState();
	let currentQuestion = questions[currentQuestionIndex]
	let questionNo = currentQuestionIndex + 1
	questionElement.innerHTML = questionNo + '. ' + currentQuestion.question

	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button")
		button.innerHTML = answer.text
		button.classList.add("btn")
		answerButtons.appendChild(button)
		if(answer.correct){
			button.dataset.correct = answer.correct
		}
		button.addEventListener("click", selectAnswer)
	})
}

function resetState(){
	nextButton.style.display = "none"
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild)
	}
}

function selectAnswer(e){
	const selectedBtn = e.target
	const isCorrect = selectedBtn.dataset.correct === "true"
	if(isCorrect){
		selectedBtn.classList.add("correct")
		score++
	} else{
		selectedBtn.classList.add("incorrect")
	}
	Array.from(answerButtons.children).forEach(button => {
		if(button.dataset.correct === "true"){
			button.classList.add("correct")
		}
		button.disabled = true
	})
	nextButton.style.display = "block"
}

function showScore(){
	resetState()
	questionElement.innerHTML = `Вы набрали ${score} из ${questions.length} баллов!`
	nextButton.innerHTML = "Сдать Снова"
	nextButton.style.display = "block"
}

function handleNextButton(){
	currentQuestionIndex++
	if(currentQuestionIndex < questions.length){
		showQuestion()
	} else{
		showScore()
	}
}

nextButton.addEventListener("click", ()=>{
	if(currentQuestionIndex < questions.length){
		handleNextButton()
	} else{
		startQuiz()
	}
})

startButton.addEventListener("click", (e) => {
	e.preventDefault() 
	appElement.classList.remove('hidden') 
	container.style.display = "none"
	startQuiz()
})

startQuiz()