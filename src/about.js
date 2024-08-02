export default function aboutComponent(){
    const aboutBody = document.createElement("div")
    aboutBody.setAttribute('id',"contentBody")

    const header = document.createElement("h3")
    const aboutNote = document.createElement("div")
    //
    header.textContent = "About Us"
    aboutNote.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis corrupti eum cupiditate debitis provident similique illo voluptatibus! Explicabo temporibus ea nobis numquam exercitationem? Fuga nobis nemo magnam. Similique, accusantium." + 
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" + 
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" 
    //
    aboutBody.appendChild(header)
    aboutBody.appendChild(aboutNote)
    return aboutBody
}