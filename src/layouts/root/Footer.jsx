import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import styled from '@mui/material/styles/styled';
// CUSTOM COMPONENTS
import Link from '@/components/link';
import FlexBox from '@/components/flexbox/FlexBox';
import { Paragraph } from '@/components/typography';
// CUSTOM UTILS METHOD
import { isDark } from '@/utils/constants';

// STYLED COMPONENTS
const LinkList = styled('div')(({ theme }) => ({
  gap: 12,
  display: 'flex',
  flexDirection: 'column',
  a: {
    color: theme.palette.grey[isDark(theme) ? 300 : 700],
    textDecoration: 'none', // Ensure links do not have underlines
    ':hover': {
      color: theme.palette.primary.main,
    }
  }
}));
const StyledRoot = styled('div')(({ theme }) => ({
  paddingTop: '5rem',
  ...(isDark(theme) && {
    backgroundColor: theme.palette.grey[800]
  }),
  '& .divider': {
    marginTop: '6rem'
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '4rem',
    '& .divider': {
      marginTop: '3rem'
    }
  }
}));

export default function Footer() {
  return (
    <StyledRoot>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FlexBox alignItems="center" gap={1} mb={2}>
              <Box alt="logo" width={70} height={70} component="img" src="/static/logo/image.png" />

              <Paragraph fontSize={28} fontWeight={600}>
                Aytesh
              </Paragraph>
            </FlexBox>

            <Paragraph fontSize={16} lineHeight={1.7} fontWeight={500} color="text.secondary" pr={{ lg: 5, md: 2, xs: 0 }}>
              Aytesh is a leading platform offering tailored solutions for small businesses, empowering them with tools for growth and success.
            </Paragraph>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Paragraph mb={3} fontSize={20} fontWeight={600}>
              Services
            </Paragraph>

            <LinkList>
              <Link href="/consulting">Consulting</Link>
              <Link href="/marketing">Marketing</Link>
              <Link href="/sales">Sales Solutions</Link>
              <Link href="/support">Customer Support</Link>
              <Link href="/training">Training & Workshops</Link>
              <Link href="/custom-solutions">Custom Solutions</Link>
            </LinkList>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Paragraph mb={3} fontSize={20} fontWeight={600}>
              Resources
            </Paragraph>

            <LinkList>
              <Link href="/blog">Blog</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/whitepapers">Whitepapers</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/help-center">Help Center</Link>
            </LinkList>
          </Grid>

          <Grid item xs={12} sm={4} md={2}>
            <Paragraph mb={3} fontSize={20} fontWeight={600}>
              Company
            </Paragraph>

            <LinkList>
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </LinkList>
          </Grid>
        </Grid>
      </Container>

      <Divider className="divider" />

      <Paragraph py={5} textAlign="center" fontSize={16} fontWeight={500}>
        Copyright © {new Date().getFullYear()}{' '}
        <a href="https://Aytesh.com" target="_blank" rel="noreferrer">
          Aytesh
        </a>
        . All rights reserved
      </Paragraph>
    </StyledRoot>
  );
}
