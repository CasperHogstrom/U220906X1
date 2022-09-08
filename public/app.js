buildSite();

function buildSite() {
    
    const divsettings = document.createElement('div');
    divsettings.setAttribute('id', 'settings')
    app.appendChild(divsettings);

    const settingsTitle = document.createElement('h1');
    settingsTitle.setAttribute('id', 'settingtitle')
    settingsTitle.innerHTML = "Settings";
    settings.appendChild(settingsTitle);

    const divcalculator = document.createElement('div');
    divcalculator.setAttribute('id', 'calculator');
    app.appendChild(divcalculator);

    //Gör knappen, i calculator div, som ska gömma settings div
    const HideShowButton = document.createElement('button');
    HideShowButton.setAttribute('id', 'HSButton');
    HideShowButton.innerText = 'Settings';
    //Kolla om settings div är synlig eller ej
    HideShowButton.onclick = () => settings.hidden = !settings.hidden;
    calculator.appendChild(HideShowButton);

    const calcTitle = document.createElement('h1');
    calcTitle.setAttribute('id', 'calculatortitle');
    calcTitle.innerHTML = "Calculator";
    divcalculator.appendChild(calcTitle);

    //Kallar på funktionerna så att de körs
    buildSettings(settings, calculator);
    buildCalculator(calculator, settings);

} 

function buildSettings() {
    
    //Color dropdown
    const slctColor = document.createElement('select');
    slctColor.setAttribute('id', 'color');
    slctColor.setAttribute('name', 'color');
    slctColor.innerText = 'Color';

    const colorPalevioletred = document.createElement('option');
    colorPalevioletred.setAttribute('value', 'palevioletred');
    colorPalevioletred.innerText = 'Palevioletred';
    slctColor.appendChild(colorPalevioletred);

    const colorDarkgrey = document.createElement('option');
    colorDarkgrey.setAttribute('value', 'darkgrey')
    colorDarkgrey.innerText = 'Darkgrey';
    slctColor.onchange = (event) => {
        
        calculator.classList.remove('darkgrey');
        calculator.classList.remove('palevioletred');
        settings.classList.remove('darkgrey'); 
        settings.classList.remove('palevioletred'); 

        calculator.classList.add(event.target.value);
        settings.classList.add(event.target.value);

    };
    slctColor.appendChild(colorDarkgrey);

    //Font dropdown
    const slctFont = document.createElement('select');
    slctFont.setAttribute('id', 'font');
    slctFont.setAttribute('name', 'font');
    slctFont.innerText = 'font';

    const fontSize12 = document.createElement('option');
    fontSize12.setAttribute('value', 'fontsize12')
    fontSize12.innerText = 'Font size 12px';
    slctFont.appendChild(fontSize12);

    const fontSize14 = document.createElement('option');
    fontSize14.setAttribute('value', 'fontsize14');
    fontSize14.innerText = 'Font size 14px';
    slctFont.onchange = (event) => {
        
        calculator.classList.remove('fontsize12');
        calculator.classList.remove('fontsize14');
        settings.classList.remove('fontsize12'); 
        settings.classList.remove('fontsize14'); 

        calculator.classList.add(event.target.value);
        settings.classList.add(event.target.value);

    };
    slctFont.appendChild(fontSize14);

    //skriv ut select elementen
    settings.appendChild(slctColor)
    settings.appendChild(slctFont);


}

function buildCalculator() {    

    //Input element för första nr
    const numberInput1 = document.createElement('input');
    numberInput1.setAttribute('id', 'number1');
    calculator.appendChild(numberInput1);

    //Button element för addition
    const btnAddition = document.createElement('button');
    btnAddition.setAttribute('id', 'addition');
    btnAddition.setAttribute('name', 'addition');
    btnAddition.innerText = '+';
    calculator.appendChild(btnAddition);

    //Button element för subtraktion
    const btnSubtraction = document.createElement('button');
    btnSubtraction.setAttribute('id', 'subtraction');
    btnSubtraction.setAttribute('name', 'subtraction');
    btnSubtraction.innerText = '-';
    calculator.appendChild(btnSubtraction);

    //Button element för multiplikation
    const btnMultiplication = document.createElement('button');
    btnMultiplication.setAttribute('id', 'multiplication');
    btnMultiplication.setAttribute('name', 'multiplication');
    btnMultiplication.innerText = '*';
    calculator.appendChild(btnMultiplication);

    //Button element för division
    const btnDivision = document.createElement('button');
    btnDivision.setAttribute('id', 'division');
    btnDivision.setAttribute('name', 'division');
    btnDivision.innerText = '/';
    calculator.appendChild(btnDivision);

    const numberInput2 = document.createElement('input');
    numberInput2.setAttribute('id', 'number2');
    calculator.appendChild(numberInput2);

    //Input element för andra nr
    const resultTitle = document.createElement('h2');
    resultTitle.innerText = 'Result';
    calculator.appendChild(resultTitle);

    //Textarea element för svaret
    const resultBox = document.createElement('textarea');
    resultBox.setAttribute('id', 'results');
    resultBox.disabled = true;
    calculator.appendChild(resultBox);
}

