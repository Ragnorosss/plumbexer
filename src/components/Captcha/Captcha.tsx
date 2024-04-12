import Script from 'next/script';

const Captcha = () => {
    return (
        <Script
            src={'https://www.google.com/recaptcha/enterprise.js?render=6LdSKbkpAAAAACFhtMKXNOKmgnpyv8ySp4iTj7m1'}
            strategy="afterInteractive"
        />
    );
};

export default Captcha;