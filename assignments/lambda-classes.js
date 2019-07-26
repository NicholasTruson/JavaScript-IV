class person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }

}

class Instructor extends person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
        this.subject = attributes.subject;
        this.name = attributes.name;
    }
    demo(subject){
        console.log(`Today we are learning about ${this.subject}`)
    };
    grade(student, subject){
        console.log(`${this.name} receives a perfect score on ${this.subject}`)
    };
}

class student extends person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.subject = attributes.subject;
        this.name = attributes.name;
    }
    listSubjects(student){
        console.log(`${this.favSubjects[0]}, ${this.favSubjects[1]}, and ${this.favSubjects[2]}`)
    };
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${this.subject}`)
    };
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${this.subject}`)
    };
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
        this.name = attributes.name;
        this.subject = attributes.subject;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${this.gradClassName}, @channel standy times!`);
    };
    debugsCode(studentObj, subject){
        console.log (`${this.name} debugs ${nick.name}'s code on ${this.subject}`);
    };
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: 'Math',
  });

const nick = new student({
    name: 'Nick',
    location: 'Bend, OR',
    age: 31,
    previousBackground: 'Atlas Design Group',
    className: 'WEB22',
    favSubjects: ['Design', 'Music', 'Architecture'],
    subject: 'JS-IV'
});

const jessica = new ProjectManager({
    name: "Jessica",
    age: 32,
    location: 'Bend, OR',
    gradClassName: 'web22',
    favInstructor: 'Brit Hemming',
    subject: 'Astrophysics',
});

console.log(nick.name);
console.log(nick.previousBackground);
console.log(fred.favLanguage);
console.log(jessica.favInstructor);
console.log(jessica.age);
console.log(jessica.location);
console.log(fred.specialty);
console.log(fred.catchPhrase);

console.log(nick.speak());


console.log(fred.demo());
console.log(fred.grade());

console.log(jessica.standUp());
console.log(jessica.debugsCode());

console.log(nick.listSubjects());
console.log(nick.PRAssignment());
console.log(nick.sprintChallenge());