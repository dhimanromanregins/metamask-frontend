import { React, useState } from 'react';
// import { Link } from 'react-router-dom';

function CreatePassword() {
    return (
        <>
            <div class="main-wrap-content">
                <div class="parent-recovery">
                    <div className="box box--margin-bottom-4 box--flex-direction-row">
                        <ul className="progressbar"><li className="active">Create password</li>
                            <li className=" bar">Secure wallet</li>
                            <li className="bar">Confirm secret recovery phrase</li>
                        </ul>
                    </div>
                    <div class="main-wrapper">
                        <h2 class="sub-header text-center">Create password
                        </h2>
                        <h3 class=" text-center">This password will unlock your SSP wallet only on this device. MetaMask can not recover this password.
                        </h3>
                    </div>
                    <div className="container-fluid space-left">
                        <div className="row-space">
                            <div className=" col-md-10">
                                <div className="form-group form-change">
                                    <h4 className="username fw-bold sub-header">New password (8 characters min)</h4>
                                    <input id="username" className="form-control" type="text" />
                                    <p className="error-text"></p>
                                </div>
                            </div>
                            <div className=" col-md-10">
                                <div className="form-group form-change">
                                    <h4 className="password sub-header fw-bold">Confirm password </h4>
                                    {/* <span className="show-hide-password">Show</span> */}
                                    <input id="password" className="form-control" type="password" />
                                    <p className="error-text"></p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="wrapper-one">
                        <form>
                            <div className="terms-use-one">
                                <input type="checkbox" /> <h6 className='font-li fw-normal'>I understand that MetaMask cannot <br></br>recover this password for me. Learn more</h6>
                            </div>

                            <div class="secure-wallet-button pb-8">

<div className="col-lg-12 mm-box--margin-bottom-8 text-center">
    <button className="secure-btn" >Reveal Secret Recovery Phrase</button>
</div>

</div>
                        </form>
                    </div>


                </div >
            </div >
        </>

    );

}
export default CreatePassword;