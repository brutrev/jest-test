export const fooAsync = async (): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('foo')
    }, 50)
  })
}
