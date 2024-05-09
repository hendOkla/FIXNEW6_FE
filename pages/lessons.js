import React , {useState , useEffect} from 'react';
import PageBanner from '@/components/Common/PageBanner';
import NavbarUser from "@/components/_App/NavbarUser";
import Footer from "@/components/_App/Footer";
import * as Icon from 'react-feather';
import axios from "axios";
import { useRouter } from 'next/router';
import { getDictionary } from "getDictionary";


const lessons = () => {
    const router = useRouter();
    const { MyID } = router.query;


    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);

    const CourseID = MyID;
    const course_id = CourseID;
    const [lessonList,setLessonList] = useState([]);
    const [courseInput,  setCourse] = useState([]);

    

    useEffect(()=>{
        axios.get(`/api/custom-lesson/${course_id}`).then(res=>{
            if(res.data.status === 200){
                setLessonList(res.data.lessons);
            }
        });

        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();

        axios.get(`/api/edit-course/${course_id}`).then(res=>{
            if(res.data.status === 200){
                setCourse(res.data.course);
            }
        });


    },[course_id]);

    const handleDownloadClick = (e,videoId,Url)=>{
        e.preventDefault();

        localStorage.setItem('lesson_id',videoId);
        router.push({
            pathname: '/showLesson',
            query: {URL:Url }
        });
    }
    return (
        <>
            {translations ? (
                <>
                    <div>
                        <NavbarUser/>

                        <div className="main">
                            <div className="cardBox">
                                <div className="container">
                                    
                                    <div className="team-area pt-80 pb-50 bg-f9f6f6">
                                        <div className="container">
                                            <div className="section-title">
                                                <h2>{courseInput[`name_${locale}`]}</h2>
                                                <div className="bar"></div>
                                            </div>
                                            <div className="row justify-content-center">
                                                {
                                                    lessonList.map((item)=>{
                                                        return(
                                                            <div className="col-lg-4 col-md-6">
                                                                <div className="single-team">
                                                                    <div className="team-image">
                                                                        <img height={'150px'} src="/images/team-image/team1.jpeg" alt="image" />
                                                                    </div>
                                        
                                                                    <div className="team-content">
                                                                        <div onClick={(e)=>handleDownloadClick(e,item.id, (locale==='ar')? item.video :item[`video_${locale}`])} className="team-info">
                                                                            <h3>{translations.form.display}</h3>
                                                                        </div>
                                                                        <div>
                                                                            <h6>{item[`name_${locale}`]}</h6>
                                                                        </div>
                                        
                                                                        <p>{item[`description_${locale}`]}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>  
                                </div>                            
                            </div>
                        </div> 
                    </div>                
                </>
            ) : (
            ''
            )}
        </>
    );
  };
  
  export default lessons;