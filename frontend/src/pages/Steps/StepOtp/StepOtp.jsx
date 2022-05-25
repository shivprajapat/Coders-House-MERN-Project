import React, { useState } from 'react';
import Card from '../../../components/shared/Card/Card';
import TextInput from '../../../components/shared/TextInput/TextInput';
import Button from '../../../components/shared/Button/Button';
import styles from './stepOtp.module.css';
import { LockEmoji } from '../../../Assets/images';
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
          icon={LockEmoji}
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