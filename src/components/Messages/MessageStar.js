import { Stars } from '../Misc/Icons'

import React from 'react'

const MessageStar = ({ starred, id, changeHandler }) =>
    <div className="col-xs-2">
        <i className={`star fa ${starred ? Stars.Starred : Stars.Unstarred}`} onClick={() => changeHandler({ids: [id], property: "starred", value: !starred})}></i>
    </div>

export default MessageStar

// onClick={changeHandler(id, "starred")}