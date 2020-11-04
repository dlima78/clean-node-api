import {
  AddSurvey,
  AddSurveyParams
} from '@/presentation/controllers/survey/add-survey/add-survey-controller-protocols'
import {
  LoadSurveys,
  SurveyModel
} from '@/presentation/controllers/survey/load-surveys/load-surveys-controller-protocols'
import { mockSurveyModel, mockSurveysModel } from '@/domain/test'
import { LoadSurveyById } from '../controllers/survey-result/save-survey-result/save-survey-result-controller-protocols'

export const mockAddSurvey = (): AddSurvey => {
  class AddSurveyStub implements AddSurvey {
    async add (data: AddSurveyParams): Promise<void> {
      return new Promise(resolve => resolve())
    }
  }
  return new AddSurveyStub()
}

export class LoadSurveysSpy implements LoadSurveys {
  surveyModels = mockSurveysModel()
  accountId: string
  async load (accountId: string): Promise<SurveyModel[]> {
    this.accountId = accountId
    return this.surveyModels
  }
}

export const mockLoadSurveyById = (): LoadSurveyById => {
  class LoadSurveyByIdStub implements LoadSurveyById {
    async loadById (id: string): Promise<SurveyModel> {
      return new Promise(resolve => resolve(mockSurveyModel()))
    }
  }
  return new LoadSurveyByIdStub()
}
