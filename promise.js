const posts = [
    {title: "Post One", body:"This is post one", createdAt: new Date().getTime()},
    {title: "Post Two", body:"This is post two", createdAt: new Date().getTime()},
]
let intervalId = 0;

function getPosts(){
    setTimeout( ()=>{
        let output = "";
        posts.forEach((post)=>{
            output+= `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000);
}

function creatPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post);
            let error = false;

            if(!error){
                resolve();
            }else{
                reject("Error: Something went wrong ")
            }
        },1000);
    });
}

function deletePost(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.pop();

            if(posts.length>0){
                resolve
            }else{
                reject("Error: No Posts Found")
            }
        },900)
    })
}
function updateLastActivityTime(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.createdAt =  new Date().getMinutes();
            document.body.innerHTML = `<ul> <li> ${(posts.createdAt)}</li></ul>`;
            resolve();
        },1001);
    });
}
// creat4Post({title:"Post Four", body:"This is post four"}, getPosts);

creatPost({title:"Post Three", body:"This is post three"})
creatPost({title:"Post Four", body:"This is post three"})
creatPost({title:"Post Five", body:"This is post three"}).then(getPosts).then(deletePost);