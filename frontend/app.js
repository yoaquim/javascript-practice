var examples = {
    hashTable: require('./src/examples/hashTable'),
    linkedList: require('./src/examples/linkedList'),
    bubbleSort: require('./src/examples/bubbleSort'),
    mergeSort: require('./src/examples/mergeSort'),
    quickSort: require('./src/examples/quickSort')
};

for (var ex in examples) {
    if (examples.hasOwnProperty(ex)) {

        var name = ex
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, function(str){ return str.toUpperCase(); });

        console.log('--------------------------');
        console.log(name + ' Example:');
        console.log('--------------------------');

        examples[ex]();

        console.log('\n');
    }
}
