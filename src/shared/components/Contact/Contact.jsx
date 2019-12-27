import React from 'react';
import defaultImg from "../../../assets/UserLarge.png";
import DetailSection from "../DetailSection/DetailSection";
import './Contact.css';

const Contact = ({ contact }) => {

  const contactImgUrl = contact.largeImageURL;
  const onErrorImgUrl = defaultImg;

  const onImgError = (ev) => {
    ev.target.src = onErrorImgUrl;
  }

  return(
      <div>
        <div className='col-8 offset-2'>
          <img onError={onImgError} className="card-img-top"
            style={{maxWidth: '250px'}} src={contactImgUrl} />
        </div>
        <div className="card-body" style={{paddingLeft: '0px', paddingRight: '0px'}}>
          <p className="card-text contact_name">{contact.name}</p>
          {
            contact.companyName && (
              <p className="card-text contact_companyName">{contact.companyName}</p>
            )
          }
          <DetailSection contact={contact}
             />
        </div>
      </div>
  );
}

export default Contact;