document.querySelectorAll('.nav__marker').forEach(link =>{
    if(link.href === window.location.href){
        link.setAttribute('nav__marker', 'page')
    }
})