import { type NextPage } from "next";
import Head from "next/head";
import MainLayout from "@/components/layouts/MainLayout";
import ApplicationForm from "@/components/content/apply/ApplicationForm";

const Page: NextPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <h1 className="gradient-text mt-12 pr-28 text-3xl font-bold uppercase tracking-tighter">Applications</h1>

        <section>
          <h2 className="text-2xl mt-8 font-medium tracking-tighter">Want to work with us?</h2>
          <p className='mt-2 tracking-tight'>
            Please send your <span className="text-yellow-300">CV to globicareers.info@gmail.com</span>. We are always looking for talented individuals to join our team.
          </p>
        </section>

        <section>
          <h2 className="text-2xl mt-8 font-medium tracking-tighter">You can talk directly to one of our agents</h2>
          <p className='mt-2 tracking-tight'>
            If you want to discuss your application or have any questions, please call us at <span className="text-yellow-300">+370 65 760 155</span>.
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default Page;