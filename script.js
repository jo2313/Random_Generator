let heading = document.getElementById("title");
let main = document.getElementById("main");
let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText");
let inputElement = document.getElementById("myInput");
let kor = document.getElementById("color1");
let ean = document.getElementById("color2");
let hrLine = document.getElementById("hrLine");

let names = ["[Boy] Seo Jun", 
  "[Boy] Min Jun", 
  "[Boy] Do Yoon", 
  "[Boy] Ye Jun", 
  "[Boy] Ha Jun",
  "[Boy] Woo Bin",
  "[Boy] Jung Kook",
  "[Boy] Tae Hyung",
  "[Boy] Joo Won",
  "[Boy] Eun Woo", 
  "[Girl] Seo Yeon",
  "[Girl] Ha Yoon",
  "[Girl] Ji Woo",
  "[Girl] Ha Eun",
  "[Girl] Chae Won",
  "[Girl] Ji Min",
  "[Girl] Min Ji",
  "[Girl] Hae Rin",
  "[Girl] Yu Jin",
  "[Girl] Eun Chae"];

executeButton.addEventListener("click", function(){
  let currentInputText = inputElement.value;
  generate(currentInputText);
  restyle();
});

demonstrationFunction();
function demonstrationFunction() {
  let randomRed = Math.random() * 255;
  let randomGreen = Math.random() * 255;
  let randomBlue = Math.random() * 255;
  let outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
  let colorRed = "#CD313A";
  let colorBlue = "#0047A0";
  kor.style.color = colorRed;
  ean.style.color = colorBlue;
  let hrRandomRed = Math.random() * 255;
  let hrRandomGreen = Math.random() * 255;
  let hrRandomBlue = Math.random() * 255;
  let outputBackColorString = "rgb(" + hrRandomRed + "," + hrRandomGreen + "," + hrRandomBlue + ")";
  hrLine.style.backgroundColor = outputBackColorString;
  executeButton.style.backgroundColor = outputBackColorString;
}

function generate(incUserInput) {
  let randomIndex = Math.floor(Math.random() * names.length);
  console.log(randomIndex);
  let selectedRandomTimeText = names[randomIndex];
  outputParagraph.innerText = "Your Korean Name is : " + selectedRandomTimeText + " " + incUserInput;
}

function restyle() {
  let randR = Math.random() * 255;
  let randG = Math.random() * 255;
  let randB = Math.random() * 255;
  let randOutputColor = "rgb("+randR+","+randG+","+randB+")";
  let randBackgroundColor = "rgb("+randR+","+randG+","+randB+")";
  let randomFontSize = Math.floor(Math.random() * 30) + 90 + "px"; 
  document.body.style.backgroundColor = randBackgroundColor;
  document.body.style.transition = "all 1.5s";
  outputParagraph.style.fontSize = randomFontSize;
  outputParagraph.style.transition = "all 5s";
  outputParagraph.style.padding = "50px 0px 0px 0px";
  hrLine.style.backgroundColor = randOutputColor;
  hrLine.style.transition = "all 0.1s";

  heading.style.fontSize = "50px";
  heading.style.transition = "all 0.25s";
  heading.style.padding = "30px 1000px 0px 0px";

  main.style.fontSize = "40px";
  main.style.padding = "0px 1110px 0px 0px";
  main.style.transition = "all 0.5s";

  executeButton.style.padding = "2px";
  executeButton.style.transition = "all 0.5s";

  inputElement.style.padding = "2px";
  inputElement.style.transition = "all 0.5s"
}
