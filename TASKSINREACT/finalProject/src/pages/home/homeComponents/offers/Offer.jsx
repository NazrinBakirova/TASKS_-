import React from 'react'
import './offerStyle/offer.css'
import cashback from './imgs/cashback 1.png'
import group from './imgs/Group.png'
import hours from './imgs/hours.png'
import premium from './imgs/premium.png'

const Offer = () => {
  return (
    <div>
      <div className="offer_table">
        <div className="offer_table_items">
            <div className="offer_table_items_title"><h3>What Shopex Offer!</h3></div>
            <div className="offer_table_items_cards">
                <div className="offer_table_items_cards_card">
                    <div className="offer_table_items_cards_card_items">
                    <img src={group} alt='car img'/>
                    <h2>24/7 Support</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, accusamus.</p>
                    </div>
                    
                </div>
                <div className="offer_table_items_cards_card">
                <div className="offer_table_items_cards_card_items">
                    <img src={cashback} alt='cashback img'/>
                    <h2>24/7 Support</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, accusamus.</p>
                    </div>
                </div>
                <div className="offer_table_items_cards_card">
                <div className="offer_table_items_cards_card_items">
                    <img src={premium} alt='premium img'/>
                    <h2>24/7 Support</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, accusamus.</p>
                    </div>
                </div>
                <div className="offer_table_items_cards_card">
                <div className="offer_table_items_cards_card_items">
                    <img src={hours} alt='hours img'/>
                    <h2>24/7 Support</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, accusamus.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
