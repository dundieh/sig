import React from "react";
import one from './one.jpeg';
import './Recog.css';

class Recog extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-50-m w-50-l mw7 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className='legend center'>
                                <legend className="f1 fw6 ph0 mh0">ازاى تعرف جامعتك معترفة في ألمانيا</legend>
                            </div>
                            <hr/>

                            <div className="ui form ma0">
                                <div className="fields">
                                <div class="row">
                                        <div class="column">
                                            <img alt='' width='800px' height='300px' src={one} />
                                        </div>
                                    </div>

                                    <hr/>
                                    <h3>
                                        الناس اللى عايزة تسافر على شغل او تدرس ماستر او تكمل بكالوريوس فلازم الاول تكون شهادتهم الجامعية تكون معتمدة فى المانيا 
                                        <br/>
                                        - يعنى اللى بيسافر على شغل لازم و هو بيقدم للسفارة لازم يقدم ورقة ان جامعته معترفة فى المانيا 
                                        <br/>
                                        - اللى بيسافر على ماستر لازم جامعته تكون معترفة فى المانيا 
                                        <br/>
                                        - اللى قضى سنة هنا فى مصر فى جامعة و عايز يسافر يكمل بكالوريوس فلازم جامعته تكون معترفة فى المانيا 
                                        <br/>
                                        والموقع الوحيد اللى بتعرف من عليه اذا كانت جامعتك معترفة فى المانيا والا لاء 
                                        <br/>
                                        هو موقع
                                        anabin
                                        <br/>
                                        و دى الطريقة
                                        <br/>
                                        هتدخل ع <a target='_blank' rel='noreferrer' href='http://anabin.kmk.org/no_cache/filter/institutionen.html'>الموقع</a> دة
                                        <br/>
                                        و هتعمل خطوات معينة زى ما موجودة فى الصورة تحت
                                        <br/>
                                        1= هتختار institutionen
                                        <br/>
                                        2= هتختار Suchen 
                                        <br/>
                                        3= هتختار الدولة اللى انت اخدت منها شهادة الجامعة / المعهد
                                        <br/>
                                        4= هتختار اسم المدينة اللى فيها الجامعة / المعهد و يفضل متختارتش اسم المدينة 
                                        <br/>
                                        5= هتختار نوع الجامعة بتاعتك " جامعة حكومية او خاصة او معهد او ... "  يفضل برضه متختارش حاجة 
                                        <br/>
                                        ....
                                        <br/>
                                        لما تنتهى من الحاجات دى هتظهرلك قايمة بأسامى الجامعات 
                                        <br/>
                                        مثلا زى
                                        <br/>
                                        6= اسم جامعة الزقازيق   " الجامعات مترتبة ترتيب ابجدى يعنى حاول تعرف اسم  الجامعة اللى انت فيها كويس " و اضغط على علامة + هتعرف معلومات اكتر 
                                        <br/>
                                        و هتروح تشوف ايه الرمز الموجود قصادها
                                        <br/>
                                        زى ما فى رقم 7
                                        <br/>
                                        و هيبقا فيه 3 حاجات 
                                        <br/>
                                        H+ == يعنى الجامعة معترفة فى ألمانيا
                                        <br/>
                                        H- == يعنى الجامعة مش معترفة فى ألمانيا
                                        <br/>
                                        H+/- == يعنى الجامعة مش معروفة معترف بيها والا لاء
                                        <br/>
                                        ______________________________________
                                        <br/>
                                        - لو الجامعة/المعهد اللى انت فيه معترفة فكدة شهادتك معترفة
                                        <br/>
                                        لان فى بعض الجامعات لو اختارتها فمبتظهرش كل الاقسام او كل الكليات
                                        <br/>
                                        مثلا فى العاشر و قسم ميكانيكا و على موقع انبيان قسم مدنى بس 
                                        <br/>
                                        بس الاقسام كلها معترفة فى المانيا
                                        <br/>
                                        لو فيه اى جامعة مش موجودة على موقع انبيان او لو حد عايز يستفسر عن حاجة فيحاول يبعتلهم ميل و يسألهم و دة <a target='_blank' rel='noreferrer' href='https://anabin.kmk.org/no_cache/service/kontakt/kontaktformular-fuer-allgemeine-auskuenfte.html'>الميل</a> بتاعهم
                                        <br/>
                                        تعديل: <a target='_blank' rel='noreferrer' href='https://www.facebook.com/groups/311111149267612/permalink/480313555680703/'>طريقة جديدة</a> لاضافة معهدك على الموقع
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

export default Recog;
