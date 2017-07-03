import { AdminPanelPashaPage } from './app.po';

describe('admin-panel-pasha App', () => {
  let page: AdminPanelPashaPage;

  beforeEach(() => {
    page = new AdminPanelPashaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
