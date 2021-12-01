import React from 'react';
import link from './link.png';
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
                                                        فتح حساب مغلق فى 
                                                        <br/>
                                                    <a href='/closedbankaccount_financialguarantor/fintiba_sutorbank'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> “fintiba“ Sutor bank
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor/bestbank'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a>  احسن بنك حاليا تفتح فيه
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor/currentbankaccount'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a>  فتح حساب جارى فى المانيا و تفعيل الحساب المغلق 
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor/financialguarantor'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> الضامن المالى فى ألمانيا
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor/more'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> هل الحساب البنكى مطلوب كل سنة ؟
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
