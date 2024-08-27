import React, { useState }  from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import img1 from "../img/mailchimp.png"
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { SlGlobeAlt } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa";
import { Container,Row,Col } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";
import email from '../img/email.avif'
import automation from '../img/automation.avif'
import audience from '../img/audience.avif'
import ai from '../img/ai.avif'
import website from '../img/website.avif'
import analytics from '../img/analytics.avif'
import nib from '../img/nib.avif'
import media from '../img/media.avif'
import features from '../img/features.avif'
import templates from '../img/templates.avif'
import shopify from '../img/shopify.avif'
import wix from '../img/wix.avif'
import salesforce from '../img/saleforce.avif'
import canva from '../img/canva.avif'
import woo from '../img/woo.avif'
import intuit from '../img/Intuitimg.svg'
import quickbooks from '../img/QuickBooksimg.svg'
import mailchimp from '../img/Mailchimpimg.svg'
import msg from '../img/msg.avif'
import star from '../img/star.avif'
import calender from '../img/calender.avif'

const Header = () => {

const [menuOpen,setMenuOpen]=useState(false)
const [drop,setDrop]=useState(false)
const [resourceDrop,setResourceDrop]=useState(false)


  return (
    <>


<div className="topnav">
  <img src={intuit} alt=""  className='intuit1' />
  <img src={quickbooks} alt="" className='intuit1' />
  <img src={mailchimp} alt="" className='intuit1' />
</div>


  <div className="firstnav">
     <p className='try'>Try Mailchimp and save 25% for 12 months. <span className='start'> Start today.</span> </p>
   </div>


<div className="bignavbar">


<div className="logo">
<NavLink className="image"><img src={img1} alt=""  className='img1'/></NavLink>
</div>

<div className="bar" onClick={()=>{
  setMenuOpen(!menuOpen)

}}>
   <span className='lines'></span>
   <span className='lines'></span>
   <span className='lines'></span>
 </div>



<div  id='subnavbar' className={menuOpen ? "open":""} >

<div className="nav1">

<div className="services" id='hover' onClick={()=>{
  setDrop(!drop)
  }}>
<NavLink className=" solution">Solutions and Services
<IoChevronDown/></NavLink>

<div id="drop" className={drop ? "dropopen" : ""} >

<Container>
  <Row>

<Col lg={8} className='firsthalf'>

<Container fluid >
 <div className="services2 mt-4">
  <p className='subser marketing1'>Solutions and Services</p>
  <div className="check">
    <p className="checkout">See what's new</p>
    <FaArrowRightLong  className='arrowicon2'/>
</div>
 </div>

<Row className='mt-4'>
<Col sm={12} lg={4}>
<div className="bigmailbox">
<div className="mailbox">
  <div className="mailicon">
<img src={email} alt="" />
</div>
<div className="emailpara">
  <p className="mail">Email marketing</p>
  <p className='box'>Send personalized emails that convert</p>
</div>
</div>
</div>
</Col>


<Col sm={12} lg={4}>
<div className="bigmailbox">
<div className="mailbox">
  <div className="mailicon">
  <img src={automation} alt="" />
</div>
<div className="emailpara">
  <p className="mail">Marketing automation</p>
  <p className='box'>Deliver the right message at the right time</p>
</div>
</div>
</div>
</Col>


<Col sm={12} lg={4}>
<div className="bigmailbox">
<div className="mailbox">
  <div className="mailicon">
  <img src={ai} alt="" />
</div>
<div className="emailpara">
  <p className="mail">AI marketing tools</p>
  <p className='box'>Say hello to your AI growth assistant</p>
</div>
</div>
</div>
</Col>


</Row>




<Row className='mt-3'>


<Col sm={12} lg={4}>
<div className="bigmailbox">
<div className="mailbox">
  <div className="mailicon">
  <img src={website} alt="" />
</div>
<div className="emailpara">
  <p className="mail">
Websites
</p>
  <p className='box'>Create your branded web presence</p>
</div>
</div>
</div>
</Col>


<Col sm={12} lg={4}>
<div className="bigmailbox">
<div className="mailbox">
  <div className="mailicon">
  <img src={analytics} alt="" />
</div>
<div className="emailpara">
  <p className="mail">
Reporting & analytics
</p>
  <p className='box'>Track sales & campaign performance</p>
</div>
</div>
</div>
</Col>


<Col sm={12} lg={4}>
<div className="bigmailbox">
<div className="mailbox">
  <div className="mailicon">
  <img src={nib} alt="" />
</div>
<div className="emailpara">
  <p className="mail">
Content Creation Tools
</p>
  <p className='box'>Build content that captivates and converts</p>
</div>
</div>
</div>
</Col>



</Row>



<Row className='mt-3'>


<Col sm={12} lg={4}>
<div className="bigmailbox">
<div className="mailbox">
  <div className="mailicon">
  <img src={media} alt="" />
</div>
<div className="emailpara">
  <p className="mail">

  Social media marketing
</p>
  <p className='box'>Amplify the conversation across multiple channels
  </p>
</div>
</div>
</div>
</Col>


<Col sm={12} lg={4}>
<div className="bigmailbox">
<div className="mailbox">
  <div className="mailicon">
  <img src={audience} alt="" />

</div>
<div className="emailpara">
  <p className="mail">
  Audience management
</p>
  <p className='box'>Target and segment customers</p>
</div>
</div>
</div>
</Col>


<Col sm={12} lg={4}>
<div className="bigmailbox">
<div className="mailbox">
  <div className="mailicon">
  <img src={features} alt="" />
</div>
<div className="emailpara">
  <p className="mail">
  See all features
</p>
  <p className='box'>See all our product offerings in one place</p>
</div>
</div>
</div>
</Col> 



</Row>

<Row className='mt-3'>
  <Col sm={12} lg={4}>
  <div className="bigmailbox">
<div className="mailbox">
  <div className="mailicon3">
  <img src={templates} alt="" />
</div>
<div className="emailpara">
  <p className="mail">
 
Templates
</p>
  <p className='box'>Customize pre-designed <br /> layouts
  </p>
</div>
</div>
</div>
  </Col>
</Row>


<Row>

<div className="apps mt-5">
  <p className='integrate'>INTEGRATE YOUR APPS</p>
  <p className="three">See 300+ integrations</p>
</div>

</Row>

<Row className='mb-5'>

<div className="photos mt-5 ">
  <div className='shopify' id='appimg'><img src={shopify} alt="" /><p className='name mt-3'>Shopify</p></div>
  <div className='wix' id='appimg'><img src={wix} alt="" /><p className='name mt-3'>Wix</p></div>
  <div className='salesforce' id='appimg'><img src={salesforce} alt="" /><p className='name mt-3'>Salesforce</p></div>
  <div className='canva' id='appimg'><img src={canva} alt="" /><p className='name mt-3'>Canva</p></div>
  <div className='woo' id='appimg'><img src={woo} alt="" /><p className='name mt-3'>Woo</p></div>
</div>

</Row>


</Container>


</Col>


<Col lg={4} className='secondhalf'>

<div className="bigindustry">
 <div className="industry">
<p className="indhead">FOR YOUR INDUSTRY</p>
<p className="indsub">E-commerce and retail</p>
<p className="indsub">Service-based Business</p>
<p className="indsub">Mobile and web apps</p>
<p className="indsub">Start-ups</p>
<p className="indsub">Agencies and freelancers</p>
<p className="indsub">Developers</p>
 </div>

 <div className="proservice">
 <p className="indhead">PROFESSIONAL SERVICES</p>
<p className="indsub">Hire an Expert</p>
<p className="indsub">Personalized onboarding</p>
<p className="indsub">Customer success</p>
 </div>
 </div>
</Col>

  </Row>
</Container>


</div>

</div>
{/* "services"   */}
<div className="services"
id='hover' onClick={()=>{
  setResourceDrop(!resourceDrop)  
}}>
<NavLink className=" solution">Resources
<IoChevronDown /></NavLink>

<div id="resourcesdrop" className={resourceDrop ? "sourceopen":""}>

<Container fluid className='mark'>
<Row>
  <Col lg={8} className='p-5'>

  <div className="services2 mt-2">
  <p className='subser marketing1'>Resources</p>
  <div className="check">
    <p className="checkout">See all resources</p>
    <FaArrowRightLong  className='arrowicon2'/>
</div>
 </div>

 <Container fluid className='bg-white'>
  <Row className='mt-5 '>
    <Col lg={4} className='p-0 subres'>
   
 <div className="industry1">
<p className="indhead1">LEARN WITH MAILCHIMP</p>
<p className="indsub1">E-commerce</p>
<p className="indsub1">Digital content</p>
<p className="indsub1">Marketing automations</p>
<p className="indsub1">Audience management</p>
<p className="indsub1">Websites</p>
<p className="indsub1">Email marketing</p>
<p className="indsub1">Social media</p>
 </div> 
    </Col>
    <Col lg={4} className='subres'>
    <div className="industry1">
<p className="indhead1">MAILCHIMP PRESENTS</p>
<p className="indsub1">Podcasts</p>
<p className="indsub1">Series</p>
<p className="indsub1">Films</p>
</div>
    </Col>
    <Col lg={4} className='subres'>
    <div className="industry1">
<p className="indhead1">FOR DEVELOPERS</p>
<p className="indsub1">Marketing API</p>
<p className="indsub1">Transactional API</p>
<p className="indsub1">Release notes</p>
<p className="indsub1">Transactional email</p>
</div>
    </Col>
  </Row>
 </Container>


  </Col>
  

  <Col lg={4} className=' bigmsg p-5'>
<div className="mt-2">
<div className="msgbox2 mt-3"><img src={msg} alt="" className='icons2' /><p className="msgtxt">Help Center</p></div>
<div className="msgbox2 mt-4"><img src={star} alt="" className='icons2' /><p className="msgtxt">Case Studies</p></div>
<div className="msgbox2 mt-4"><img src={calender} alt=""  className='icons2'/><p className="msgtxt">Events</p></div>
</div>

<div className="industry1 mt-5">
<p className="indhead1">PROFESSIONAL SERVICES</p>
<p className="indsub1">Hire an Expert</p>
<p className="indsub1">Personalized onboarding</p>
<p className="indsub1">Customer success</p>
</div>
  </Col>
</Row>
</Container>

</div>





</div>


<NavLink id='hover'  to='../switchtomailchimp'><p className="mailchimp ">Switch to Mailchimp</p></NavLink>
<NavLink id='hover' ><p className="pricing">Pricing</p></NavLink>

</div>



<div className="nav2">

<div className="searchdiv " id='hover'>
 <IoSearch className='search'/>
 </div>

 <div className="en " id='hover'>
 <SlGlobeAlt  className='globe'/>
 <p className="en1">EN</p>
 <FaCaretDown  className='downarr'/>
 </div>

 <NavLink  id='hover'>
   <p className='no'>
   Sales: +1 (800) 315-5939</p>
 </NavLink>

<div className="bigbtn">
 <NavLink to="../login "><button className="btn1">
     Log In
 </button>
  </NavLink>
  </div>


  <div className="bigbtn">
  <NavLink to="../signup"><button className="btn2">
     Sign Up
  </button>
 </NavLink>
</div>

</div>


</div>
</div>



    </>
  )
}

export default Header