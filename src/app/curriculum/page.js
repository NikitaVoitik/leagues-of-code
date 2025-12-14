'use client';

import { useEffect, useState } from 'react';
import Footer from "@/components/sections/Footer";
import Separator from "@/components/ui/Separator";
import { CONTENT } from "@/lib/content";
import './curriculum.css';

export default function CurriculumPage() {
  const { curriculum } = CONTENT;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize curriculum page interactions
    const CurriculumPage = {
      init() {
        console.log('🚀 Curriculum page initialized');
        this.setupHeroAnimations();
        this.setupEventListeners();
        this.setupAccessibility();
      },

      setupHeroAnimations() {
        const hero = document.querySelector('.curriculum-hero');
        if (!hero) return;

        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        hero.style.transition = 'opacity 600ms ease-out, transform 600ms ease-out';
        
        setTimeout(() => {
          hero.style.opacity = '1';
          hero.style.transform = 'translateY(0)';
        }, 100);
      },

      setupEventListeners() {
        this.setupTimelineNodes();
      },

      setupTimelineNodes() {
        const nodes = document.querySelectorAll('.timeline-node');
        const cards = document.querySelectorAll('.stack-card');
        
        nodes.forEach(node => {
          // Show card on hover
          node.addEventListener('mouseenter', () => {
            const leagueId = node.dataset.leagueId;
            nodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            this.showCard(leagueId, cards);
          });

          // Reset on mouse leave
          node.addEventListener('mouseleave', () => {
            nodes.forEach(n => n.classList.remove('active'));
            this.resetCards(cards);
          });
        });
      },

      showCard(leagueId, cards) {
        cards.forEach((card) => {
          if (card.dataset.leagueId === leagueId) {
            card.style.zIndex = '100';
            card.style.opacity = '1';
          } else {
            card.style.zIndex = '';
            card.style.opacity = '0.5';
          }
        });
      },

      resetCards(cards) {
        cards.forEach(card => {
          card.style.zIndex = '';
          card.style.opacity = '1';
        });
      },

      setupAccessibility() {
        const ctaButton = document.querySelector('.curriculum-hero__cta');
        if (ctaButton) {
          ctaButton.addEventListener('focus', (e) => {
            e.target.style.outline = '3px solid var(--color-yellow)';
            e.target.style.outlineOffset = '2px';
          });
          ctaButton.addEventListener('blur', (e) => {
            e.target.style.outline = '';
          });
        }
      }
    };

    CurriculumPage.init();
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className={`curriculum-page ${isLoaded ? 'loaded' : 'loading'}`}>
        {/* ============================================
            HERO SECTION - Phase 2
            ============================================ */}
        <section className="curriculum-hero">
          <div className="curriculum-hero__container">
            <h1 className="curriculum-hero__title">
              {curriculum.hero.title}
            </h1>
            <p className="curriculum-hero__subtitle">
              {curriculum.hero.subtitle}
            </p>
            <p className="curriculum-hero__description">
              {curriculum.hero.description}
            </p>
            <a 
              href={CONTENT.hero.cta.url} 
              className="curriculum-hero__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTENT.hero.cta.text}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* Main content area with grid background */}
        <div className="curriculum-content">
          <div className="curriculum-container">
            
            {/* ============================================
                MERGED: TIMELINE + STACKED CARDS
                ============================================ */}
            <section className="timeline-stack-merged">
              <div className="merged-container">
                {/* Timeline */}
                <div className="timeline-path">
                  {curriculum.leagues.slice().map((league, index) => (
                    <div 
                      key={league.id}
                      className="timeline-node"
                      data-league-id={league.id}
                      style={{ '--league-color': league.color, '--index': index }}
                    >
                      <div className="timeline-node__circle">{league.displayNumber}</div>
                      <div className="timeline-node__label">{league.name}</div>
                      <div className="timeline-node__tech">{league.level}</div>
                      {index < 4 && <div className="timeline-connector"></div>}
                    </div>
                  ))}
                </div>

                {/* Stacked Cards */}
                <div className="stack-deck">
                  {curriculum.leagues.map((league, index) => (
                    <div 
                      key={league.id}
                      className="stack-card"
                      data-league-id={league.id}
                      data-index={index}
                      style={{ 
                        '--league-color': league.color,
                        '--index': index,
                        '--total': curriculum.leagues.length
                      }}
                    >
                      <div className="stack-card__number">{league.displayNumber}</div>
                      <div className="stack-card__content">
                        <h3 className="stack-card__name">{league.name}</h3>
                        <p className="stack-card__level">{league.level}</p>
                        <div className="stack-card__stats">
                          <span>{league.modules} modules</span>
                          <span>•</span>
                          <span>{league.topics.length} topics</span>
                        </div>
                      </div>
                      <div className="stack-card__corner"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <Separator text="PLACEMENT PROCESS" />

            {/* ============================================
                PLACEMENT SECTION - Phase 4
                ============================================ */}
            <section className="placement-section">
              <div className="placement-box">
                <h2 className="placement-title">{curriculum.placement.title}</h2>
                <p className="placement-description">{curriculum.placement.description}</p>
              </div>
            </section>

            <Separator text="DETAILED CURRICULUM" />

            {/* ============================================
                LEAGUE DETAILS - Phase 4 (Sticky Scroll)
                ============================================ */}
            {curriculum.leagues.map((league) => (
              <section 
                key={league.id}
                id={`detail-${league.id}`}
                className="league-detail"
                data-league-id={league.id}
                style={{ '--league-color': league.color }}
              >
                <div className="league-detail__container">
                  {/* LEFT SIDE - Sticky Description */}
                  <div className="league-detail__left">
                    <div className="league-detail__number">
                      {league.displayNumber}
                    </div>
                    
                    <h2 className="league-detail__name">{league.name}</h2>
                    <span className="league-detail__level">{league.level}</span>
                    
                    <p className="league-detail__tagline">{league.tagline}</p>
                    
                    <p className="league-detail__description">
                      {league.description}
                    </p>

                    {league.practiceNote && (
                      <div className="league-detail__practice-note">
                        {league.practiceNote}
                      </div>
                    )}

                    {league.special && (
                      <div className="league-detail__special">
                        {league.special}
                      </div>
                    )}
                  </div>

                  {/* RIGHT SIDE - Scrollable Topics */}
                  <div className="league-detail__right">
                    <h3 className="league-detail__topics-title">
                      Topics per module
                    </h3>
                    <div className="league-detail__topics-list">
                      {league.topics.map((topic, index) => (
                        <div key={index} className="league-detail__topic">
                          <div className="league-detail__topic-number">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="league-detail__topic-text">
                            {topic}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}

          </div>
        </div>

        {/* Reuse existing Footer */}
        <Footer />
      </div>
    </>
  );
}
