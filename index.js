const WEIGHT = 85;
const HEIGHT = 1.81;

const calculateBMI = (weight, height) => weight / (height * height);

const bmiResult = calculateBMI(WEIGHT, HEIGHT);

let weightCategory =
  bmiResult < 18.5 ? "Underweight" : bmiResult < 25 ? "Healthy" : "Overweight";

console.log(
  `Your BMI is ${calculateBMI(WEIGHT, HEIGHT).toFixed(2)} with a weight of ${WEIGHT} kg and height of ${HEIGHT} metre. You are considered ${weightCategory}.`,
);
