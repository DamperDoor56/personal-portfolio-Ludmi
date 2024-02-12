import React from 'react';
import TextArraysAnimation from '../components/TextArraysAnimation';

export default {
  title: "Example Text Arrays Animation",
  component: TextArraysAnimation,
  tags: ["autodocs"],
};
// Default story, showing the component with various roles
export const Default = () => (
  <TextArraysAnimation texts={['FrontEnd Developer', 'Software Developer', 'BackEnd Developer']} delay={1000} />
);

// Custom story, showing the component with specific roles
export const CustomRoles = () => (
  <TextArraysAnimation texts={['UI/UX Designer', 'Full Stack Developer', 'Data Scientist']} delay={5000} />
);

// Custom story, showing the component with a single role
export const SingleRole = () => <TextArraysAnimation texts={['Web Developer']} delay={300} />;
