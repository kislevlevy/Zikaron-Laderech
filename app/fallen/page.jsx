import HobbyBubble from '@/app/components/HobbyBubble'
import HobbyDataBubble from '@/app/components/HobbyDataBubble'
import ProfileCard from '@/app/components/ProfileCard'
import Button from '@/app/components/Button'
import TitleDivider from '@/app/components/TitleDivider'
import styles from './page.module.scss'

export default function FallenPage() {
    const hobbies = ["טניס", "שירה", "ריצה", "אפיה", "סריגה", "שחיה"]
    const hh = ['טניס', 'שירה', 'ריצה']
    const { firstName, lastName, birthYear, deathYear, imageSrc } = {
        firstName: 'מאי',
        lastName: 'הלל',
        birthYear: '2000',
        deathYear: '2023',
        imageSrc: '/profileImage.webp'
    }
    const mainTitle = 'תמשיכו לבנות לגו. זה החלום והתחביב הכי גדול שלי'
    const aboutParagraph = 'מאי תמיד חיפשה השראה בכל תחביב – בין אם זה בטניס המרגש, בשירה המחברת את הלב או בריצה החופשית. היא מצאה בכל תנועה ובכל צליל נגיעה שהעלה את נשמתה לרמות חדשות של התעלות והשראה. דרך האומנות והספורט, היא גילתה את עוצמתה הפנימית והבינה שכל תחביב הוא הזדמנות ללמוד, לצמוח ולהביע את רגשותיה.';
    const additionalParagraph = 'מאי, בחורה יוצאת דופן שנולדה בשנת 2000, הייתה דמות מלאת חיים, יצירתיות וחמלה. היא חיה את חייה לפי תשוקותיה והעניקה אור וחום לכל מי שסבב אותה. לצערנו, ב-7/10, במתקפת הטרור הנוראית של חמאס, נפלה מאי והשאירה אחריה חלל עצום בלבבות של כל מי שהכיר אותה. זכרונה ממשיך להאיר את דרכנו, ומסר החיים שלה – מלא אומץ, אהבה ואמנות – מהדהד בכל מקום.' 
    

    return (
        <>
            <div className={styles.fallen}>
                <div className={`${styles.rightCol} ${styles.col}`} >
                    <ProfileCard firstName={firstName} lastName={lastName} birthYear={birthYear} deathYear={deathYear} imageUrl={imageSrc} />
                    <TitleDivider title={'התחביבים שלי'} />
                    <div className={styles.hobbies}>{hobbies.map((hobby) => (
                        <HobbyBubble key={hobby} children={hobby} className={styles.hobby} />
                    ))}
                    </div>
                </div>
                <div className={`${styles.middleCol} ${styles.col}`}>
   <div className={styles.content}>
       <h1 className={styles.mainTitle}>{mainTitle}</h1>
       <div className={styles.sections}>
           <div className={styles.section}>
               <TitleDivider title={'התחביבים שלי'} />
               <p className={styles.paragraph}>{aboutParagraph}</p>
           </div>
           <div className={styles.section}>
               <TitleDivider title={'קצת עליי'} />
               <p className={styles.paragraph}>{additionalParagraph}</p>
           </div>
       </div>
   </div>
</div>
                <div className={`${styles.leftCol} ${styles.col}`}>
                    <div className={styles.hobbiesWithData}>{hh.map((hobby) => <HobbyDataBubble hobbyName={hobby} sumMode={false} />)}
                    </div>
                    <TitleDivider title={'סה"כ'} />
                    <div>
                        <HobbyDataBubble sumMode={true} />
                    </div>
                    <Button className={styles.button} children={'שיתוף'} />
                </div>
            </div>
        </>
    )
}