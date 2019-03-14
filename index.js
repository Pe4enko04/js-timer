let i = 0
let timer = 0
let start = ()=>{

    timer = setInterval(
        ()=>{
            i+=1
            document.getElementById('time').innerHTML=i


        },1000
    )
}

let pause = ()=>{
  clearInterval(timer);
}
let stop = ()=>{
    clearInterval(timer);
    i = 0
        document.getElementById('time').innerHTML=i
}
