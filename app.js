var input_text = document.getElementById("additem")
var mainList = document.getElementById("main_list")


function addItems() {

    var list_item = document.createElement("li")
    var list_text = document.createTextNode(input_text.value)
    var list_length = list_text.length


    list_item.setAttribute("id", "listtext")

    list_item.appendChild(list_text)

    

    var edit_btn = document.createElement("i")
    edit_btn.setAttribute("class", "fas fa-edit")

    edit_btn.setAttribute("src", "download (2).png")

    edit_btn.setAttribute("id", "item_btn2")
    edit_btn.setAttribute("onclick", "editThis(this)")

    list_item.appendChild(edit_btn)

    mainList.appendChild(list_item)

    var delete_btn = document.createElement("i")

    delete_btn.setAttribute("id", "imagess")
    delete_btn.setAttribute("class", "far fa-trash-alt")
    delete_btn.setAttribute("src", "download.png")
    delete_btn.setAttribute("onclick", "DeletThis(this)")

    list_item.appendChild(delete_btn)
    input_text.value = ""
    var brr = document.createElement("br")
    list_item.appendChild(brr)

}

function DeletThis(dlt) {
    dlt.parentNode.remove()
}

function editThis(edit) {
 
   var newValue=prompt("What You Want To Edit?")
    edit.parentNode.firstChild.nodeValue = newValue
    console.log(newValue)

}

function dltAll() {
    mainList.innerHTML = ""
}