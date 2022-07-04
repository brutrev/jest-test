import { getUsers } from '@/get-users'
import axios from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('get-users-test-suite', () => {
  let spy: () => any

  beforeEach(() => {
    spy = jest.fn()
  })

  it('calls the callback', async () => {
    await getUsers(spy)
    expect(spy).toHaveBeenCalled()
  })

  it('calls the correct url', async () => {
    await getUsers(spy)
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/albums')
  })

  it('returns correct data', async () => {
    const a = mockedAxios.get.mockResolvedValue({
      data: { users: ['user1', 'user2'] }
    })

    await getUsers(spy)
    expect(spy).toHaveBeenCalledWith({ users: ['user1', 'user2'] })
  })
})
