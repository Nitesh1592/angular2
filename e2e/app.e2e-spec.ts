import { FitnessPage } from './app.po';

describe('fitness App', () => {
  let page: FitnessPage;

  beforeEach(() => {
    page = new FitnessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
