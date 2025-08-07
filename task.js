// problem-01
var area = 120;
if(area > 0){
    var areaDivided = (area / 3);
}
console.log(areaDivided);

//problem-02
var tubs = 18;
var plantsPerTub = 5;
console.log(tubs * plantsPerTub);

//problem-03
var money = 1000;
if(money >= 15000){
    console.log('Mobile')
}
else if(money >= 5000){
    console.log('Headphone')
}
else{
    console.log('Candy')
}

//problem-04
var studyHours = 1.5;
if(studyHours > 2){
    console.log('atik khelte jete parbe')
}
else{
    console.log('atik khelte jete parbe na')
}

//problem-05
var lastDay = 15;
var day = 1;
while(day <= lastDay){
    if(day % 4 === 1 ){
        console.log(day);
    }
    day++;
}

//problem-06
var totalDay = 20;
var day = 1;
while(day <= totalDay){
    if(day % 5 === 1){
        console.log(day)
    }
    day++;
}

//problem-07
var fileName = "resume.docx";
var firstCharacter = fileName.slice(0,1);
var splitArray = fileName.split('.');
if(firstCharacter === '_' ){
    console.log('Store')
}
else if(splitArray[1] === 'png'){
    console.log('Store')
}
else if(splitArray[1] === 'jpg'){
    console.log('Store')
}
else{
    console.log('Delete')
}

//problem-08
var fileName = "music.mp4";
var firstCharacter = fileName.slice(0,5);
var splitArray = fileName.split('.');
if(firstCharacter === "note_"){
    console.log('Store')
}
else if(splitArray[1] === 'mp3'){
    console.log('Store')
}
else if(splitArray[1] === 'wav'){
    console.log('Store')
}
else{
    console.log('delete')
}

//problem-09
var student = {
    name : 'hasan',
    id : 101,
    section : 'A',
    department : 'cse',
}
var Name = student['name'];
var Id = student['id'];
var Section = student['section'];
var Department = student['department'];
var dotString = '.';
var lastPartEmail = '@phuniversity.edu';
console.log(Name.concat(dotString).concat(Id).concat
(dotString).concat(Section).concat(dotString).concat(Department).concat(lastPartEmail))

//problem-10
var employee = {
    name : "tania",
    department : 'e12',
    location : 'delhi',
}
var Name = employee['name'];
var Department = employee['department'];
var location = employee['location'];
var slass = '-';
var atTheRate = '@';
var lastPartEmail =".company.in";
console.log(Name.concat(slass).concat(Department).concat(atTheRate).concat(location).concat(lastPartEmail))

//problem-11
var n = 1;
var p = 20000;
var t = 4;
var r = (7/100);
var A = p*((1 + (r/n))**(n*t));
console.log(A.toFixed(2))

//problem-12
var n = 1;
var p = 30000;
var t = 5;
var r = (8/100);
var A = p*((1 + (r/n))**(n*t));
console.log(A.toFixed(2))