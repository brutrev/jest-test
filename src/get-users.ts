import axios from 'axios'

export async function getUsers(callback: any = () => {}) {
  await axios.get('https://jsonplaceholder.typicode.com/albums').then(
    response => {
      callback(JSON.parse(JSON.stringify(response.data)))
    },
    error => {
      callback(error)
    }
  )
}
