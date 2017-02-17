import React from 'react'
import ImageDetail from './image_detail'

const ImageList = (props) => {
    if (!props.images) return <div>Loading...</div>
    console.log(props.images.filter(image => image.is_album === false));
    return (
        <ul className="media-list list-group">
            {props
                .images
                .filter(image => image.is_album === false)
                .map(image => <ImageDetail key={image.title} value={image}/>)}
        </ul>
    )
}

export default ImageList