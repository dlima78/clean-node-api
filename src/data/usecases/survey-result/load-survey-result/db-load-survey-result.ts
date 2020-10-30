import {
  LoadSurveyResult,
  SurveyResultModel,
  LoadSurveyResultRepository
} from './db-load-survey-result-protocols'

export class DbLoadSurveyResult implements LoadSurveyResult {
  constructor (private readonly loadSurveyRepository: LoadSurveyResultRepository) {}
  async load (surveyId: string): Promise<SurveyResultModel> {
    await this.loadSurveyRepository.loadBySurveyId(surveyId)
    return null
  }
}
