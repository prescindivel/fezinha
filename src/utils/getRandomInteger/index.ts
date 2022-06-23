interface GetRandomIntergerParms {
  min?: number
  max: number
}

export const getRandomInteger = ({ min = 1, max }: GetRandomIntergerParms): number =>
  Math.floor(Math.random() * (max - min + 1)) + min
