import { MongoHelper } from '../helpers/mongo-helper'
import type { AccountModel } from '../../../../domain/models/account'
import type { AddAccountModel } from '../../../../domain/usecases/add-account'
import type { AddAccountRepository } from '../../../../data/protocols/add-account-repository'

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')

    const result = await accountCollection.insertOne(accountData)

    const account = Object.assign({}, accountData, {
      id: result.insertedId as unknown as string
    })

    return {
      id: account.id,
      name: account.name,
      email: account.email,
      password: account.password
    }
  }
}
