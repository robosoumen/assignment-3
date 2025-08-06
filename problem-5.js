// উপরের অব্জেক্ট এর Structure টি লক্ষ্য করো।  ph university তে  পড়া student এর Data   student  নামের একটা ভ্যারিয়েবলে সেইভ করা আছে  ।  তোমাকে এমন একটা প্রোগ্রাম লিখতে হবে যেটা   student  অব্জেক্ট এর ডাটা এর উপর ভিত্তি করে  একটা ইমেইল  জেনারেট করে দেবে। ইমেইল টা হবে ঠিক নিচের স্ট্রাকচারে 
// name
// roll
// .
// department 
// @ph.ac.bd

var student = {
    name : "jhankar",
    roll : 1014,
    department : 'cse',
}
var name = student['name'];
var roll = student['roll'];
var dept = student['department'];
var dotString = '.';
var lastPartEmail = '@ph.ac.bd' ;
console.log(name.concat(roll).concat(dotString).concat(dept).concat(lastPartEmail));

