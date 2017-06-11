import { OnlineShoppingPage } from './app.po';

describe('online-shopping App', () => {
  let page: OnlineShoppingPage;

  beforeEach(() => {
    page = new OnlineShoppingPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
