function loadCategories() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res .json())
    .then(data => displayCategories(data.categories));
}

function loadVideos () {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => diaplayVideos(data.videos))
}

const loadCategoryVideos = (id) => {
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    console.log(url);

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const clickedButton = document.getElementById(`btn-${id}`);
        clickedButton.classList.add("active")
        console.log(clickedButton);
        diaplayVideos(data.category);
    });
}





function displayCategories(categories) {
    const categoryContainer = document.getElementById('category_container');

    for(let cat of categories) {
        console.log(cat)

        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
       <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        categoryContainer.append(categoryDiv)
    }
}

const diaplayVideos = (videos) => {
    const videoContainer = document.getElementById("video_container");
    videoContainer.innerHTML = "";

    if(videos.length == 0) {
        videoContainer.innerHTML =  `
        <div class="col-span-full flex flex-col text-center justify-center items-center py-20">
                <img class="w-[250px] h-[250px] mb-8" src="Icon.png" alt="">
                <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>
        `
        return;
    }

    videos.forEach((video) => {
        console.log(video);

        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
        <div class="card bg-base-100">
                <figure class="relative">
                    <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
                    <span class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded">3hrs 56 min ago</span>
                </figure>
                <div class="flex gap-3 px-2 py-5">
                    <div class="profile">
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                              <img src="${video.authors[0].profile_picture}" />
                            </div>
                          </div>
                    </div>
                    <div class="intro">
                        
                            <h2 class="font-semibold text-sm">Midnight Serenade</h2>
                            <h2 class="text-gray-400 text-sm flex gap-2">${video.authors[0].profile_name}<img src="/verified.png" alt=""></h2>
                        
                        <p class="text-gray-400 text-sm">${video.others.views}</p>
                    </div>
                </div>
            </div>
        `
        videoContainer.append(videoCard)
    });
}



loadCategories()
