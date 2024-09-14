import Container from '@mui/material/Container';
// CUSTOM COMPONENTS
import Carousel from '@/components/carousel';
import { Paragraph } from '@/components/typography';
import SectionTitle from '@/components/section-title';
// STYLED COMPONENTS
import { StyledRoot, TestimonialItem } from './styles';

export default function Section4() {
  return (
    <StyledRoot>
      <Container maxWidth="lg">
        <SectionTitle centered title="What Our Partners Say" mb={6} />

        <Carousel grabCursor pagination slidesPerView={1}>
          {[1, 2, 3].map((item) => (
            <TestimonialItem key={item}>
              <img src="/static/quotation.svg" alt="Quotation" />

              <p className="review-text">
                This platform has transformed how we connect with other businesses. We've easily
                found new suppliers and partners, streamlining our operations and driving growth.
              </p>

              <div className="reviewer-img">
                <img src="/static/user/user-24.png" alt="Reviewer" width="100%" />
              </div>

              <Paragraph fontWeight={600} fontSize={18}>
                Lucian Obrien
              </Paragraph>

              <Paragraph color="text.secondary">Partnership Manager, Retail Co.</Paragraph>
            </TestimonialItem>
          ))}
        </Carousel>
      </Container>
    </StyledRoot>
  );
}
