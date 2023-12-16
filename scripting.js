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
    fruit.pop();

    let len = fruit.length;
    avgMass = new Array(len);
    fruitCount = new Array(len);
    
    for (let i = 0; i < len; i++){
        avgMass[i] = 0;
        fruitCount[i] = 0;
    }
    

    rows.forEach((elem) => {
        const row = elem.split(",");
        fruitIdx = fruit.indexOf(row[1]);
        avgMass[fruitIdx] += parseInt(row[3], 10);
        fruitCount[fruitIdx] += 1;
    })


    makeChart(fruit, avgMass);
}


    function makeChart(ex, why){
        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ex,
                datasets: [{
                    label: 'Average Mass of Fruit',
                    data: why,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        })
    }









getData();