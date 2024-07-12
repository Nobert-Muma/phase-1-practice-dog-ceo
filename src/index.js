console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded",()=>{
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response=>response.json())
    .then(data=>{
        const images=document.getElementById("dog-image-container");
        data.message.forEach(imageUrl=>{
            const image=document.createElement("img");
            image.setAttribute("src",imageUrl);
            image.setAttribute("alt","Random Dog Image");
            images.append(image);
        })
        //console.log(data)
    })
    .catch(error=>console.error(error.message))

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response=>response.json())
    .then(data=>{
        const ulImg=document.getElementById("dog-breeds");
        Object.entries(data.message).forEach(([breedName, subBreeds])=>{
        const breedListItem=document.createElement("li");
        breedListItem.addEventListener("click", ()=>{
            breedListItem.style.backgroundColor="indigo"
        })
        breedListItem.textContent=breedName;     
        if(subBreeds.length>0){
            const subBreedList=document.createElement("ul");
            subBreedList.textContent="Sub-breeds:";
            subBreeds.forEach(subBreed=>{
                const subBreedListItem=document.createElement("li");
                subBreedListItem.textContent=subBreed;
                subBreedList.appendChild(subBreedListItem);
            });
            breedListItem.appendChild(subBreedList);
        }
        ulImg.appendChild(breedListItem);       
        });
    })    
    .catch(error=>console.error(error))
})
