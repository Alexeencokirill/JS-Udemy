// ||= -assigns he right side value only if the left is a falsy value;

 let a = false;

 if (!a) {
    a = 10
 }

a = a || 10;
a ||= 10

 console.log(a)

 // &&= -assigns he right side value only if the left is a truthy value;

  let b = 10;

  if (b) {
    b = 20
  }

  b = b && 20
  b &&= 20

  console.log(b)

   // ??= -assigns he right side value only if the left is null or undefined;

   let c = null;

   if (c === null || c === undefined) {
    c = 30
   }

   c = c ?? 30
   c ??= 30

   console.log(c)