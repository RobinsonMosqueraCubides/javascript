class A {
    constructor(x) {
        this.value = x;
    }
}
class B extends A {
    constructor(x) {
        super(x);
        this.valueB = x;
    }
}
class C extends B {
    constructor(x) {
        super(x);
        this.valueC = x;
    }
}

const myInstanceA = new C(12);
console.log(myInstanceA.value);
console.log(myInstanceA.valueB);
console.log(myInstanceA.valueC);