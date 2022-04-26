import { createEnum } from '../index.js';

const Color = createEnum({
    RED: { text: '红色', value: 1 },
    BLUE: { text: '蓝色', value: 2 },
    GREEN: { text: '绿色', value: 3 }
});

console.log(Color.RED);     // 1
console.log(Color.BLUE);    // 2
console.log(Color.GREEN);   // 3

console.log(Color.RED_T);   // 红色

console.log(Color.text(2));       // 蓝色
console.log(Color.text(Color.RED));         // 红色

console.log(Color.has(1));   // true
console.log(Color.has(6));   // false

// Color.RED = 10; // Error

const options = Color.map((text, value) => {
    return { label: text, value };
});

console.log(options); // [{ label: '红色', value: 1 }...]
