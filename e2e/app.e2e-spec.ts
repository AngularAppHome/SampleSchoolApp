import { SampleSchoolAppPage } from './app.po';

describe('sample-school-app App', () => {
  let page: SampleSchoolAppPage;

  beforeEach(() => {
    page = new SampleSchoolAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
