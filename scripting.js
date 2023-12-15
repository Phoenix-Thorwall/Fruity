fruit=[];




async function getData(){
    const response = await fetch("fruit.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    rows.forEach((elem) => {
        const row = elem.split(",");
        if (!fruit.includes(row[1])){
            fruit.push(row[1]);
        }
    })

    avgMass = new Array(fruit.length);
    fruitCount = new Array(fruit.length);

    rows.forEach((elem) => {
        const row = elem.split(",");
        fruitIdx = fruit.indexOf(row[1]);
        avgMass[fruitIdx] += row[3];
        fruitCount[fruitIdx] += 1;
    })






}

getData();