import { server } from '../../src/mocks/server'

beforeAll(() => {
  server.listen(3000)
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
