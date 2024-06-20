function calculateBmi() {
    // Get input values
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    // Convert height from cm to meters
    var heightInMeters = height / 100;

    // Calculate BMI
    var bmi = weight / (heightInMeters * heightInMeters);

    // Display the result
    document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}`;

}