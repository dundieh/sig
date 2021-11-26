import React from 'react';
import link from './link.png';
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
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> فيزا الدراسة
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/closedbankaccount_financialguarantor'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> الحساب المغلق و الضامن
                                                </h1>
                                               
                                                <hr/>
                                                <h1>
                                                    <a href='/motivationletter'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> الموتفيشن ليتر
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/travelpermit_missions_armypostponement'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> تصريح السفر و البعثات و تأجيل الجيش
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/sprache'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> اللغة
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/embassyinterview'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> انترفيو السفارة
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/scholarships'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> المنح
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/lebenindeutschland'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> الحياة فى ألمانيا
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/arbeitsvisum'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> فيزا العمل
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/wiedervereinigungsvisum'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> فيزا لم الشمل
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/aupair'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> Aupair
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/ausbildung'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> التدريب المهنى" الأوسبيلدونج"
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
