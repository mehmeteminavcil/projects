const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        postImg: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        comment: "just took a few mushrooms lol",
        likes: 152
    },
       {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1600",
        postImg: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
        postImg: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1600",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
    ,
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        
        avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
        postImg: "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=400",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
    ,
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        
        avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
        postImg: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
    ,
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        
        avatar: "https://images.pexels.com/photos/13452647/pexels-photo-13452647.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        postImg: "https://images.pexels.com/photos/9828302/pexels-photo-9828302.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }

    
   
]






const root = document.querySelector("#root") 

for(const i in posts){
    root.innerHTML += `
         <div class="post">
             <div class="post--header">
                 <img class="profile--img" src=${posts[i].avatar} alt="">
                 <div class="post--owner">
                     <h1>${posts[i].name}</h1>
                     <p>${posts[i].location}</p>
                 </div>
             </div>
    
             <img class="post--img" src=${posts[i].postImg} alt="">
        
             <div class="post--action_btn">
                 <button class="like-btn">
                   </button>
                 <button>
                     <img src="./img/comment.svg"
                 </button>   
                 <button>
                     <img src="./img/share.svg"
                 </button>                         
              </div>
             <p class="post--like_counter">${posts[i].likes} likes</p>
             <p class="post--comment"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
         </div>`

         
}


const likeCounter = document.querySelectorAll('.post--like_counter')
const likeBtns = document.querySelectorAll('.like-btn')


//at the moment, i don't know how to do this properly

for(let i=0; i < posts.length ;i++){
    console.log(posts[i].likes)
    likeBtns.forEach(item=>{

        
        item.addEventListener('click' ,()=> {
            // item.classList.toggle("active")
            item.classList.add("active")
            console.log(item) 
            posts[i].likes +=1 
            console.log("clicked")        

            likeCounter.forEach( x =>{
                x.textContent = `${posts[i].likes} likes`
            })
            console.log(posts[i].likes)
        })
    })

}

