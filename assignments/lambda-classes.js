// CODE here for your Lambda Classes

class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructors extends Person {
    constructor(instructorProps){
        super(instructorProps)
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject) {
       return  `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
    review(studentName){
       return studentName.grade = Math.round(Math.random()*100);
    }
}

class Students extends Person {
    constructor(studentProps){
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        this.grade = studentProps.grade;
    }
    listsSubjects(favSubjects) {
        //test
        return `${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate() {
        if (this.grade > 70){
            return `your grade is ${this.grade}!, you're ready to graduate!`
        } else {
            return `your grade is ${this.grade}, increase your grade above 70 to graduate!`
        }
    }
}

class ProjectManagers extends Instructors {
    constructor(PMProps) {
        super(PMProps);
        this.gradClassName = PMProps.gradClassName;
        this.favInstructor = PMProps.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

//instructor #1
const phil = new Instructors({
    name: 'Phil',
    age: 35,
    location: 'NYC',
    specialty: 'Node.js',
    favLanguage: 'Javascript',
    catchPhrase: 'Javascript i choose you!'
});
//instructor #2
 const kim = new Instructors({
    name: 'Kim',
    age: 28,
    location: 'Cananda',
    specialty: 'Front-end',
    favLanguage: 'Ruby',
    catchPhrase: `i can't find my glasses`
});
//instructor #3
const tommy = new Instructors({
    name: 'tommy',
    age: 57,
    location: 'Los Angeles',
    specialty: 'Full-Stack',
    favLanguage: 'C#',
    catchPhrase: 'Ouch my Back'
});



//student #1
const zordon = new Students ({
    name: 'Zordon',
    age: 57,
    location: 'Philly',
    previousBackground: 'galactic justice' ,
    className: 'WEB21',
    favSubjects: ['git','preprocessing','java'],
    grade: 69
})
//student #2
const alpha = new Students ({
    name: 'alpha',
    age: 18,
    location: 'London, UK',
    previousBackground: 'waitress',
    className: 'IOS8',
    favSubjects: ['react','html','testing'],
    grade: 88
})
//Student #3
const paul = new Students ({
    name: 'paul',
    age: 32,
    location: 'new jersey',
    previousBackground: 'Skateboarding',
    className: 'WEB19',
    favSubjects: ['CSS','Javascript','Back-end'],
    grade: 99
})

//PM #1
const ben = new ProjectManagers({
    name: 'Ben',
    age: 25,
    location: 'Buffalo, NY',
    specialty: 'Mentorship',
    favLanguage: 'Python',
    catchPhrase: 'ummm...maybe',
    gradClassName: 'WEB7',
    favInstructor: 'Josh Knell'
});
//PM #2
const sam = new ProjectManagers({
    name: 'Sam',
    age: 21,
    location: 'Tampa, FL',
    specialty: 'Tetris',
    favLanguage: 'C++',
    catchPhrase: 'excelciur',
    gradClassName: 'DS11',
    favInstructor: 'Dan Levy'
});
//PM #2
const dave = new ProjectManagers({
    name: 'Dave',
    age: 43,
    location: 'Mobile, AL',
    specialty: 'Debugging',
    favLanguage: 'TypeScript',
    catchPhrase: 'oh man! not again',
    gradClassName: 'WEB1',
    favInstructor: 'Austen'
});

console.log(phil.name);
console.log(kim.speak());
console.log(tommy.demo('science'))
console.log(tommy.grade(alpha, 'react'));

console.log(zordon.age);
console.log(alpha.speak());
console.log(paul.listsSubjects());
console.log(paul.PRAssignment('Back-end'));
console.log(paul.sprintChallenge('CSS'));

console.log(ben.catchPhrase);
console.log(sam.speak());
console.log(dave.standUp('pm-channel'));
console.log(dave.debugsCode(alpha,'react'));

console.log(phil.review(paul));
console.log(zordon.graduate());
console.log(paul.graduate());