import React from 'react'


function Villes (props) {
    const ville = props.ville
    let villesHtml=[]

    villesHtml = ville.map((ville, i) =>
    <div key={i} className='une-ville col-3.5'>
        <img src={ville.image} alt='image'/>
        <div className='villes-nom'>
            <p>{ville.titre}</p>
            {ville.button}
        </div>
    </div>
    )
    return villesHtml
}
export default Villes;