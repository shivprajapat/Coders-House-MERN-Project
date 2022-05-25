import React, { useState } from 'react';
import { Card, TextInput, Button } from '../../../components/shared';
import styles from './stepOtp.module.css';
import { IconLockEmoji } from '../../../Assets/images';
const StepOtp = () => {
  const [otp, setOtp] = useState('');
  function submit() {
    console.log('Otp submit')
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card
          title="Enter the code we just texted you"
          icon={IconLockEmoji}
        >
          <TextInput
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <div className={styles.actionButtonWrap}>
            <Button onClick={submit} text="Next" />
          </div>
          <p className={styles.bottomParagraph}>
            By entering your number, you’re agreeing to our Terms of
            Service and Privacy Policy. Thanks!
          </p>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;