import React,{ useState, useEffect } from 'react';
import Link from "next/link";
import * as Icon from "react-feather";
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const router = useRouter();

  const { locale } = router;
  const { pathname, query } = router;
  const [translations, setTranslations] = useState(null);

  useEffect(()=>{
      //for translation 
      async function fetchTranslations() {
          const translations = await getDictionary(locale);
          setTranslations(translations);
      }
      fetchTranslations();
  },[]);

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo.png" alt="logo" style={{width:'50px'}} />
                  </Link>
                </div>
                <p className="p-footer">
                  {translations ? (translations.form.Footer_para) : ('')}
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>
                <ul className="list">
                  <li>
                    <Link href="/">{translations ? (translations.form.home) : ('')}</Link>
                  </li>
                  <li>
                    <Link href="/about-3">{translations ? (translations.form.about) : ('')}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{translations ? (translations.form.contact) : ('')}</Link>
                  </li>
                  <li>
                    <Link href="/services-1">{translations ? (translations.form.services) : ('')}</Link>
                  </li>
                  <li>
                    <Link href="/login">{translations ? (translations.form.login) : ('')}</Link>
                  </li>
                  <li>
                    <Link href="/sign-up">{translations ? (translations.form.signUp) : ('')}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="list">
                  <li>
                    <Link href="/term-condition">{translations ? (translations.form.termCondition) : ('')}</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">{translations ? (translations.form.PryPoly) : ('')}</Link>
                  </li>
                  <li>
                    <Link href="/delivery-policy">{translations ? (translations.form.delePoly) : ('')}</Link>
                  </li>
                  <li>
                    <Link href="/refund-policy">{translations ? (translations.form.refundPoly) : ('')}</Link>
                  </li>
                  <li>
                    <Link href="/cancellation-policy">{translations ? (translations.form.cancelPoly) : ('')}</Link>
                  </li>
                  <li>
                    <Link href="/shopping-policy">{translations ? (translations.form.shpPoly) : ('')}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  {/* <li>
                    <Icon.MapPin />
                    27 Division St, New York, <br /> NY 10002, USA
                  </li> */}
                  <li>
                    <Icon.Mail />
                    {translations ? (translations.form.email) : ('')}:{" "}<br></br>
                    <a href="mailto:6figure-earner@6figure-earner.com">6figure-earner@6figure-earner.com</a>
                  </li>
                  <li>
                    <Icon.MapPin />
                    {translations ? (translations.form.address) : ('')}:{" "}<br></br>
                    <a href="mailto:6figure-earner@6figure-earner.com">{translations ? (translations.form.addres) : ('')}:{" "}</a>
                  </li>
                  <li>
                    <Icon.Phone />
                    {translations ? (translations.form.phone) : ('')}:{" "}<br></br>
                    <a href="mailto:6figure-earner@6figure-earner.com">+971545565988</a>
                  </li>
                  {/* <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:321984754">+ (321) 984 754</a>
                  </li> */}
                </ul>
                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagramcom/"
                      className="instagram"
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} . All rights reserved by{"    "} 
                  <a href="https://it4infinite.com/" target="_blank">
                    it4infinite
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="/images/map.png" className="map" alt="map" />

        {/* Shape Images */}
        <div className="shape1">
          <img src="/images/shape1.png" alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
