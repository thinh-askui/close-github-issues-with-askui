import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('close duplicated issues', async () => {

    // enter the url of the askui github repository
    await aui.click().url().exec();
    await aui.pressTwoKeys('control', 'A').exec();
    await aui.pressKey('delete').exec();
    await aui.type('https://github.com/askui/askui').exec();
    await aui.pressKey('enter').exec();

    

    // navigate to Issues, select all duplication and close them - check closed issues in the end
    await aui.click().text().withText("Issues").above().text().withText('Code').exec();

    await aui.click().checkboxChecked().leftOf().text().withText("8 Open").exec();

    await aui.click().icon().withText("check").above().text().withText("© 2022 Github, Inc.").exec();

    await aui.click().text().withText("Mark as").exec();

    await aui.click().text().withText("Closed").exec();

    await aui.click().text().withText("Closed").exec();

  });

});
