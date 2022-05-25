import React, { useState } from 'react'
import { Card, TextInput, Button } from '../../../../components/shared';

import styles from '../stepPhoneEmail.module.css';
import { IconEmailEmoji } from '../../../../Assets/images';

const Email = ({ onNext }) => {
    const [email, setEmail] = useState('');

    return (
        <Card title="Enter your email id" icon={IconEmailEmoji}>
            <TextInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default Email