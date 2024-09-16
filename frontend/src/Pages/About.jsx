import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title text-5xl md:text-7xl font-bold text-gray-900 tracking-wide uppercase relative">
  HI + HE
  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">HI + HE</span>
</h1>

      <div className="about-content">
        <div className="about-section">
          <h2 className="section-heading">Our Inspiration</h2>
          <p className="athiti-regular about-text">
            Welcome to HI + HE, a clothing brand inspired by a profound sense of purpose and divine calling. Our name, which stands for <strong>Humility in Human Endeavors</strong>, is a tribute to the timeless lessons of the Tower of Babel—a reminder that, without divine guidance and blessing, even our most ambitious efforts can lead to confusion and discord.
          </p>
        </div>
        <div className="about-section">
          <h2 className="section-heading">Our Philosophy</h2>
          <p className="athiti-regular about-text">
            At HI + HE, we believe that true success is rooted in humility. Our mission is to approach every project and ambition with a heart open to guidance, recognizing that our greatest achievements come not from our own strength alone but from a higher source. Each piece of our collection is designed with this ethos in mind, serving as a daily reminder of the balance between ambition and reverence.
          </p>
        </div>
        <div className="about-section">
          <h2 className="section-heading">Join Us</h2>
          <p className="athiti-regular about-text">
            Thank you for joining us on this journey. As you wear our clothing, may it inspire you to pursue your endeavors with humility, and may it remind you of the importance of seeking and embracing divine wisdom in all aspects of life.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
