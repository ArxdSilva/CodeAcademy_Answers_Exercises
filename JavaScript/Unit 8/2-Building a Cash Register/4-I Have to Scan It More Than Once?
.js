var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    },
    scan: function(item,num) {
        switch (item) {
        case "eggs": this.add(0.98*num);      break;
        case "milk": this.add(1.23*num);      break;
        case "magazine": this.add(4.99*num);  break;
        case "chocolate": this.add(0.45*num); break;
        }
    }
};

// scan each item 4 times
cashRegister.scan("eggs",4);
cashRegister.scan("milk",4);
cashRegister.scan("magazine",4);
cashRegister.scan("chocolate",4);

//Show the total bill
console.log('Your bill is '+cashRegister.total);
