function createAnEmptyObject() {
    obj = Object.create(null);
    return obj;
}

console.log(createAnEmptyObject().__proto__);