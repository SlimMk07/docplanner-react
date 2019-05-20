import React from 'react'


function Box (props) {
    const box = props.box
    let boxesHtml=[]

    boxesHtml = box.map((box, i) =>
    <div key={i} className={'one-box '+box.className}>
        <img src={box.image} alt='image' />
        <p>{box.titre}</p>
        <span className='disp'>{box.texte}</span>
    </div>
)
return boxesHtml
}

export default Box;
