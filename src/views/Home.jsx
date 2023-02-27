import { Comments, Hero, Loader, Section } from '../components';

export const Home = () => {
  return (
    <>
      <Section>
        <Hero
          title='What people are saying.'
          subtitle='Feedback from our customers.'
        />
        <Comments />
      </Section>
    </>
  );
};
