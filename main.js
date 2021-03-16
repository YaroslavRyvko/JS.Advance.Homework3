function CoffeeMake() {};
CoffeeMake.prototype.on = function () {
    console.log('i am working');
}

CoffeeMake.prototype.off = function () {
    console.log('i am not working');
}

function Drip() {};
function Сarob() {};
function CoffeeMachine() {};

Drip.prototype = Object.create(CoffeeMake.prototype);
Сarob.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);

Drip.prototype.drip = function () {
    console.log('Im drip coffee maker');
}

Сarob.prototype.сarob = function () {
    console.log('Im carob coffee maker');
}

CoffeeMachine.prototype.coffeemachine = function () {
    console.log('I`m CoffeeMachine');
}

let DripInfo = new Drip();
let CarobInfo = new Сarob();
let CoffeeMachineInfo = new CoffeeMachine();

DripInfo.drip();
DripInfo.on();
DripInfo.off();

CarobInfo.сarob();
CarobInfo.on();
CarobInfo.off();

CoffeeMachineInfo.coffeemachine();
CoffeeMachineInfo.on();
CoffeeMachineInfo.off();