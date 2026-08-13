document.getElementById('convertBotton').addEventListener('click', function() {

    const tempInput = document.getElementById('tempInput').value;
    const unit = document.getElementById('unitSelect').value;
    
    const resultC = document.getElementById('resultC');
    const resultF = document.getElementById('resultF');
    const resultK = document.getElementById('resultK');


    resultC.textContent = "Celsius:";
    resultF.textContent = "Fahrenheit:";
    resultK.textContent = "Kelvin:";

    const value = parseFloat(tempInput);
    
    let celsius, fahrenheit, kelvin;

    if (unit === "C") {
        celsius = value;
        fahrenheit = (value * 9/5) + 32;
        kelvin = value + 273.15;
    } else if (unit === "F") {
        celsius = (value - 32) * 5/9;
        fahrenheit = value;
        kelvin = celsius + 273.15;
    } else if (unit === "K") {
        celsius = value - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = value;
    }

    if (kelvin < 0) {
        errorDisplay.textContent = "Error: Temperature cannot be below Absolute Zero (0 K / -273.15°C).";
        return;
    }

    resultC.textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    resultF.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    resultK.textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
});