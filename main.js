// let spisok = document.getElementById('spisok')
// let li = document.createElement('li')
// li.innerHTML = '4'
// spisok.appendChild(li)
// let block = document.getElementById('block')
// for(let c = 1; c<=100 ; c++){
//     let li = document.createElement('li')
//     li.innerHTML = c
//     block.appendChild(li)
// }
// let block = document.getElementById('block')
// for(let c = 1; c<=6 ; c++){
//     let div_new = document.createElement('div')
//     div_new.innerHTML = c
//     block.appendChild(div_new)
//     div_new.classList.add(`box_${c}`)
// }
let table = document.getElementById('tabol')
for(let c = 1; c<=18; c++){
    let rows = document.createElement('div')
    table.appendChild(rows)
    rows.classList.add(`yacheyka_${c}`)
    
}
let tds = document.querySelectorAll('div')
for(b = 0; b < tds.length; b++){
    tds[b].addEventListener('click', function fun(){
        let input = document.createElement('input')
        input.value = this.innerHTML
        this.innerHTML = ''
        this.appendChild(input)

        let new_el = this
        input.addEventListener('blur', function (){
            new_el.innerHTML = this.value
            new_el.addEventListener('click', fun)

            
        })
        this.removeEventListener('click', fun)
    })
}