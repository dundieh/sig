import React from 'react';
import link from './link.png';
import './LebenInDeutschland.css';

class LebenInDeutschland extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-100-m w-100-l mw6 shadow-5 center">
                    <main className="pa2 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 rgt">
                                <legend className="legend f1 fw6 ph0 mh0">الحياة فى المانيا</legend>

                                <div className="ui form mt4">
                                    <div className="fields">
                                        <div className="field rgt">
                                            <hr/>
                                            <p>
                                                <h1>
                                                    <a href='/lebeninDeutschland/general'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> بوست شامل عن الحياة في ألمانيا للطلاب
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/lebeninDeutschland/kosten'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> تكاليف المعيشة للطالب في ألمانيا 
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/lebeninDeutschland/stundentwork'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> الشغل للطلاب اثناء الدراسة فى المانيا 
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/lebeninDeutschland/forgirls'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> فيديوهات للبنات في المانيا عن المعيشة
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/lebeninDeutschland/posts'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> سلسلة بوستات عن الحياة الواقعية في المانيا عامة
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

export default LebenInDeutschland;