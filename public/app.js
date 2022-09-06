buildSite();
buildSettings();
buildCalculator();

function buildSite() {
    
    const divsettings = document.createElement('div');
    divsettings.setAttribute('id', 'settings')
    app.appendChild(divsettings);

    const divcalculator = document.createElement('div');
    divcalculator.setAttribute('id', 'calculator');
    app.appendChild(divcalculator);

    const settingsTitle = document.createElement('h1');
    settingsTitle.innerHTML = "Settings";
    settings.appendChild(settingsTitle);

    const divCalcTitle = document.createElement('h1');
    divCalcTitle.innerHTML = "Calculator";
    calculator.appendChild(divCalcTitle);
} 

function buildSettings() {
    
    const btnColor = document.createElement('button');
    btnColor.setAttribute('id', 'color');
    btnColor.setAttribute('name', 'color');
    btnColor.innerText = 'Color';
    settings.appendChild(btnColor);

    const btnFont = document.createElement('button');
    btnFont.setAttribute('id', 'font');
    btnFont.setAttribute('name', 'font');
    btnFont.innerText = 'font';
    settings.appendChild(btnFont);
}

function buildCalculator() {    

    const numberInput1 = document.createElement('input');
    numberInput1.setAttribute('id', 'number1');
    calculator.appendChild(numberInput1);

    const btnAddition = document.createElement('button');
    btnAddition.setAttribute('id', 'addition');
    btnAddition.setAttribute('name', 'addition');
    btnAddition.innerText = '+';
    calculator.appendChild(btnAddition);

    const btnSubtraction = document.createElement('button');
    btnSubtraction.setAttribute('id', 'subtraction');
    btnSubtraction.setAttribute('name', 'subtraction');
    btnSubtraction.innerText = '-';
    calculator.appendChild(btnSubtraction);

    const btnMultiplication = document.createElement('button');
    btnMultiplication.setAttribute('id', 'multiplication');
    btnMultiplication.setAttribute('name', 'multiplication');
    btnMultiplication.innerText = '*';
    calculator.appendChild(btnMultiplication);

    const btnDivision = document.createElement('button');
    btnDivision.setAttribute('id', 'division');
    btnDivision.setAttribute('name', 'division');
    btnDivision.innerText = '/';
    calculator.appendChild(btnDivision);

    const numberInput2 = document.createElement('input');
    numberInput2.setAttribute('id', 'number2');
    calculator.appendChild(numberInput2);

    
}

