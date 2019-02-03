function addition() {
    return 42;
}



function generateRandomNumbers(){
    let order = [];
    for (let i = 0; i < length; i++) {
        let rand = Math.random();
        order.push(Math.floor(rand * 4)+1);
    }
    return order;
}