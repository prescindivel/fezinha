#!/usr/bin/env node

import { getRandomInteger } from './utils/getRandomInteger'

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

const draw = ({ size, max }: Lottery) => {
  const bet: number[] = []

  for (let index = 0; index < size; index++) {
    let drawnNumber = getRandomInteger({ max })

    while (bet.includes(drawnNumber)) {
      drawnNumber = getRandomInteger({ max })
    }

    bet.push(drawnNumber)
  }

  return bet.sort((a, b) => a - b)
}

console.log(`Quina: ${draw(QUINA)}`)
console.log(`Mega: ${draw(MEGA)}`)
