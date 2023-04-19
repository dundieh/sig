import React from 'react';
import './About.css';

class About extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-50-m w-50-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 lft">
                            <div className='legend center'>
                                <legend className="f1 fw6 ph0 mh0">About us</legend>
                            </div>
                            <hr/>
                            <div className="ui form mt4">
                                <div className="fields">
                                    <p>
                                        Important Note! The information provided in this website
                                        <br/>
                                        is adapted from the famous facebook group for
                                        <br/>
                                        students in Germany called (<a target='_blank' rel="noreferrer" href='https://www.facebook.com/groups/311111149267612/permalink/318030751908985'>الدارسين في المانيا</a>)
                                    </p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </main>
            </article>
        );
    }
}

export default About;
