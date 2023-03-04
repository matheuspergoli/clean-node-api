import { MongoClient, type MongoClientOptions } from 'mongodb'

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect(uri: string, options?: MongoClientOptions): Promise<void> {
    this.client = await MongoClient.connect(uri, {
      ...mongoOptions,
      ...options
    })
  },

  async disconnect(): Promise<void> {
    await this.client.close()
  }
}
