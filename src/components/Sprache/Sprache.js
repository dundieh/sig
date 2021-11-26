import React from 'react';
import link from './link.png';
import './Sprache.css';

class Sprache extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-100-m w-100-l mw6 shadow-5 center">
                    <main className="pa2 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 rgt">
                                <legend className="legend f1 fw6 ph0 mh0">اللغة</legend>

                                <div className="ui form mt4">
                                    <div className="fields">
                                        <div className="field rgt">
                                            <hr/>
                                            <p>
                                                <h1>
                                                    <a href='/sprache/zertifikat'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> حجز امتحانات شهادات اللغة الألمانية و الإنجليزية المعتمدة في مصر
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/sprache/wegzulernen'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> طرق تعلم اللغة الألمانية 
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

export default Sprache;
