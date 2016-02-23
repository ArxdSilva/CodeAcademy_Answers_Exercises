var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "(206) 555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
    }
};

var list = function(friends) {
    for (var firstName in friends) {
        console.log(firstName);
    }
}

var search = function(name) {
    for (var firstName in friends) {
        if (friends[firstName].firstName === name) {
            console.log(friends[firstName]);
            return friends[firstName];
        }
    }
}
