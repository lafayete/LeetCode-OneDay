// LRU的缓存机制
var LRUCache = function(capacity) {

    this.map = new Map();

    this.maxSize = capacity;

    this.queue = [];
};

LRUCache.prototype.get = function(key) {


    let obj = this.map.get(key);

    this.queue.push(key);

    return obj.value || -1;

};


LRUCache.prototype.put = function(key, value) {


    let size = this.map.size();

    if(size > this.maxSize) {

        let lastKey = this.queue.shift();

        this.map.delete(lastKey);
        
    } else {

        this.map(key, value);
    }

};
