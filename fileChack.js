function isJavaScriptFile(string) {
    if (typeof string == "string") {
        const doseExist = string.endsWith(".js");
        return doseExist;
    }
    else {
        return "Error Input ! Please Give String type Value.";
    }
}
const result = isJavaScriptFile("hello.js");
console.log(result);