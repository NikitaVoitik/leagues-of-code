/**
 * Design System Constants
 * 
 * This file contains design tokens that are actively used in the application.
 * Colors that can't be used in Tailwind className props are defined here for use in inline styles.
 */

// ============================================================================
// COLORS - Used in inline styles (style prop) and STYLES.gridBackground()
// ============================================================================
export const COLORS = {
  // Hero Section Background
  primary: '#1E3CD9',
  primaryHover: '#2644E0',
  
  // Page Background
  background: '#FAFAFA',
  backgroundGrid: '#F4F4F4',
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
// DESIGN REFERENCE - Not actively used but kept for documentation
// ============================================================================
/**
 * LoC Brand Colors (from design spec)
 * These are used directly in Tailwind classes (e.g., bg-[#3959ff])
 * 
 * Blue:       #3959ff
 * Sky Blue:   #38c9ff
 * Yellow:     #f8cd46
 * Red:        #eb4869
 * Purple:     #cf75ff
 * Green:      #23c175
 * White:      #ffffff
 * Dark:       #232339
 * Gray:       #595a6c
 */
