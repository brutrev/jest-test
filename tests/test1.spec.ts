import { validateCpf } from '@/cpf-validator'

describe('test-suite1', () => {
  it('test-case1', () => {
    expect(true).toBe(true)
  })

  it('should return true when cpf is valid', () => {
    expect(validateCpf('12345678909')).toBe(true)
  })

  it('should return false when cpf is invalid', () => {
    expect(validateCpf('12345678910')).toBe(false)
  })
})
