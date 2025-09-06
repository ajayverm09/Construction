import React from 'react'
import RoadWorkerSection from '../Components/HomeHero'
import StatsSection from '../Components/HomeStats'
import CardSection from '../Components/HomeCard'
import RoadConstruction from '../Components/HomeAbout'
import ServiceCards from '../Components/HomeProject'
import RoadSteps from '../Components/Homeplan'
import ExpertTeamSection from '../Components/HomeTeam'
import TestimonialSlider from '../Components/HomeTestimonails'
import BlogSection from '../Components/HomeBlogs'
import HelpBanner from '../Components/HomeHelp'

const Home = () => {
  return (
    <div>
      <RoadWorkerSection/>
      <StatsSection/>
      <CardSection/>
      <RoadConstruction/>
      <ServiceCards/>
      <RoadSteps/>
      <ExpertTeamSection/>
      <TestimonialSlider/>
      <BlogSection/>
      <HelpBanner/>
    </div>
  )
}

export default Home
