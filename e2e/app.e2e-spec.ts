import { BetasPage } from './app.po';

describe('betas App', () => {
  let page: BetasPage;

  beforeEach(() => {
    page = new BetasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
