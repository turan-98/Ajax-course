document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        loadPage(el);
        var $activeTab = document.activeElement;
        changeClass($activeTab);
    }
})
async function loadPage(elem) {
    try{
        const href = elem.getAttribute('href');
        const response = await fetch(href);
        
        if(response.status !== 200) throw new Error('ERROR 404 NOT FOUND')
        
        const html = await response.text();
        loadResult(html);
    }catch(ex){
        console.log(ex)
    }
}
function loadResult(response) {
    const result = document.querySelector('.result');
    result.innerHTML = response;
}

function changeClass(el){
    var tabOne = document.querySelector("#linkOne");
    var tabTwo = document.querySelector("#linkTwo");
    var tabThree = document.querySelector("#linkThree");
    var tabs = el;

    tabs = tabs.toString();
    
    if(tabs.includes('indexPage1.html')){
        tabTwo.classList.add('active');
        tabOne.classList.remove('active');
        tabThree.classList.remove('active')
    }
    else if(tabs.includes('indexPage2.html')){
        tabThree.classList.add('active')
        tabTwo.classList.remove('active');
        tabOne.classList.remove('active');
    }
    else{
        tabOne.classList.add('active');
        tabThree.classList.remove('active')
        tabTwo.classList.remove('active');
    }
}

