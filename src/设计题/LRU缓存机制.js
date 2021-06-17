// LRU的缓存机制

// 常规思路 哈希表 + 双向链表
// 利用JS的map属性
var LRUCache = function(capacity) {

    this.map = new Map();

    this.maxSize = capacity;
};

LRUCache.prototype.get = function(key) {

    if(!this.map.has(key)) return -1;

    let tmp = this.map.get(key);
    
    this.map.delete(key);

    this.map.set(key, tmp);

    return tmp;
};


LRUCache.prototype.put = function(key, value) {

    if(this.map.has(key)) {
        this.map.delete(key);
    }

    this.map.set(key,value);

    if(this.map.size > this.maxSize) {

        this.map.delete(this.map.keys().next().value);
    }

};


let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4