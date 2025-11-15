const Social = () => {
    return (
        <div className='home-social'>
            {/* <a href="https://www.instagram.com/casianalexander" className="home-social-icon" target={"_blank"} rel="noreferrer">
            <i className="bi bi-instagram social-icon-badge"></i>
            </a> */}
            <a
                href='https://www.linkedin.com/in/alex-g-990137100/'
                className='home-social-icon'
                target={'_blank'}
                rel='noreferrer'
            >
                <i className='bi bi-linkedin social-icon-badge'></i>
            </a>
            {/* <a
                href='https://twitter.com/agworksbox'
                className='home-social-icon'
                target={'_blank'}
                rel='noreferrer'
            >
                <i className='bi bi-twitter-x social-icon-badge'></i>
            </a> */}
            <a
                href='https://github.com/agworkgit'
                className='home-social-icon'
                target={'_blank'}
                rel='noreferrer'
            >
                <i className='bi bi-github social-icon-badge'></i>
            </a>
        </div>
    );
};

export default Social;
