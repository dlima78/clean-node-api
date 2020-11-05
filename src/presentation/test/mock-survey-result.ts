import { mockSurveyResultModel } from '@/domain/test'
import {
  SaveSurveyResult,
  SaveSurveyResultParams,
  SurveyResultModel
} from '@/presentation/controllers/survey-result/save-survey-result/save-survey-result-controller-protocols'
import { LoadSurveyResult } from '@/domain/usecases/survey-result/load-survey-result'

export class SaveSurveyResultSpy implements SaveSurveyResult {
  surveyResultModel = mockSurveyResultModel()
  saveSurveyResultParams: SaveSurveyResultParams
  async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
    this.saveSurveyResultParams = data
    return this.surveyResultModel
  }
}

export class LoadSurveyResultSpy implements LoadSurveyResult {
  surveyResultModel = mockSurveyResultModel()
  surveyId: string
  accountId: string
  async load (surveyId: string, accountId: string): Promise<SurveyResultModel> {
    this.surveyId = surveyId
    this.accountId = accountId
    return this.surveyResultModel
  }
}
