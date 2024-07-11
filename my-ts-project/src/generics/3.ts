// You have a merge function that combines two objects. Use generics to indicate that these objects can be of any type.
// function merge(objA, objB) {
//   return Object.assign(objA, objB);
// }
// function merge<T, U>(objA: T, objB: U): T & U {
//   return Object.assign(objA, objB);
// }
function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
export {};
