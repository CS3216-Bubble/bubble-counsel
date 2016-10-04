import { BubbleFrontendPage } from './app.po';

describe('bubble-frontend App', function() {
  let page: BubbleFrontendPage;

  beforeEach(() => {
    page = new BubbleFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
