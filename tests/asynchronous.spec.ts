import { fooAsync } from '@/foo-async'

describe('asynchronous-test-suite', () => {
  it('should resolve async call', async () => {
    var res = await fooAsync()
    expect(res).toBe('foo')
  })
})
