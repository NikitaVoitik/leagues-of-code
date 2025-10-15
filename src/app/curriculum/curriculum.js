/**
 * Curriculum Page - Vanilla JavaScript
 * No React, pure JS with modern best practices
 */

'use client'; // Keep this for Next.js compatibility

(function() {
  'use strict';

  // ============================================================================
  // MODULE: Curriculum Page Controller
  // ============================================================================
  
  const CurriculumPage = {
    
    // Initialize when DOM is ready
    init() {
      console.log('🚀 Curriculum page initialized');
      this.setupHeroAnimations();
      this.setupEventListeners();
      this.setupAccessibility();
    },

    // Phase 2: Hero section animations
    setupHeroAnimations() {
      const hero = document.querySelector('.curriculum-hero');
      if (!hero) return;

      // Fade in hero on load
      hero.style.opacity = '0';
      hero.style.transform = 'translateY(20px)';
      hero.style.transition = 'opacity 600ms ease-out, transform 600ms ease-out';
      
      // Trigger animation after a brief delay
      setTimeout(() => {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
      }, 100);

      // Add smooth scroll behavior to CTA button
      const ctaButton = document.querySelector('.curriculum-hero__cta');
      if (ctaButton) {
        // Add hover sound effect prep (can add actual sound later)
        ctaButton.addEventListener('mouseenter', () => {
          // Placeholder for future enhancements
        });
      }
    },

    // Setup all event listeners
    setupEventListeners() {
      this.setupTimelineNodes();
      this.setupStackCards();
    },

    // Timeline nodes - hover to show corresponding card (stays visible)
    setupTimelineNodes() {
      const nodes = document.querySelectorAll('.timeline-node');
      const cards = document.querySelectorAll('.stack-card');
      
      nodes.forEach(node => {
        // Hover to show card (and keep it visible)
        node.addEventListener('mouseenter', () => {
          const leagueId = node.dataset.leagueId;
          console.log(`⏱️ Timeline hover: ${leagueId}`);
          
          // Highlight hovered timeline node
          nodes.forEach(n => n.classList.remove('active'));
          node.classList.add('active');
          
          // Show corresponding card (bring to front)
          this.showCard(leagueId, cards);
        });

        // Keyboard accessibility
        node.setAttribute('tabindex', '0');
        node.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const leagueId = node.dataset.leagueId;
            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            this.showCard(leagueId, cards);
          }
        });
      });
    },

    // Show selected card from stack
    showCard(leagueId, cards) {
      cards.forEach((card) => {
        if (card.dataset.leagueId === leagueId) {
          // Bring selected card to front
          card.classList.add('card-active');
          card.style.zIndex = '1000';
          card.style.transform = 'translate(-50%, -50%) translateY(0) scale(1.05)';
          card.style.opacity = '1';
        } else {
          // Send others to background
          card.classList.remove('card-active');
          card.style.zIndex = '';
          card.style.transform = '';
          card.style.opacity = '0.3';
        }
      });
    },

    // Stacked cards - no interaction, controlled only by timeline
    setupStackCards() {
      // Cards are now controlled entirely by timeline hover
      // No individual card interactions needed
    },

    // Phase 3: League card interactions
    setupLeagueCards() {
      const leagueCards = document.querySelectorAll('.league-card');
      
      leagueCards.forEach(card => {
        const button = card.querySelector('.league-card__button');
        
        if (button) {
          button.addEventListener('click', (e) => {
            e.stopPropagation();
            const leagueId = card.dataset.leagueId;
            console.log(`📚 View details for: ${leagueId}`);
            // Phase 4: Will scroll to/expand league details section
            this.handleLeagueClick(leagueId);
          });
        }

        // Make entire card clickable
        card.addEventListener('click', () => {
          const leagueId = card.dataset.leagueId;
          this.handleLeagueClick(leagueId);
        });

        // Keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const leagueId = card.dataset.leagueId;
            this.handleLeagueClick(leagueId);
          }
        });
      });
    },

    // Handle league card click - Phase 4
    handleLeagueClick(leagueId) {
      console.log(`📚 Scrolling to: ${leagueId}`);
      
      // Add active state to card
      const allCards = document.querySelectorAll('.league-card');
      allCards.forEach(card => {
        if (card.dataset.leagueId === leagueId) {
          card.style.borderColor = 'var(--league-color)';
          card.style.borderWidth = '3px';
        } else {
          card.style.borderColor = 'var(--color-black)';
          card.style.borderWidth = '2px';
        }
      });

      // Smooth scroll to detail section
      const detailSection = document.getElementById(`detail-${leagueId}`);
      if (detailSection) {
        const offset = 100; // Space from top
        const targetPosition = detailSection.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Add highlight animation to detail section
        this.highlightDetailSection(detailSection);
      }
    },

    // Highlight the detail section when scrolled to
    highlightDetailSection(section) {
      // Minimalistic approach - just ensure it's in view
      // No flashy animations needed
    },

    // Accessibility enhancements
    setupAccessibility() {
      // Ensure keyboard navigation works
      const ctaButton = document.querySelector('.curriculum-hero__cta');
      if (ctaButton) {
        // Ensure keyboard focus is visible
        ctaButton.addEventListener('focus', (e) => {
          e.target.style.outline = '3px solid var(--color-yellow)';
          e.target.style.outlineOffset = '2px';
        });
        ctaButton.addEventListener('blur', (e) => {
          e.target.style.outline = '';
        });
      }
    },

    // Utility: Smooth scroll to element
    smoothScrollTo(element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    },

    // Utility: Toggle class
    toggleClass(element, className) {
      element.classList.toggle(className);
    }
  };

  // ============================================================================
  // AUTO-INITIALIZE
  // ============================================================================
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      CurriculumPage.init();
    });
  } else {
    CurriculumPage.init();
  }

  // Export for potential external use
  if (typeof window !== 'undefined') {
    window.CurriculumPage = CurriculumPage;
  }

})();
