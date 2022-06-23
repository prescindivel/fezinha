#!/usr/bin/env node

interface Lottery {
  size: number
  max: number
}

const QUINA: Lottery = {
  size: 5,
  max: 80,
}

const MEGA: Lottery = {
  size: 6,
  max: 60,
}

const getRndInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const draw = (lottery: Lottery) => {
  const bet: number[] = []

  for (let index = 0; index < lottery.size; index++) {
    let drawnNumber = getRndInteger(1, lottery.max)

    while (bet.includes(drawnNumber)) {
      drawnNumber = getRndInteger(1, lottery.max)
    }

    bet.push(drawnNumber)
  }

  return bet.sort((a, b) => a - b)
}

console.log(`Quina: ${draw(QUINA)}`)
console.log(`Mega: ${draw(MEGA)}`)
