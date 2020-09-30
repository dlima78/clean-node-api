import { Collection } from 'mongodb'
import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/helper/mongo-helper'
import app from '../config/app'
import { hash } from 'bcrypt'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Eduardo Lima',
          email: 'dlima78@hotmail.com',
          password: '123',
          passwordConfirmation: '123'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('should return 200 on login', async () => {
      const password = await hash('123', 12)
      await accountCollection.insertOne({
        name: 'Eduardo Lima',
        email: 'dlima78@hotmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'dlima78@hotmail.com',
          password: '123'
        })
        .expect(200)
    })
    test('should return 401 on login with invalid credentials', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'dlima78@hotmail.com',
          password: '123'
        })
        .expect(401)
    })
  })
})
