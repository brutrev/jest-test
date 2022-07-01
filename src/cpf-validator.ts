export const validateCpf = (cpf: string): boolean => {
  if (cpf.length !== 11) {
    return false
  }

  const digits = cpf.split('').map(Number)

  const firstDigit = digits.slice(0, 9).reduce((acc, curr, index) => {
    return acc + curr * (10 - index)
  }, 0)

  const firstDigitMod = firstDigit % 11
  const firstDigitMod11 = firstDigitMod < 2 ? 0 : 11 - firstDigitMod

  const secondDigit =
    digits.slice(0, 9).reduce((acc, curr, index) => {
      return acc + curr * (11 - index)
    }, 0) +
    firstDigitMod11 * 2

  const secondDigitMod = secondDigit % 11
  const secondDigitMod11 = secondDigitMod < 2 ? 0 : 11 - secondDigitMod

  return digits[9] === firstDigitMod11 && digits[10] === secondDigitMod11
}
