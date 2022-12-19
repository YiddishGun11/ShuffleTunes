import './NoPages.scss'

import {Link} from 'react-router-dom';

function NoPages(){
    return(
        <div className='no-page-main-div'>
            <div className='no-page-main-title'>
                <h1>Oops ! </h1>
                <h2>404 - Page not found</h2>
            </div>
            <div className='no-page-main-body'>
                <p>The page you are looking for seems not exist...</p>
                <button><Link to="/">Go back home</Link></button>
            </div>
        </div>
    )
}

export default NoPages;