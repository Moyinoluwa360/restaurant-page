import "./style.css"
import jollof from "./jollof.jpg"
import menuComponent from "./menu.js"
import aboutComponent from "./about.js"
function homeComponents(){
    const contentBody = document.createElement("div")
    contentBody.setAttribute('id',"contentBody")

    const header = document.createElement("h3")
    const welcomeNote = document.createElement("div")
    //
    header.textContent = "Welcome To Kukas"
    welcomeNote.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis corrupti eum cupiditate debitis provident similique illo voluptatibus! Explicabo temporibus ea nobis numquam exercitationem? Fuga nobis nemo magnam. Similique, accusantium." + 
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" + 
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" +
                                "\n" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto excepturi consectetur earum omnis sint expedita harum dicta est. Saepe natus eveniet sint id consequatur harum, facilis a voluptate optio?" 
    //
    contentBody.appendChild(header)
    contentBody.appendChild(welcomeNote)
    return contentBody
}

const content = document.querySelector("#content")
content.appendChild(aboutComponent())