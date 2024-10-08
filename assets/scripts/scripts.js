//Step 1: Create variables

const bgBody = document.getElementsByTagName("body")[0];
const bgPara = document.getElementById("bg-para");
const bgTitle = document.getElementsByTagName("h1")[0];
const bgHeading = document.getElementById("heading-three");
const bgFooter = document.getElementsByTagName("footer")[0];

//Step 2: Create Functions on click

function setBg(bgColor) {
  bgBody.style.backgroundColor = bgColor;
}

function setPara(paraColor) {
  bgPara.style.color = paraColor;
  bgTitle.style.color = paraColor;
  bgFooter.style.color = paraColor;
}

function setHeading(headingColor) {
  bgHeading.style.color = headingColor;
}

//Step 3. Link JS function to HTML document
/* For buttons on HTML document add an attribute onClick="setBg('bgColor'), setPara('paraColor'), setHeading('headingColor')". The color desired should be specified within this attribute properties*/

//Step 4: Create function for random button

/*To do this, variable for red, green, blue needs to be created. For each variable a maths calculation is created where a random number is generated, and then multiplied by 255. This number is then rounded to give whole figure. This value is obtained to give a RGB value. */

function setRandom() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const bgColor = `rgb(${red}, ${green}, ${blue})`;
  bgBody.style.backgroundColor = bgColor;
}

//Step 5. Link JS to HTML button
/* For buttons on HTML document add an attribute onClick="setRandom()"*/
