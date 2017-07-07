import { AngularExerciseCommaPage } from './app.po';

describe('angular-exercise-comma App', () => {
  let page: AngularExerciseCommaPage;

  beforeEach(() => {
    page = new AngularExerciseCommaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
