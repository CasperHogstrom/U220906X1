buildSite();

function buildSite() {
    
    const divsettings = document.createElement('div');
    divsettings.setAttribute('id', 'settings')
    app.appendChild(divsettings);

    const settingsTitle = document.createElement('h1');
    settingsTitle.innerHTML = "Settings";
    settings.appendChild(settingsTitle);

    //Gör knappen, i app div, som ska gömma settings div
    const HideShowButton = document.createElement('button');
    HideShowButton.setAttribute('id', 'HSButton')
    HideShowButton.innerText = 'Settings';
   //Kolla om settings div är synlig eller ej
    HideShowButton.onclick = () => settings.hidden = !settings.hidden;
    app.appendChild(HideShowButton);

    const divcalculator = document.createElement('div');
    divcalculator.setAttribute('id', 'calculator');
    app.appendChild(divcalculator);

    const divCalcTitle = document.createElement('h1');
    divCalcTitle.innerHTML = "Calculator";
    divcalculator.appendChild(divCalcTitle);

    buildSettings(settings);
    
    buildCalculator(calculator);

} 

function buildSettings() {
    
    const slctColor = document.createElement('select');
    slctColor.setAttribute('id', 'color');
    slctColor.setAttribute('name', 'color');
    slctColor.innerText = 'Color';
    settings.appendChild(slctColor);

    const slctFont = document.createElement('select');
    slctFont.setAttribute('id', 'font');
    slctFont.setAttribute('name', 'font');
    slctFont.innerText = 'font';

    const ColorCoral = document.createElement('option');
    ColorCoral.setAttribute('value', 'colorcoral')
    ColorCoral.innerText = 'Coral';
    slctColor.appendChild(ColorCoral);

    const ColorPalevioletred = document.createElement('option');
    ColorPalevioletred.setAttribute('value', 'colorpalevioletred');
    slctColor.appendChild(ColorPalevioletred);

    settings.appendChild(slctFont);


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

