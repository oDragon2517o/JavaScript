
var school = {
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
        this.courses.forEach(function(course){
            console.log(this.title, course);
        })
    }
}
school.printCourses();

var school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
        var that = this;
        this.courses.forEach(function(course){
            console.log(that.title, course);
        })
    }
}
school.printCourses();

var school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
        this.courses.forEach((course)=>console.log(this.title, course))
    }
}
school.printCourses();