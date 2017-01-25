module.exports = (function (){
    var HashTable = require('../HashTable');

    var table = new HashTable(10000);

    table.add('John', 'Milz');
    table.add('Alex', 'Padma');
    table.add('Oscar', 'Goldman');
    table.add('Harold', 'Yen');
    table.add('Andrew', 'Smith');
    table.add('Lin', 'Melendez');
    table.add('Harry', 'Soto');

    var lastName = table.get('Harry');
    console.log(lastName);

    table.add('Harry', 'Cintron');

    lastName = table.get('Harry');
    console.log(lastName);
});
