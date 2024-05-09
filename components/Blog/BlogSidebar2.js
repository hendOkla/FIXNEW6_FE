import React , { useState , useEffect } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { useRouter } from 'next/router';
import axios from 'axios';
import swal from 'sweetalert';
import { getDictionary } from "getDictionary";

const BlogSidebar2 = () => {
    const videoKey = Date.now();
    const [LessonsInput, setLessons] = useState([]);
    const router = useRouter();

    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);

    useEffect(()=>{   
        const { URL } = router.query;
        console.log(URL);
        
        const course_id =localStorage.getItem(`course_id`);
        const lesson_id =localStorage.getItem(`lesson_id`);
        
        axios.get(`/api/fetch-lesson`,{params:{course_id: course_id ,lesson_id: lesson_id}}).then(res=>{
            if(res.data.status === 200){
                console.log(res.data.lesson);
                setLessons(res.data.lesson);
            }
        });

        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();
        
    },[URL]);

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
                        <div className="widget-area" id="secondary">
                            <div className="widget widget_startp_posts_thumb" id="myInput">
                                <h3 className="widget-title">{translations.form.popular_lesson}</h3>                                
                                <div className="row">
                                    {
                                        LessonsInput.map((item)=>{
                                            return(                                            
                                                <article className="item">
{/*                                                     <Link href="#" className="thumbS" width={'150px'}>
                                                        <video key={videoKey} width={'150px'} controls controlsList="nodownload" onContextMenu={(e) => e.preventDefault()}>
                                                            <source src={`https://6figure-earner.com/LarReApi/public/${(locale==='ar')?item.video:item[`video_${locale}`]}`} />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </Link> */}
                                                    <div className="info">
                                                        <h4 className="title usmall">
                                                            <Link href="#" onClick={(e)=>handleDownloadClick(e,item.id, (locale==='ar')? item.video :item[`video_${locale}`])}>
                                                            {item[`description_${locale}`]}
                                                            </Link>
                                                        </h4>
                                                    </div>
                                                    <div className="clear"></div>
                                                </article>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </>
            ) : (
            ''
            )}
        </>
    )
}

export default BlogSidebar2;  