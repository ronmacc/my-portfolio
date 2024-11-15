"use client";

import { navItems } from "@/data";
import { FloatingNav } from '@/components/ui/FloatingNav';
import Hero from '../components/Hero';
import { FaHome } from 'react-icons/fa';
import Grid from '@/components/Grid';
import { useEffect } from 'react';
import RecentProjects from "@/components/RecentProjects";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer /> */}
      </div>
    </main>
  );
};

export default Home;