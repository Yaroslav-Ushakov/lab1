const persons = [
	{name: 'John' , age: 23, city: 'Boston'},
	{name: 'Bob', age: 19, city: 'Monrovia'},
	{name: 'Adam', age: 20, city: 'Ottawa'},
	{name: 'Mark', age: 22, city: 'Ensenada'},
	{name: 'Oliver', age: 27, city: 'Comalio'}
];

persons.groupName = 'A';
persons.teacher = 'John Doe';
persons.year = '2023';

// Task-1
console.log('for');
for (let i = 0; i < persons.length; i++) {
	console.log(persons[i]); 
}

console.log('for-of');
for (let element of persons) {
	console.log(element); 
}

console.log('for-in');
for (let element in persons) {
	console.log(element); 
}

// Task-2
let defaults = {
	mode: 'test',
	debugLevel: 'error',
	logFolder: 'root'
};

let userSetting = {
	mode: 'production',
	debugLevel: 'trace'
};

// Method-1

let result1 = Object.assign({}, defaults, userSetting);
console.log('1:', result1);

// Method-2
let result2 = { ...defaults, ...userSetting };
console.log('2:', result2);

// Method-3
let result3 = {};
for (let key in defaults) {
	result3[key] = defaults[key];
}
for (let key in userSetting) {
	result3[key] = userSetting[key];
}
console.log('3:', result3);

// Task-3
for (let p of persons) {
  Object.defineProperty(p, 'birthYear', {
    get: function() {
      return 2025 - this.age;
    },
    enumerable: true
  });
}
console.log(persons);

// Task-4
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let method1 = arr1.concat(arr2);
let method2 = [...arr1, ...arr2];

let method3 = [];
for (let el of arr1) method3.push(el);
for (let el of arr2) method3.push(el);

console.log(method1);
console.log(method2);
console.log(method3);

// Task-5
let phrases = persons.map(function(p) {
	let year = 2025 - p.age;
	return p.name + ' from ' + p.city + ' born in ' + year;
});
console.log(phrases);

// Task-6
let olderThan20 = persons.filter(function(p) {
	return p.age > 20;
});
console.log(olderThan20);

// Task-7

let { name, city } = persons[0];
console.log(name, city);

let [firstPerson] = persons;
console.log(firstPerson);

// Task-8
function getUserData(name) {
  let user = persons.find(function(p) {
    return p.name === name;
  });
  if (!user) throw new Error('Unable to find user');
  return user;
}

function showUserInfo(name) {
  console.log('Loading');
  try {
    let user = getUserData(name);
    console.log(user);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log('Loading finished');
  }
}
showUserInfo('Oliver');

// Task-9
function textToArray(text) {
	return text.split('');
}
console.log(textToArray('Hello'));

// Task-10
function reverseWord(word) {
	return word.split('').reverse().join('');
}
console.log(reverseWord('Hello from Node.js'));

// Task-11
function isJsFile(filename) {
	return filename.endsWith('.js');
}
console.log(isJsFile('main.js'));
console.log(isJsFile('style.css'));

// Task-12
function sentenceToWords(sentence) {
	return sentence.split(' ');
}
console.log(sentenceToWords('JavaScript is fun'));

// Task-13
function replaceWord(text, oldWord, newWord) {
	return text.replace(oldWord, newWord);
}
console.log(replaceWord('I love eating hot-dogs', 'hot-dogs', 'hamburgers'));