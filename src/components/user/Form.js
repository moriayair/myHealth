import React , {useState}from "react";
import "../../style/form.css"
import Question from "./Question";

function Form(){
    const [user , setUser] = useState({
        fallName : "" ,
        idNumber : "" ,
        age : "" ,
    })

  
  const [questions , setQuestions] = useState({
        'q1': null,
        'q2_1': null,
        'q2_2': null,
        'q2_3': null,
        'q3_1': null,
        'q3_2': null,
        'q4_1': null,
        'q5_1': null,
        'q5_2': null,
        'q6': null,
        'q7': null,
        'q8': null
  })


    function onChangeFiesrtPage(event) {
        const { name, value } = event.target;
        console.log(user); 
        setUser((prev) => ({
            ...prev,
            [name]: value,
            
        }));
    }

 
    function onChangeQuestions(event , ans) {
        const { name } = event.target;
        setQuestions((prev) => ({
            ...prev,
            [name]: ans,
            
        }));
    }

  

    return (
        
    <div className="divBackground">

            <h1>הצהרת בריאות כללית </h1>
            <p className="paragraph-ferst-page">שם מלא : * </p>
            <input className="input-ferst-page" name="fallName" value={user.fallName} onChange={onChangeFiesrtPage}></input>

             <p className="paragraph-ferst-page">מספר זהות : * </p>
             <input className="input-ferst-page"  name="idNumber" value={user.idNumber} onChange={onChangeFiesrtPage}></input>

             <p className="paragraph-ferst-page">גיל : * </p>
            <input className="input-ferst-page"  name="age" value={user.age} onChange={onChangeFiesrtPage}></input>

        <br/>
        <hr/>

        <h1 className="h1-part-one">חלק א': שאלון רפואי</h1>
        <p className="paragraph-secent-page">אנא קראו את השאלות להלן בצורה יסודית ופעל לפי הנחיות אלה:</p>
        <p className="paragraph-secent-page">1. אם התשובה על אחת או יותר מהשאלות בחלק א' לטופס זה היא חיובית, אז לצורך התחלת פעילות הכושר עליך להמציא תעודה רפואית מרופא ולפיה הרופא מאשר כי אין סיכון לבריאותך בקבוצת הריצה. קבוצת הריצה תקבל מתאמן שהמציא תעודה רפואית שלא עברו שלושה חודשים ממועד הנפקתה.</p>
        <p className="paragraph-secent-page">2. אם כל התשובות לשאלות בחלק א' לטופס זה הן שליליות – מלא את ההצהרה שבחלק ב' לטופס זה וחתום עליה.</p>
        <p className="paragraph-secent-page">3. בכל מקרה של שינוי במצבך הרפואי, יש להתייעץ עם רופא לגבי המשך פעילות בקבוצת הריצה.</p>
       
        <br/>
        <br/>

        <p className="yes-no-questions"> 1. האם הרופא שלך אמר לך שאתה סובל ממחלת לב? * </p>
        <Question id1="yesQ1" id2="noQ1" name="q1" isChecked={questions["q1"]} onChangeQuestions={onChangeQuestions}/>
        <br/>

        <p className="yes-no-questions"> 2. האם אתה חש כאבים בחזה </p>
        <p className="yes-no-questions-spice"> 2.1. בזמן מנוחה? *</p>
        <Question id1="yesQ2_1" id2="noQ2_1" name="q2_1" isChecked={questions["q2_1"]} onChangeQuestions={onChangeQuestions}/>

         <br/>


        <p className="yes-no-questions-spice"> 2.2. במהלך פעילויות שגרה ביום – יום? *</p>
        <Question id1="yesQ2_2" id2="noQ2_2" name="q2_2" isChecked={questions["q2_2"]} onChangeQuestions={onChangeQuestions}/>


         <br/>

        <p className="yes-no-questions-spice"> 2.3. בזמן שאתה מבצע פעילות גופנית? *</p>
        <Question id1="yesQ2_3" id2="noQ3_1" name="q2_3" isChecked={questions["q2_3"]} onChangeQuestions={onChangeQuestions}/>


        <br/>

        <p className="yes-no-questions">3. האם במהלך השנה החולפת –</p>
        <p className="yes-no-questions-spice"> 3.1 איבדת שיווי משקל עקב סחרחורת ? סמן לא – אם הסחרחורת נבעה מנשימת יתר (כולל במהלך פעילות גופנית נמרצת) *</p>
        <Question id1="yesQ3_1" id2="noQ3_1" name="q3_1" isChecked={questions["q3_1"]} onChangeQuestions={onChangeQuestions}/>


         <br/>

        <p className="yes-no-questions-spice">3.2 איבדת את הכרתך? *</p>
        <Question id1="yesQ3_2" id2="noQ3_2" name="q3_2" isChecked={questions["q3_2"]} onChangeQuestions={onChangeQuestions}/>


        <br/>

        <p className="yes-no-questions">4. האם הרופא אבחן שאתה סובל ממחלת האסתמה ולכן בשלושת החודשים האחרונים - </p>
        <p className="yes-no-questions-spice"> 4.1 נזקקת לטיפול תרופתי *</p>
        <Question id1="yesQ4_1" id2="noQ4_1" name="q4_1" isChecked={questions["q4_1"]} onChangeQuestions={onChangeQuestions}/>

        
         <br/>

        <p className="yes-no-questions-spice">4.2 סבלת מקוצר נשימה או צפצופים? *</p>
        <Question id1="yesQ4_2" id2="noQ4_2" name="q4_2" isChecked={questions["q4_2"]} onChangeQuestions={onChangeQuestions}/>


        <br/>

        <p className="yes-no-questions">5. האם אחד מבני משפחתך מדרגת קרבה ראשונה נפטר - </p>
        <p className="yes-no-questions-spice"> 5.1 ממחלת לב? *</p>
        <Question id1="yesQ5_1" id2="noQ5_1" name="q5_1" isChecked={questions["q5_1"]} onChangeQuestions={onChangeQuestions}/>

        <br/>




        <p className="yes-no-questions-spice">5.2 ממוות פתאומי בגיל מוקדם? (לפני גיל 55 אם מדובר בגבר, ולפני גיל 65 אם זו אישה). *</p>
        <Question id1="yesQ5_2" id2="noQ5_2" name="q5_2" isChecked={questions["q5_2"]} onChangeQuestions={onChangeQuestions}/>


        <br/>

        <p className="yes-no-questions"> 6. האם הרופא שלך אמר לך ב – 5 השנים האחרונות לבצע פעילות גופנית רק תחת השגחה רפואית? *</p>
        <Question id1="yesQ6" id2="noQ6" name="q6" isChecked={questions["q6"]} onChangeQuestions={onChangeQuestions}/>


        <br/>
        
        <p className="yes-no-questions">7. האם אתה סובל ממחלה קבועה (כרונית) שאינה נזכרת בשאלות לעיל ועשויה למנוע או להגביל אותך בביצוע פעילות גופנית? *</p>
        <Question id1="yesQ7" id2="noQ7" name="q7" isChecked={questions["q7"]} onChangeQuestions={onChangeQuestions}/>


        <br/>
        <p className="yes-no-questions">8. לנשים בהריון: האם ההיריון הזה או כל הריון קודם הוגדר היריון בסיכון? *</p>
        <Question id1="yesQ8" id2="noQ8" name="q8" isChecked={questions["q8"]} onChangeQuestions={onChangeQuestions}/>


        <br/>
        <hr/>
        <h1 className="h1-part-one">חלק ב': הצהרה</h1>
        <p className="paragraph-lest-page">אני החתום מטה מצהיר כי קראתי והבנתי את כל השאלון הרפואי שבחלק א' לטופס זה, וכל התשובות לשאלות בטופס זה הן שליליות: אני מצהיר כי מסרתי ידיעות מלאות ונכונות על מצבי הרפואי בעבר ובהווה לפי השאלות שנשאלתי בשאלון האמור.  ידוע לי כי לאחר שנתיים מיום חתימתי על הצהרת בריאות זו אדרש להמציא הצהרת בריאות חדשה.</p>

        <p className="paragraph-lest-page">שם מלא  : * </p>
        <input className="input-ferst-page" name="fallNameApproval" ></input>

        <p className="paragraph-lest-page">תאריך : * </p>
        <input className="input-ferst-page"></input>



        <br/>

        <div className="send-container">
             <button className="btn-Send">שליחה</button>
        </div>


        <br/>
        <br/>

    </div>
    )
}

export default Form;