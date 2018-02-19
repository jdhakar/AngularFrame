import { AngularFramePage } from './app.po';

describe('angular-frame App', function() {
  let page: AngularFramePage;

  beforeEach(() => {
    page = new AngularFramePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
