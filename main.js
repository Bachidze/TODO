const wre = document.querySelector('.wre')
const list = document.querySelector('.list')
const input = document.querySelector('input')
const form = document.querySelector('form')
const ol = document.querySelector('ol')
const round = document.createElement('round')
const cont = document.querySelector('.maincontainer')
const span = document.querySelector('span')
const h6 = document.querySelector('h6')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const h4 = document.querySelector('h4')
const h5 = document.querySelector('h5')
const h1 = document.querySelector('h1')
const moon = document.querySelector('.moon')
const sun = document.querySelector('.sun')
const header = document.querySelector('header')
const container2 = document.querySelector('.container2')
const maincontainer = document.querySelector('.maincontainer')
const container3 = document.querySelector('.container3')


let arr = JSON.parse(localStorage.getItem('todos')) ||  []
let id = 0


moon.classList.add('mode')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    arr.push({
        id:id,
        text:input.value,
    })
    id++
    span.textContent = id
    
    localStorage.setItem('todos',JSON.stringify(arr))
    
    showtodo(arr)
})



function showtodo(arr){
    ol.innerHTML = ''
    
    arr.forEach(el =>{
        let div = document.createElement('div')
        let round = document.createElement('round')
        let image = document.createElement('image')
        
        div.classList.add('resp')
        
        image.classList.add('cursor')
        
        div.classList.add('gio')
        
        
        image.addEventListener('click',()=>{
            div.style.display = 'none'
            span.textContent = id -= 1 
        })
        sun.addEventListener('click',()=>{
            lightclick()
        })
        
        moon.addEventListener('click',()=>{
            moonclick()
        })


        h6.addEventListener('click',()=>{
            div.style.display = 'none'
            span.textContent = '0'
        })
        
        div.style.display = 'flex'
        div.style.justifyContent = 'start'
        div.style.alignItems = 'center'
        div.style.gap = '10px'
        div.style.width = '327px'
        div.style.height = '48px'
        div.style.backgroundColor = 'white'
        div.style.borderRadius = '5px'
        div.style.wordBreak = 'break-all'
        div.style.borderBottom = '1px solid gray'
        
        
        
        round.style.width = '27px'
        round.style.height = '27px'
        round.style.border = '1px solid gray'
        round.style.borderRadius = '50%'
        round.style.marginLeft = '20px'
        round.style.marginRight = '14px'
        round.style.cursor = 'pointer'
        
        
        let li = document.createElement('li')
        
        
        
        li.textContent = el.text
        div.appendChild(round)
        div.appendChild(li)
        div.appendChild(image)
        ol.appendChild(div)
        h4.addEventListener('click',()=>{
            div.style.display = 'none'
            span.textContent = '0'
        })    
        
        
        
        h2.addEventListener('click',()=>{
            round.classList.toggle('round')
            li.classList.toggle('txt')
        })    

        round.addEventListener('click',()=>{
            round.classList.toggle('round')
            li.classList.toggle('txt')
        })    

        function moonclick(){
            document.body.style.backgroundColor = '#393A4B'
            moon.style.transform = 'rotate(360deg)'
            moon.style.transition = '1s'
            moon.style.display = 'none'
            moon.classList.add('moon1')
            sun.style.display = 'block'
            header.classList.add('dark')
            input.style.backgroundColor = '#25273D'
            input.classList.toggle('inputdark')
            container2.style.backgroundColor = '#25273D'
            div.style.backgroundColor = '#25273D'
            image.style.backgroundColor = '#25273D'
            li.style.color = 'white'
            maincontainer.style.backgroundColor = '#25273D'
            h6.style.color = 'white'
            span.style.color = 'white'
            h5.style.color = 'white'
            container3.style.backgroundColor = '#25273D'
            h2.style.color = 'white'
            h3.style.color = 'white'
            h4.style.color = 'white'
            h1.style.color = '#25273D'
        }

        function lightclick(){
            document.body.style.backgroundColor = '#9495A5'
            sun.style.display = 'none'
            moon.style.display = 'block'
            header.classList.add('light')
            input.style.backgroundColor = 'white'
            input.classList.toggle('inputlight')
            container2.style.backgroundColor = 'white'
            div.style.backgroundColor = 'white'
            image.style.backgroundColor = 'white'
            li.style.color = '#25273D'
            maincontainer.style.backgroundColor = 'white'
            h6.style.color = 'gray'
            span.style.color = 'gray'
            h5.style.color = 'gray'
            container3.style.backgroundColor = 'white'
            h2.style.color = 'grey'
            h3.style.color = 'grey'
            h4.style.color = 'grey'
            h1.style.color = 'white'
        }

    })    
}    

showtodo(arr)






    
    


