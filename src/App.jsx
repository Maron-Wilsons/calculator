import React from 'react'
import {useState} from 'react'
function App() {
const [calc, setCalc] = useState("")
const [result, setResult ] = useState("")

const ops = ['/', '*','+','-','.']
const updateCalc = value => {
if (ops.includes(value) &&  calc === '' ||
ops.includes(value) && ops.includes(calc.slice(-1)
)
) {
return
}setCalc(calc + value)

if(!ops.includes(value)) {
setResult(eval(calc + value).toString())
} 

setCalc(calc + value)
}
let creactApp = () => {
const digints = Array(  )
for(let i = 1; i< 10; i++){
digints.push(
<button key={i} onClick={() =>  updateCalc(i.toString(

))}>{i}</button>
)
}
return digints
}
const calculete = () => {
  setCalc(eval(calc).toString())
}
return(
<div className="App">
 <div className="calculator">
  <div className="display">
   {result ? <span>({result})</span> : ''} 
    
   {calc || "0"}
  </div>

  <div className="operators">
    <button onClick={() =>  updateCalc('-')}>-</button>
    <button onClick={() =>  updateCalc('+')}>+</button>
    
    <button onClick={() =>  updateCalc('*')}>*</button>
    <button onClick={() =>  updateCalc('/')}>/</button>
  
    <button>AC</button>
  </div>

  <div className="digints">
    {creactApp()}
    <button onClick={() =>  updateCalc('0')}>0</button>     
    <button onClick={() =>  updateCalc('.')}>.</button>
    <button onClick={calculete}>=</button>
  </div>
 </div>
</div>
)
}

export default App