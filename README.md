# Rock-Paper-Scissors!

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Deployment Link](#deployment-link)
- [Features](#features)
- [Reflection](#reflection)
- [Future Features](#future-features)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

### Introduction
How fun is the classic game of Rock-Paper-Scissors? Super fun!

What makes it more fun? A revamped game where you can pick an alien 👽 or a lizard 🦎 as a fighter!

Choose one of two game challenges and see if you can beat the computer!

### Technologies
- JavaScript
- HTML
- CSS

### Set Up
1.  Clone this [repository](https://github.com/irmakerdem/rock_paper_scissors).
2. `cd` into the directory.
3. Run `open index.html`.

### Deployment Link
- Simply go play: https://irmakerdem.github.io/rock_paper_scissors/

### Features
- User can choose 1 of 2 games types: classic vs difficult
- User can choose from a variety of emojis as their token

![Rock-Paper-Scissors gif showing emoji options](https://media.giphy.com/media/gvKJrNuGlQ1hfkgfhg/giphy.gif)
- User can visualize the two chosen fighters and see who won
- User can maintain their score regardless of game type change

![Rock-Paper-Scissors gif showing emoji options](https://media.giphy.com/media/W3mCdUBgq6soY7ggUe/giphy.gif)

### Reflection
- The most challenging part of this project was keeping properties within the appropriate two classes (e.g. list of fighters should be in Game class, not Player class; player's choice should be in Player class). It was very easy to lose functionality when attempting to move properties over to the other class.
- The second most challenging part was coming up with an event listener for when user changes game type. Using the id in HTML became evident for solving this problem.
- Overall, I was happy to have used event.target.closest and event.target.id for the first time in a project! It was really fun and really challenging even though it seemed very simple at the start.

### Future Features
- Mini token appears next to mouse when clicking on chosen fighter
- Reset scores button resets scores without refreshing page

### Organizational Resources
- [Google Sheet](https://docs.google.com/spreadsheets/d/1mgIYpZuHvDG0PNgdh-Z7n67oNfJ6Ui80znJA3IY4278/edit?usp=sharing)

### Contributors
- [Irmak Erdem](https://github.com/irmakerdem)

### Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html).
