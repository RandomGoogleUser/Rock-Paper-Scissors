// Since the computer cannot do anything without instructions, we use this function so the computer can randomly pick rock, paper or scissors.
const computerPlay = () => {
  let random_input = Math.floor(Math.random() * 3)
  
  if (random_input === 0) {
    return "Rock".toLowerCase()
  } else if (random_input === 1) {
    return "Paper".toLowerCase()
  } else {
    return "Scissors".toLowerCase()
  }
}

// This function manages the round and how the round should work.
const playRound = (playerSelection, computerSelection) => {
  let userSelection = playerSelection.toLowerCase()
  
  if (userSelection === computerSelection) {
    return "Tie"
  } else if (userSelection === "rock" && computerSelection === "paper") {
    return `You lose! Paper beats rock.`
  } else if (userSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors."
  } else if (userSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors."
  } else if (userSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper."
  } else if (userSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock."
  } else if (userSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats paper."
  } else {
    return null
  }
}

// Here is where the game starts: We have five rounds and everytime somebody wins, their wins are increased. The one with the most wins will be the winner at the end.
const game = () => {
  let playerWin = 0
  let computerWin = 0
  let results = null
  
  for (let i = 0; i < 5; i++) {
    results = null
    const input = prompt("Pick rock, paper or scissors")
    results = playRound(input, computerPlay())

    console.log(results)
    
    if (results.match(/You win/g)) {
      playerWin ++
    } else {
      computerWin ++
    }
  }

  if (playerWin > computerWin) {
    console.log("You win!")
  } else if (playerWin === computerWin) {
    console.log("You tied!")
  } else {
    console.log("\nYou lose!")
  }
}

game()