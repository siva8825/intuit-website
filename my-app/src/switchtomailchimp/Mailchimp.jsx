import React from 'react'
import './Mailchimp.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import mailchimp1 from '../img/mailchimp1.avif'
import { Container, Row, Col  } from 'react-bootstrap';
import { BiRightArrowAlt } from "react-icons/bi";
import intuitimg from '../img/Intuit_Assist2.avif'
import feature1 from '../img/feature1.avif'
import feature2 from '../img/feature2.avif'
import feature3 from '../img/feature3.avif'
import feature4 from '../img/feature4.avif'
import awards from '../img/awards.avif'
import { FaArrowRightLong } from "react-icons/fa6";
import compare1 from '../img/compare1.png'
import compare2 from '../img/compare2.png'
import compare3 from '../img/compare3.png'
import integrationimg from '../img/integrationimg.avif'
import dataimg from '../img/dataimg.avif'
import managerimg from '../img/mangerimg.avif'
import service1 from '../img/service1.avif'
import service2 from '../img/service2.avif'
import service3 from '../img/service3.avif'
import {
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Mailchimp = () => {

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
  ]

  return (
<>
<Header/>
<Container fluid className='content mb-5 ' >
<Row className='align-items-center  '>


<Col lg={6} >
<div className="switchtomailchimp">
<p className="switch">SWITCH TO MAILCHIMP</p>
<p className="marketing h1">Grow with the #1 email marketing and automations platform*</p>
<p className="features">Get powerful features in a platform that's affordable and easy to use—with onboarding support and resources to help you switch.</p>
<div className="switchbtns mt-5">

<div className="bigbtn" style={{width:"fit-content"}}>

    <button className="btn2">
Take to sales
    </button>
    </div>
   
    <div className="pricingoptions">
        <p className="option">See all pricing options</p>
       <BiRightArrowAlt className='arrowicon2'/>
    </div>
</div>
</div>
</Col>


<Col lg={6}>
<div className="escultraimg">
    <img src={mailchimp1} alt="" className="escultra img-fluid" />
</div>
</Col>


</Row>
</Container>


<Container fluid className='container2'>
<Row className=''>
<Col lg={4} className='mt-3'>
<p className="rating">11 million global users</p>
<p className="ratingpara">trust Mailchimp with their marketing</p>
</Col>

<Col lg={4} className='mt-3'>
<p className="rating">4.5/5 star rating</p>
<p className="ratingpara">based on Capterra reviews for ease of use, customer service, features, value, and more*</p>
</Col>

<Col lg={4} className='mt-3'>
<p className="rating">89% of customers agree</p>
<p className="ratingpara">our personalized onboarding service made it easy for them to onboard to the platform*</p>
</Col>
  </Row>

</Container>
 

<Container fluid className='container3'>
<Row>
  <Col lg={6}>
  <div className="intuitassist">
    <img src={intuitimg} alt="" />
  </div>
  </Col>
  <Col lg={6}>
  <div className="intuit">
    <p className="marketing h1 mb-4">Let Intuit Assist help you personalize your marketing at scale*</p>
    <p className="intuitpara2 mb-4">Mailchimp uses generative AI to automate manual marketing tasks—such as writing a first draft or visualizing data. This can help you boost customer engagement and drive higher conversion.</p>
    <div className="pricingoptions">
      <p className="option">Explore AI marketing tools</p>
      <BiRightArrowAlt className='arrowicon2'/>
    </div>
  </div>
  </Col>
</Row>
</Container>







<Container fluid className='container5' >
<Row>
  <p className="marketing h1 mb-4">Explore the key features of Mailchimp</p>
  <Col lg={3}>
  
<div className="features">
<img src={feature1} alt="" />

<div className="featurehead">
  <p className="market">Marketing automations</p>
  <FaArrowRightLong className='arrowicon3'/>
</div>

<p className="featurepara">Unlock the power of marketing automations to streamline and optimize your campaigns, saving time and maximizing your reach.</p>

</div>

  </Col>
  <Col lg={3}>

  <div className="features">
<img src={feature2} alt="" />
<div className="featurehead">
  <p className="market">Reporting & analytics</p>
  <FaArrowRightLong className='arrowicon3'/>
</div>

<p className="featurepara">Gain valuable insights and make data-driven decisions through reporting and analytics, enabling you to maximize the success of your marketing efforts.</p>


</div>
  
  </Col>
  <Col lg={3}>

  <div className="features">
<img src={feature3} alt="" />
<div className="featurehead">
  <p className="market">Audience management</p>
  <FaArrowRightLong className='arrowicon3'/>
</div>
<p className="featurepara">Effectively segment your audience to deliver personalized and targeted messages that resonate, to help lead to higher engagement and conversion rates.</p>


</div>
  
  </Col>
  <Col lg={3}>

  <div className="features">
<img src={feature4} alt="" />
<div className="featurehead">
  <p className="market">Content creation</p>
  <FaArrowRightLong className='arrowicon3'/>
</div>

<p className="featurepara">Streamline content creation with customizable templates and tools, resulting in content that visually engages your audience.</p>

</div>
  
  </Col>

</Row>

</Container>


<Container fluid >
<Row className='align-items-center'>
  <Col lang={6}>
  <div className="awards">
    <img src={awards} alt="" className="awardimg" />
  </div>
  </Col>

  <Col lg={6}>
  <div className="comparision ">
    <p className="marketing h1">See why 11M+ users chose Mailchimp</p>
    <p className="comparepara2">Our users leverage data-driven tools to help them learn what works, improve future campaigns, and turn insights into action.</p>
    <p className="comparepara3 mt-3">Source: <span className='span4'> G2.com, Inc </span></p>
<div className="bigbtn mt-5" style={{width:"fit-content"}}><button className="btn1 ">See how we compare</button></div>
  </div>
  
  </Col>
</Row>
</Container>



<Container fluid className='container7'>

<Row>
  <p className="marketing h1 mt-3">How we compare</p>
<Col lg={4}>
<div className="compare">

<img src={compare1} alt="" />
<p className="comparehead mt-4">Mailchimp vs Klaviyo</p>
<p className="comparebody mt-3">Klaviyo can cost twice as much as Mailchimp, but offers less support and fewer marketing channels and features for the same audience count.*</p>
<div className="pricingoptions mt-5">
        <p className="option">Learn more</p>
       <BiRightArrowAlt className='arrowicon2'/>
    </div>
    
</div>


</Col>
<Col lg={4}>
<div className="compare">

<img src={compare2} alt="" />
<p className="comparehead mt-4">Mailchimp vs Klaviyo</p>
<p className="comparebody mt-3">Klaviyo can cost twice as much as Mailchimp, but offers less support and fewer marketing channels and features for the same audience count.*</p>
<div className="pricingoptions mt-5">
        <p className="option">Learn more</p>
       <BiRightArrowAlt className='arrowicon2'/>
    </div>

</div>

</Col>
<Col lg={4}>

<div className="compare">

<img src={compare3} alt="" />
<p className="comparehead mt-4">Mailchimp vs Klaviyo</p>
<p className="comparebody mt-3">Klaviyo can cost twice as much as Mailchimp, but offers less support and fewer marketing channels and features for the same audience count.*</p>
<div className="pricingoptions mt-5">
        <p className="option">Learn more</p>
       <BiRightArrowAlt className='arrowicon2'/>
    </div>

</div>

</Col>
</Row>

</Container>




<Container fluid className='container8'>
<Row className='align-items-center'>
  <Col lg={6}>
  <div className="intuit">
    <p className="marketing h1 mb-4">Minimize disruptions while you get started</p>
    <p className="intuitpara2 mb-4">With our integrations and open API, you can migrate data across multiple platforms. This empowers you to continue using the tools you already love.</p>
    <div className="pricingoptions">
      <p className="option">Explore integrations</p>
      <BiRightArrowAlt className='arrowicon2'/>
    </div>
  </div>
  </Col>
  <Col lg={6}>
  <div className="intuitassist">
    <img src={integrationimg} alt="" />
  </div>
  </Col>
</Row>
</Container>



<Container fluid className='container9'>
<Row className='align-items-center'>
<Col lg={6}>
  <div className="intuitassist">
    <img src={dataimg} alt="" />
  </div>
  </Col>
<Col lg={6}>
  <div className="intuit">
    <p className="marketing h1 mb-4">Moving your data is easy, and we can help</p>
    <p className="intuitpara2 mb-4">With a Standard or Premium plan, you get access to a team of experts who can help you get started quickly and ensure your existing data comes with you.*</p>
<div className="bigbtn mt-5" style={{width:"fit-content"}}><button className="btn2 ">Request a Demo</button></div>
  </div>
  </Col>
</Row>

</Container>


<Container fluid className='container10 text-center'>
  <Row>
    
    <div className="plan">
<p className="plan1">Start with confidence with our personalized onboarding—included with a Standard or Premium plan*</p>
<p className="plan2">We can help take the pressure off of learning a new platform, so you can deliver the personalized experiences that can convert more customers.</p>

    </div>


  </Row>
</Container>





<Container fluid className='container11'>
<Row className='align-items-center'>
  <Col lg={6}>
  <div className="intuitassist">
    <img src={managerimg} alt="" />
  </div>
  </Col>
  <Col lg={6}>
  <div className="intuit">
    <p className="marketing h1 mb-4">Get tailored guidance with a Customer Success Manager</p>
    <p className="intuitpara2 mb-4">Our Customer Success team can help develop a personalized marketing strategy so that you can reach your business goals.*</p>
    <div className="pricingoptions">
      <p className="option">Explore Customer Success</p>
      <BiRightArrowAlt className='arrowicon2'/>
    </div>
  </div>
  </Col>
</Row>
</Container>




<Container fluid className='container7'>

<Row>
<Col lg={4}>
<div className="compare">

<img src={service1} alt="" />
<p className="comparehead mt-4">Onboarding Services</p>
<p className="comparebody mt-3">An onboarding specialist can meet with you one-on-one to help you get started. Available with Standard and Premium plans for 90 days after account creation.</p>
<div className="pricingoptions mt-4">
        <p className="option">Explore Onboarding Services</p>
       <BiRightArrowAlt className='arrowicon2'/>
    </div>
    
</div>


</Col>                                   
<Col lg={4}>
<div className="compare">

<img src={service2} alt="" />
<p className="comparehead mt-4">24/7 Chat & Email Support</p>
<p className="comparebody mt-3">We offer award-winning on-demand service and support to help you get going—no matter the issue. Available with all paid plans.</p>
<div className="pricingoptions mt-5">
        <p className="option">Explore Support</p>
       <BiRightArrowAlt className='arrowicon2'/>
    </div>

</div>

</Col>
<Col lg={4}>

<div className="compare">

<img src={service3} alt="" />
<p className="comparehead mt-4">Mailchimp Experts</p>
<p className="comparebody mt-3">Hire a partner from our extended network for a range of services—from a quick template design to full-service campaign management.</p>
<div className="pricingoptions mt-5">
        <p className="option">Explore Mailchimp Experts</p>
       <BiRightArrowAlt className='arrowicon2'/>
    </div>

</div>

</Col>
</Row>

</Container>



<Container fluid className='container12 mt-5'>
  
<Row className=' align-items-center'>

<Col sm={3}>
<p className='faq2'>FAQ</p>
</Col>

<Col sm={9}>
          <div className='faq3'>
            <Collapse
              items={items2}
              expandIcon={({ isActive }) => (
                <div className='innerfaq'>
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

<Container fluid className='container5 text-center mt-5'>
<Row>
  <div className="demo ">
<p className="marketing h1">Ready to get started?</p>
<p className="demopara mt-3">Talk to our Sales team today to get started.</p>
<button className="btn2 mt-4">Request a Demo</button>
  </div>
</Row>

</Container>

<Footer/>

</>   
)
}

export default Mailchimp