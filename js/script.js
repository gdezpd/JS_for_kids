let leftOffset = 0;
let moveHeading = function () {
    $("#heading").offset({left:leftOffset});
    leftOffset++;
    if (leftOffset >200) {
        leftOffset = 0;
    }
}
setInterval(moveHeading, 10);


// var doHomeworkAlarm = function () {
//     alert("Эй! Пора делать домашку!");
// };
// var timeoutId = setTimeout(doHomeworkAlarm, 60000);
//


// function timeUp() {
//     alert("Время вышло!");
// }
// setTimeout(timeUp, 5000);





// $("h1").text("My good friends");
// for (i = 0; i <5; i++) {
//     for (j = 0; j<5000; j+=1000) {
//         $("h1").text("My good friends").fadeTo(2000, 0.5);
//     }
// }


// $("h1").text("My good friends");
// for (i = 0; i <5; i++) {
//     for (j = 0; j<5000; j+=1000) {
//         $("h1").text("My good friends").delay(1000).fadeIn(j).fadeOut(j);
//     }
// }




// let friends = ["Den", "Andrey", "Karina", "Kostya"]
// for (i = 0; i < friends.length; i++) {
//     $("body").append("<p>" + friends[i] + "</p>");
// }
// // $("p").hide(2000);
// $("p").hide().fadeIn(2000);
// $("h1").text("My good friends");
// $("p").append(" лучший rjhtidfdf");


// let newHeadingText = prompt("Введите новый заголовок:");
// $("#main-heading").text(newHeadingText);

// $("body").append("<p> Это новый параграф</p>");
// for (i = 0; i < 5; i++) {
//     $("h1").text("этот текст скоро ").show(1000);
//     $("h1").text("этот текст скоро исчезнет").hide(2000);
// }

// for (i = 0; i < 3; i++) {
//     var hobby = prompt("Назови одно из своих хобби!");
//     $("body").append("<p>" + hobby + "</p>");
// }






// const input = 'javascript is awesome';
// let output;

// output = input.split('').reduce((p, c) => p + (c === 'a' ? '4' : c === 'e' ? '3' : c === 'i' ? '1' : c === 'o' ? '0' : c));

// console.log(output);




// let leters = "aeiou";
// let simbol = " !?";
// let result = "";
// function shortcut(string) {
//     for (i = 0; i < string.length; i++) {
//         if (!leters.includes(string[i]) || simbol.includes(string[i])) {
//             result += string[i];
//         }

//     }
//     return result;
// }
// shortcut("complain")








// var pickWord = function () {
//     // Возвращает случайно выбранное слово
//     let words = ["программа", "макака", "прекрасный", "оладушек", "хлеб", "мокро"];
//     return words[Math.floor(Math.random() * words.length)];
// };
// var setupAnswerArray = function (word) {
//     // Возвращает итоговый массив для заданного слова word
//     let answerArray = [];
//     for (i = 0; i < word.length; i++) {
//         answerArray[i] = ' _ ';
//     }
//     return answerArray;
// };
// // console.log(setupAnswerArray(word))
// var showPlayerProgress = function (answerArray) {
//     // С помощью alert отображает текущее состояние игры
//     alert(answerArray.join(''));
//     return;
// };
// var getGuess = function () {
//     // Запрашивает ответ игрока с помощью prompt
//     var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
//     return guess;
// };

// var updateGameState = function (guess, word, answerArray) {
//     // Обновляет answerArray согласно ответу игрока (guess)
//     // возвращает число, обозначающее, сколько раз буква guess
//     // встречается в слове, чтобы можно было обновить значение
//     // remainingLetters

//     var correctGuesses = 0;

//     for (let j = 0; j < word.length; j++) {
//         if (word[j] === guess) {
//             answerArray[j] = guess;
//             correctGuesses++;
//         }
//     }

//     return correctGuesses
// };
// var showAnswerAndCongratulatePlayer = function (answerArray) {
//     // С помощью alert показывает игроку отгаданное слово
//     // и поздравляет его с победой
//     alert(answerArray.join(" "));
//     if (remainingLetters === 0) {
//         alert("Отлично! Было загадано слово " + word);
//     }
//     return;
// };
// // word: загаданное слово
// var word = pickWord();
// // answerArray: итоговый массив
// var answerArray = setupAnswerArray(word);
// // remainingLetters: сколько букв осталось угадать
// var remainingLetters = word.length;
// while (remainingLetters > 0) {
//     showPlayerProgress(answerArray);
//     // guess: ответ игрока
//     var guess = getGuess();
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Пожалуйста, введите одиночную букву.");
//     } else {
//         // correctGuesses: количество открытых букв
//         var correctGuesses = updateGameState(guess, word, answerArray);
//         remainingLetters -= correctGuesses;
//     }
// }
// showAnswerAndCongratulatePlayer(answerArray);








// function areArraysSame(massive1, massive2) {
//     if (massive1.length === massive2.length) {
//         for (i = 0; i < massive1.length; i++) {
//             if (massive1[i] !== massive2[i]) {
//                 console.log(massive1, massive2)
//                 return false;
//             }
//         }
//         return true;
//     }
//     else {
//         return (false);
//     }
// }

// let result = areArraysSame([1, 2, 3], [1, 2, 2]);

// console.log(result)


// let input = "javascript is awesome";
// let output = '';

// for (i = 0; i < input.length; i++) {
//     let simvol = input[i];
//     // console.log(simvol)
//     if (simvol === "a") {
//         output += 4;
//     } else if (simvol === "e") {
//         output += 3;
//     } else if (simvol === "i") {
//         output += 1;
//     } else if (simvol === "o") {
//         output += 0;
//     } else output += simvol
// };
// console.log(output)




// function medal(score) {
//     if (score < 3) {
//         return "Бронзовая";
//     }
//     if (score < 7) {
//         return "Серебряная";
//     }
//     return "Золотая"
// }



// let medal = function (score) {
//     if (score < 3) {
//         return "Бронзовая";
//     }
//     if (score < 7) {
//         return "Серебряная";
//     }
//     return "Золотая";
// };






// var pickRandomWord = function (words) {
//     return words[Math.floor(Math.random() * words.length)];
// };

// var generateRandomInsult = function () {
//     var randomBodyParts = ["глаз", "нос", "череп"];
//     var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//     var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
//     var randomString = "У тебя " + pickRandomWord(randomBodyParts) + " словно " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
//     return randomString;
// };






// let drawsCats = function(howMeniTimes) {
//     for (let i = 0; i < howMeniTimes; i++) {
//     console.log(i + "=^.^=")
// }
// };




// let words = ["программа", "макака", "прекрасный", "оладушек", "хлеб", "мокро"];
// let word = words[Math.floor(Math.random() * words.length)]
// let answerArray = [];
// for (i = 0; i < word.length; i++) {
//     answerArray[i] = ' _ ';
// }
// let remainingLetters = word.length;
// let f = 8;
// while ((remainingLetters > 0) && (f > 1)) {
//     alert(answerArray.join(''))
//     const guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Пожалуйста, введите только одну букву.");
//     } else if (answerArray.includes(guess)) {
//         alert("Пожалуйста, введите другую букву.");
//     } else {
//         const symbol = guess.toLowerCase()
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === symbol) {
//                 answerArray[j] = symbol;
//                 remainingLetters--;
//             }
//         }
//     }
//     f--;
//     alert("У вас осталось " + f + " попыток.");
// }

// alert(answerArray.join(" "));
// if (remainingLetters === 0) {
//     alert("Отлично! Было загадано слово " + word);
// }






// while  {
//     console.log("У вас осталось " + f + "попыток.");

// };

// console.log("У вас осталось " + f + " попыток.");


// let input = "javascript is awesome";
// let output = '';

// for (i = 0; i < input.length; i++) {
//     let simvol = input[i];
//     // console.log(simvol)
//     if (simvol === "a") {
//         output += 4;
//     } else if (simvol === "e") {
//         output += 3;
//     } else if (simvol === "i") {
//         output += 1;
//     } else if (simvol === "o") {
//         output += 0;
//     } else output += simvol
// };
// console.log(output)


// var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// var randomString = "";
// while (randomString.length < 6) {
//     var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
//     randomString += randomLetter
// }
// console.log(randomString)



// let animals = ["cat", "fish", "lemur", "varan"];
// for (let i = 0; i < animals.length; i++) {
//     animals[i] = animals[i] + " - прекрасное животное!"
// }
// console.log(animals)



// var x = 3;
// while (x < 10000) {
//     console.log(x)
//     x = x * 3;
// }



// for (var x = 3; x < 10000; x = x * 3) {
//     console.log(x)
// }



// var name1 = "Ник";
// for (var i = 0; i < name1.length; i++) {
//     console.log("В моем имени есть буква " + name1[i] + "!")
// };



// var timeToSayHello = 3;
// for (var i = 0; i < timeToSayHello; i++) {
//     console.log("Hello!")
// }



// for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
//     console.log("Посчитано овец: " + sheepCounted + "!");
// }
// console.log("Хрррррррррр - псссс");



// var sheepCounted = 0;
// while (sheepCounted < 10) {
//     console.log("Посчитано овец: " + sheepCounted + "!");
//     sheepCounted++;
// };
// console.log("Хрррррррррр - псссс");




// var lemonChicken = false;
// var beefWithBlackBeen = false;
// var sweetAndSourPork = true;

// if (lemonChicken) {
//     console.log("Отлично! Я буду курицу с лимоном!");
// } else if (beefWithBlackBeen) {
//     console.log("Заказываю говядину.");
// } else if (sweetAndSourPork) {
//     console.log("Ладно, закажу свинину.");
// } else {
//     console.log("Что ж, остается рис с яйцом.");
// };




// var name1 = "Катя";
// if (name1 === "Павел") {
//     console.log("Привет мне!");
// } else if (name1 === "Сергей") {
//     console.log("Привет, папа!");
// } else if (name1 === "Ира") {
//     console.log("Привет, мама!")
// } else {
//     console.log("Привет, незнакомец!")
// };
