# Hangman Game Project Overview

This Hangman game project is a collaborative effort by Claudia Rebeca Hodoroga and Albert Sánchez, with Claudia handling the CSS design and Albert working on the JavaScript code. The project aims to create an engaging web-based Hangman game with a visually appealing design.

## Project Structure

The website consists of two main pages:

1. **Landing Page:**
   - Displays the title "Let's play HANGMAN!" and prompts the user to enter their name.
   - Clicking the "START" button directs the user to the game page.

2. **Game Page:**
   - Divided into three columns.
     - **Left Column:**
       - Displays the user's name, wins and losses counts, and a "NEW GAME" button.
     - **Middle Column:**
       - Shows the gaps for each letter of the word to be guessed.
       - Displays incorrect letters entered by the user.
     - **Right Column:**
       - Allows the user to input letters for guessing.
       - Includes a "TRY" button to submit the entered letter.
       - Shows the hangman image, updating with each incorrect guess.
   - The user has 8 lives, and the game dynamically updates the UI based on their input.

## Gameplay Flow

1. User enters their name on the landing page and clicks "START."
2. The game page is displayed with the user interface divided into columns.
3. User attempts to guess the word by entering letters.
4. Correct guesses reveal letters in the word, while incorrect guesses update the hangman image.
5. Wins and losses are tracked, and the "NEW GAME" button allows easy initiation of a new game.
6. If the user runs out of lives, a popup alerts them of the loss and displays the correct word.
7. If the user correctly guesses the word, a popup congratulates them on the win.

## Design Details

- The design incorporates a color scheme declared in the root of the CSS code:
    -background: #F1D0D9
    -pink-accent: #E41758
    -blue-accent: #265DC9
    -app-color: #F5DFE9
    -white (not declared in root)
  
- The font 'Starborn' is used for a unique and visually appealing text style.
- The overall aesthetic aims to create an immersive and enjoyable gaming experience. It is inspired by 2000's online game websites, particularly games directed at young girls, attempting to elicit feelings of nostalgia in the player.

## Credits

- **Claudia:** CSS Design
- **Albert:** JavaScript Code

---

Feel free to expand on specific sections or customize the README further based on additional details you'd like to include.
