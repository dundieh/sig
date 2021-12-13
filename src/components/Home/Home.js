import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-100-m w-100-l mw6 shadow-5 center">
                    <main className="pa2 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 rgt">
                                <legend className="legend f1 fw6 ph0 mh0">الدراسة في المانيا</legend>

                                <div className="ui form mt4">
                                    <div className="fields">
                                        <div className="field rgt">
                                            <p>
                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum'>
                                                        فيزا الدراسة
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor'>
                                                        الحساب المغلق و الضامن
                                                    </a>
                                                </h1>
                                               
                                                <hr/>
                                                <h1>
                                                    <a href='/motivationletter'>
                                                        الموتفيشن ليتر
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/travelpermit_missions_armypostponement'>
                                                        تصريح السفر و البعثات و تأجيل الجيش
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/sprache'>
                                                        اللغة
                                                    </a>
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/embassyinterview'>
                                                        انترفيو السفارة
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/scholarships'>
                                                        المنح
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/lebeninDeutschland'>
                                                        الحياة فى ألمانيا
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/arbeitsvisum'>
                                                        فيزا العمل
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/wiedervereinigungsvisum'>
                                                        فيزا لم الشمل
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/aupair'>
                                                        Aupair
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/ausbildung'>
                                                        التدريب المهنى" الأوسبيلدونج"
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

export default Home;
