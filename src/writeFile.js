const fs = require('fs').promises 

async function openFile() {
    try {
        const csvHeaders = 'first name, lastname, phone'
        await fs.writeFile('users.csv', csvHeaders);
    } catch (error) {
        console.error(`Missing phone number: ${error.message}`);
    }
}

async function addUsers(firstname, lastname, phone) {
    try {
        const csvLine = `\n${firstname}, ${lastname}, ${phone}`
        await fs.writeFile('users.csv', csvLine, { flag: 'a'});
    } catch (error) {
        console.error(`Missing phone number: ${error.message}`);
    }
}

(async function() {
    await openFile();
    await addUsers('John', 'Doe', '5553498');
    await addUsers('Mathus', 'Anderson', '');
})();