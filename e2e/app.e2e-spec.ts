import { Todomvc0418Page } from './app.po';

describe('todomvc0418 App', () => {
  let page: Todomvc0418Page;

  beforeEach(() => {
    page = new Todomvc0418Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
