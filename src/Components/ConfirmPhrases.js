function ConfirmPhrases() {
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
                        <h2 class="sub-header text-center">Write down your Secret <br></br>Recovery Phrase
                        </h2>
                        <h4 class="fw-size-2">Write down this 12-word Secret Recovery Phrase and save it in a place that you trust and only you can access..
                        </h4>
                    </div>



                    <div className="margin-bottom-8">
                        <h3 className="sub-header fw-size ">
                            How do I save my Secret Recovery Phrase?</h3>
                        <ul className="list  p-0 m-0">
                            <li className=" fw-normal font-li">
                                Save in a password manager

                            </li>
                            <li className=" fw-normal font-li">
                                Save in a password manager
                            </li>
                            <li className=" fw-normal font-li">

                                Write down and store in multiple secret places

                            </li>
                        </ul>

                    </div>
                    <div className="row border">
                        <div className="col-lg-4 d-flex ">
                            <label>1</label>
                            <input className="input-phrase" type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>2</label>
                            <input className="input-phrase" type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>3</label>
                            <input className="input-phrase" type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>4</label>
                            <input className="input-phrase" type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>5</label>
                            <input className="input-phrase" type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>6</label>
                            <input className="input-phrase" type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>7</label>
                            <input className="input-phrase" type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>8</label>
                            <input className="input-phrase" type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>9</label>
                            <input className="input-phrase" type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>10</label>
                            <input className="input-phrase" type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>11</label>
                            <input className="input-phrase" type="text"></input>
                        </div>
                        <div className="col-lg-4 d-flex ">
                            <label>12</label>
                            <input className="input-phrase" type="text"></input>
                        </div>

                    </div>
                    <div class="recovery-phrase__secret-blocker">
                        <div>
                        <i class="fa fa-eye margin-bottom-8"  aria-hidden="true"></i>
                        </div>
                 
                   <div>
                   <h6 class="mb-6">
                            Make sure nobody is looking</h6>
                   </div>
                       </div>
                     
                    <div class="secure-wallet-button pb-8">

                        <div className="col-lg-12 mm-box--margin-bottom-8 text-center">
                            <button className="secure-btn" >Reveal Secret Recovery Phrase</button>
                        </div>

                    </div>

                </div >
            </div >
        </>
    )
}
export default ConfirmPhrases;