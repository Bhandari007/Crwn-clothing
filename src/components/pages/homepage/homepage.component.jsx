import React from 'react';
import './homepage.styles.scss';
import Directory from '../../directory-items/directory-items.component';

export const HomePage = ()=>{
    return(
        <div className ='homepage' >
            <Directory/>             
        </div>
    );
}
export default HomePage; 