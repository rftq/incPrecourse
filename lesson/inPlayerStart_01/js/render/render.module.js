// export function render(value) {
//     console.log(value);
    
// }

// const userName = "Alex"
// console.log(userName);


export function render(someData) {
    const root = document.getElementById('root')
    root.append(
        App(someData)   // application
    )
}

render(data)