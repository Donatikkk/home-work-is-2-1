console.log("1 Задание");

let nums = [    [1, 2, 5, 9, 2],
                [5, 2, 4, 8],
                [16, 5, 8, 2]];
let sum = 0;

for (let row of nums)
{
    console.log("-----");
    for (let num of row)
    {
        console.log(`num: ${num}`);
        sum += num;
    }
}
console.log("-----");
console.log(`Сумма элементов двумерного массива = ${sum}`);


console.log("2 Задание");

let peoples = [
    {
        name: "Johnny",
        age: 24,
        cash: 10000
    },
    {
        name: "Anna",
        age: 34,
        cash: 15000
    },
    {
        name: "Denis",
        age: 18,
        cash: 20000
    }
];

for (let item of peoples) {
    item.cash += 5000;
    console.log(`Имя: ${item.name}\nфинансы: ${item.cash}`);
};


console.log("3 Задание");

let companys = {
    company1: {
        title: "Microsoft",
        staff: {
            manager: {
                name: "Ron",
                age: 21
            },
            administrator: {
                name: "Hurry",
                age: 44
            },
            worker: {
                name: "Hermoina",
                age: 27
            }
        }
    },
    company2: {
        title: "TSMC",
        age: 14,
        staff: {
            manager: {
                name: "Stan",
                age: 19
            },
            administrator: {
                name: "Mabel",
                age: 23
            },
            worker: {
                name: "Lola",
                age: 18
            }
        },
    }
    
};

for (let i in companys) {
    console.log(`Компания ${companys[i].title}, сотрудники:`);
    for (let j in companys[i].staff) {
        console.log(companys[i].staff[j].name)
    };
};