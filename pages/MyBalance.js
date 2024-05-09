import React,{ useState , useEffect } from 'react';
import NavbarUser from "@/components/_App/NavbarUser";
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';
import axios from "axios";
import SortableTree, {toggleExpandedForAll} from "react-sortable-tree";
import "react-sortable-tree/style.css";


const courses = () => {
    const router = useRouter();
    const { locale } = router;

    const [username, setUsername] = useState('');
    const [firstFollowerList, setFirstFollowerList] = useState([]);
    const [secondFollowerLists, setSecondFollowerLists] = useState([]);
    const [totalSum, setTotalSum] = useState([]);

    
    let firstCounter = 0;
    let secondCounter = 0;
    useEffect(() => {
        // Get username from storage
        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername);
        }
        // Fetch data using axios
        const fetchData = async () => {
        try {
            const res = await axios.get(`/api/get-attendBy/${username}`);
            if (res.data.status === 200) {
            setFirstFollowerList(res.data.attendBy);

            // Iterate over each element of the matrix
            const secondFollowerPromises = res.data.attendBy.map(async (element) => {
                // Make a query for each element
                const queryResult = await axios.get(`/api/get-attendBy/${element.username}`);
                console.log(queryResult.data.dd);
                return queryResult.data.attendBy;

                
            });

            Promise.all(secondFollowerPromises).then((results) => {
                setSecondFollowerLists(results);
            });
            } else {
            console.log('Not welcome');
            }
        } catch (error) {
            console.log('Error:', error);
        }
        };
        if (username) {
        fetchData();
        }
    }, [username]);
    useEffect(() => {
      // Toggle dropdown
        const handleClick = (event) => {
        event.target.parentElement.querySelector('.nested').classList.toggle('active');
        event.target.classList.toggle('caret-down');
        };
        const toggler = document.getElementsByClassName('caret');
        for (let i = 0; i < toggler.length; i++) {
            toggler[i].addEventListener('click', handleClick);
        }
        return () => {
        for (let i = 0; i < toggler.length; i++) {
            toggler[i].removeEventListener('click', handleClick);
        }
    };
    }, [firstFollowerList]);
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
        fetchTranslations(); 
    },[]);


    ////////For Tree////////////////////


    const [treeData, setTreeData] = useState([
        {
            title: username,
            isDirectory: true,
            expanded: true,
            children: [], // Add an empty children array
        },
    ]);

    useEffect(() => {
        const username = localStorage.getItem("username");
    
        const updatedSeed = [
            {
            title: username,
            isDirectory: true,
            expanded: true,
            children: [],
            },
        ];
        setTreeData(updatedSeed);
        
    
        axios.get(`/api/countWeek/${localStorage.getItem('username')}`).then(res => {
            let sum = 0;
            if (res.data.status === 200) {
                const payments = res.data.payment; // Assuming payment is an array
                // Variable to store the sum of subtitle values        
                const promises = payments.map((payment) => {
                    return axios.get(`/api/countWeek/${payment.username}`).then((response) => {
                        if (response.data.status === 200) {
                            const childNode = {
                                title: payment.username,
                                children: response.data.status === 200 && Array.isArray(response.data.payment)
                                    ? response.data.payment.map((payment) => {
                                        const subtitleValue = 0.5; // Set the subtitle value to be added to the sum
                                        sum += subtitleValue; // Add the subtitle value to the sum
        
                                        return {
                                            title: payment.username,
                                            subtitle: "Commission is: " + subtitleValue
                                        };
                                    })
                                    : [],
                                subtitle: "Commission is: " + (payment.created_at === payment.updated_at ? payment.commission : 25),
                            };
                            updatedSeed[0].children.push(childNode);
        
                            if (typeof childNode.subtitle === 'string') {
                                const subtitleValue = parseFloat(childNode.subtitle.split(': ')[1]);
                                sum += subtitleValue;
                            }
                        } else {
                            const childNode = {
                                title: payment.username,
                                subtitle: "Commission is: " + (payment.created_at === payment.updated_at ? payment.commission : 25),
                            };
                            updatedSeed[0].children.push(childNode);
        
                            if (typeof childNode.subtitle === 'string') {
                                const subtitleValue = parseFloat(childNode.subtitle.split(': ')[1]);
                                sum += subtitleValue;
                            }
                        }
                        setTreeData(updatedSeed); // Update the tree data state with the updatedSeed
                    });
                });

                
                
        
                // Wait for all Axios requests to finish
                Promise.all(promises).then(() => {
                    console.log('Sum of subtitle values:', sum);
                    setTotalSum(sum);
                });
            }
        });
    }, []);
    function updateTreeData(treeData) {
        setTreeData(treeData);
    }
    function expand(expanded) {
        setTreeData(
            toggleExpandedForAll({
            treeData,
            expanded
            })
        );
    }

    function collapseAll() {
    expand(false);
    }
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
                                            <h2>{translations ? (translations.form.MyBalance) : ('')}</h2>
                                            
                                            
                                        </div>
                                        <div className="row">
                                            <div className="blog-area">
                                                <div className="container">
                                                <div className="row">
                                                    <div style={{ flex: "0 0 auto", padding: "0 15px" }}>
                                                        <button className='btn btn-primary' onClick={collapseAll}>Display All Balance: {totalSum} </button>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <form
                                                        style={{ display: "inline-block" }}
                                                        onSubmit={(event) => {
                                                            event.preventDefault();
                                                        }}
                                                        >
                                                        </form>
                                                    </div>
                                                    <div style={{ height: "50vh" }}>
                                                        <SortableTree
                                                        treeData={treeData}
                                                        onChange={(treeData) => updateTreeData(treeData)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="cart-table table-responsive" style={{ margin: '0 auto', width: '75%' }}>
                                                        <table className="table table-bordered">
                                                            <thead style={{color:'white'}}>
                                                                <tr>
                                                                    <th className='tb-text' scope="col" style={{fontSize:"30px"}}  colSpan="3"> 
                                                                        <h2>Company Bonus</h2>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr >
                                                                    <td className="product-thumbnail tb-text">X5</td> 
                                                                    <td className='tb-text'>500$</td>  
                                                                    <td className='tb-text'>{(firstCounter>=5)?firstCounter:'0'}</td>                            
                                                                </tr>
                                                                <tr >
                                                                    <td className="product-thumbnail tb-text"> X10</td>   
                                                                    <td className='tb-text'>MACBOOK AIR</td>       
                                                                    <td className='tb-text'>{(firstCounter>=10)?firstCounter:'0'}</td>                         
                                                                </tr>
                                                                <tr >
                                                                    <td className="product-thumbnail tb-text">X20</td>     
                                                                    <td className='tb-text'>PAID TRIP + 500%</td>  
                                                                    <td className='tb-text'>{(firstCounter>=20)?firstCounter:'0'}</td>                                                          
                                                                </tr>
                                                                <tr >
                                                                    <td className="product-thumbnail tb-text">X30</td>   
                                                                    <td className='tb-text'>2500$</td>   
                                                                    <td className='tb-text'>
                                                                    {firstCounter >= 15 && (firstCounter + secondCounter) >= 30 ? (
                                                                        <React.Fragment>
                                                                        {firstCounter + secondCounter}
                                                                        <br/>Congratulations
                                                                        </React.Fragment>
                                                                    ) : (
                                                                        '0'
                                                                    )}
                                                                    </td> 

                                                                </tr>
                                                                <tr >
                                                                    <td className="product-thumbnail tb-text">X60</td>         
                                                                    <td className='tb-text'>ROLEX</td>   
                                                                    <td className='tb-text'>
                                                                        {firstCounter >= 30 && (firstCounter + secondCounter) >= 60 ? (
                                                                        <React.Fragment>
                                                                            {firstCounter + secondCounter}
                                                                            <br/>Congratulations
                                                                        </React.Fragment>
                                                                        ) : (
                                                                        '0'
                                                                        )}
                                                                    </td>                    
                                                                </tr>
                                                                <tr >
                                                                    <td className="product-thumbnail tb-text">X150</td>    
                                                                    <td className='tb-text'>CAR WORTH 15.000$</td>      
                                                                    <td className='tb-text'>
                                                                    {firstCounter >= 75 && (firstCounter + secondCounter) >= 150 ? (
                                                                        <React.Fragment>
                                                                        {firstCounter + secondCounter}
                                                                        <br/>Congratulations
                                                                        </React.Fragment>
                                                                    ) : (
                                                                        '0'
                                                                    )}
                                                                    </td>                 
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                </div>
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
    )
}

export default courses;