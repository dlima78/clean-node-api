import { MongoHelper as sut } from './mongo-helper'

describe('Mongo helper', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await sut.disconnect()
  })
  test('should reconect if mongodb is down ', async () => {
    let accountCollection = await sut.getcollection('accounts')
    expect(accountCollection).toBeTruthy()
    await sut.disconnect()
    accountCollection = await sut.getcollection('accounts')
    expect(accountCollection).toBeTruthy()
  })
})
