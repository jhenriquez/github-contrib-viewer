export type IOrganization = {
  url: string;
  login: string;
  avatarUrl: string;
  description: string;
};

export default class Organization {
  url: string;
  login: string;
  avatarUrl: string;
  description: string;

  constructor (org: any) {
    this.url = org.url;
    this.login = org.login;
    this.avatarUrl = org.avatar_url;
    this.description = org.description;
  }
}