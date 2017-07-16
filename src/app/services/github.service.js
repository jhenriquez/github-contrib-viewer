import Repository from 'models/repository.model';

export default class GithubService {

  toJSON (response: Response): any {
    return response.json();
  }

  toRepository (repository: any): Repository {
    return new Repository(repository);
  }

  searchRepositories (query: string) : Promise<Repository[]> {
    return query ?
          fetch(`https://api.github.com/search/repositories?q=${query}`)
            .then(this.toJSON)
            .then(repositories => repositories.items.map(this.toRepository))
          : Promise.resolve([]);
  }
}