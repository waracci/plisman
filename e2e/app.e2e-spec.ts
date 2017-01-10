import { PlismanPage } from './app.po';

describe('plisman App', function() {
  let page: PlismanPage;

  beforeEach(() => {
    page = new PlismanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
