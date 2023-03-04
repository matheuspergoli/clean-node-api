import { MongoClient, type MongoClientOptions, type Collection } from 'mongodb'

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
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  },

  map(collection: any): any {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
