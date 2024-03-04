const is_right_triangle = (triangle) => {

    const angle1 = triangle["angle1"];
    const angle2 = triangle["angle2"];
    const angle3 = triangle["angle3"];

    if(angle1 === 90 || angle2 === 90 || angle3 === 90)
    {
        console.log("Треугольник прямоугольный");
    }
    else
    {
        console.log("Треугольник не прямоугольный");
    }
}

let triangles = []
let trianglesNum = parseInt(prompt("Введите кол-во треугольников:"));

for(let i = 0; i < trianglesNum; i++)
{
    let angle1 = parseInt(prompt("Введите первый угол в градусах:"));
    let angle2 = parseInt(prompt("Введите второй угол в градусах:"));
    let angle3 = parseInt(prompt("Введите третий угол в градусах:"));

    const angleSum = angle1 + angle2 + angle3;

    if (angleSum > 180 || angleSum < 180)
    {
        console.log(`Треугольник ${i} не может существовать`);
        continue;
    }

    triangles[i] = {angle1: angle1, angle2: angle2, angle3: angle3}
}

for(triangle of triangles)
{
    is_right_triangle(triangle);
}
