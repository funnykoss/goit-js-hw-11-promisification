const delay = ms => {
   return new Promise((resolve) => {
        setTimeout(() => {
         resolve(ms);
        }, ms);
      
    });
    
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
console.log(delay(2000).then(logger)); // Resolved after 2000ms
console.log(delay(1000).then(logger)); // Resolved after 1000ms
console.log(delay(1500).then(logger)); // Resolved after 1500ms