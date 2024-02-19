forecasts = ["Излечимо", "Не излечимо", "смертельно"];

let disease = {
    name:"ОРВИ",
    symptoms:"Голова болит, все болит, очень очень все плохо.",
    treatment:"Лежать дома и много спать.",
    forecast: forecasts[2]
};

for(item in disease)
{
    console.log(`${item}:${disease[item]}`);
}

const diseaseForecast = disease["forecast"];


console.log("\nЗаключение врача с великим именем MrDoctor:");
if (diseaseForecast === forecasts[0])
{
    console.log("Это излечимо и очень хорошо :)");
}
else if (diseaseForecast === forecasts[1])
{
    console.log("Это не излечимо, но жить можно :|");
}
else if (diseaseForecast === forecasts[2])
{
    console.log("Вы скоро умрете :(");
}