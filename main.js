const DATA = [
    {
        name: "Xudoyorxon saroyi",
        img: "https://pastvu.com/_p/d/i/j/p/ijpst3jnf4fg1spzze.jpg",
        region: "Fergana",
        costForChildren: 3000,
        cost: 10000
    },
    {
        name: "Registon saroyi",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Registan%2C_Samarkand%2C_Uzbekistan.JPG/800px-Registan%2C_Samarkand%2C_Uzbekistan.JPG",
        region: "Samarkand",
        costForChildren: 5000,
        cost: 20000
    },
    {
        name: "Ichanqala",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/15/3c/24/ce/ichan-qal-a.jpg",
        region: "Xiva",
        costForChildren: 1000,
        cost: 5000
    }
]


const regions = []
const names = []
const imgs = []

for(let item of DATA) {
    regions.push(item.region);
    names.push(item.name);
    imgs.push(item.img)
}


regions.forEach(elem =>{
    let optionViloyat = document.createElement('option')
    viloyat.appendChild(optionViloyat)
    optionViloyat.setAttribute('value', elem)
    optionViloyat.textContent = elem
})


viloyat.addEventListener('change', (event)=>{

    while(obida.options.length > 0) {
        obida.options.remove(0)
    }

    DATA.forEach( (item) => {
        if(event.target.value == item.region) {
            let option = document.createElement('option')
            option.value = item.name 
            option.textContent = item.name
            obida.appendChild(option) 
        }
    })
})

button.addEventListener('click', () => {

    divElement.textContent = ""

    DATA.forEach( (item) => {
        if(item.name == obida.value) {
            let newH2Element = document.createElement('h2')
            let newimgElement = document.createElement('img')

            let costForm = document.createElement('form')
            let inputChildren = document.createElement('input')
            let inputAdults = document.createElement('input')
            let pChildrenElement = document.createElement('p')
            let pAdultsElement = document.createElement('p')

            inputChildren.type = "number"
            inputAdults.type = "number"


            newH2Element.textContent = obida.value
            newimgElement.src = item.img

            costForm.appendChild(inputChildren)
            costForm.appendChild(inputAdults)

            costForm.addEventListener('keyup', (event) => {
                if(event.keyCode == 13) {
                    pChildrenElement.textContent = inputChildren.value * item.costForChildren
                    pAdultsElement.textContent = inputAdults.value * item.cost
                    
                }
            })

            divElement.appendChild(newH2Element)
            divElement.appendChild(newimgElement)
            divElement.appendChild(costForm)
            divElement.appendChild(pChildrenElement)
            divElement.appendChild(pAdultsElement)
        }
    })
})