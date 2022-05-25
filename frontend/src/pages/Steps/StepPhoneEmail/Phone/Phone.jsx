import React, { useState } from 'react'
import { Card, TextInput, Button } from '../../../../components/shared';

import styles from '../stepPhoneEmail.module.css';
import { IconPhone } from '../../../../Assets/images';

const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <Card title="Enter you phone number" icon={IconPhone}>
            <TextInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={onNext} />
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