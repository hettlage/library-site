import { LibrarySitePage } from './app.po';

describe('library-site App', function() {
  let page: LibrarySitePage;

  beforeEach(() => {
    page = new LibrarySitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
