import React from "react";
import one from './one.jpeg';
import './CUNI.css';

class CUNI extends React.Component {
    render() {
        return (
            <article className="article br3 ba b--black-10 w-100 w-50-m w-50-l mw7 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className='legend center'>
                                <legend className="f1 fw6 ph0 mh0">معادلة المواد و استكمال الدراسة فى المانيا</legend>
                            </div>
                            <hr/>

                            <div className="ui form ma0">
                                <div className="fields">
                                    <div class="row">
                                        <div class="column">
                                            <img alt='' width='900px' height='1000px' src={one} />
                                        </div>
                                    </div>

                                    <hr/>
                                    <h3>
                                        البوست دة للناس اللى درست سنتين او تلاتة فى هندسة او تجارة او اى تخصص غير المجال الطبى و عايزة تسافر تعادل المواد و تكمل بكالوريوس و متبدأش البكالوريوس من الاول
                                        <br/>
                                        "المجال الطبى مالوش علاقة بالبوست دة لان المجال الطبى له مركز معادلة"
                                        <br/>
                                        الناس اللي بتفكر تعمل معادله عشان تدرس في ترم عالى الموضوع ده متاح
                                        <br/>
                                        و عشان يتعمل بيحتاج الشخص المحتوى العلمي للمواد اللي درسها
                                        <br/>
                                        لكن في نقطه مش كل الجامعات بتعمله في جامعات بترضى و في جامعات نتيجة المعادله بتترفض لإختلاف المحتوى العلمي لإختلاف استيفاء شروط التقديم الخ (انا معرفش مين اللي بيعمل ومين لأ عشان محدش يسأل في النقطه دي)
                                        <br/>
                                        لكن في نقطه تانيه في جامعات بتعمل المعادله قبل ما الدراسه تبدأ وده مشفتوش غير في جامعتين من اللي قدمت فيهم
                                        <br/>
                                        <div className='lft'>
                                            1. HS Darmstadt
                                            <br/>
                                            2. TU Bergakadime Freiberg
                                        </div>
                                        الباقي عشان يعمل معادله لازم الواحد يبدأ الدراسه في الترم الأول ويقدم الطلب بتاع المعادله مرفق فيه المستندات المطلوبه وبيستنى 4-6 أسابيع في بعض الجامعات ممكن أقل أو اكتر
                                        <br/>
                                        طبعاً اما بتطلع النتجيه وحضرتك بعد ما حضرت كام اسبوع وحتطلع لترم متقدم بيكون فاتك جزء حلو حاول تلمه انا شايف إن ده أحد عيوب الإنتظار لإن النتيجه اما بتطلع بيحصل لخبطه والواحد يبدأ يغير الجدول ووممكن ميكنش جدول منتظم في ترم معين لإن في مواد ممكن يتعملها معادله ومواد تترفض وبالتالي الجدول الجديد بيبقى في تشكيله حلوه من مواد من مختلف الترمات (ده على أساس ان المواد كلها نازله في كل ترم عادي - لإن في مواد بتنزل ترم شتوي بس ومواد آخرى ترم صيفي - يعني حضرتك حستنها)
                                        <br/>
                                        الموضوع محتاج شوية تعب ومجهود من أي حد لو عاوز يعمل كده لإنه حيطلب منك تقترح المواد اللي عاوز تعملها معادله بالمواد اللي عندهم
                                        <br/>
                                        فحتبص في المحتوى العلمي بتاعك والمحتوى العلمي بتاع الجامعه اللي عندهم وتكتبلهم عاوز اعادل الماده دي بالماده دي -ملاحظه- ممكن تكتب كذا ماده عشان تعادل ماده في ألمانيا مثلا
                                        <br/>
                                        مثال: رياضه أ ورياضه ب في مصر عاوز تعادلها برياضه أ في ألمانيا
                                        <br/>
                                        الموضوع ده انت حتعرفه وانت بتبص على المحتوى بتاع الماده حتعرف لو في مواد محتاج تجمعها مع بعض.
                                        <br/>
                                        بالتوفيق للجميع
                                        <br/>
                                        تجربة زميلنا احمد صابر
                                        <br/>
                                        ...............
                                        <br/>
                                        تنويه بس 
                                        <br/>
                                        = المعادلة ممكن جامعة توافق و جامعة لاء
                                        <br/>
                                        ممكن رئيس القسم يوافق و ممكن لاء
                                        <br/>
                                        ممكن دكتور مادة يوافق على المعادلة و دكتور تانى يرفض 
                                        <br/>
                                        و دة رد جامعة عن المعادلة
                                        <br/>
                                        <div className='lft'>
                                            In general, it is possible to transfer credit from other Universities when you decide to start studying here. Please note, it is every students own responsibility to take care of the credit admission process, which can easily take up to several semesters and it is not granted to get all or some subjects acknowledged. You would have to check with every Professor individually for every class if the Professor is willing to accept the courses you took at another University. Please note the Professors are not obliged to acknowledge subjects from other Universities. Also, the Professors are allowed to quiz/ test you in every subject before agreeing/ denying to a credit transfer.
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

export default CUNI;
