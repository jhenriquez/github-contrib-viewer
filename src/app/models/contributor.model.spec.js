import Contributor from './contributor.model';
import contributor_mocks from 'mocks/contributors';

const mockContributor = contributor_mocks[0];

describe('Model: Contributor', () => {

  describe('#()', () => {

    test('Provided a github API contributor object it creates a valid Contributor model.', () => {
      const contributor = new Contributor(mockContributor);
      expect(contributor.contributions).toEqual(mockContributor.contributions);
      expect(contributor.avatarUrl).toEqual(mockContributor.avatar_url);
      expect(contributor.login).toEqual(mockContributor.login);
    });

  });
});