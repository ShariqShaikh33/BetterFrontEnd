import React from 'react'

function Sample2() {
    const photo={
        "url":"https://picsum.photos/300",
        "text":"Sample image 300x300",
        "btn":"Refresh image"
    }
  return (
    <div>
        <img src={photo.url} alt={photo.text}/>
        <form>
            <button type='submit'>{photo.btn}</button>
        </form>
    </div>
  )
}

export default Sample2