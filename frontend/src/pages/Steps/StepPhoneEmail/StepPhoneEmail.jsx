import React, { useState, Fragment } from 'react';
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from './stepPhoneEmail.module.css';
import { EmailWhite, PhoneWhite } from '../../../Assets/images';

const phoneEmailMap = {
  phone: Phone,
  email: Email
};

const StepPhoneEmail = ({ onNext }) => {
  const [type, setType] = useState('phone');
  const Component = phoneEmailMap[type];
  return (
    <Fragment>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrap}>
            <button
              className={`${styles.tabButton} ${type === 'phone' ? styles.active : ''
                }`}
              onClick={() => setType('phone')}
            >
              <img src={PhoneWhite} alt="phone" />
            </button>
            <button
              className={`${styles.tabButton} ${type === 'email' ? styles.active : ''
                }`}
              onClick={() => setType('email')}
            >
              <img src={EmailWhite} alt="email" />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </Fragment>
  );
};

export default StepPhoneEmail;