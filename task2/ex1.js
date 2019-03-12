function determineType(arg) {
    if ((typeof arg === "number") || (typeof arg === "string")) {
        return typeof arg;
    } else {
        return undefined;
    } 
}

console.log(determineType(true));