// 1 - masala //// Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
let son = 3
let obj = {a:2, b:3, c:4}
const increment = () => {
    let result = Object.values(obj).join("").split("")
    for (let item of result){
        let res = item * son
        console.log(res);
    }
}
// increment()




// 2 - masala ////  argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing
const litter = (n) => {
    let count = 0
    let result = n.split("").filter((item) => {
        if (item === "a") {
            count++
        }
    })
    console.log(count, "ta a harfi bor");
}
// litter("salom")




// 3 - masala  ////  Quyidagi ko’rinishda object lardan tuzilgan array berildi. Agar read property true bo’lsa o’sha kitob o’qigan deb chiqarsin, aks holda o’qilmagan deb chiqarsin
function book(n) {
    const books = [
        {
        title: "Halqa",
        author: "Akrom Malik",
        read: false
        },
        {
        title: "Dunyoning ishlari",
        author: "O’tkir Hoshimov",
        read: true
        },
        {
        title: "Iymon",
        author: "Shayx Muhammad Sodiq Muhammad Yusuf",
        read: true
        },
        ]
        books.forEach((item, index) => {
            let result = item.read ? "o'qilgan" : "o'qilmagan"
            console.log(`${index +1}. ${item.author} ning ${item.title} kitobi ${result}` );
        })
}
// book()




// 4 - masala  ////  String lar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin
let str =  ["text", "world", "laptop"]
function string(strr) {
    let obj = {}
    for(let item of str){
        obj[item] = item.length
    }
    console.log(obj);
}
// string()





// 5 - masala  ////  Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
let animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
function fn(n) {
    let result = animals.reduce((item, animal) => {
        item[animal] = (item[animal] || 0 ) + 1
        return item
    }, {})
    console.log(result);
}
// fn()




// 6 - masala  ////  Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping
let arr = [
    {name: 'John', age: 13},
    {name: 'Mark', age: 56},
    {name: 'Rachel', age: 45},
    {name: 'Nate', age: 67},
    {name: 'Jeniffer', age: 65}
    ];
const otraArfmetik = () => {
    arr.sort((a, b) => a.age - b.age)
    let yosh = arr[0].age
    let qari = arr[arr.length - 1].age
    let result = qari - yosh
    console.log(result);
}
// otraArfmetik()




// 7 - masala  ////  Array truthy va falsy elementlardan tuzilgan. O’sha arraydagi truthy va falsy elementlarni alohida arraylarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
let new_arr = [false, 1, 10, "", null, "sultonqul", 1.13, 0]
function truthFalsy(params) {
    let obj = {
        truthy:[],
        falsy:[]
    }
    new_arr.filter((item) => {
        if (item) {
            obj.truthy.push(item)
        }else{
            obj.falsy.push(item )
        }
        
    })
    
    console.log(obj);
}

// truthFalsy()





// 8 - masala  //// Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minManWord() nomli function yarating
// let word = "men dasturlash kursida uqiyman";
// let natija = maxWord(word);
// function maxWord(str) {
//     let sozlar = str.split(' ');
//     let max_word = sozlar[0];
//     let min_word = sozlar[0];
//     for (let i = 1; i < sozlar.length; i++) {
//         if (sozlar[i].length > max_word.length) {
//             max_word = sozlar[i];
//         }
//         if (sozlar[i].length < min_word.length) {
//             min_word = sozlar[i];
//         }
//     }

//     return {
//         engUzun: max_word,
//         engKalta: min_word
//     };
// }

// console.log("Eng uzun so'z:", natija.engUzun); 
// console.log("Eng kalta so'z:", natija.engKalta); 
