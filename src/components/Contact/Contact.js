import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            Msg: ''
        }
    }
    
    setFullName = (event) => {
        this.setState({ fullName: event.target.value });
    }
    
    setEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    
    setMsg = (event) => {
        this.setState({ Msg: event.target.value });
    }
    
    sendEmail = () => {
        const { fullName, email, Msg } = this.state;
        const afterSend = document.querySelector('h2');
        
        if(!fullName || !email || !Msg) {
            return afterSend.innerHTML = 'please fill the required fields';
        }
    }

    render() {
        return(
            <div>
                <article className="article br3 ba b--black-10 w-100 w-50-m w-50-l mw6 shadow-5 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <form action="https://formspree.io/f/xyylrqbn" method="POST" enctype="multipart/form-data">
                                    <div className='legend center'>
                                        <legend className="f1 fw6 ph0 mh0">
                                            لحجز الاستشارة 
                                            <br/>
                                            ابعت هنا
                                        </legend>
                                    </div>
                                    <hr/>

                                    <div className="ui form mt4">
                                        <div className="fields">
                                            <div className="field">
                                                <label>* الاسم</label>
                                                <div class="input-group mb-3">
                                                    <input 
                                                    type="text"
                                                    name='fullname'
                                                    class="form-control"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    onChange={this.setFullName} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ui form">
                                        <div className="fields">
                                            <div className="field">
                                                <label>* البريد الالكتروني</label>
                                                <div class="input-group mb-3">
                                                    <input 
                                                    type="email"
                                                    name='email'
                                                    class="form-control"
                                                    aria-label="Default"
                                                    aria-describedby="inputGroup-sizing-default"
                                                    onChange={this.setEmail} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ui form">
                                        <div className="fields">
                                            <label>* الرسالة</label>
                                            <div class="input-group">
                                                <textarea onChange={this.setMsg} name='message' class="form-control" aria-label="Large"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="buton mt3">
                                        <button className='btn btn-primary' onClick={this.sendEmail}>ارسال</button>
                                    </div>
                                </form>
                            </fieldset>
                        </div>
                    </main>
                </article>
            </div>
        )
    }
}

export default Contact;
