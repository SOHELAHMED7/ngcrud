Feature('Add fruit');

Scenario('test add fruit', (I) => {
    I.amOnPage('http://localhost:4202/fruits'); // home page
    I.click('Add Fruits');
    I.seeInCurrentUrl('add');
    // I.seeInSource('<input type="submit" value="add">');
    // I.see('add');
    I.fillField({ model: 'fruit.name'}, 'newfruit');
});
