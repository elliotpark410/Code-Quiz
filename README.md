# JavaScript-Code-Quiz

The JavaScript Code Quiz is an applicaton that will test basic JavaScript knowledge. A player will be presented with coding questions in a multiple choice format and the quiz will have a time limit of 100 seconds. Every incorrect answer will subtract 10 seconds from the timer.

[My First Project: Code Quiz](https://elliotpark410.github.io/Code-Quiz/)

<br>

## Screenshots 

<img src="Images\Homepage screenshot.png" title="Homepage screenshot" width = 700px>

<br>

<img src="Images\Multiple Choice screenshot.png" title="Multiple Choice screenshot" width = 700px>

<br>

<img src="Images\End of Quiz screenshot.png" title="End of Quiz screenshot" width = 700px>

<br>

<img src="Images\High Score screenshot.png" title="High Score screenshot" width = 700px>

<br>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br>

## Code Snippets

This code snippet shows how to create an HTML button element in JavaScript and how the "Submit" button stores user-generated information (initials and score) and saves it to local storage

* The document.createElement() method creates the HTML element by tagName and it can be done in JavaScript

* The element.setAttribute() method sets the value of an attribute on a specified HTML element and it can be done in JavaScript

* The element.textContent property will sets the text content of a specified node and its descendants and it can be done in JavaScript

* The element.appendChild() method will adds the node as the last child on a specified parent node and it can be done in JavaScript

* The element.addEventListener() method attaches an event handler (e.g. "click") to a specified element

* The localStorage.setItem() method will add an object with a key and value to local storage or update the key's value if it already exists. It can only store data as a string

* The window.location object can be used to redirect the browser to a new page (i.e. HTML and JavaScript file)


```

var submitElement = document.createElement("button");
submitElement.setAttribute("id", "submit-button");
submitElement.setAttribute("type", "submit");
submitElement.textContent = "Submit";
questionElement.appendChild(submitElement);

submitElement.addEventListener("click", function () {

    var initials = inputElement.value;

    if (initials === "") {
        alert("Please enter your initials");
    } else {
        var playerScore = {
            initials: initials,
            score: score
        };

    localStorage.setItem("playerScore", JSON.stringify(playerScore));

    window.location = "index-scoreboard.html";
    }
});

```

 <br>

## Learning Points

* How to use local storage, window.location, event listeners, appendChild, setAttributes, createElement, and more
<br>

* The importance of using variables correctly and the importance of creating placeholder variables in the beginning
<br>

* The importance of using appendChild in the correct location. It should not always be right after the creation of the element 

<br>

## Author
 **Elliot Park** 

[Github](https://github.com/elliotpark410)

<br>

[LinkedIn ](https://www.linkedin.com/in/elliot-park/)

<br>

[Email](mailto:elliotpark410@gmail.com)


