// function customForEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr)
//     }
// }
// const nums = [1, 2, 3, 4]
// customForEach(nums, num => console.log(num + 1));

// function customFind(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i], i, arr)) {
//             return arr[i]
//         } 
//     }
//         return undefined
// }
// const nums = [1, 2, 3, 4]
// const result = customFind(nums, num => num % 2 === 0)
// console.log(result);

// function customSome(arr,callback) {
//     for (let i = 0; i < arr.length; i++){
//         if (callback(arr[i], i, arr)){
//             return true 
//         }
//         return false
//     }
// }
// let nums = [1,2,3,4]
// let result = customSome(nums, num => num < 4)
// console.log(result);


// function customEvery(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!callback(arr[i], i, arr)) {
//             return false
//         }
//         return true
//     }
// }
// let nums = [1, 2, 3, 4]
// console.log(
//     customEvery(nums, num => {
//         return num > 0
//     })
// );


