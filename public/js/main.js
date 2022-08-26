const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteThought)
})

Array.from(thumbText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

async function deleteThought(){
    const sThought = this.parentNode.childNodes[1].innerText
    const bSignoff = this.parentNode.childNodes[3].innerText
    // const tLikes = Number(this.parentNode.childNodes[7].innerText)
    try{
        const response = await fetch('deleteThought', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'thoughtS': sThought,
              'signoffS': bSignoff
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const sThought = this.parentNode.childNodes[1].innerText
    const bSignoff = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[7].innerText)
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'thoughtS': sThought,
              'signoffS': bSignoff,
              'likesS': tLikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}