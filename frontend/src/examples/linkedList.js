module.exports = (function () {

    function remove (name) {
        console.log('\nREMOVING ' + name + '...\n');
        list.remove(name);
    }

    function print () {
        list.iterate(function (currentNode) {
            var toPrint = currentNode.key + ' ' + currentNode.value;

            if (list.head === currentNode) {
                toPrint+= ' [HEAD]'
            }

            if (list.tail === currentNode) {
                toPrint+= ' [TAIL]'
            }

            console.log(toPrint);
        });
    }

    var LinkedList = require('../LinkedList');
    var Node = require('../Node');

    var list = new LinkedList(new Node('John', 'Smith'));
    list.add( new Node('Adam', 'Garcia')) ;
    list.add( new Node('Rebeca', 'Wong')) ;
    list.add( new Node('Victoria', 'Bismark'));

    print();

    remove('Rebeca');
    print();

    remove('Victoria');
    print();

    remove('John');
    print();

    remove('Adam');
    print();
});