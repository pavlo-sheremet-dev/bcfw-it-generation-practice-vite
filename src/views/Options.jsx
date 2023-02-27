import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Section, Hero, Form } from '../components';

export const Options = () => {
  return (
    <Section>
      <Hero
        title='What do you want to say'
        subtitle={'Write what you think about us.'}
      />

      <Form />

      <Toaster position='top-center' reverseOrder={false} />
    </Section>
  );
};
