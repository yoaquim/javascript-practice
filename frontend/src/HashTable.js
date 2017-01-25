var Node = require('./Node');
var LinkedList = require('./LinkedList');
var murmur = require('./murmurhash2');

var table;

function HashTable (size) {
    this.size = size;
    table = new Array(size);
}

HashTable.prototype.add = function (key, value) {
    var hash = murmur(key, table.length);
    var node = new Node(key, value);
    var list;

    if (table[hash]) {
        list = table[hash];
        var alreadyExists =  list.find(key);

        if (alreadyExists) {
            alreadyExists.value = value;
        } else {
            list.add(node);
        }

    } else {
        list = new LinkedList(node);
        table[hash] = list;
    }
};

HashTable.prototype.get = function (key) {
    var hash = murmur(key, table.length);
    var list = table[hash];

    if (table[hash]) {
        var found = list.find(key);
        return found.value;
    } else {
        return void(0);
    }
};

module.exports = HashTable;
