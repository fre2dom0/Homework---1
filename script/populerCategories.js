//Main Popular Categories
const cButton = document.getElementsByClassName("cButton");
const contents = document.getElementsByClassName("content")
let selected = [cButton[0]];
let notSelected = [cButton[1], cButton[2], cButton[3], cButton[4]]
for(let i = 0; i < cButton.length; i++){
    cButton[i].addEventListener("click", () => {
        if(notSelected.includes(cButton[i])){
            notSelected.push(selected[0])
            selected.pop()
            selected.push(cButton[i])
            notSelected.unshift(cButton[i])
        }
       
        notSelected.forEach(button => {
            button.classList.remove("activeB")
            button.classList.add("noActive")
        })

        selected.forEach(button => {
            button.classList.remove("noActive")
            button.classList.add("activeB")
        })

       
        for(let i = 0; i < contents.length; i++){
            if(selected[0].classList.contains("c1")){
                if(contents[i].classList.contains("content1")){
                    contents[i].classList.remove("d-none")
                } else{
                    contents[i].classList.add("d-none")
                }
            }   else if(selected[0].classList.contains("c2")){
                    if(contents[i].classList.contains("content2")){
                        contents[i].classList.remove("d-none")
                    } else {
                        contents[i].classList.add("d-none")
                    }
            }   else if(selected[0].classList.contains("c3")){
                    if(contents[i].classList.contains("content3")){
                        contents[i].classList.remove("d-none")
                    } else {
                        contents[i].classList.add("d-none")
                    }
            }   else if(selected[0].classList.contains("c4")){
                    if(contents[i].classList.contains("content4")){
                        contents[i].classList.remove("d-none")
                    } else {
                        contents[i].classList.add("d-none")
                    }
            }   else if(selected[0].classList.contains("c5")){
                    if(contents[i].classList.contains("content5")){
                        contents[i].classList.remove("d-none")
                    } else {
                        contents[i].classList.add("d-none")
                    }
            }   
        }
    

    })
}