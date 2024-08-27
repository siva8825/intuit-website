import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
import { Container } from 'react-bootstrap';
import introimg7 from '../img/introimg7.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import intuitimg from '../img/Intuitimg.svg'
import turbotaximg from '../img/TurboTaximg.svg'
import CreditKarmaimg from '../img/CreditKarmaimg.svg'
import QuickBooksimg from '../img/QuickBooksimg.svg'
import Mailchimpimg from '../img/Mailchimpimg.svg'
import apple from '../img/apple.svg'
import playstore from '../img/playstore.svg'
import facebook from '../img/facebook.svg'
import twitter from '../img/twitter.svg'
import instagram from '../img/instagram.svg'
import linkedin  from '../img/linkedin.svg'
import youtube from '../img/youtube.svg'
import pinterest from '../img/pinterest.svg'
import tools from '../img/tools.svg'
import { BiMessageRounded } from "react-icons/bi";



const Footer = () => {
  return (
    <>
 
<div className="brownbg">




<Container fluid className='containerborder'>

<Container >

<div className="greatlinks p-5">

<p className='links'>Related Links:</p>
<p className='web'><a href="#home">How to Build a Great Website </a></p>
<p className='web'><a href="#home">How to Build a Website from Scratch with No Experience </a></p>
<p className='web'><a href="#website builder">Website Builder</a></p>
</div>

</Container>
</Container>


<Container fluid className='containerborder'>
<Container className='p-5 '>

<div className="bigfootbox">

<div className="footcontent ">
    <p className="product">Products</p>
<div className="productdetailes mt-4">
<p className='web '>Why Mailchimp?</p>
<p className='web'>Product Updates</p>
<p className='web'>Email Marketing</p>
<p className='web'>Websites</p>
<p className='web'>Transactional Email</p>
<p className='web'>How We Compare</p>
<p className='web'>GDPR Compliance</p>
<p className='web'>Security</p>
<p className='web'>Status</p>
<p className='web'>Mobile App</p>
</div>

</div>




<div className="footcontent">
    <p className="product">Resources</p>
    <div className="productdetailes mt-4">

<p className='web'>Marketing Library</p>
<p className='web'>Free Marketing Tools</p>
<p className='web'>Marketing Glossary</p>
<p className='web'>Integrations Directory</p>
</div>

</div>

<div className="footcontent">
    <p className="product">Community</p>
    <div className="productdetailes mt-4">

<p className='web'>Agencies & Freelancers</p>
<p className='web'>Developers</p>
<p className='web'>Events</p>

</div>
</div>


<div className="footcontent">
    <p className="product">Company</p>
    <div className="productdetailes mt-4">

<p className='web'>Our Story</p>
<p className='web'>Newsroom</p>
<p className='web'>Give Where You Live</p>
<p className='web'>Careers</p>
<p className='web'>Accessibility</p>

</div>

</div>

<div className="footcontent">
    <p className="product">Help</p>
    <div className="productdetailes mt-4">

<p className='web'>Contact Us</p>
<p className='web'>Hire an Expert</p>
<p className='web'>Help Center</p>
<p className='web'>Talk to Sales</p>
</div>

</div>

<div className="mailchimp">
    <img src={introimg7} alt=""  className='introimg7'/>
<div className="productdetailes mt-4">
<p className="imgpara">Films, podcasts, and original series that celebrate the entrepreneurial spirit.</p>
<div className="check">
    <p className="checkout">Check it out</p>
    <FaArrowRightLong  className='arrowicon2'/>

</div>

</div>
</div>


</div>


</Container>

</Container>






<Container className='p-5'>

<div className="Bigintuit">


<img src={intuitimg} alt="" className="intuitimg " sm={12}/>

<img src={turbotaximg} alt="" className="turbotaximg" />

<img src={CreditKarmaimg} alt="" className="CreditKarmaimg" />

<img src={QuickBooksimg} alt="" className="QuickBooksimg" />

<img src={Mailchimpimg} alt="" className="Mailchimpimg" />


</div>

<div className="bigintuit2 mt-5">

<div className="appleplay ">
<img src={apple} alt=""  className='footimages'/>
<img src={playstore} alt=""  className='footimages'  />
</div>

<div className="socialmedia ">
<img src={facebook} alt="" className='socialimg' />
<img src={twitter} alt="" className='socialimg'  />
<img src={instagram} alt="" className='socialimg'  />
<img src={linkedin} alt=""  className='socialimg' />
<img src={youtube} alt="" className='socialimg' />
<img src={pinterest} alt="" className='socialimg'  />
<img src={tools} alt=""  className='socialimg me-5' />
</div>

</div>


<div className="inputpara mt-5 ">

<input type="text" placeholder='English'  />
<p className='lastpara'>©2001-2024 All Rights Reserved. Mailchimp® is a registered trademark of The Rocket Science Group. Apple and the Apple logo are trademarks of Apple Inc. Mac App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google Inc. <span className='span'> Privacy </span>|<span className='span'> Terms </span>|<span className='span'> Legal </span>|<span className='span'> Cookie Preferences</span></p>

</div>


</Container>












</div>

<div className="chat ">
  <button className="chatbtn">
  <BiMessageRounded  className='chaticon'/>
    Chat With Us</button>
</div>

    
    </>
  )
}

export default Footer