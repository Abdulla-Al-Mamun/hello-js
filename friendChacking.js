const friendName = [{ name: "mamun", friend: "rakib" }, { name: "rony", friend: "mamun" }];
function isBestFriend(friends) {
    if (typeof friends == "object") {
        let person1 = friends[0];
        let person2 = friends[1];
        if (person1.name == person2.friend && person2.name == person1.friend) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return " Error Input! Please Give Object type value.";
    }
}
const finaloutput = isBestFriend(friendName);
console.log(finaloutput);