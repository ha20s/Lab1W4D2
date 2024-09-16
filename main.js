let url = "https://fakestoreapi.com/products"
let container = document.getElementById("container")

fetch(url)
.then(res => res.json())
.then((data) => {

    data.map(item =>{
        let itemContainer = document.createElement("div");
        let title = document.createElement("p");
        let img = document.createElement("img")
        let price = document.createElement("p")

        price.textContent = item.price + "SR"
        title.textContent = item.title
        img.src = item.image

        itemContainer.style.width = "40vh"
        itemContainer.style.height = "40vh"
        itemContainer.style.boxShadow = "0rem 1rem 1rem gray"
        itemContainer.style.borderRadius = "25px"
        // itemContainer.style.padding = "1rem"
        itemContainer.style.display = "flex"
        itemContainer.style.flexDirection = "column"
        itemContainer.style.alignItems= "center"
    
        // itemContainer.style.gridTemplateRows = "1fr"


        img.style.width = "20vh"
        img.style.height = "20vh"
        img.style.padding = "1rem"

        title.style.fontWeight = "bold"
        title.style.padding = "1rem"

        container.style.display = "flex"
        container.style.flexWrap = "wrap"
        // container.style.alignItems = "center"
        // container.style.justifyContent = "space-around"
        container.style.gap = "2rem"
        container.style.padding= "1rem"

        container.appendChild(itemContainer)
        itemContainer.appendChild(title)
        itemContainer.appendChild(img)
        itemContainer.appendChild(price)

    } )
}
)