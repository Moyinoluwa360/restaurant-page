export default function menuComponent(image){
    const MenuBody = document.createElement("div")
    const menuHeader = document.createElement("h4")
    menuHeader.textContent = "Kukas Menu"
    MenuBody.appendChild(menuHeader)
    MenuBody.setAttribute('id',"MenuBody")
    //
    for (let i=0; i < 4; i++){
        const menuBody = document.createElement("div")
        const menuItem = document.createElement("div")
        const JollofImg = document.createElement("img")
        //
        JollofImg.setAttribute("src",image)
        menuItem.setAttribute("id","menuItem")
        menuBody.setAttribute('id',"menuBody")

        const header = document.createElement("h3")
        const menu = document.createElement("div")
        //
        header.textContent = "Jollof Rice"
        menu.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis corrupti eum cupiditate debitis provident similique illo voluptatibus! Explicabo temporibus ea nobis numquam exercitationem? Fuga nobis nemo magnam. Similique, accusantium." + 
                                    "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                    "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" + 
                                    "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" 
        //
        menuItem.appendChild(header)
        menuItem.appendChild(menu)
        //
        menuBody.appendChild(JollofImg)
        menuBody.appendChild(menuItem)
        //
        MenuBody.appendChild(menuBody)
    }
    return MenuBody
}