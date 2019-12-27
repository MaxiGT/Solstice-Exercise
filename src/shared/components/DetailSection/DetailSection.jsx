import React from 'react';
import './DetailSection.css'
import { sanitizePhoneNumber, transformDateFormat } from '../../utils/utils';

const DetailSection = ({ contact = { phone: [] } }) => {
  const objProps = Object.keys(contact.phone);

  return(
    <ul className="list-group list-group-flush">
      {
        objProps.sort((a, b) => a.localeCompare(b)).map((p, idx) => {
          return(
            <li key={idx} className={`phoneInfo_${p} list-group-item`}>
              <div className='col-12 label'>PHONE:</div>
              <div className='col-12'>
                <span className='listItem_mainProp'>
                  {sanitizePhoneNumber(contact.phone[p])}
                </span>
                <span className='phone_type'>
                  {p}
                </span>
              </div>
            </li>
          );
        })
      }
      {
        contact.address && (
          <li className='list-group-item'>
            <div className='col-12 label'>ADDRESS:</div>
            <div className='col-12'>
              <span className='listItem_mainProp'>
                <span>{contact.address.street}</span>
                <p>{contact.address.city}, {contact.address.state} {contact.address.zipCode}, {contact.address.country}</p>
              </span>
            </div>
          </li>
        )
      }
      {
        contact.birthdate && (
          <li className='list-group-item'>
            <div className='col-12 label'>BIRTHDATE:</div>
            <div className='col-12'>
              <span className='listItem_mainProp'>
                <span>{transformDateFormat(contact.birthdate)}</span>
              </span>
            </div>
          </li>
        )
      }
      {
        contact.emailAddress && (
          <li className='list-group-item'>
            <div className='col-12 label'>EMAIL:</div>
            <div className='col-12'>
              <span className='listItem_mainProp'>
                <span>{contact.emailAddress}</span>
              </span>
            </div>
          </li>
        )
      }
    </ul>
      
  );
}

export default DetailSection;