const h1 = document.querySelector(".mainText");
const btnChangeText = document.querySelector(".changeText");

const kurs = () => {
  h1.innerText = "Kurs zakończony";
};

btnChangeText.addEventListener("click", kurs);
