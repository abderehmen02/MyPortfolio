"use client"

import { TypeAnimation } from 'react-type-animation';

export const HeroTextTyping = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'turning websites into real products is my calling ',
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        'Building exceptional web experiences using the MERN stack is my passion.',
        5000,
        'Crafting visually stunning interfaces with Material UI and Figma is my expertise.',
        5000,
        'Leveraging the power of Next.js to create lightning-fast, server-rendered applications.',
        5000 , 






        'Utilizing Git for efficient version control and seamless collaboration in development projects.',
        5000,
        'Bringing together cutting-edge technologies to develop innovative and impactful web products.',
        5000,
        'Ensuring high-quality code and adhering to industry best practices in web development.',
        5000 , 
        'Passionate about delivering exceptional user experiences through responsive and intuitive designs.'

      ]}
      wrapper="span"
      speed={50}
      omitDeletionAnimation={true}
      style={{  display: 'inline-block' }}
      repeat={1}
    />
  );
};