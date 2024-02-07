/*Use the below instructions as a framework for developing your interactive interface:
Analyze the provided HTML, CSS, and JavaScript files (see the bottom of this page).
You may not change any part of the HTML or the CSS files for this lab - this is an integral part of the challenge.
3. Create a local and a remote code repository for the 
4. Open the file called page-color-changer.js.
5. Declare and initialize some constants for the input slider elements, the page body and any other HTML element you think you need to manipulate.
6. Build one or more event handlers to call a function when the user changes the value of one of the range sliders (hint - look up the code for the weather page where we built a slider for the wind speed).
7. Build one or more functions that change the background-color property value of the page body (or HTML element), based on the values of the three range sliders (hint - we changed the background-color of the page in a prior lesson).
8. Make sure that your event handler(s) call the above function(s) you created.
9. Test the application in a browser to track down any errors - use the console.
10. Comment all major code blocks or pieces of functionality.
11. Do your best and have fun - resist the temptation to simply look for a complete solution online or from generative AI - this is your opportunity to collaborate with your peers and to try to apply some of the things that you have learned.
*/

// Step 5
function changeColor(newColor) {
    const elem = document.getElementById("para");
    elem.style.color = newColor;
  }
  

const body = document.getElementsByName("body");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

console.log(red);
console.log(green);
console.log(blue);

// Step 6
red.addEventListener('change', getColorChange);
blue.addEventListener('change', getColorChange);
green.addEventListener('change', getColorChange);


function getColorChange() {
    let redNum = Number(red.value);
    console.log(redNum);
    let blueNum = Number(blue.value);
    console.log(blueNum);
    let greenNum = Number(green.value);
    console.log(greenNum);
}


