const tabs = document.querySelectorAll(".tab")

tabs.forEach(tab => {
    tab.addEventListener("click", function() {

        if(tab.classList.contains("selected")){
            return;
        }

        selectTab(tab)
        
        viewInfoTab(tab)

    })
})

function selectTab(tab) {
    const tabSelected = document.querySelector(".tab.selected")
    tabSelected.classList.remove("selected")
    
    tab.classList.add("selected")
}

function viewInfoTab(tab) {
    const infoSelected = document.querySelector(".info2.selected")
    infoSelected.classList.remove("selected")

    const idElementInfoTabs = `info-${tab.id}`

    const infoScreen = document.getElementById(idElementInfoTabs)
    infoScreen.classList.add("selected")
}