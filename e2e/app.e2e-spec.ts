import { CalvinCommunitiesPage } from './app.po';

describe('calvin-communities App', () => {
  let page: CalvinCommunitiesPage;

  beforeEach(() => {
    page = new CalvinCommunitiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('calvin works!');
  });
});
