export type IContributor = {
  login: string;
  avatarUrl: string;
  contributions: Number;
};

export default class Contributor {
  login: string;
  avatarUrl: string;
  contributions: Number;

  constructor (contributor: any) {
    this.login = contributor.login;
    this.avatarUrl = contributor.avatar_url;
    this.contributions = contributor.contributions;
  }
}