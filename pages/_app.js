import '@/styles/bootstrap.min.css'
import 'animate.css'
import '@/styles/boxicons.min.css'
import '@/styles/flaticon.css'
import "@/styles/slick.css"
import 'react-accessible-accordion/dist/fancy-example.css'
import "swiper/css";
import "swiper/css/bundle";



// Global Style
import '@/styles/style.css'
// Global Responsive Style
import '@/styles/responsive.css'
import '@/styles/styleUser.css'
// Global RTL Style
import '@/styles/rtl.css'



import axios from "axios";


axios.defaults.baseURL= 'https://6figure-earner.com/LarReApi/public/'; 
/* axios.defaults.baseURL= 'http://127.0.0.1:8000/'; */
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials=true;
axios.interceptors.request.use(function(config){
  const token =localStorage.getItem('auth_token');
  config.headers.Authorization = token? `Bearer ${token}`:'';

  return config;
})





// Multicolor if you want this color comment out 
// import '@/styles/colors/brink-pink-style.css'
// import '@/styles/colors/pink-style.css'
// import '@/styles/colors/purple-style.css'  

import Layout from '@/components/_App/Layout'
import { Provider } from 'react-redux'
import { useStore } from '../store'



export default function App({ Component, pageProps }) {
    
    const store = useStore(pageProps.initialReduxState)

    return (
        <>
            <Provider store={store}>
                <Layout />

                <Component {...pageProps} />
            </Provider>
        </>
    )
}