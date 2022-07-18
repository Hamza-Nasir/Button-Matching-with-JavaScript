var buttons = {
    "1": "A",
    "2": "B",
    "3": "C",
    "4": "D",
    "5": "E",
}

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

function buttonClicked(id) {

    var clickedButton = document.getElementById(id);
    
    var allButtons = document.getElementsByTagName('button');

    // console.log(clickedButton);

    let allFalse = true;
    let prevClicked;
    let prevClickedKey = 0;
    let isValueNotKey;


    for (let i = 0; i < allButtons.length; i++) {
        var button = allButtons[i];

        // console.log(button.value);

        if (button.value === "true") {

            // console.log("Found a button thats already clicked!");

            allFalse = false;
            prevClicked = button;

            // console.log(prevClicked);

            if (prevClicked.id in buttons) {
                prevClickedKey = prevClicked.id;
                isValueNotKey = false;
            }
            else {
                for (let j in buttons) {
                    if (buttons[j] === prevClicked.id) {
                        prevClickedKey = j;
                        isValueNotKey = true;
                        break;
                    }
                }
            }

            // console.log(prevClickedKey);
        }
    }

    // If all the prev buttons were false, button should become green
    if (allFalse) {
        clickedButton.style.backgroundColor = "green";
        clickedButton.value = true;

        return;
    }

    else if (prevClicked && 
             ( (isValueNotKey && buttons[clickedButton.id] === prevClicked.id) ||
               (!isValueNotKey && buttons[prevClicked.id] === clickedButton.id) )) {

        clickedButton.style.backgroundColor = "green";
        clickedButton.value = true;

        setTimeout(() => {
            clickedButton.remove();
            prevClicked.remove();
        }, 1000);

        return;

    }

    else {

        clickedButton.style.backgroundColor = "red";
        prevClicked.style.backgroundColor = "red";

        setTimeout(() => { 
            clickedButton.style.backgroundColor = "white";
            prevClicked.style.backgroundColor = "white";

            clickedButton.value = false;
            prevClicked.value = false;
        }, 1000);        

        return;
    }
}


function makeButtons(c) {

    // console.log("Inside Button function");


    for (var item in c) {
        var button1 = document.createElement('button');
        // button1.setAttribute("type", "button");
        button1.setAttribute("value", false);
        button1.setAttribute("id", item);
        button1.style.backgroundColor = "white";

        button1.innerText = item;

        button1.addEventListener("click", buttonClicked.bind(this, item));

      

        document.body.appendChild(button1);
       
        var button2 = document.createElement('button');
        
        button2.setAttribute("value", false);
        button2.setAttribute("id", c[item]);
        button2.innerText = c[item];
        button2.style.backgroundColor = "white";

        button2.addEventListener("click", buttonClicked.bind(this, c[item]));

        

        document.body.appendChild(button2);

        document.write("<br>");
    }
}


makeButtons(buttons);