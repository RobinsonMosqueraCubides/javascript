function CelciusaFahrenheit(gradosCelsius=32) {
    let gradosFahrenheit = 32+((9*gradosCelsius)/5);
    alert(`Los grados Fahrenheit son ${gradosFahrenheit}`);
}
let gradosCelsius = prompt('Ingresa los grados Celsius');
CelciusaFahrenheit(gradosCelsius);