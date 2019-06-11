
Feature('Home Page');

Scenario('test homepage', (I) => {
    I.amOnPage('http://localhost:4202/fruits');
    I.seeInCurrentUrl('http://localhost:4202/fruits');
    I.see('Fruits');
    I.see('Add Fruits');

    I.wait(1); // let the contents get loaded from 'fake (mock) angular in memory web api'

    // see list of fruits with color
    I.see('mango');
    I.see('yellow');
    I.see('apple');
    I.see('red');

    I.click('Add Fruits');
    I.seeInCurrentUrl('add');
});
