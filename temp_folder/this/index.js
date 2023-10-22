// const world = {
// 	pName: 'Earth',
// 	greet(){
// 		return `I am from the planet ${this.pName}`
// 	},
// 	bye: () => {
// 		return `see you later ${this.pName}`
// 	}
// }
// console.log(world.greet());// world obj
// console.log(world.bye()); //earth

async function fetchApi() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todosfff/1");
    if(!response.ok){
        throw new Error('status 400') //400, 40
    }
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchApi();
