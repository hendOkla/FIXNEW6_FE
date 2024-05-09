import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHome  } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';
import Link from "next/link";
import axios from "axios";



const NavbarUser = () => {
    const router = useRouter();
    const [currentPath, setCurrentPath] = useState("");
    const [selectedItem, setSelectedItem] = useState(null); 
    const [isBootstrapImported, setIsBootstrapImported] = useState(true);


    const [open, setOpen] = useState(false);
    const [openLang, setOpenLang] = useState(false);

    let menuRef = useRef();
    
    // Add active class    
    const { locale } = router;
    const [dynamicId, setDynamicId] = useState();
    const [menu, setMenu] = React.useState(true);
    const [categoryList,setCategoryList] = useState([]);
    const [BookList,setBookList] = useState([]);
    const [translations, setTranslations] = useState(null);
    const { pathname, query } = router;

    const handleToggle = () => {
        const navigation = document.querySelector(".navigation");
        const main = document.querySelector(".main");
        navigation.classList.toggle("active");
        main.classList.toggle("active");
    };

    const handleItemClick = (event) => {
        const content = event.currentTarget.querySelector('.dropdown-content');
        // Hide all dropdown contents except the one clicked
        document.querySelectorAll('.dropdown-content').forEach(content => {content.style.display = 'none';});

        if (content){
            // Toggle display for the clicked item's dropdown content
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
        // Update selected item
        setSelectedItem(event.currentTarget);        
    };

    useEffect(() => {
        const authToken = window.localStorage.getItem('auth_token');
        const { id } = router.query;
        if (authToken === null) {router.push({pathname: '/login'});};
        fetchCategoryList(); 
        fetchBookList(); 
        
        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();
        setCurrentPath(router.asPath);
        setDynamicId(id);
        
        // Hide all dropdown contents except the one clicked
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
        
        const items = document.querySelectorAll('.list');
        items.forEach((item) => {
            item.addEventListener('click', () => {
                // Remove selected class from all items
                items.forEach((item) => {item.classList.remove('selected');});
                // Add selected class to the clicked item
                item.classList.add('selected');
            });
        });

        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
                setOpenLang(false);
                console.log(menuRef.current);
            }      
        };
        document.addEventListener("mousedown", handler);

        return () => {
            items.forEach((item) => {
                item.removeEventListener('click',handleItemClick);
                document.removeEventListener("mousedown", handler);
            });
        };        
    }, [isBootstrapImported ,router]);

    function fetchCategoryList(){    
        axios.get('/api/all-category').then(res=>{
            if(res.data.status ===200){
                setCategoryList(res.data.category)
            }
        });
    } 
    function fetchBookList(){    
        axios.get('/api/view-book').then(res=>{
            if(res.data.status ===200){
                setBookList(res.data.books)
            }
        });
    } 

    const classOne = menu
        ? "collapse navbar-collapse "
        : "collapse navbar-collapse show";
    const classTwo = menu
        ? "navbar-toggler navbar-toggler-right collapsed"
        : "navbar-toggler navbar-toggler-right";
 

    const handleLogout = () => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('fname');
        localStorage.removeItem('id');
        localStorage.removeItem('username');
        localStorage.removeItem('link');
        localStorage.removeItem('email');    
        // Redirect the user to the login page or any other desired page
        router.push('/login');
        setIsBootstrapImported(false);
    };
    const copiedClick = () => {
        // Get the text content from localStorage
        const textToCopy = window.localStorage.getItem('link');
    
        // Create a temporary textarea element to copy the text
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    
        alert('Link copied to clipboard!');
    };
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">        
            <div className="topbar">
                <div className="toggle" onClick={handleToggle}>                    
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="toggle" ref={menuRef}>                    
                    <div className='menu-trigger' onClick={()=>{setOpenLang(!openLang)}}>
                        <FontAwesomeIcon icon={faGlobe} />
                    </div>
                    <div className={`dropdown-menus ${openLang? 'active' : 'inactive'}`} >
                        <ul style={{padding:"0px 0.5rem"}}>
                            <li className = 'dropdownItem'>                            
                                <a href={`${pathname}?${new URLSearchParams(query).toString()}`}>
                                {translations ? translations.form.en : ''}
                                </a>
                            </li>
                            <li className = 'dropdownItem'>                            
                                <a href={`/ar/${pathname}?${new URLSearchParams(query).toString()}`}>
                                {translations ? translations.form.ar : ''}
                                </a>
                            </li>
                            <li className = 'dropdownItem'>                            
                                <a href={`/sp/${pathname}?${new URLSearchParams(query).toString()}`}>
                                {translations ? translations.form.sp : ''}
                                </a>
                            </li>
                        </ul>
                    </div>                    
                </div>
                <div className='menu-container' ref={menuRef}>
                    <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                        <img src="/images/logo-white.png"></img>
                    </div>

                    <div className={`dropdown-menus ${open? 'active' : 'inactive'}`} >
                        <h3>
                            {window.localStorage.getItem('username')}<br/>
                            <span>{window.localStorage.getItem('auth_token')}   {window.localStorage.getItem('lname')}</span>
                        </h3>

                        <ul style={{padding:"0px 0.5rem"}}>
                            <li className = 'dropdownItem'>                            
                                <a href="/changePassword/">
                                    <span className="icon"><FontAwesomeIcon icon={faLock}/></span>
                                    Change Password
                                </a>
                            </li>
                            <li className = 'dropdownItem'>                            
                                <a href="#" onClick={handleLogout}>
                                    <span className="icon"><FontAwesomeIcon icon={faSignOutAlt}/></span>
                                    LogOut
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>                  
            </div>
        </nav>        
        
        <div className="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span className="icon">
                        <img src="/images/logo-sidebar.png" alt="logo" style={{width:'30px'}} />
                        </span>
                        <span className="title">6Figure Earner</span>
                    </a>
                </li>
                <li className={`list ${currentPath === `/homeUser/` && "selected"}`}  onClick={handleItemClick}>
                    <Link href={{ pathname:'/homeUser/'}} >
                        <span className="icon">
                        <span className="icon"><FontAwesomeIcon icon={faHome}/></span>
                        </span>
                        <span className="title">Home</span>
                    </Link>
                </li>
                <li className={`list ${currentPath === `/myProfile/` && "selected"}`}  onClick={handleItemClick}>
                    <Link href={{ pathname:'/myProfile/'}}>
                        <span className="icon">
                        <span className="icon"><FontAwesomeIcon icon={faUser}/></span>
                        </span>
                        <span className="title">myProfile</span>
                    </Link>
                </li>

                <li className={`list ${currentPath === `/courses/?id=${dynamicId}` && "selected"}`}  onClick={handleItemClick}>
                    <b></b>
                    <b></b>
                    <a href="#" className="dropdown-btn">
                        <span className="icon"><FontAwesomeIcon icon={faGraduationCap}/></span>
                        <span className="title">{translations ? (translations.form.education) : ('')}</span>
                    </a>
                    <div className="dropdown-content">

                        {
                            categoryList.map((item)=>{
                                return(
                                    <Link key={item.id} className={`${dynamicId===`${item.id}` &&"link-selected"}`} href={{ pathname: '/courses',  query: { id: `${item.id}` ,cat:`${item.name_en}`} }}>
                                        <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                                        <span className="title">{translations ? item[`name_${locale}`] : ''}</span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </li>

                <li className={`list ${currentPath === `/courses/?id=${dynamicId}` && "selected"}`}  onClick={handleItemClick}>
                    <b></b>
                    <b></b>
                    <a href="#" className="dropdown-btn">
                        <span className="icon"><FontAwesomeIcon icon={faBook}/></span>
                        <span className="title">{translations ? (translations.form.digitalBook) : ('')}</span>
                    </a>
                    <div className="dropdown-content">

                        {
                            BookList.map((item)=>{
                                return(
                                    <Link key={item.id} className={`${dynamicId===`${item.id}` &&"link-selected"}`} href={{ pathname: '/books',  query: { id: `${item.id}` ,course_id:`${item.course_id}`,bookName:`${item.course_id}`} }}>
                                        <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                                        <span className="title">{translations ? item[`name_${locale}`] : ''}</span>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </li>
                <li className={`list ${currentPath === `/#/?id=${dynamicId}` && "selected"}`}  onClick={handleItemClick}>
                    <b></b>
                    <b></b>
                    <a href="#" className="dropdown-btn">
                        <span className="icon"><FontAwesomeIcon icon={faLink}/></span>
                        <span className="title">{translations ? (translations.form.linkSharing) : ('')}</span>
                    </a>
                    <div className="dropdown-content">
                        <Link  className="link-selected" href="#" onClick={copiedClick}>
                            <span className="title" style={{fontSize:"10px", whiteSpace:"pre-line", lineHeight:"15px", width:"100%"}}>{window.localStorage.getItem('link')}</span>
                        </Link>
                    </div>
                </li>
                <li className={`list ${currentPath === `/MyBalance/` && "selected"}`}  onClick={handleItemClick}>
                    <Link href={{ pathname:'/MyBalance/'}} >
                        <span className="icon">
                        <span className="icon"><FontAwesomeIcon icon={faHome}/></span>
                        </span>
                        <span className="title">{translations ? (translations.form.MyBalance) : ('')}</span>
                    </Link>
                </li>
                
            </ul>
        </div>
    </>
  );
};


export default NavbarUser;

