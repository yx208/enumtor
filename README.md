# Enumtor

生成一个简单的枚举

## Example

```javascript
import { createEnum } from 'enumtor';

const Color = createEnum({
    RED: { text: '红色', value: 1 },
    BLUE: { text: '蓝色', value: 2 },
    GREEN: { text: '绿色', value: 3 }
});



console.log(Color.RED);     // 1
console.log(Color.BLUE);    // 2
console.log(Color.GREEN);   // 3



// enumtor 将自动为枚举的 key 生成一个加 `_T` 后缀的属性，表示直接获取枚举 key 所对应的文本
console.log(Color.RED_T);   // 红色
console.log(Color.BLUE_T);  // 蓝色



console.log(Color.text(2));         // 蓝色
console.log(Color.text(Color.RED)); // 红色



console.log(Color.has(1));   // true
console.log(Color.has(6));   // false



Color.RED = 10; // Error


// 可以通过 map 生成一组数据
const options = Color.map((label, value) => {
    return { label, value };
});

// 可以通过 map 第二个参数生成一组带初始值的数据
const options2 = Color.map((label, value) => {
    return { label, value };
}, [{ label: '全部', value: 'all' }]);

console.log(options); // [{ label: '红色', value: 1 }...]
console.log(options2); // [{ label: '全部', value: 'all' }, { label: '红色', value: 1 } ...]

```

