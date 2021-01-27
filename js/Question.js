class Question {
    constructor() {
        this.title = createElement('h1');
        this.question = createElement('h3');
        this.option1 = createElement('h3');
        this.option2 = createElement('h3');
        this.option3 = createElement('h3');
        this.option4 = createElement('h3');
        this.input1 = createInput('Enter your name');
        this.input2 = createInput('Enter correct option');
    }
    display() {
        this.title.html("My Quizz game");
        this.title.position(350,0);

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter");
        this.question.position(150,80);
        this.option1.html("1: Everyone ");
        this.option1.position(150,120);
        this.option2.html("2: Envelope ");
        this.option2.position(150,140);
        this.option3.html("3: Estimate ");
        this.option3.position(150,160);
        this.option4.html("4: Example ");
        this.option4.position(150,180);

        this.input1.position(150,250);
        this.input2.position(350,250);
    }
}