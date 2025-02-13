interface GreetingProps{
    name:string
}

function Greeting({name}:GreetingProps){
    return <h2>Hi, {name}</h2>
}
export default Greeting