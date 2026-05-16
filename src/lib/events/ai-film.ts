import type { EventType } from '../types';
import { ogImage, registrationUrl } from './shared';

export const aiFilm: EventType = {
    slug: 'ai-film',
    name: 'AI Short Film Showcase',
    image: ogImage,
    performer: { '@type': 'Organization', name: 'AUKTAVE Organizing Committee' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: registrationUrl },
    startDate: '2026-05-22T15:00:00+05:30',
    endDate: '2026-05-22T16:00:00+05:30',
    tagline: 'Prompt-to-premiere, but human-led.',
    summary: 'Create a 1 to 3 minute short film where AI assists the visual, audio, or narrative process. A jury selects the Top 10 for a grand auditorium screening and live judging.',
    duration: '1 Hour',
    teamSize: '1 - 3 Members',
    prizePool: '₹5000',
    coordinator: { name: 'Sowhardya Biswas', role: 'Field Coordinator', phone: '+91 9903404844', email: 'info.auktave@gmail.com' },
    registrationFee: '₹50 per team. \nFree for AUK Students',
    rules: [
        'Duration: 1 to 3 minutes including credits. Format: MP4 or MOV, 1080p minimum.',
        'Teams of 1 to 3 members.',
        'Registration fee is ₹50 per team.',
        'No registration fee for AUK students. (AUK Students have to upload ID card image in forms)',
        'Participants must choose one official theme pillar.',
        'Submit a one-page AI Tech Stack PDF listing the tools used.',
        'Raw, unedited AI generations are discouraged; human-led editing and pacing are expected.',
        'All content must follow the university code of conduct; defamatory or hate content is disqualified.'
    ],
    themes: [
        {
            title: 'The Unfiltered Lens: Freedom of Speech & Expression',
            description: 'Explore the power of the human voice and the impact of speaking one’s truth in the digital age.'
        },
        {
            title: 'Echoes of the Past: Literature & History Come Alive',
            description: 'Reimagine historical icons or literary characters in the modern world through AI.'
        },
        {
            title: 'The Domino Effect: Small Problems, Big Impact',
            description: 'Show how an overlooked everyday issue can trigger a massive chain reaction in society.'
        },
        {
            title: 'Beyond the Horizon: The Sci-Fi Frontier',
            description: 'Showcase speculative futures, ethical AI dilemmas, and futuristic worlds.'
        },
        {
            title: 'The Rising Voice: Youth as the Catalyst for Change',
            description: 'Celebrate how the next generation uses technology and human intelligence to lead change.'
        }
    ],
    requirements: [
        'Video file: 1 to 3 minutes including credits, MP4 or MOV, 1080p minimum.',
        'One-page AI Tech Stack PDF listing all AI tools used.',
        'Human-led editing and pacing is required; raw AI outputs alone are not acceptable.'
    ],
    selectionProcess: [
        'A preliminary jury selects the Top 10 films (Elite 10).',
        'Top 10 films are screened in the Amity University Kolkata Auditorium on May 22.',
        'An expert panel judges the Top 10 live to decide 1st, 2nd, and 3rd place winners.',
        'Audience Choice Award is decided via live poll during the screening.'
    ],
    prizes: [
        'Grand Winner: ₹2,000 cash + winner’s trophy.',
        'Runner Up: ₹1,000 cash.',
        'Third Place: ₹500 cash.',
        'Top 10 Finalists receive a Special Mention certificate and goodies.'
    ],
    toolkit: [
        'Scripting: Gemini Pro (free access via student ID or personal Pro account).',
        'Video/Visuals: Runway Gen-3, Luma Dream Machine, Pika Labs, Leonardo.ai, or Midjourney.',
        'Audio: Suno or Udio for music; ElevenLabs for voiceovers.',
        'Editing: CapCut or Adobe Premiere Pro for final human-led assembly.'
    ],
    importantDates: [
        'Registrations open: May 6, 2026.',
        'Submission deadline: May 17, 2026.',
        'Top 10 announcement: May 20, 2026.',
        'Grand finale screening: May 22, 2026.'
    ]
};
