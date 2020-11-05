import { DbLoadSurveyById } from './db-load-survey-by-id'
import { LoadSurveyByIdRepositorySpy } from '@/data/test'
import MockDate from 'mockdate'
import faker from 'faker'
import { throwError } from '@/domain/test'

type SutTypes = {
  sut: DbLoadSurveyById
  loadSurveyByIdRepositorySpy: LoadSurveyByIdRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadSurveyByIdRepositorySpy = new LoadSurveyByIdRepositorySpy()
  const sut = new DbLoadSurveyById(loadSurveyByIdRepositorySpy)
  return {
    sut,
    loadSurveyByIdRepositorySpy
  }
}

let id: string

describe('LoadSurveyById', () => {
  beforeAll(() => {
    MockDate.set(new Date())
  })

  afterAll(() => {
    MockDate.reset()
  })

  beforeEach(() => {
    id = faker.random.uuid()
  })

  test('should call LoadSurveyByIdRepository ', async () => {
    const { sut, loadSurveyByIdRepositorySpy } = makeSut()
    await sut.loadById(id)
    expect(loadSurveyByIdRepositorySpy.id).toBe(id)
  })

  test('should return Survey on success', async () => {
    const { sut, loadSurveyByIdRepositorySpy } = makeSut()
    const survey = await sut.loadById(id)
    expect(survey).toEqual(loadSurveyByIdRepositorySpy.surveyModel)
  })

  test('should throw if LoadSurveyByIdRepository throws', async () => {
    const { sut, loadSurveyByIdRepositorySpy } = makeSut()
    jest.spyOn(loadSurveyByIdRepositorySpy, 'loadById')
      .mockImplementationOnce(throwError)
    const promise = sut.loadById(id)
    await expect(promise).rejects.toThrow()
  })
})
