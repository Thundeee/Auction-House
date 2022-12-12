import * as calls from '../../api/apiCalls.js'

if (window.location.pathname == "/create.html" || window.location.pathname == "/Auction-House/create.html") {

    const auctionCreateForm = document.querySelector('.createForm')

    const mediaFields = document.querySelector('.mediaLine')
    let media = [];


//image handler
let image = auctionCreateForm.elements.media

image.addEventListener('input', () => {
    if (image.value.match(/.*\.(jpeg|jpg|gif|png)/i)) {
        let field  = document.createElement('input')
        field.setAttribute('type', 'text')
        field.setAttribute('disabled', 'true')
        field.setAttribute('value', image.value)
        field.setAttribute('class', 'form-control')
        field.setAttribute('class', 'col-10')
        media.push(image.value);
        let removeButton = document.createElement('button')
        removeButton.setAttribute('type', 'button')
        removeButton.setAttribute('class', 'btn-close')
        removeButton.setAttribute('aria-label', 'remove Image')
        removeButton.addEventListener('click', () => {
            field.remove()
            removeButton.remove()
            media = media.filter((item) => item != field.value)

        })
        auctionCreateForm.elements.media.value = "";
        mediaFields.appendChild(field)
        mediaFields.appendChild(removeButton)
    }
})


    let auctionCreateHandler = auctionCreateForm.addEventListener('submit', async (e) => {



        e.preventDefault()

        


//api handler

        const title = auctionCreateForm.elements.title.value
        const description = auctionCreateForm.elements.description.value
        const endDate = auctionCreateForm.elements.endsAt.value

        const dato = new Date(endDate)
        if (dato.getTime() < new Date().getTime()) {
            document.querySelector(".errorResponseCreate").innerHTML = ("Please select a date in the future")
            return;
        }
            

        
       await calls.createListing(title, description, media, endDate)
      })

}





