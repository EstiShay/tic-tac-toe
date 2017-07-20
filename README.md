# Tic Tac Toe

#### Tic-tac-toe game for Epicodus, July 19, 2017

#### By Kate Mashokha & Esti Shay

## Description

This program will create a 3x3 Tic-Tac-Toe board that can be played by two people.

## Setup/Installation Requirements

* Clone the repo
* Open in your favorite editor
* Experiment

## Specifications

| Behavior      | Example Input         | Example Output        |
| ------------- | ------------- | ------------- |
| Clicking on square shows that player's mark in that square | Click on a box | X |
| Clicking multiple squares results in multiple marks | Two clicks on different boxes | X, X |
| Game recognizes when player marks three in a row on either axis | Click all three boxes in the 0 column | "Game over" |
| Game recognizes downward slant diagonal pattern as a winning combination | Clicking boxes 0,0, 1,1, and 2,2 | "Game over" |
| Game recognizes upward slant diagonal pattern as a winning combination | Clicking boxes 0,2, 1,1, and 2,0 | "Game over" |
| Alternate player marks | Two clicks | X, O |
| Game displays which player won | Three Xs in a row | "Game over! Player X won!" |
| Prevent play if player clicks already played square, but allow player to pick an unplayed square afterward. | X | "That square is already played.  Please pick another." |

## Technologies Used

Bootstrap, JavaScript, jQuery

### License

GPL

Copyright (c) 2017 Esti Shay, Kate Mashokha
