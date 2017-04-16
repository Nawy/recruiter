import { RecruiterViewPage } from './app.po';

describe('recruiter-view App', () => {
  let page: RecruiterViewPage;

  beforeEach(() => {
    page = new RecruiterViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
