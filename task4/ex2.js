function createAnEmptyObject() {
    obj = {};
    obj.__proto__ = null;
    return obj;
}

console.log(createAnEmptyObject().__proto__);