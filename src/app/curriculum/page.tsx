import type { CSSProperties } from "react";
import Footer from "@/components/sections/Footer";
import Separator from "@/components/ui/Separator";
import { CONTENT } from "@/lib/content";
import './styles/index.css';

export default function CurriculumPage() {
  const { curriculum } = CONTENT;

  return (
    <>
      <div className="curriculum-page loaded">
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
                      style={{ '--league-color': league.color, '--index': index } as CSSProperties}
                      tabIndex={0}
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
                      } as CSSProperties}
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
                style={{ '--league-color': league.color } as CSSProperties}
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
