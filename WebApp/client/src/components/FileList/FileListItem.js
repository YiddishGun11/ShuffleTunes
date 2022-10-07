import React, { useState } from 'react'
import {AiOutlineHeart,AiTwotoneHeart} from 'react-icons/ai'

//redux
import {useDispatch} from 'react-redux'
import {setDisplay, setSong} from '../../reducers/musicReducer'


function FileListItem({item}){

    /*
    - Faire une requete axios pour envoyer le son en DB dans la bonne table (like)
    - enlever le son de la table avec une requete lors d'un (dislike) (TbMusic : (id, name, path))
    - conserver l'état des coeur grace aux sons renvoyés lors de la requete dans (Filelist)
    - utiliser Redux ?
    */

    const dispatch = useDispatch();

    const [liked, setLiked] = useState(false)

    const handleClick = () =>{
        liked? setLiked(false) : setLiked(true)
    }

    return(
        <div className='file-list-child'> 
            <p onClick={()=>{dispatch(setDisplay('open')); dispatch(setSong(item))}}>{item}</p>
            {liked?(
                <button onClick={() => {handleClick()}}> <AiTwotoneHeart className='file-list-child-icon' size={23}/> </button>
            ):
            (
                <button onClick={() => {handleClick()}}> <AiOutlineHeart className='file-list-child-icon' size={23}/> </button>
            )}
        </div>
    );
}

export default FileListItem;