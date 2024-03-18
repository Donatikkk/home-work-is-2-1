const calculate = () => {
    const inputTelCost = parseInt(document.querySelector('#telCost').value);
    const inputLaptopCost = parseInt(document.querySelector('#laptopCost').value);
    const inputTabletCost = parseInt(document.querySelector('#tabletCost').value);

    const inputTel = parseInt(document.querySelector('#tel').value);
    const inputLaptop = parseInt(document.querySelector('#laptop').value);
    const inputTablet = parseInt(document.querySelector('#tablet').value);
    
    const NanCheck = isNaN(inputTelCost) || isNaN(inputLaptopCost) || isNaN(inputTabletCost) || isNaN(inputTel) || isNaN(inputLaptop) || isNaN(inputTablet);
    const ZeroCheck = inputTelCost <= 0 || inputLaptopCost <= 0 || inputTabletCost <= 0;
    if (NanCheck)
    {
        alert("Заполните все поля");
        return;
    }
    if (ZeroCheck)
    {
        alert("Цена не может быть меньше либо равна 0");
        return;
    }

    let sum = inputTel + inputLaptop + inputTablet;

    const cost = {
        'tels': (inputTel * inputTelCost),
        'laptops': (inputLaptop * inputLaptopCost),
        'tablets': (inputTablet * inputTabletCost),
    }

    const totalCost = cost["tels"] + cost["laptops"] + cost["tablets"];
    const resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = `
        <p>Стоимость телефонов: ${cost["tels"].toFixed(2)}</p>
        <p>Стоимость ноутбуков: ${cost["laptops"].toFixed(2)}</p>
        <p>Стоимость планшетов: ${cost["tablets"].toFixed(2)}</p>
        <p>Общая стоимость: ${totalCost.toFixed(2)}</p>
    `;
}