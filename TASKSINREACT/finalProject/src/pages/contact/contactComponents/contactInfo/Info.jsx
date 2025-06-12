import React from 'react'
import './infoStyle/info.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
  return (
    <div>
      <div className="info_table">
        <div className="info_table_items">
        <div className="info_table_items_about">
            <div className="info_table_items_about_title"><h3>Information About us</h3></div>
            <div className="info_table_items_about_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p></div>
            <div className="info_table_items_about_imgs">
            <FontAwesomeIcon icon={faCircle}  />
            <FontAwesomeIcon icon={faCircle}  />
            <FontAwesomeIcon icon={faCircle}  />
            </div>
        </div>
        <div className="info_table_items_contact">
      <div className="info_table_items_contact_title"><h3>Contact Way</h3></div>
      <ul className="info_table_items_contact_menu">
        <li className="info_table_items_contact_menu_punct">
          <FontAwesomeIcon icon={faCircle} style={{ color: '#5726DF' }} />
          <div className="info_table_contact_menu_punct_text">
            <p>Tel: 877-67-88-99</p>
            <p>E-Mail: shop@store.com</p>
          </div>
        </li>
        <li className="info_table_items_contact_menu_punct">
          <FontAwesomeIcon icon={faCircle} style={{ color: '#FB2E86' }} />
          <div className="info_table_contact_menu_punct_text">
            <p>Support Forum</p>
            <p>For over 24hr</p>
          </div>
        </li>
        <li className="info_table_items_contact_menu_punct">
          <FontAwesomeIcon icon={faCircle} style={{ color: '#FFB265' }} />
          <div className="info_table_contact_menu_punct_text">
            <p>20 Margaret st, London</p>
            <p>Great britain, 3NM98-LK</p>
          </div>
        </li>
        <li className="info_table_items_contact_menu_punct">
          <FontAwesomeIcon icon={faCircle} style={{ color: '#1BE982' }}/>
          <div className="info_table_contact_menu_punct_text">
            <p>Free standard shipping</p>
            <p>on all orders.</p>
          </div>
        </li>
      </ul>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Info
