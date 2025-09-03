// Design tokens for consistent styling across the portfolio

export const colors = {
  // Soft modern palette
  primary: '#b7c8b6',      // Sage green
  secondary: '#f4ede5',     // Soft cream/beige
  tertiary: '#e7b7ad',      // Soft coral/pink
  quaternary: '#e7d5bd',    // Warm beige
  quinary: '#c6a5c2',       // Muted purple/mauve
  
  background: {
    sage: '#b7c8b6',
    cream: '#f4ede5',
    coral: '#e7b7ad',
    beige: '#e7d5bd',
    mauve: '#c6a5c2',
    white: '#ffffff',
    offWhite: '#fafafa',
  },
  
  text: {
    primary: '#2c2c2c',
    secondary: '#4a4a4a',
    light: '#ffffff',
    muted: '#666666',
    dark: '#1a1a1a',
    accent: '#8b7355',
  },
  
  accent: {
    sageGradient: 'linear-gradient(135deg, #b7c8b6, #a8b9a7)',
    coralGradient: 'linear-gradient(135deg, #e7b7ad, #f2c5bb)',
    softGradient: 'linear-gradient(135deg, #f4ede5, #e7d5bd)',
    organicWave: 'radial-gradient(ellipse at center, #f4ede5 0%, #e7b7ad 100%)',
  }
};

export const typography = {
  fontFamily: {
    heading: "'Montserrat', sans-serif",
    body: "'Hind', sans-serif",
  },
  fontSize: {
    // Headings
    h1: '48px',
    h2: '42px', 
    h3: '24px',
    // Body text
    large: '18px',
    medium: '16px',
    small: '14px',
    // Mobile adjustments
    mobile: {
      h1: '36px',
      h2: '32px',
      h3: '20px',
    }
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.6,
    relaxed: 1.8,
  }
};

export const spacing = {
  // Standard spacing scale
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px',
  section: '128px',
  // Padding presets
  sectionPadding: '128px 16px',
  sectionPaddingMobile: '80px 16px',
};

export const borderRadius = {
  small: '8px',
  medium: '12px',
  large: '16px',
  pill: '20px',
  circle: '50%',
};

export const shadows = {
  light: '0 4px 20px rgba(0, 0, 0, 0.08)',
  medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
  colored: '0 2px 8px rgba(233, 95, 77, 0.3)',
};

export const breakpoints = {
  mobile: '600px',
  tablet: '768px',
  desktop: '1200px',
};

export const animations = {
  transition: {
    fast: '0.2s ease',
    normal: '0.3s ease',
    slow: '0.6s ease',
  },
  hover: {
    lift: 'transform: translateY(-2px)',
  }
};