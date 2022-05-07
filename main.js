// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }

class Contractor {
	constructor(name, role, stack, salary) {
		this._name = name;
		this._role = role;
		this._stack = stack;
		this._salary = salary;
	}

	get name() {
		return this._name;
	}
	get role() {
		return this._role;
	}
	get stack() {
		return this._stack.join(', ');
	}

	get salary() {
		return `${this._salary}$`;
	}

	set name(name) {
		if (typeof name !== 'string') {
			throw Error('Namechange not valid, name has to be a string');
		} else if (typeof name === 'string') {
			this._name = name;
		}
	}

	set salary(newSalary) {
		if (typeof newSalary === 'number') {
			if (newSalary > this._salary)
				console.log(
					`${this._name} got a raise from ${
						this._salary
					}$ to ${newSalary}$\nThat is an increase of ${(
						((newSalary - this._salary) / this._salary) *
						100
					).toFixed(1)}%`
				);

			if (newSalary < this._salary)
				console.log(
					`${this._name} got a decrease in salary from ${
						this._salary
					}$ to ${newSalary}$\nThat is a decrease of ${(
						((this._salary - newSalary) / this._salary) *
						100
					).toFixed(1)}%`
				);
			this._salary = newSalary;
		} else {
			throw Error('Salary has to be a number');
		}
	}

	sayHello() {
		console.log(
			`Hello, my name is ${this._name}, I am a ${this._role} at 100Devs`
		);
	}
}

class FrontEnd extends Contractor {
	constructor(name, stack, salary) {
		super(name, 'Front-end Engineer', stack, salary);
	}
}

class BackEnd extends Contractor {
	constructor(name, stack, salary) {
		super(name, 'Back-end Engineer', stack, salary);
	}
}

const bob = new FrontEnd('Bob', ['HTML', 'CSS', 'JS'], 50000);
const bobBackend = new BackEnd(
	'Bobber',
	['Node.js', 'Express', 'MongoDB'],
	60000
);

let agencyList = [bob, bobBackend];

for (agent of agencyList) {
	console.log(agent.sayHello());
}
