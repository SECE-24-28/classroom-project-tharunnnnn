let res=fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
    return res.json()
}).then(post=>{
    console.log(post)
});