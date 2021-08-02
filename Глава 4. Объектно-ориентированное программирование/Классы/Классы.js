class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name, this.age);
    }
}
 
let tom = new Person("Tom", 34);
tom.display();          // Tom 34
console.log(tom.name);  // Tom