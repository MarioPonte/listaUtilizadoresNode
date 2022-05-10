class Person {
    constructor(name){
        this.name = name;
    }

    saymyname(){
        return `Her name is ${this.name}`;
    }
}

module.exports = {
    Person,
};