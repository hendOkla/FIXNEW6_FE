import React,{ useState } from 'react';
import NavbarUser from "@/components/_App/NavbarUser";
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from "axios";



 
const courses = () => {
    const router = useRouter();
    const { locale } = router;
    const { id } = router.query;
    const { cat } = router.query;    
    const [curseList,setCurseList] = useState([]);    
    const [translations, setTranslations] = useState(null);
    

    React.useEffect(() => {
        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }        

        const authToken = window.localStorage.getItem('auth_token');
        if (authToken === null) {
            router.push({pathname: '/login'});
        }
        setCurseList([]);       
        fetchCourseList();   
        fetchTranslations(); 
    },[id]);

    function fetchCourseList(){
        axios.get(`/api/courseWIdCat`, {params: {id: id,status: 0}} ).then(res=>{
            /* console.log (id); */
            if(res.data.status === 200){
                setCurseList(res.data.course)
                /* console.log(res.data.course); */
            }
        });
    } 
    const handleClick = (category_id , course_id) => {
        localStorage.setItem('category_id',category_id);
        localStorage.setItem('course_id',course_id);     
            
        if(localStorage.getItem(`auth_token`)){
            router.push({
                pathname: '/lessons',
                query:{MyID: course_id}
            });
        }else{
            router.push({
                pathname: '/login'
            });
        }
    };
    return (
        <>
            {translations ? (
                <>
                    <NavbarUser />
                    <div className="main">
                        <div className="cardBox">
                            <div className="container">
                                <div className="hosting-features-area pt-80 pb-50 bg-f9f6f6">
                                    <div className="container">
                                        <div className="section-title">
                                            <h2>{cat}</h2>
                                            <div className="bar"></div>
                                        </div>

                                        <div className="row">
                                            {curseList.length ? 
                                                (
                                                    curseList.map((item)=>{
                                                        return(                                                            
                                                            <div className="col-lg-4 col-md-6" onClick={() => handleClick(id, item.id)}>
                                                                <div className="single-hosting-features">
                                                                    <div className="icon">
                                                                    <img src={`https://6figure-earner.com/LarReApi/public/${item.image}`}  alt="image" />
                                                                    </div>
                                                                    <h3>
                                                                        <Link href={`/courses/?id=${item.id}`}>
                                                                        {item[`name_${locale}`]}
                                                                        </Link>
                                                                    </h3>
                                                                    <p>{item[`description_${locale}`]}</p>
                                                                </div>
                                                            </div>                                                            
                                                        )
                                                    })
                                                ) : (
                                                    <div className="section-title">
                                                        <h4>No lessons have been added yet</h4>
                                                    </div>                        
                                                )
                                            }

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
    )
}

export default courses;