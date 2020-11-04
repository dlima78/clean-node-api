import {
  AccountModel,
  AddAccount,
  AddAccountParams
} from '@/presentation/controllers/login/signup/signup-controller-protocols'
import { AuthenticationModel } from '@/domain/models/authentication'
import { mockAccountModel } from '@/domain/test'
import {
  Authentication,
  AuthenticationParams
} from '@/presentation/controllers/login/login/login-controller-protocols'
import { LoadAccountByToken } from '../middlewares/auth-middleware-protocols'

export const mockAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add (account: AddAccountParams): Promise<AccountModel> {
      return new Promise(resolve => resolve(mockAccountModel()))
    }
  }
  return new AddAccountStub()
}

export const mockAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    async auth (authentication: AuthenticationParams): Promise<AuthenticationModel> {
      return Promise.resolve({ accessToken: 'any_token', name: 'any_name' })
    }
  }
  return new AuthenticationStub()
}

export const mockLoadAccountByToken = (): LoadAccountByToken => {
  class LoadAccountByTokenStub implements LoadAccountByToken {
    async load (accessToken: string, role?: string): Promise<AccountModel> {
      return new Promise(resolve => resolve(mockAccountModel()))
    }
  }
  return new LoadAccountByTokenStub()
}
