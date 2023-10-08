import React from 'react'

const GoogleSignInButton = () => {
    return (
        <div className='google-button-container w-full flex justify-center'>
            <script src="https://accounts.google.com/gsi/client" async></script>
            <div id="g_id_onload"
                data-client_id="694293973203-nu8j16mgk2mnftla70u9eanv23f3ic51.apps.googleusercontent.com"
                data-login_uri="https://your.domain/your_login_endpoint"
                data-auto_prompt="false">
            </div>  
            <div className="g_id_signin"
                data-type="standard"
                data-size="large"
                data-theme="outline"
                data-text="sign_in_with"
                data-shape="rectangular"
                data-logo_alignment="left">
            </div>
        </div>
    )
}

export default GoogleSignInButton