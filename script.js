let accordions = document.querySelectorAll(".accordion");
for (let accordion of accordions) {
    function foldAll(){
        let accordionItems = accordion.querySelectorAll(".accordion-item")
        for (let accordionItem of accordionItems) {
            let accordionItemContent = accordionItem.querySelector(".accordion-item__content")
            accordionItemContent.classList.remove("fold")
        }
    }
    accordion.onclick = ()=>{
        foldAll()
    }
    let accordionItems = accordion.querySelectorAll(".accordion-item")
    for (let accordionItem of accordionItems) {
        let accordionItemBtn = accordionItem.querySelector(".accordion-item__btn")
        accordionItemBtn.onclick = (e)=>{
            foldAll()
            e.target.nextElementSibling.classList.toggle("fold")
            e.stopPropagation()
        }
    }
}
