import axios from 'axios'

it('works', async () => {
  const result = await axios.get('/events')

  console.log(result.data)
  expect(true).toBeTruthy()
})
