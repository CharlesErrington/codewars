// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.

// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.

//My solution

// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  
    console.log(buttons)
    let button = 'Nothing'
    for (let i = 0; i < buttons.length; i++) {
      if (i == 0) {
        button = buttons[0]
      } else if (buttons[i] == buttons[i - 1] && button !== 'Nothing') {
        button = 'Nothing'
      } else {
        button = buttons[i]
      }
      
    }
    return button
  }

  //Alternative

  function likeOrDislike(buttons) {
    let state = 'Nothing';
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === state) {
        state = 'Nothing'
      } else {
        state = buttons[i]
      }
    }
  
    return state
  }