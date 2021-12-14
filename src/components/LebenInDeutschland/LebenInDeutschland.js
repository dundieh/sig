import React from 'react';
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
                                                        بوست شامل عن الحياة في ألمانيا للطلاب
                                                    </a>
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/lebeninDeutschland/kosten'>
                                                        تكاليف المعيشة للطالب في ألمانيا 
                                                    </a>
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/lebeninDeutschland/stundentwork'>
                                                        الشغل للطلاب اثناء الدراسة فى المانيا
                                                    </a>
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/lebeninDeutschland/forgirls'>
                                                        فيديوهات للبنات في المانيا عن المعيشة
                                                    </a>
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/lebeninDeutschland/posts'>
                                                        سلسلة بوستات عن الحياة الواقعية في المانيا عامة
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

export default LebenInDeutschland;