// Import the necessary libraries
import React from 'react';
import MainLayout from '@/components/layouts/MainLayout';

// Define the page component
const Employers: React.FC = () => (
  <MainLayout>
    <div className="container mx-auto">
      <h1 className="gradient-text mt-12 pr-28 text-3xl font-bold uppercase tracking-tighter">For Employers</h1>

      <section>
        <h2 className="text-2xl mt-8 font-medium tracking-tighter">Why Partner With Us?</h2>
        <p className='mt-2 tracking-tight'>
          As your trusted partner, we provide quality talent to help your business grow and thrive. We understand the market and the importance of filling your open positions with highly skilled individuals. 
        </p>
      </section>

      <section>
        <h2 className="text-2xl mt-8 font-medium tracking-tighter">Our Process</h2>
        <p className='mt-2 tracking-tight'>
          Our recruitment process is designed to understand your business needs, culture and what you seek in potential candidates. This allows us to identify and select only the most suitable candidates for your consideration.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mt-8 font-medium tracking-tighter">Sectors We Cover</h2>
        <p className='mt-2 tracking-tight'>
          We cover a wide range of sectors including IT, Finance, Healthcare, Engineering, Manufacturing and more. Whatever your sector, we can find the right people for your team.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mt-8 font-medium tracking-tighter">Get In Touch</h2>
        <p className='mt-2 tracking-tight'>
          Ready to fill your vacancies with top talent? Contact us at <span className="text-yellow-300">globicareers.info@gmail.com or call us at +370 65 760 155.</span> We look forward to partnering with you!
        </p>
      </section>
    </div>
  </MainLayout>
);

// Export the page component
export default Employers;