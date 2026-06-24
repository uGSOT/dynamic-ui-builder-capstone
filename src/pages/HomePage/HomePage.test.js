// src/pages/homepage.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from './HomePage';

describe('HomePage Component Schema & Prop Tests', () => {

  it('should render the hero section with the updated inline marketing badge asset', () => {
    render(<HomePage />);
    
    // Check that the updated badge label prefix renders correctly
    expect(screen.getByText(/Next-Generation Low Code Schema Editor from/i)).toBeInTheDocument();
    
    // Verify that the brand image inside the badge exists and pulls from the dynamic configuration path
    const inlineLogo = screen.getByAltText('upGrad School of Technology');
    expect(inlineLogo).toBeInTheDocument();
    expect(inlineLogo.tagName).toBe('IMG');
    expect(inlineLogo).toHaveAttribute('src', '/assets/logos/ugsot.png');
  });

  it('should render the main Wix-style value proposition headlines properly', () => {
    render(<HomePage />);
    
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toHaveTextContent(/Create a Website Without Limits/i);
  });

  it('should verify the action CTA anchors are mapped exactly to builder and gallery target paths', () => {
    render(<HomePage />);
    
    const builderBtn = screen.getByRole('link', { name: /Start Building Instantly/i });
    const galleryBtn = screen.getByRole('link', { name: /See What's Possible/i });
    
    // Validate target route configurations match the project definitions
    expect(builderBtn).toHaveAttribute('href', '/builder');
    expect(galleryBtn).toHaveAttribute('href', '/gallery');
  });

  it('should render the dynamic live sandbox canvas simulation block', () => {
    render(<HomePage />);
    
    expect(screen.getByText('One platform. Absolute design flexibility.')).toBeInTheDocument();
    expect(screen.getByText('live-canvas-editor.json')).toBeInTheDocument();
    expect(screen.getByText('{ }')).toBeInTheDocument();
    
    const canvasCta = screen.getByRole('link', { name: /Open Canvas Interface/i });
    expect(canvasCta).toHaveAttribute('href', '/builder');
  });

  it('should correctly loop and render all features mapped in the structural props matrix array', () => {
    render(<HomePage />);
    
    // Check that custom component feature layout texts display cleanly
    expect(screen.getByText('Custom Infrastructure')).toBeInTheDocument();
    expect(screen.getByText('Zod Engine Protection')).toBeInTheDocument();
    expect(screen.getByText('No Backend Dependency')).toBeInTheDocument();
  });

  it('should accept and successfully render custom layout prop overrides', () => {
    const customContentOverride = {
      hero: {
        marketingLabelLeft: "Custom Testing Label from",
        logoImgSrc: "/test/path.png",
        logoAltText: "Test Logo Alt",
        headlineMainLeft: "Test Title Left",
        headlineMainRight: "Test Title Right",
        headlineAccent: "Accent Text",
        supportingParagraph: "Test Description.",
        ctas: {
          primary: { text: "Go To Studio", route: "/custom-builder" },
          secondary: { text: "Go To Blocks", route: "/custom-gallery" }
        }
      },
      previewSandbox: {
        sectionTitle: "Sandbox Title",
        sectionSubtitle: "Sandbox Subtitle",
        fileName: "test.json",
        engineStatusText: "Active",
        canvasBrandingToken: "[ ]",
        canvasTitle: "Workspace Title",
        canvasDescription: "Workspace Description.",
        canvasCta: { text: "Open Editor", route: "/custom-builder" }
      },
      featuresMatrix: [
        { index: "99", title: "Custom Pillar Card Title", description: "Custom card item body text" }
      ],
      footer: { copyrightClaims: "Test Claims" }
    };

    render(<HomePage content={customContentOverride} />);

    // Assert that custom content variables mapped successfully to layout blocks over defaults
    expect(screen.getByText(/Custom Testing Label from/i)).toBeInTheDocument();
    expect(screen.getByText('Custom Pillar Card Title')).toBeInTheDocument();
    expect(screen.getByText('Custom card item body text')).toBeInTheDocument();
    
    const overridenCta = screen.getByRole('link', { name: /Go To Studio/i });
    expect(overridenCta).toHaveAttribute('href', '/custom-builder');
  });
});