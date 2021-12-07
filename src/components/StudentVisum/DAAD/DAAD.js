import React from "react";
import one from './pics/one.jpeg';
import two from './pics/two.jpeg';
import three from './pics/three.jpeg';
import four from './pics/four.jpeg';
import five from './pics/five.jpeg';
import './DAAD.css';

class DAAD extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-50-m w-50-l mw7 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className='legend center'>
                                <legend className="f1 fw6 ph0 mh0">شرح إستخدام موقع الدااد و البحث عن الجامعات ولغة الدراسة وطريقة مراسلة الجامعة</legend>
                            </div>
                            <hr/>

                            <div className="ui form ma0">
                                <div className="fields">
                                    <div class="row">
                                        <div class="column">
                                            <img alt='' width='500px' height='300px' src={one} />
                                            <img alt='' width='500px' height='300px' src={two} />
                                            <img alt='' width='500px' height='300px' src={three} />
                                            <img alt='' width='500px' height='300px' src={four} />
                                            <img alt='' width='500px' height='300px' src={five} />
                                        </div>
                                    </div>

                                    <hr/>
                                    <h3>
                                        <a target='_blank' rel='noreferrer' href='https://www.daad.de/en/'>DAAD</a>
                                        <br/>
                                        هي الهيئة الألمانية للتبادل العلمي و الثقافي و اللي من خلال موقعها تقدر تبحث عن البرامج الدراسية اللي بتدور عليها في ألمانيا
                                        <br/>
                                        أتبع الخطوات شئ فشئ علشان توصل لبحث دقيق
                                        <br/>
                                        ______________________________________
                                        <br/>
                                        <a target='_blank' rel='noreferrer' href='https://www.facebook.com/StreetsofGermany'>facebook.com/StreetsofGermany</a>
                                        <br/>
                                        ______________________________________
                                        <br/>
                                        <a target='_blank' rel='noreferrer' href='https://www.facebook.com/groups/311111149267612/posts/470177303360995/'>بوست كمان عن الدااد</a>
                                    </h3>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </main>
            </article>
        );
    }
}

export default DAAD;
