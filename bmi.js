function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;
    const resultDiv = document.getElementById("result");

    if (!weight || !height || weight <= 0 || height <= 0) {
        resultDiv.textContent = "Please enter valid weight and height values.";
        return;
    }
    const bmi = (weight / (height * height)).toFixed(2);
    let range;
    if (bmi < 18.5) {
        range = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        range = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        range = "Overweight";
    } else {
        range = "Obesity";
    }
    resultDiv.textContent = `Your BMI is ${bmi} (${range}).`;
}
