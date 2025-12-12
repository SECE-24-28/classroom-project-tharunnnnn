console.log("Process 1")
setTimeout(function(){
    console.log("Process 2")
    setTimeout(function(){
        console.log("Process 3")
        setTimeout(function(){
            console.log("Process 4")
        },1000)
    },2000)
},0)