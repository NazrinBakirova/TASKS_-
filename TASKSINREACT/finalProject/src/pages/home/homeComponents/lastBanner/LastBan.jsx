import React from 'react'
import './lastBanStyle/lastBan.css'
import emblems from './imgs/image 1174.png'

const LastBan = () => {
  return (
    <div>
        <div className="last_banner">
      <div className="last_banner_table">
        <div className="last_banner_table_items">
            <div className="last_banner_table_items_title">
                <h2>Get Leatest Update By Subscribe
                    0ur Newslater</h2>
            </div>
            <div className="last_banner_table_items_button"><button>Shop Now</button></div>

        </div>
      
      </div>
      <div className="table_emblems"><img src={emblems}/></div>
      </div>
    </div>
  )
}

export default LastBan
