import { Fragment } from 'react';
import Container from '@mui/material/Container';
// CUSTOM PAGE SECTION COMPONENTS
import Section1 from '../section-1';
import Section2 from '../section-2';
import Section3 from '../section-3';
import Section4 from '../section-4';
import HeaderEffect from '@/layouts/root/HeaderEffect';
import Section5 from '../section-5/Section5';
export default function AboutUs1PageView() {
  return <div style={{ overflowX: 'hidden', padding: '0', margin: '0' }}> 
      {/* HERO SECTION */}
      <HeaderEffect>
        <Section1 />
      </HeaderEffect>

      <Container maxWidth="lg">
        {/* WHO ARE WE SECTION */}
        <Section2 />

        {/* MEET OUR TEAM SECTION */}
        <Section3 />
      </Container>

      {/* CUSTOMER SAYS SECTION */}
      <Section4 />

      {/* TRUSTED BY SECTION */}
      <Section5/>

    </div>;
}