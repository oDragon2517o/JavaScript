class Person{
    constructor(name, age, gg){
        this.name = name;
        this.age = age;
        this.gg = gg;
    }
    static nameToUpper(person){
        return person.name.toUpperCase();
            
    }
    static wp(person) {
        return person.gg.toUpperCase();
    }

    display(){
        console.log(this.name, this.age);
    }
}
let tom = new Person("Tom Soyer", 34,"gg");
let personName = Person.nameToUpper(tom);
console.log(personName);        // TOM SOYER
let gg = Person.wp(tom);
console.log(gg);

