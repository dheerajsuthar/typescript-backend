import { hello } from './Server'

describe('Hello', () => {
  test('should greet someone!', () => {
    expect(hello('Dheeraj')).toBe('Hallo Dheeraj!')
  })
})
