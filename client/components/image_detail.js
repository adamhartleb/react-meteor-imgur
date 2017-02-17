import React from 'react'
import ImageScore from './image_score'

const ImageDetail = (props) => {
    return (
        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.value.link}/>
            </div>
            <div className="media-body">
                <h4 className="media-heading">
                    {props.value.title}
                </h4>
                <ImageScore ups={props.value.ups} downs={props.value.downs} />
            </div>
        </li>
    )
}

export default ImageDetail