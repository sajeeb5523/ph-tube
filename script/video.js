// function loadVideos () {
//     fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
//     .then(res => res.json())
//     .then(data => diaplayVideos(data.videos))
// }

// const loadCategories = (id) => {
//     console.log(id)
// }


// const diaplayVideos = (videos) => {
//     const videoContainer = document.getElementById("video_container");
//     videos.forEach((video) => {
//         console.log(video);

//         const videoCard = document.createElement("div");
//         videoCard.innerHTML = `
//         <div class="card bg-base-100">
//                 <figure class="relative">
//                     <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
//                     <span class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded">3hrs 56 min ago</span>
//                 </figure>
//                 <div class="flex gap-3 px-2 py-5">
//                     <div class="profile">
//                         <div class="avatar">
//                             <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
//                               <img src="${video.authors[0].profile_picture}" />
//                             </div>
//                           </div>
//                     </div>
//                     <div class="intro">
                        
//                             <h2 class="font-semibold text-sm">Midnight Serenade</h2>
//                             <h2 class="text-gray-400 text-sm flex gap-2">${video.authors[0].profile_name}<img src="/verified.png" alt=""></h2>
                        
//                         <p class="text-gray-400 text-sm">${video.others.views}</p>
//                     </div>
//                 </div>
//             </div>
//         `
//         videoContainer.append(videoCard)
//     });
// }

