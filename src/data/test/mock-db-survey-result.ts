import { mockSurveyResultModel } from '@/domain/test'
import { SaveSurveyResultRepository } from '@/data//protocols/db/survey-result/save-survey-result-repository'
import { LoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result-respository'
import {
  SaveSurveyResultParams,
  SurveyResultModel
} from '@/data//usecases/survey-result/save-survey-result/db-save-survey-result-protocols'

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return new Promise(resolve => (resolve(mockSurveyResultModel())))
    }
  }
  return new SaveSurveyResultRepositoryStub()
}

export const mockLoadSurveyResultRepository = (): LoadSurveyResultRepository => {
  class LoadSurveyResultRepositoryStub implements LoadSurveyResultRepository {
    async loadBySurveyId (surveyId: string): Promise<SurveyResultModel> {
      return Promise.resolve(mockSurveyResultModel())
    }
  }
  return new LoadSurveyResultRepositoryStub()
}
