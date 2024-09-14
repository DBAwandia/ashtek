import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
// MUI ICON COMPONENT
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// CUSTOM COMPONENTS
import ProgressItem from './ProgressItem';
import { Paragraph } from '@/components/typography';
import SectionTitle from '@/components/section-title';
// STYLED COMPONENT
import { ImageWrapper, ProgressWrapper } from './styles';

export default function Section2() {
  const handleSeeSolutionsClick = () => {
    alert('Coming Soon');
  };
  return (
    <div className="py-10">
      <Grid container spacing={3} alignItems="center">
        <Grid item xl={5} lg={4} xs={12}>
          <SectionTitle title="Who We Are" />

          <Paragraph fontSize={16} color="text.secondary" pr={7}>
            We specialize in connecting businesses with other businesses(B2B). Our platform simplifies
            the process for shops and retailers to collaborate, form partnerships, and expand their
            networks, creating new growth opportunities.
          </Paragraph>

          <ProgressWrapper>
            <ProgressItem title="Business Connections" value={85} />
            <ProgressItem title="Partnership Growth" value={75} />
            <ProgressItem title="Market Expansion" value={65} />
          </ProgressWrapper>

          <Button onClick={handleSeeSolutionsClick} variant="outlined" color="primary">
            See Our Solutions <KeyboardArrowRight />
          </Button>
        </Grid>

        <Grid item xl={7} lg={8} xs={12}>
          <ImageWrapper>
            <img src="/static/cover/about-1.jpg" alt="about" width="100%" />
            <img src="/static/cover/about-2.jpg" alt="about" width="100%" />
          </ImageWrapper>
        </Grid>
      </Grid>
    </div>
  );
}
