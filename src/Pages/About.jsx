import React from 'react'
import HelpBanner from '../Components/HomeHelp'
import BlogSection from '../Components/HomeBlogs'
import TeamSection from '../Components/HomeTeam'
import RoadConstruction from '../Components/HomeAbout'
import AboutBanner from '../Components/AboutBanner'

const About = () => {
  return (
    <div>
      <AboutBanner/>
      <RoadConstruction/>
      <TeamSection/>
      <BlogSection/>
      <HelpBanner/>
    </div>
  )
}

export default About
