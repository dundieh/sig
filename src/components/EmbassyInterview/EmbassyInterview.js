import React from 'react';
import link from './link.png';
import './EmbassyInterview.css';

class EmbassyInterview extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-100-m w-100-l mw6 shadow-5 center">
                    <main className="pa2 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 rgt">
                                <legend className="legend f1 fw6 ph0 mh0">انترفيو السفارة</legend>

                                <div className="ui form mt4">
                                    <div className="fields">
                                        <div className="field rgt">
                                            <hr/>
                                            <p>
                                                <h1>
                                                    <a href='/embassyinterview/details'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> شرح كامل لكيفية حجز ميعاد الانترفيو و كيفية إلغاء الميعاد
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/embassyinterview/FAQ'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> الاسئلة العامة لمقابلة السفارة و التجارب 
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

export default EmbassyInterview;
