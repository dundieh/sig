import React from 'react';
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
                                                        شرح كامل لكيفية حجز ميعاد الانترفيو و كيفية إلغاء الميعاد
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/embassyinterview/FAQ'>
                                                        الاسئلة العامة لمقابلة السفارة و التجارب 
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

export default EmbassyInterview;
