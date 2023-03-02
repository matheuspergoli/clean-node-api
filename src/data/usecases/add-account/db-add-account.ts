import type { Encrypter } from '../../protocols/encrypter'
import type { AccountModel } from '../../../domain/models/account'
import type { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'

export class DbAddAccount implements AddAccount {
  constructor(private readonly encrypter: Encrypter) {}

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)

    return await new Promise((resolve) => {
      resolve(null as any)
    })
  }
}
