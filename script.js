let quant;
const button = document.getElementById('sqr-num');
button.addEventListener('click', function () {
    const userInput = prompt('Type how many squares per side you wish!')
    quant = userInput;
    console.log(quant);
    const container = document.querySelector('.sqr-container');
    
    for (let i = 1; i <= quant; i++) {
        const row = document.createElement('div');
        row.classList.add('div-row');
        // row.style.display = "flex";
        // row.style.flexDirection = "column";
        // row.style.gap = "5px";
        // container.style.gap = "5px";
        // container.style.display = "flex";
        // container.style.justifyContent = "center";
        // container.style.alignItems = "center";
        for (let i = 1; i <= quant; i++) {
            const sqr = document.createElement('div');
            sqr.classList.add('block')
            row.appendChild(sqr);
            // sqr.style.width = "50px";
            // sqr.style.height = "50px";
            // sqr.style.backgroundColor = "red";
        }
        container.appendChild(row);
    }  
});

 

