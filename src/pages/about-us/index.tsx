// Import the necessary libraries
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

// Define the page component
const AboutUs: React.FC = () => (
  <MainLayout>
    <div className="container mx-auto">
      <h1 className="gradient-text mt-12 pr-28 text-3xl font-bold uppercase tracking-tighter">About Us</h1>

      <section>
        <h2 className="text-2xl mt-8 font-medium tracking-tighter">Our Mission</h2>
        <p className='mt-2 tracking-tight'>
          Our mission is to empower businesses with innovative technology solutions that drive growth and efficiency. We aim to be a trusted partner for our clients, delivering exceptional service and results.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mt-8 font-medium tracking-tighter">Our Team</h2>
        <p className='mt-2 tracking-tight'>
          We are a dedicated team of engineers, developers, and strategists passionate about technology. Our diverse backgrounds and experiences contribute to innovative, effective solutions for our clients.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mt-8 font-medium tracking-tighter">Our History</h2>
        <p className='mt-2 tracking-tight'>
          Founded in 2023, we have grown from a small team of engineers to a full-service technology company serving clients in various industries. Over the years, we have remained committed to quality, innovation, and customer satisfaction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mt-8 font-medium tracking-tighter">Contact Us</h2>
        <p className='mt-2 tracking-tight'>
          Interested in learning more about our services? Contact us at <span className="text-yellow-300">globicareers.info@gmail.com or call us at +370 65 760 155.</span> We look forward to working with you!
        </p>
      </section>
    </div>
  </MainLayout>
);

// Export the page component
export default AboutUs;