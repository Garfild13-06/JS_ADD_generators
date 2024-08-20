function canIterate(obj) {
  return obj != null && typeof obj[Symbol.iterator] === 'function';
}

// Примеры использования:
console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate("Netology")); // true
