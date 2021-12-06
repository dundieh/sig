import React from 'react';
import link from './link.png';
import './StudentVisum.css';

class StudentVisum extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-100-m w-100-l mw6 shadow-5 center">
                    <main className="pa2 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 rgt">
                                <legend className="legend f1 fw6 ph0 mh0">فيزا الدراسة</legend>

                                <div className="ui form mt4">
                                    <div className="fields">
                                        <div className="field rgt">
                                            <p>
                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/requirements'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> ايه المطلوب للدراسة
                                                </h1>
                                               
                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/interview'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> الاوراق المطلوبة فى مقابلة السفارة بغرض الدراسة
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/basic_docs'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> الأوراق الأساسية للدراسة و توثيق الأوراق من السفارة الألمانية
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/daad'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> شرح إستخدام موقع الدااد و البحث عن الجامعات ولغة الدراسة وطريقة مراسلة الجامعة
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/highschool'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> شهادتك في الثانوية هتدرس بيها أيه
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/prepyear'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> السنة التحضيرية: شروط طلاب الثانوية العامة و الدبلومة الامريكية و الثانوية البريطانية
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/recognization'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> ازاى تعرف جامعتك معترفة في ألمانيا
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/apply'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> مواعيد و كيفية التقديم على الجامعة و ما هو القبول المشروط والنهائى ؟
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/togermanscore'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> ازاى تحول تقديرك للتقدير الألماني
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/acceptance_types'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> ما هو القبول المقيد و المفتوح في ألمانيا و ما نسبة قبولى في الجامعة
                                                </h1>
                                                
                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/medicine'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> دراسة المجال الطبي و استكماله في المانيا
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/complete_study'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> معادلة المواد و استكمال الدراسة فى المانيا
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/uni_types'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> ما هو الفرق بين انواع الجامعات الألمانية .. النظرية و العملية ؟
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/bestunis_foryou'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> كيفية معرفة افضل الجامعات فى المانيا
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/time_plan'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> معلومات عن الخطة الزمنية للدراسة فى المانيا - الحساب البنكى و تجديده
                                                </h1>

                                                <hr/>
                                                <h1>
                                                    <a href='/studentvisum/reasons_for_reject'>
                                                        <img alt='' width='30px' height='30px' src={link}/>
                                                    </a> أسباب رفض فيزا الدراسة و طريقة التظلم
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

export default StudentVisum;
