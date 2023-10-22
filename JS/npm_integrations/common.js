const specialSort = () => {
    console.log('I am responsible for sorting')
}

const specialSort2 = () => {
    console.log('I am another techniqu')
}
// export default function iAmDefault () {
//     console.log('I am default ')
// }

const iAmDefault = ()=> {
    console.log('I am default ')
}
const iAmAnotherDefaultFunction = () => {
    console.log('anotherrrrrr defualt')
}

export default iAmDefault;

export {
    specialSort,
    specialSort2
}