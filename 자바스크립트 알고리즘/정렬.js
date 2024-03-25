let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// 오름차순 정렬
numbers = numbers.sort((a, b) => a - b);
console.log(numbers);

// 내림차순 정렬
reverse_numbers = numbers.sort((a, b) => b - a);
console.log(reverse_numbers);
