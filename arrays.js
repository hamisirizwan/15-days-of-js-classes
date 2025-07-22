// // Arrays

// const myArr = [20 , 40 ]

// console.log(typeof myArr)

// // lenght

// // console.log(myArr[myArr.length - 1])

// const nextIndex = (myArr.length - 1) + 1

// myArr[nextIndex] = 50

// console.log(myArr)

const myArr = {
  items: [20, 40, 50],
  addEnd(item) {
    this.items.push(item);
  },
  addInfront(item) {
    this.items.unshift(item);
  },
  removeEnd() {
    this.items.pop();
  },
  removeInfront() {
    this.items.shift();
  },
};

console.log(myArr.items);
// myArr.addEnd(70)
// myArr.addInfront(70);
myArr.removeInfront()
console.log(myArr.items);

// array methods - pre-written methods of the array object that perform operations on arrays

// push

// pop

// unshift

// shift
