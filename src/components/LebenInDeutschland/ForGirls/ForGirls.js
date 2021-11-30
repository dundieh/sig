import React from "react";
import './ForGirls.css';

class ForGirls extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-50-m w-50-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className='legend center'>
                                <legend className="f1 fw6 ph0 mh0">فيديوهات للبنات في المانيا عن المعيشة</legend>
                            </div>
                            <hr/>

                            <div className="ui form ma0">
                                <div className="fields">
                                    <h3>
                                        تجارب للبنات موجودين حاليا في المانيا دي تجميعه لتلات تجارب من الناس اللي موجوده بالفعل ودي فيديوهات بتحكي عن تجربتهم
                                        <br/>
                                        <a target='_blank' rel='noreferrer' href='https://youtu.be/drU0asT2ilU'>أحمد سمير مع ندى بسيونى</a>
                                        <br/>
                                        <a target='_blank' rel='noreferrer' href='https://youtu.be/1MEgBgN0N_g'>عبدالله حسن مع نور هاشم</a>
                                        <br/>
                                        <a target='_blank' rel='noreferrer' href='https://youtu.be/oTEr9C8Ph0M'>DW حلقة  آلاء أبو جاسر من غزة  مع قناة</a>
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

export default ForGirls;