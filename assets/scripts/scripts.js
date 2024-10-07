/*The following code adds a hover effect when button is hovered depending on which button is hovered. It also changes the background colour and font color when the button is clicked*/

//Variables for buttons:

const buttonBlack = document.getElementById("bg-black");

const buttonGreen = document.getElementById("bg-green");

const buttonRed = document.getElementById("bg-red");

const buttonBlue = document.getElementById("bg-blue");

const buttonForest = document.getElementById("bg-forest");

const buttonOcean = document.getElementById("bg-ocean");

const buttonUniverse = document.getElementById("bg-universe");

const buttonAutumn = document.getElementById("bg-autumn");

const bgBody = document.getElementsByTagName("body")[0];

const headingThree = document.getElementById("heading-three");

const feedback = document.getElementById("feedback");

//Black button - On Hover

buttonBlack.addEventListener("mouseover", () => {
  buttonBlack.style.backgroundColor = "black";
  buttonBlack.style.color = "white";
});

//Black button - off hover
buttonBlack.addEventListener("mouseout", () => {
  buttonBlack.style.backgroundColor = "";
  buttonBlack.style.color = "";
});

//Black button - on Click
function blackFunction() {
  bgBody.style.backgroundColor = "black";
  bgBody.style.color = "white";
  headingThree.style.color = "yellow";
  feedback.innerHTML = `<p>Background colour changed to Black!</p>`;
}

//Green button - On hover

buttonGreen.addEventListener("mouseover", () => {
  buttonGreen.style.backgroundColor = "green";
  buttonGreen.style.color = "white";
});

//Green button - off hover
buttonGreen.addEventListener("mouseout", () => {
  buttonGreen.style.backgroundColor = "";
  buttonGreen.style.color = "";
});

//Green button - on Click
function greenFunction() {
  bgBody.style.backgroundColor = "green";
  bgBody.style.color = "white";
  headingThree.style.color = "yellow";
  feedback.innerHTML = `<p>Background colour changed to Green!</p>`;
}

//Red button - On hover

buttonRed.addEventListener("mouseover", () => {
  buttonRed.style.backgroundColor = "red";
  buttonRed.style.color = "white";
});

//Red button - Off hover

buttonRed.addEventListener("mouseout", () => {
  buttonRed.style.backgroundColor = "";
  buttonRed.style.color = "";
});

//Red button - on Click
function redFunction() {
  bgBody.style.backgroundColor = "red";
  bgBody.style.color = "white";
  headingThree.style.color = "yellow";
  feedback.innerHTML = `<p>Background colour changed to Red!</p>`;
}

//Blue button - On hover

buttonBlue.addEventListener("mouseover", () => {
  buttonBlue.style.backgroundColor = "blue";
  buttonBlue.style.color = "white";
});

//Blue button - Off hover

buttonBlue.addEventListener("mouseout", () => {
  buttonBlue.style.backgroundColor = "";
  buttonBlue.style.color = "";
});

//Blue button - on Click
function blueFunction() {
  bgBody.style.backgroundColor = "blue";
  bgBody.style.color = "white";
  headingThree.style.color = "yellow";
  feedback.innerHTML = `<p>Background colour changed to Blue!</p>`;
}

//Forest button - On hover

buttonForest.addEventListener("mouseover", () => {
  buttonForest.style.backgroundImage = "url('../assets/images/forest.avif')";
  buttonForest.style.color = "white";
});

//Forest button - Off hover

buttonForest.addEventListener("mouseout", () => {
  buttonForest.style.backgroundImage = "";
  buttonForest.style.color = "";
});

//Forest button - on Click
function forestFunction() {
  bgBody.style.backgroundImage = "url('../assets/images/forest.avif')";
  bgBody.style.backgroundSize = "cover";
  bgBody.style.backgroundRepeat = "no-repeat";
  bgBody.style.color = "white";
  headingThree.style.color = "yellow";
  feedback.innerHTML = `<p>Background colour changed to Forest!</p>`;
}

//Ocean button - On hover

buttonOcean.addEventListener("mouseover", () => {
  buttonOcean.style.backgroundImage = "url('../assets/images/ocean.avif')";
  buttonOcean.style.color = "white";
});

//Ocean button - Off hover

buttonOcean.addEventListener("mouseout", () => {
  buttonOcean.style.backgroundImage = "";
  buttonOcean.style.color = "";
});

//Ocean button - on Click
function oceanFunction() {
  bgBody.style.backgroundImage = "url('../assets/images/ocean.avif')";
  bgBody.style.backgroundSize = "cover";
  bgBody.style.backgroundRepeat = "no-repeat";
  feedback.innerHTML = `<p>Background colour changed to Ocean!</p>`;
}

//Universe button - On hover

buttonUniverse.addEventListener("mouseover", () => {
  buttonUniverse.style.backgroundImage = "url('../assets/images/universe.jpg')";
  buttonUniverse.style.color = "white";
});

//Universe button - Off hover

buttonUniverse.addEventListener("mouseout", () => {
  buttonUniverse.style.backgroundImage = "";
  buttonUniverse.style.color = "";
});

//Universe button - on Click
function universeFunction() {
  bgBody.style.backgroundImage = "url('../assets/images/universe.jpg')";
  bgBody.style.backgroundSize = "cover";
  bgBody.style.backgroundRepeat = "no-repeat";
  bgBody.style.color = "white";
  headingThree.style.color = "yellow";
  feedback.innerHTML = `<p>Background colour changed to Universe!</p>`;
}

//Autumn button - On hover

buttonAutumn.addEventListener("mouseover", () => {
  buttonAutumn.style.backgroundImage = "url('../assets/images/autumn.avif')";
  buttonAutumn.style.color = "white";
});

//Autumn button - Off hover

buttonAutumn.addEventListener("mouseout", () => {
  buttonAutumn.style.backgroundImage = "";
  buttonAutumn.style.color = "";
});

//Autumn button - on Click
function autumnFunction() {
  bgBody.style.backgroundImage = "url('../assets/images/autumn.avif')";
  bgBody.style.backgroundSize = "cover";
  bgBody.style.backgroundRepeat = "no-repeat";
  bgBody.style.color = "black";
  feedback.innerHTML = `<p>Background colour changed to Autumn!</p>`;
}
