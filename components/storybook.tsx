'use client'

import React from 'react'
import InboundHero, { type StatCard, type InboundHeroProps } from './inbound-hero'

// Sample data
const sampleStats: StatCard[] = [
    {
        id: '1',
        number: '350+',
        label: 'SPEAKERS'
    },
    {
        id: '2',
        number: '50K+',
        label: 'ATTENDEES'
    },
    {
        id: '3',
        number: '100+',
        label: 'SESSIONS'
    }
]

const sampleDescription = `Better growth starts here. Hosted by HubSpot, INBOUND is where leaders transform ideas into impact and find creative ways to catapult their organizations forward. Experience three days of game-changing insights, meaningful connections, and breakthrough content that delivers real results. INBOUND is your launchpad for better business and personal growth.`

// Default story
export default function Storybook() {
    return (
        <div className="space-y-12">
            {/* Default Hero */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Default Hero</h2>
                <InboundHero
                    headline="O que e o PoDi?"
                    description={sampleDescription}
                    stats={sampleStats}
                    onLearnMore={() => console.log('Learn more clicked!')}
                />
            </div>

            {/* Portuguese Version */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Portuguese Version</h2>
                <InboundHero
                    headline="O que é o PODI?"
                    description="Melhor crescimento começa aqui. Hospedado pela HubSpot, PODI é onde líderes transformam ideias em impacto e encontram maneiras criativas de catapultar suas organizações para frente. Experimente três dias de insights que mudam o jogo, conexões significativas e conteúdo inovador que entrega resultados reais."
                    stats={[
                        { id: '1', number: '350+', label: 'PALESTRANTES' },
                        { id: '2', number: '50K+', label: 'PARTICIPANTES' },
                        { id: '3', number: '100+', label: 'SESSÕES' }
                    ]}
                    onLearnMore={() => console.log('Saiba mais clicado!')}
                />
            </div>

            {/* Single Stat */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Single Stat</h2>
                <InboundHero
                    headline="Join the Movement"
                    description="Be part of something bigger. Connect with industry leaders and transform your business approach."
                    stats={[{ id: '1', number: '10K+', label: 'MEMBERS' }]}
                    onLearnMore={() => console.log('Join clicked!')}
                />
            </div>

            {/* Auto-advance Example */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Auto-advance (5 seconds)</h2>
                <InboundHero
                    headline="Dynamic Stats"
                    description="Watch the statistics change automatically every 5 seconds, or click the dots to navigate manually."
                    stats={sampleStats}
                    autoAdvanceMs={5000}
                    onLearnMore={() => console.log('Auto-advance example clicked!')}
                />
            </div>

            {/* Custom Theme */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Custom Theme</h2>
                <InboundHero
                    headline="Custom Styling"
                    description="This example shows how the component adapts to different theme configurations while maintaining accessibility."
                    stats={sampleStats}
                    theme="custom"
                    onLearnMore={() => console.log('Custom theme clicked!')}
                />
            </div>

            {/* With Accent Images */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">With Accent Images</h2>
                <InboundHero
                    headline="Enhanced Cards"
                    description="Statistics cards can include accent images for additional visual appeal and context."
                    stats={[
                        { id: '1', number: '350+', label: 'SPEAKERS', accentImg: '/placeholder.svg' },
                        { id: '2', number: '50K+', label: 'ATTENDEES', accentImg: '/placeholder.svg' },
                        { id: '3', number: '100+', label: 'SESSIONS', accentImg: '/placeholder.svg' }
                    ]}
                    onLearnMore={() => console.log('Enhanced cards clicked!')}
                />
            </div>
        </div>
    )
}

// Export individual story components for more granular testing
export const DefaultHero = () => (
    <InboundHero
        headline="O que e o PoDI?"
        description={sampleDescription}
        stats={sampleStats}
        onLearnMore={() => console.log('Learn more clicked!')}
    />
)

export const PortugueseHero = () => (
    <InboundHero
        headline="O que é o PODI?"
        description="Melhor crescimento começa aqui. Hospedado pela HubSpot, PODI é onde líderes transformam ideias em impacto e encontram maneiras criativas de catapultar suas organizações para frente."
        stats={[
            { id: '1', number: '350+', label: 'PALESTRANTES' },
            { id: '2', number: '50K+', label: 'PARTICIPANTES' },
            { id: '3', number: '100+', label: 'SESSÕES' }
        ]}
        onLearnMore={() => console.log('Saiba mais clicado!')}
    />
)

export const SingleStatHero = () => (
    <InboundHero
        headline="Join the Movement"
        description="Be part of something bigger."
        stats={[{ id: '1', number: '10K+', label: 'MEMBERS' }]}
        onLearnMore={() => console.log('Join clicked!')}
    />
)

export const AutoAdvanceHero = () => (
    <InboundHero
        headline="Dynamic Stats"
        description="Watch the statistics change automatically."
        stats={sampleStats}
        autoAdvanceMs={3000}
        onLearnMore={() => console.log('Auto-advance clicked!')}
    />
)