export type IRepository = {
  id: Number;
  url: string;
  contributorsUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export default class Repository {
  id: Number;
  url: string;
  contributorsUrl: string;
  createdAt: Date;
  updatedAt: Date;

  constructor (repository: any) {
    this.id = repository.id;
    this.url = repository.url;
    this.contributorsUrl = repository.contributors_url;
    this.createdAt = repository.created_at;
    this.updatedAt = repository.updated_at;
  }
}