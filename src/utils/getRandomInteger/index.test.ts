import { getRandomInteger } from '.'

describe('the getRandomInteger util', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should be able to return 25', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.4)

    const randomNumber = getRandomInteger({ max: 60 })

    expect(randomNumber).toBe(25)
  })

  it('should be able to return 19', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.3)

    const randomNumber = getRandomInteger({ max: 60 })

    expect(randomNumber).toBe(19)
  })
})
