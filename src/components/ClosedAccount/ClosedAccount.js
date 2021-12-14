import React from 'react';
import './ClosedAccount.css';

class ClosedAccount extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-100-m w-100-l mw6 shadow-5 center">
                    <main className="pa2 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 rgt">
                                <legend className="legend f1 fw6 ph0 mh0">الحساب المغلق و الضامن</legend>

                                <div className="ui form mt4">
                                    <div className="fields">
                                        <div className="field rgt">
                                            <hr/>
                                            <p>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor/fintiba_sutorbank'>
                                                        فتح حساب مغلق فى 
                                                        <br/>
                                                        “fintiba“ Sutor bank
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor/bestbank'>
                                                        احسن بنك تفتح فيه بدون اقامه
                                                    </a>
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor/currentbankaccount'>
                                                        فتح حساب جارى فى المانيا و تفعيل الحساب المغلق
                                                    </a>
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor/refund'>
                                                        غلق الحساب و استرجاع الفلوس
                                                    </a>
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor/financialguarantor'>
                                                        الضامن المالى فى ألمانيا
                                                    </a>
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor/more'>
                                                        هل الحساب البنكى مطلوب كل سنة ؟
                                                    </a>
                                                </h1>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </main>
            </article>
        );
    }
}

export default ClosedAccount;
