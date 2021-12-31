# Code-Quiz

OLD README. UPDATE FOR THIS PROJECT

The password generator as an applicaton that generates a random password based on user-selected criteria. As cybersecuriy threats grow, people would like to prevent valuable data from being stolen or damaged. One of the most effective ways to provide greater security is by creating a unique and unpredictable password. The application will run in the brwoser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes. 

The user-selected criteria comes in the form of JavaScript a window prompt for password length and window confirms for the inclusion or exclusion of  character types. 

Password criteria:
* password is between 8 - 128 characters long
* lowercase characters
* uppercasse characters
* special characters
* numeric characters


<br>

## Getting Started

Open your favorite web browser and enter the following web address to access. 

>https://elliotpark410.github.io/password-generator/

<br>

## Prerequisites

1. Any of these internet browser will do 
<br>
<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/main-desktop-browser-logos.png" title="Browser Icons image" width = 200 >


2. To see code, any of these Text editors will do
<br>
<img src="https://miro.medium.com/max/1400/0*MyAfggJM7yH40Sdx." title="Text Editor Icons image" width = 200px>

<br>

## Installing

To install this code, use Github's guidlines to clone the repository
<br>

Here is a link to the Github repository
>https://github.com/elliotpark410/password-generator

<br>

## Screenshots 

<img src="Assets\password-generator screenshot1.png" title="Password Length Prompt screenshot" width = 800px>

<br>

<img src="Assets\password-generator screenshot2.png" title="Lowercase Confirmation screenshot" width = 800px>

<br>

<img src="Assets\password-generator screenshot3.png" title="Display of Random Password screenshot" width = 800px>

<br>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br>

## Code Snippets

This code snippet shows how I generated a random password
* The for loop will add one random character incrementally until the password length is reached and it will only include character types that have been selected by the user

* The charAt method returns the character of a string at a specified position and the specified position is a random character because of (Math.floor(Math.random()) function 

```
for (let i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + includedCharacters.charAt(Math.floor(Math.random() * includedCharacters.length));
  }
  return randomPassword;
```

 <br>

## Deployed Link

* [https://elliotpark410.github.io/password-generator/](#)

<br>

## Learning Points

* How to use charAt() method, Math.floor function, Math.random function, for loop, return statement, if/else statements, and how to declare variables
<br>

* The importance of scoping variables correctly and the importance of creating placeholder variables in the beginning
<br>

* For the most part, the computer will read code from top to bottom and left to right in a logical manner 

<br>

## Authors

* **Elliot Park** 

- [Link to Password Generator application](https://elliotpark410.github.io/password-generator/)
- [Link to Github](https://github.com/elliotpark410)
- [Link to LinkedIn](https://www.linkedin.com/in/elliot-park/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

<br>

## License

This project is licensed under the UC Berkeley Extension Program 

<br>

## Acknowledgments

* Thank you to Jerome Chenette, Manuel Nunes, and Daniel Chicchon for their help!
