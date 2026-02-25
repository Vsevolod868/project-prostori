const body=document.body
const nav=document.querySelector('.nav')
const icon=document.querySelector('i')
const text=document.querySelector('.theme-text')
const a=document.querySelector('.a')
const div=document.querySelector('.div')
const slide_title=document.querySelector('.slide-title')
const slide_description=document.querySelector('.slide-description')

const themeBtn=document.getElementById('themeToggle')

themeBtn.addEventListener('click', function(){
    body.classList.toggle('dark-theme');
    nav.classList.toggle('dark-theme');
    themeBtn.classList.toggle('dark-theme');
    a.classList.toggle('dark-theme');
    div.classList.toggle('dark-theme');
    slide_title.classList.toggle('dark-theme');
    slide_description.classList.toggle('dark-theme');
    
    if(body.classList.contains('dark-theme')){
        text.textContent = '☀'
    } else{
        text.textContent = '☾'
    }
}
)