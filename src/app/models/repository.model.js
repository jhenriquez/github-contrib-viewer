export type IRepository = {
  url: string;
  contributorsUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export default class Repository {
  url: string;
  contributorsUrl: string;
  createdAt: Date;
  updatedAt: Date;

  constructor (repository: any) {
    this.url = repository.url;
    this.contributorsUrl = repository.contributors_url;
    this.createdAt = repository.created_at;
    this.updatedAt = repository.updated_at;
  }
}