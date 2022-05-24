import React, { useState } from 'react';
import { StepPhoneEmail, StepOtp, StepName, StepAvatar, StepUsername } from '../Steps';
const Register = () => {
    const [step, setStep] = useState(1);

    const steps = {
        1: StepPhoneEmail,
        2: StepOtp,
        3: StepName,
        4: StepAvatar,
        5: StepUsername,
    };
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return (
        <Step onNext={onNext} />
    )
}

export default Register