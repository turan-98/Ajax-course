document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        loadPage(el);
        var $activeTab = document.activeElement;
        console.log('teste ' + $activeTab)
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
