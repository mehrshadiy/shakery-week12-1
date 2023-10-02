let accordions = document.querySelectorAll(".accordion");
for (let accordion of accordions) {
    let accordionItems = accordion.querySelectorAll(".accordion-item")
    function closeAll(){
        for (let accordionItem of accordionItems) {
            accordionItem.querySelector(".accordion-item__content").classList.remove("fold")
            let accordionItemContent = accordionItem.querySelector(".accordion-item__content")
            accordionItemContent.style.height="0px"
        }
    }
    for (let accordionItem of accordionItems) {
        let accordionItemBtn = accordionItem.querySelector(".accordion-item__btn")
        accordionItemBtn.onclick = (e)=>{
            if (e.target.value==="folded"){
                e.target.nextElementSibling.classList.remove("fold")
                e.target.value = ""
                e.target.nextElementSibling.style.height = "0px"
            }else {
                closeAll()
                e.target.nextElementSibling.classList.add("fold")
                e.target.value = "folded"
                e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight+"px"
            }
        }
    }
}