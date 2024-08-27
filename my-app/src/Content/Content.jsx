import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css'
import { Container, Row, Col, NavLink  } from 'react-bootstrap';
import introimg from '../img/introimg1.avif'
import introimg2 from '../img/introimg2.avif'
import introimg3 from '../img/introimg3.png'
import introvideo4 from '../img/introvideo4.mp4'
import handimg from '../img/handimg.avif'
import introimg5 from '../img/introimg5.avif'
import introimg6 from '../img/introimg6.avif'
import { FaArrowRightLong } from "react-icons/fa6";
import {
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Content = () => {

  const items2 = [
    {
      key: "1",
      label:
        "Am I eligible for this project?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          Yes! Those who are interested in computer science are eligible. Even beginners can also enroll in this project.
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "How much time does it take to complete the project?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          It takes around 7 to 10 classes to learn and execute it and then to complete the project. Each class will be around 2 to 3 hours.
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Can we do the project on our own?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          The answer is yes. If you are interested in doing the projects on your own you can share the idea so that our experts will guide you to execute the project and get succeeded.
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label:
        "Is it hard to learn and complete the project?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          It is not so hard to complete the project. If we understand the basic principles then it is very easy to complete it.
          </div>
        </div>
      ),
    },
    {
      key: "5",
      label:
        "Do we need to join as a team or individually?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          It’s purely your wish. You can join as a team or you can join individually too. We can train all the students with proper technical assistance.
          </div>
        </div>
      ),
    },
    {
      key: "6",
      label: "Who will clarify my doubts?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          No need to worry about doubts. You can ask doubts until you get clear on topics both online and offline.
          </div>
        </div>
      ),
    },
  ];
  





  return (
    <>

<Header/>

<Container fluid className='content1'>


<Container fluid className='subcontent1 '>
<Row className='col mt-2 mb-5'>




<Col lg={6} className=''>

<p className='sub1'>WEBSITE BUILDER</p>
<p className='sub2'>Create a website for free</p>
<p className='sub3'>Design and simplicity are at the core of our website builder. Easily create, customize, and promote a stunning website that's search engine ready all on your own with the power of Mailchimp’s platform.</p>
<div className="bigbtn mt-5" style={{width:"fit-content"}}>
 <NavLink><button className="btn2">
 Start Building For Free
 </button>
  </NavLink>
  </div>
</Col>


<Col lg={6}>

<div className="introimg">
    <img src={introimg} alt="" />
</div>

</Col>




</Row>
</Container>
</Container>


<Container fluid>

<Row>

<Col sm={12} className='p-4'>

<div className="heading2 text-center">

<p className="subhead m-0">Brilliant web design, simplified</p>
<p className="subhead2 mt-3">Our website builder helps bring your unique vision to life—no design or code experience required. Create a customizable, mobile-optimized website within the hour. All you need to start is a domain name and a vision for your website. If you're building a small business website, online store, or otherwise, Mailchimp can simplify the process.</p>

</div>
</Col>

</Row>

</Container>



<Container >
<Row  className='col'>
<Col lg={6}>
 
<img src={introimg2} alt="" style={{width:"100%"}}/>

</Col>


<Col lg={6}>


<p className='sub4 mb-3'>Curate your look and feel</p>
<p className='sub5'>It's easy to build a beautiful site by applying one of our pre-designed color palettes and themes in just a few clicks. Ease-of-use is at the forefront of our website builder. You can even tailor your color palette to your brand for a professional-looking website template.</p>
<div className="bigbtn mt-5" style={{width:"fit-content"}}>
 <NavLink><button className="btn1">
 Start Styling
 </button>
  </NavLink>
  </div>

</Col>
</Row>
</Container>





<Container >
<Row  className='col mt-4'>
<Col lg={6}>
 
<img src={introimg3} alt="" style={{width:"100%"}}/>

</Col>


<Col lg={6}>


<p className='sub4 mb-3'>Customize your new website layout</p>
<p className='sub5'>Mailchimp's website builder has pre-built, professional layouts for every section, so you can quickly change the structure of your site as much as you like without any coding knowledge.</p>
<div className="bigbtn mt-5" style={{width:"fit-content"}}>
<button className="btn1 ">
 Start building your own website
</button>
</div>
</Col>
</Row>
</Container>





<Container >
<Row  className='col mt-4'>
<Col lg={6}>

<video  loop muted autoPlay src={introvideo4} ></video>

</Col>


<Col lg={6}>


<p className='sub4 mb-3'>See your edits in real time</p>
<p className='sub5'>Edit, add a section, resize images, and undo it all right from the page—so you don’t have to leave the editor to make changes. We've made building your own website as easy as possible so that you can integrate your business successfully.</p>
<div className="bigbtn mt-5" style={{width:"fit-content"}}>
<button className="btn1">
 Start Refining
</button>
</div>
</Col>
</Row>
</Container>





<Container fluid className='bgcontainer mt-5'>
<Container>

<Row  className=''>
<div className="heading2 text-center ">

<p className="subhead3">Promote your site and build an audience with our all-in-one platform</p>
<p className="subhead4 mt-3">We help you establish your brand, look like a pro, and rise the ranks of search engines using our easy-to-use website builder. Customize your website on a no-code platform so that you don't need to hire anyone else to help.</p>

</div>

</Row>
</Container>
</Container>



<Container>

<Row  >
<div className="heading2 text-center ">

<p className="subhead5">Reach more people with your Mailchimp website</p>
<p className="subhead6 mt-3">Grow and engage a bigger, higher quality customer base with intelligent tools that speak to an interested audience when they’re most willing to listen.</p>

</div>

</Row>
</Container>


<Container className='mt-4 mb-5'>
<Row>

<Col lg={4}>

<div className="learnmore1 text-center">

<p className="build">Built-In Forms</p>
<p className="para1">Capture the attention of your website visitors <br /> with a custom pop-up form.</p>
<p className='more1'>Learn more</p>

</div>

</Col>

<Col lg={4}>

<div className="learnmore1 text-center">

<p className="build">Behavioral Targeting</p>
<p className="para1">Send personalized emails to visitors based on <br /> how they interact with your site.</p>
<p className='more1'>Learn more</p>

</div>

</Col>

<Col lg={4}>

<div className="learnmore1 text-center">

<p className="build">Reports And Analytics</p>
<p className="para1">Use free reports to track the performance of <br /> your pages and refine as you go.</p>
<p className='more1'>Learn more</p>

</div>

</Col>

</Row>
</Container>

<div className="hand mt-3  ">
<img src={handimg} alt="" className='handimg ' />
<p className='para3 text-center '>With Mailchimp, you can create and publish a  stunning website in under an hour.</p>

</div>

<Container fluid className='content2  mb-5'>
</Container>
<Container fluid className='content3'>

<Container className='mt-5 '>
<Row className=''>
  <Col className='justify-content-center'>
  <img src={introimg5} alt="" className='heading4' />
  </Col>
</Row>

</Container>

<Container>
<Row>

<div className="startup justify-content-center text-center mt-5">
<p className='text-center news1'>“As a brand new startup, we used Mailchimp's website builder to get our story and business online quickly and easily. This intuitive builder makes trying out new ideas and adding updates straightforward and uncomplicated.”</p>
<p className='text-center new2'>Dr. Julie Durnan, Founder of The Ginger Agency</p>
</div>


</Row>

</Container>

  
</Container>



<Container >
<Row  className='col mt-4'>
<Col lg={6}>

<img src={introimg6} alt="" style={{width:"100%"}}/>
</Col>


<Col lg={6} >

<p className='sub4 mb-3'>Decide if Mailchimp is right for you</p>
<p className='sub5'>Check out how our website builder tools stack up against the competition.</p>
<div className="bigbtn mt-5" style={{width:"fit-content"}}>
<button className="btn1 ">
See How We Rate
</button>
</div>
</Col>
</Row>
</Container>





<Container className='mt-5 p-5 mb-5'>
<Row className=''>

<Col lg={6}>

<p className='explore ms-5'>Explore all the ways you can build a more effective website</p>


</Col>


<Col lg={6}>

<div className="bigdiv2">
<div className="question1">

<p  className='create'>How to Make a Website: A Guide for Building Your <br /> Website</p>
<span className='spa'>
<FaArrowRightLong className='arrowicon mb-2' />
</span>

</div>


<div className="question1 mt-3">

<p  className='create'>Website Design Tips for Non-Designers</p>
<FaArrowRightLong  className='arrowicon mb-2'/>

</div>


<div className="question1 mt-3">

<p  className='create'>A Checklist for Better Website SEO</p>
<FaArrowRightLong  className='arrowicon mb-2'/>

</div>


<div className="question1 mt-3">

<p className='create'>How to Create a Homepage That Drives Clicks</p>
<FaArrowRightLong  className='arrowicon mb-2'/>

</div>
</div>
</Col>

</Row>

<Row className='mt-5 align-items-center'>

<Col sm={3}>
<p className='faq'>FAQ</p>
</Col>

<Col sm={9}>

{/* <div className=" font-semibold  mb-2  faq1">
            
          </div> */}
          <div className='faq '>
            <Collapse
              
              items={items2}style={{padding:30}}
              expandIcon={({ isActive }) => (
                <div className=''>
                  {!isActive ? (
                    <PlusOutlined className="text-black plusicon " />
                  ) : (
                    <MinusOutlined className="text-black plusicon" />
                  )}
                </div>
              )}
              accordion
            />
          </div>
</Col>

</Row>

</Container>


<Container fluid className='yellowbox text-center'>


<Container className='p-5'>

<div className="newsite p-5 ">
<p className="ready">Ready to start building your new site?</p>

<p className="launch mt-1">Launch your website right away.</p>

<button className='transbtn mt-5'>Start Building For Free</button>
</div>



</Container>

</Container>


<Footer/>


    </>
  )
}

export default Content