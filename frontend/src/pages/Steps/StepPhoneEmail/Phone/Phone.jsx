import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import styles from '../stepPhoneEmail.module.css';
import { PhoneRedIcon } from '../../../../Assets/images';
import TextInput from '../../../../components/shared/TextInput/TextInput';

const Phone = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <Card title="Enter you phone number" icon={PhoneRedIcon}>
            <TextInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" />
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    )
}

export default Phone