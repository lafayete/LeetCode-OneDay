var RandomizedSet = function() {

    this.map = new Map();
    this.array = [];

};

RandomizedSet.prototype.insert = function(val) {

    if (this.map.has(val)) {

        return false;
    }

    this.array.push(val);

    this.map.set(val, this.array.length - 1);

    return true;

};

RandomizedSet.prototype.remove = function(val) {

    function swap(a, b, array) {

        let temp = array[a];
        
        
        array[a] = array[b];


        array[b] = temp;

    }


    if (!this.map.has(val)) {

        return false;
    }

    const index = this.map.get(val);

    let lastIndex = this.array.length - 1;


    if (index < lastIndex) {

       swap(index, lastIndex, this.array);

        this.map.set(this.array[index], index);
    }

    this.map.delete(val);

    this.array.pop();

    return true;

};

RandomizedSet.prototype.getRandom = function() {


    const size = this.map.size;

    if(size === 0) return false;


    let randomIndex = Math.floor(Math.random()* size);

    return this.array[randomIndex];

};
