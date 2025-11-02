/**
 * Kiểu dữ liệu trong javácripts
 * 1. Dữ liệu nguyên thủy - Primitive Data 
 * - Number 
 * - String
 * - Boolean
 * - Underfined
 * - Null
 * - Symbol
 * 2. Dữ liệu phức tạp - Complex Data
 * - Function
 * - Object 
 */
// Number type
var a = 1;
var b = 2;
var c = 1.5;

// String type
var fullName = 'Hoàng Minh Đức';

// Boolean type
var isSuccess = true;

//Underfined type
var age;

// Null type
var isNull = null; //nothing

// Symbol type
var id = Symbol('id') // Unique
var id2 = Symbol('id')

// Function
var myFunction = function() {
  alert('Hoàng Minh Đức')
}

// Object type
var myObject = {
  name: 'Đức Hoàng',
  age: 18,
  adress: 'Ha Noi',
  myFunction: function() {

  }
};

console.log('myObject', myObject);

var myArray = [
  'Javascript',
  'Html',
  'Ruby',
]
function showDialog () {
  alert('hello chao cac ban');
}
showDialog();