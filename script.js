/**
 * 1.Зробити блок з рахунками - готово
 * 2.Зробити 3 кнопки з вибором :"Камінь,ножиці, бумага" - готово
 * З.Зробити кнопку правила - готово
 * 4.При натисканні на кнопку правила відкривати модальне вікно
 *   4.1.Зробити модальне вікно - готово
 * 5 При натисканні на кнопки "Камінь,ножиці, бумага" скривати не обрані кнопки
 *   5.1.Запускати таймер 3 сек
 *   5.2.Після закінчення таймеру показати що обрав противник
 *   5.3.випадковий вибір фігури противником
 *   5.4 Перевірка що обрав супротивникз нашим результатом
 *      5.4.1.якщо фігури однакові, то вивести повідомлення "Нічия"
 *      5.4.2.якщо наша фігура бє фігуру супротивника, то додаємо 1 очко
 *      5.4.2.1. Вивести повідомлення "Ви перемогли"
 *      5.4.3.Якщо нашу фігуру бють, то віднімаємо очко
 *      5.4.3.1 Вивести повідомлення"Ви програли"
 * 6. Створити кнопку "Спробувати знову"
 */
/*
Функціонал роботи з модальними вікнами
 */

let btnOpenRules = document.querySelector("#rules"); // задаємо змінну кнопці відкрити правила
console.dir(btnOpenRules)
let modal = document.querySelector("#modal"); //задаємо змінну модальному вікну
let btnModalClose = document.querySelector("#modal .close");  //закрити модальне вікно
let modalOverlay = document.querySelector(".modal-overlay");  //накладання модального вікна
btnOpenRules.onclick = function (){  //створюємо функціонал кнопки відкрити правила
    modal.className = "modal isActive";
}
btnModalClose.onclick = function (){  //створюємо функціонал кнопки закрити правила
    modal.className = "modal";
}
modalOverlay.onclick = function () {     // накладання вікна на перший план
    modal.className = "modal";
}
/*
Функціонал роботи гри
 */
let score = 0;    //змінна рахунок
let addScore = document.querySelector("#addScore");  // змінна додати очко
let minusScore = document.querySelector("#minusScore");  //змінна відняти очко

addScore.onclick = vin;  //кнопка додати очко

minusScore.onclick = lose;  //кнопка відняти очко
//функція вивести зміну очків на екран
function updateScore (){                    //фунція додавання очків
    let scoreBlock = document.querySelector("#score");
    scoreBlock.innerText = score;               //вивести блок з очками
}
function vin(){                     //функція додати очко, якщо переміг
    score = score + 1 ;
    console.dir (score);
    updateScore();
}
function lose(){                     //функція відняти очко, якщо переміг суперник
    if(score > 0) {
        score = score - 1;
        console.dir(score);
        updateScore();
    }
}

/**
 * Функціонал вибору елементів гри
 */

let btnStone = document.querySelector("#stone");    //задаємо змінну кнопці камінь
let btnScissors = document.querySelector("#scissors");   //задаємо змінну кнопці ножиці
let btnPaper = document.querySelector("#paper");        //задаємо змінну кнопці папір
let gameStarted = false;        // запуск гри : якщо гру не запущено

/**
 * 1.Камінь
 * 2.Ножиці
 * 3.Папір
 * 3Папір>1Камінь
 * 1Камінь>2Ножиці
 * 2Ножиці>3Папір
 * 5.4.1.якщо фігури однакові, то вивести повідомлення "Нічия"
 * 5.4.2.1. Вивести повідомлення "Ви перемогли"
 * 5.4.3.1 Вивести повідомлення"Переміг суперник"
 */


let selectPlayer = 0;                       //змінна вибору гравця

btnStone.onclick = function () {                //якщо натиснуто  кнопку   камінь, то
   btnScissors.style.display = "none";                 //сховати кнопку ножиці
    btnPaper.style.display = "none";                    //сховати кнопку папір
    selectPlayer = 1;                                   //вибір кнопки
    startGame();
}
btnScissors.onclick = function () {                     //якщо натиснуто  кнопку   ножиці,  то
    btnStone.style.display = "none";                           //сховати кнопку камінь
    btnPaper.style.display = "none";                            //сховати кнопку папір
    selectPlayer = 2;                                           //вибір кнопки
    startGame();
}
btnPaper.onclick = function () {                           //якщо натиснуто  кнопку папір,
    btnScissors.style.display = "none";                         //сховати кнопку ножиці
    btnStone.style.display = "none";                            //сховати кнопку камінь
    selectPlayer = 3;                                           //вибір кнопки
    startGame();
}
function startGame() {                          //запуск гри
    if (gameStarted == true){                                      //Гру запущено
        return 0;                                                   //повернути 0
    }
    gameStarted = true;
    let timerBlock = document.querySelector("#timer");      //таймер блок (поле таймера)
        timerBlock.style.display = "block";

    let second = 5;                                                 //задаємо час таймера
    let timerID = setInterval(function (){              //функціонал запуску таймера
        second-- ;                                                          // -1 сек
        timerBlock.innerText = second;                                     //вивести текст таймера на дисплей
        if (second == 0){                                                 //якщо таймер доходить до 0, то зупинити таймер
            clearInterval(timerID);
            resultGame();                                                    //завершення гри після зупинки таймера
        }
    },1000);
}
function resultGame() {                                 //функція результату гри
    let selectOpponent = random( 1, 3);             //вибір суперника(рамдомно)
    let gamerBlock = document.querySelector("#gamer span"); //змінна блок гравця
    gamerBlock.innerText = selectPlayer;                //показати вибір гравця

    let opponentBlock = document.querySelector("#opponent span");       //змінна блок суперника
    opponentBlock.innerText = selectOpponent;           //показати вибір суперника

    /**
     * 1.Камінь
     * 2.Ножиці
     * 3.Папір
     * 3Папір>1Камінь
     * 1Камінь>2Ножиці
     * 2Ножиці>3Папір
     * 5.4.1.якщо фігури однакові, то вивести повідомлення "Нічия"
     * 5.4.2.1. Вивести повідомлення "Ви перемогли"
     * 5.4.3.1 Вивести повідомлення"Переміг суперник"
     */
    let resultBlock = document.querySelector('#result');        //змінна результатів
    if(selectPlayer == selectOpponent)  {               //якщо вибір гравця = вибору суперника , то
        resultBlock.innerText = "Нічия";                //резкльтат - нічия
    } else if(                                          //інакше, якщо
        (selectPlayer == 3 && selectOpponent == 1) ||       //3Папір>1Камінь
        (selectPlayer == 1 && selectOpponent == 2) ||          //1Камінь>2Ножиці
        (selectPlayer == 2 && selectOpponent == 3)              //2Ножиці>3Папір, то
){
        resultBlock.innerText = "Ти переміг";               //резкльтат ти переміг, додається очко
        vin();

    } else {resultBlock.innerText = "Опонент переміг";          //інші варіанти, то переміг суперник
        lose();                                                 //мінус очко
    }

    endGame()                                                       //кінець гри
}
function endGame() {                                        //функція завершення гри
    gameStarted = false;                                          //якщо гра не запущено :
    btnScissors.style.display = "inline-block";                   //вивести кнопки ножиці
    btnStone.style.display = "inline-block";                    //вивести кнопки камінь
    btnPaper.style.display = "inline-block";                    //вивести кнопки папір
    let timerBlock = document.querySelector("#timer");
    timerBlock.innerText = 5;                                       //повернути таймер на початок
    timerBlock.style.display = "none";                              //прибрати таймер з дисплея
}

function random(min, max) {                 //рандомний вибір , функція
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}