buildSite();

function buildSite() {
    
    const targetSettings = document.getElementById('app');
    const divsettings = document.createElement('div');
    divsettings.setAttribute('id', 'settings')
    targetSettings.appendChild(divsettings);

    const targetCalculator = document.getElementById('app');
    const divcalculator = document.createElement('div');
    divcalculator.setAttribute('id', 'calculator');
    targetCalculator.appendChild(divcalculator);

    const targetdivSettings = document.getElementById('settings');
    const settingsTitle = document.createElement('h1');
    settingsTitle.innerHTML = "Settings";
    targetdivSettings.appendChild(settingsTitle);

    const targetdivCalc = document.getElementById('calculator');
    const divCalcTitle = document.createElement('h1');
    divCalcTitle.innerHTML = "Calculator";
    targetdivCalc.appendChild(divCalcTitle)
} 