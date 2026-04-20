class MovingAverage {
    constructor(size) {
        this.size = size;
        this.sum = 0;
        this.count = 0;
        this.queue = [];
    }

    add(num) {
        if (this.count < this.size) {
            this.sum += num;
            this.queue.push(num);
            this.count++;
        } else {
            this.sum = this.sum - this.queue.shift() + num;
            this.queue.push(num);
        }
        return this.getAverage();
    }

    getAverage() {
        return this.sum / this.count;
    }
}
```

Kodni ishlatish uchun misol:

```javascript
let ma = new MovingAverage(3);
console.log(ma.add(1));  // 1.0
console.log(ma.add(10)); // 5.5
console.log(ma.add(3));  // 4.666666666666667
console.log(ma.add(5));  // 4.0
