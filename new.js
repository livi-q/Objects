//chud chud chud 

const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];

function createStudent(name, grade, gpa){
    let isHonors
    gpa>=3.5? isHonors = true: isHonors= false
    students.push({name, grade, gpa, isHonors })
}
createStudent('hoe',12,0)
function roster(Students){
    Students.forEach(function(print){console.log(`[Grade ${print.grade}] ${print.name} — GPA:${print.gpa} ${print.isHonors ? "★" : "dumbass"}`)})
}
roster(students)

const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan",
  rating: "PG-13",
  runtime: 169,
};

console.log(movie.title,)
console.log(movie.director)
movie.runtime> 120  ? console.log(true) : console.log(false)
movie.watched = true
Object.entries(movie).forEach(([key, value]) => {console.log(`${key}: ${value}`)})

function inspectObject(obj){
    obj.length >1 ? obj.forEach(function(hi){Object.entries(hi).forEach(([ket, vaklue]) => {console.log(`${ket}→ ${vaklue}`)})}) : Object.entries(obj).forEach(([ket, vaklue]) => {console.log(`${ket}→ ${vaklue}`)})
}
inspectObject(students)

function sumValues(obj){
    let total = 0
    Object.entries(obj).forEach(([key, value]) => {
        if(typeof value === "number"){
            total += value
        }
    })  
    console.log(`your total is ${total}`)
}
const scores = { math: 92, english: 85, history: 78, name: "Alex" };
sumValues(scores);

function fattyfood(n, m, a){
    let y = 0 
    for (let i=1; i<=m; i++){
        y=a[0];
        for(let b = 0; b<n-1; b++){ //gets min
            if( a[b] < a[b+1]){
                y= a[b]
            }
        }
        console.log(y)
        a[a.indexOf(y)]= y+1
        
    }
}

fattyfood(5 , 3 , [2,2,3,3,3])