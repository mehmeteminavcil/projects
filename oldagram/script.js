import {posts} from './data.js'

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

