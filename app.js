// From YouTube tutorial by Ania Kubow
// https://github.com/kubowania

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
  squares.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPartition = squares[Math.floor(Math.random() * 9)]
  randomPartition.classList.add('mole')


  // Assign the id of the randomPartition to hitPosition for us to use later
  hitPosition = randomPartition.id  
}

squares.forEach(id => {
  id.addEventListener('mousedown', () => {
    if(id.id === hitPosition) {
      result = result + 1
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('GAME OVER! Your final score is: ' + result)
  }

}

let countDownTimerId = setInterval(countDown, 1000)