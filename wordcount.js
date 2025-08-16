const inputs=document.querySelector("#text")
const counters=document.querySelector("#count")
const space=document.querySelector("#space")
let total_space=50
inputs.addEventListener("input",()=>{
    counters.innerHTML=`total word cound:${inputs.value.length}`
   
})
inputs.addEventListener("input",()=>{
      space.innerHTML=`Total space:${Math.abs(inputs.value.length-total_space)}`
    
})
