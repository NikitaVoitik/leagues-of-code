/**
 * Design System Constants
 * 
 * This file contains design tokens that are actively used in the application.
 * Colors that can't be used in Tailwind className props are defined here for use in inline styles.
 * Project must follow current colore schema and not create a new entyties
 */

// ============================================================================
// COLORS - Centralized color palette for the entire application
// Use these in inline styles (style prop) and for consistency across components
// ============================================================================
export const COLORS = {
  // Primary Brand Colors
  primary: '#1E3CD9',           // Hero section gradient start
  primaryDark: '#1836CF',       // Buttons, badges, footer background
  primaryHover: '#2644E0',      // Hero gradient end, hover states

  // Brand Accent Colors (LoC Brand Palette)
  blue: '#3959ff',              // Brand primary blue
  skyBlue: '#38c9ff',          // Sky blue accent
  yellow: '#f8cd46',           // Yellow accent
  red: '#eb4869',              // Red accent
  purple: '#cf75ff',           // Purple accent
  green: '#23c175',            // Green accent

  // Neutral Colors
  white: '#ffffff',
  black: '#000000',

  // Gray Scale
  grayDark: '#232339',         // Dark gray
  gray: '#595a6c',             // Medium gray
  grayText: '#626262',         // Body text, descriptions
  grayTextDark: '#444444',     // Legal pages text

  // Background Colors
  background: '#FAFAFA',       // Page background
  backgroundGrid: '#F4F4F4',   // Grid pattern color
};

// ============================================================================
// GRID SIZES - Used in STYLES.gridBackground()
// ============================================================================
export const GRID_SIZES = {
  small: 40,
  medium: 60,
  large: 80,
};

// ============================================================================
// STYLES - Reusable Style Functions
// ============================================================================
/**
 * Grid Background Style Generator
 * Creates a grid pattern background effect
 * 
 * @param {string} bgColor - Background color (e.g., '#FAFAFA')
 * @param {string} gridColor - Grid line color (e.g., '#F4F4F4')
 * @param {number} size - Grid size in pixels (default: 60)
 * @returns {object} Style object for inline use
 * 
 * @example
 * <div style={STYLES.gridBackground(COLORS.background, COLORS.backgroundGrid, GRID_SIZES.medium)}>
 */
export const STYLES = {
  gridBackground: (bgColor, gridColor, size = GRID_SIZES.medium) => ({
    backgroundColor: bgColor,
    backgroundImage: `
      linear-gradient(to right, ${gridColor} 1px, transparent 1px),
      linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
    `,
    backgroundSize: `${size}px ${size}px`,
  }),
};

// ============================================================================
// SHADOW UTILITIES - Common shadow patterns
// ============================================================================
/**
 * Reusable shadow classes for Tailwind
 * Use these in className props for consistent shadow effects
 *
 * Example usage:
 * - Default: shadow-[4px_4px_0px_0px_#000000]
 * - Hover: hover:shadow-[6px_6px_0px_0px_#000000]
 * - Active: active:shadow-[2px_2px_0px_0px_#000000]
 */
