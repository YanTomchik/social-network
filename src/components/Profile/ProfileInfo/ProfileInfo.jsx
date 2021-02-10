import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://static.addtoany.com/images/dracaena-cinnabari.jpg" alt="image"></img>
            </div>
            <div className={s.descriptionBlock}>
                <h1>ava + decrituinhb</h1>
            </div>
        </div>

    )
}
export default ProfileInfo;