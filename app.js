//1. 
  console.log(numPlanets); //8
  console.log(yearNeptuneDiscovered); // 1846

//2.
// {
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// }

//3.
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Your name is Alejandro and you like purple
  getUserData({firstName: "Melissa"}) // Your name is Melissa and you like green
  getUserData({}) // Your name is undefined and you like green

//4.
  console.log(first); // Maya
  console.log(second); // Marisa
  console.log(third); // Chi

//5.
  console.log(raindrops); // Raindrops on roses
  console.log(whiskers); // whiskers on kittens
  console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//6.
  console.log(numbers) // [10, 30, 20]

//7.
  const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  }
   const {a,b} = obj.numbers

//7.
  [arr[0], arr[1]] = [arr[1], arr[0]]

//8.
  const raceResults = ([first, second, third, ...others]) => ({first, second, third, others});