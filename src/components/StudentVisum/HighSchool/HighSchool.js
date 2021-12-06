import React from "react";
import './HighSchool.css';

class HighSchool extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-50-m w-50-l mw7 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className='legend center'>
                                <legend className="f1 fw6 ph0 mh0">شهادتك في الثانوية هتدرس بيها أيه</legend>
                            </div>
                            <hr/>

                            <div className="ui form ma0">
                                <div className="fields">
                                    <h3>
                                        ده شرح سريع بيعرف الواحد بشهادة الثانوية العامة بتاعته متاح يدرس ايه.... يا رب الفيديو يكون واضح و بسيط
                                        <br/>
                                        <a target='_blank' rel='noreferrer' href='https://www.facebook.com/100003344008216/videos/1129715000483289'>فيديو للشرح</a>
                                        <br/>
                                        <div className='lft'>
                                            <i>it's a big idea</i>
                                        </div>
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

export default HighSchool;
