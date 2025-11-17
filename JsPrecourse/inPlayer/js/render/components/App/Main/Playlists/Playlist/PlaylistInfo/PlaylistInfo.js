import { ButtonsEditDelete } from "../../../../common/ButtonsEditDelete/ButtonsEditDelete.js"

export function PlaylistInfo(somePlaylistInfo){
    const {coverImgUrl, title, tracksCount } = somePlaylistInfo
    
    const container = document.createElement('div')
    container.classList.add('playlist-info')

    const img  = document.createElement('img')
    img.classList.add('playlist-cover-image')
    // img.src = playlistInfo.coverImgUrl
    img.src = coverImgUrl

    const wrapper = document.createElement('div')

    const titleElement = document.createElement('h2')
    titleElement.classList.add('title')
    // titleElement.innerText = playlistInfo.title
    titleElement.innerText = title

    const tracksCountElement = document.createElement('div')
    tracksCountElement.classList.add('tracks-count')
    // tracksCountElement.innerText = playlistInfo.tracksCount + ' tracks'
    tracksCountElement.innerText = tracksCount + ' tracks'

    wrapper.append(titleElement, tracksCountElement)

    // ButtonsEditDelete
    // const buttonsContainer = document.createElement('div')
    // buttonsContainer.classList.add('buttons-container')
    
    // const editBtn = document.createElement('button')
    // const editBtnImg = document.createElement('img')
    // editBtnImg.src = 'img/icons/edit.svg'
    // editBtn.append(editBtnImg)

    // const delBtn = document.createElement('button')
    // const delBtnImg = document.createElement('img')
    // delBtnImg.src = 'img/icons/basket.svg'
    // delBtn.append(delBtnImg)

    // buttonsContainer.append(
    //     editBtn,
    //     delBtn
    // )

    container.append(img, wrapper, ButtonsEditDelete())
    // функцию ButtonsEditDelete вызвали здесь и импортировали из common
    // можно было еще вызвать buttonsContainer из кода выше, или написать выше:
    // const buttonsContainer = ButtonsEditDelete(), и тогда вызвать вновь ButtonsEditDelete(),
    // то есть вызвать из common

    return container
}