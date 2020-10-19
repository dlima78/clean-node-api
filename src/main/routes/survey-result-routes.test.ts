import request from 'supertest'
import { MongoHelper } from '@/infra/db/mongodb/helper/mongo-helper'
import app from '@/main/config/app'

describe('Survey Result Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  describe('PUT /surveys/:surveysId/results', () => {
    test('should return 403 on save survey result without accessToken', async () => {
      await request(app)
        .put('/api/surveys/any_id/results')
        .send({ answer: 'any_answer' })
        .expect(403)
    })
  })
})
