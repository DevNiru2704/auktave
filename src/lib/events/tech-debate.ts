import type { EventType } from '../types';
import { ogImage, registrationUrl } from './shared';

export const techDebate: EventType = {
    slug: 'tech-debate',
    name: 'AUKTAVE Tech Debate',
    image: ogImage,
    performer: { '@type': 'Organization', name: 'AUKTAVE Organizing Committee' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: registrationUrl },
    startDate: '2026-05-21T16:00:00+05:30',
    endDate: '2026-05-21T17:00:00+05:30',
    tagline: 'Argue. Reason. Persuade.',
    summary: 'A knockout-style, technology-focused debate tournament (AI ethics, cybersecurity, emerging tech) with on-the-spot motions and strict timekeeping.',
    duration: '1 Hour',
    teamSize: '1 Member',
    prizePool: 'Hoodies, Swag Kits, Certificates',
    coordinator: { name: 'Mizan-ur Rahman Mondal', role: 'Field Coordinator', phone: '+91 8240253854', email: 'info.auktave@gmail.com' },
    registrationFee: 'No registration fee',
    rules: [
        'Open to students from all recognized colleges and universities; register via the official portal.',
        'Required documents at entry: photocopy of valid Government ID and photocopy of valid College/University ID.',
        'Upon successful registration participants receive an Enrollment Letter to present at the gate.',
        'No registration fee.',
        'Participants must report to the venue at least 30 minutes prior to start; late arrivals will not be permitted.',
        'Each participant is assigned a Point of Contact (POC) on arrival.',
        'Knockout elimination format: winners advance until a final winner is determined.',
        'Strict timekeeping with warnings; penalties may apply for exceeding limits.',
        'Electronic devices are prohibited during debates; pen and paper allowed during preparation.',
        'Judges’ decisions are final and binding.'
    ],
    sections: [
        {
            eyebrow: '/ Eligibility & Registration',
            title: 'Who can participate and how to register',
            items: [
                'Open to students from all recognized colleges and universities.',
                'Complete registration through the official portal before the event.',
                'Bring photocopy of a valid Government ID and photocopy of a valid College/University ID.',
                'After registration, participants will receive an Enrollment Letter to present at the entry gate.',
                'No registration fee is required.'
            ]
        },
        {
            eyebrow: '/ Reporting & Entry',
            title: 'Arrival and check-in',
            items: [
                'Report to the venue at least 30 minutes prior to the event start time.',
                'Late arrivals will not be permitted under any circumstances.',
                'Each participant will be assigned a Point of Contact (POC) for assistance upon arrival.'
            ]
        },
        {
            eyebrow: '/ Competition Format',
            title: 'Tournament structure',
            items: [
                'Knockout (elimination) format.',
                'Each round is a one-on-one debate between two participants.',
                'Winners advance to the next round until a final winner is determined.'
            ]
        },
        {
            eyebrow: '/ Debate Structure',
            title: 'Per-match timings and flow',
            items: [
                'Topic announcement & preparation time: 2 minutes.',
                'Opening statement: 2 minutes per participant.',
                'Rebuttal round: 2 minutes per participant.',
                'Cross-questioning: 2 minutes (participants question each other).',
                'Closing statement: 1 minute per participant.'
            ]
        },
        {
            eyebrow: '/ Topics',
            title: 'Motion selection and sides',
            items: [
                'Topics will be technology-focused (AI ethics, cybersecurity, emerging technologies).',
                'Motions will be revealed on the spot to ensure fairness.',
                'Sides (For/Against) will be assigned randomly.'
            ]
        },
        {
            eyebrow: '/ Judging Criteria',
            title: 'How debates are scored',
            items: [
                'Content & Knowledge — 30%.',
                'Clarity & Structure of Arguments — 20%.',
                'Rebuttal Strength — 20%.',
                'Confidence & Delivery — 15%.',
                'Critical Thinking & Responsiveness — 15%.',
                'Judges’ decisions will be final and binding.'
            ]
        },
        {
            eyebrow: '/ Code of Conduct',
            title: 'Behavioural expectations',
            items: [
                'Maintain professional and respectful behaviour at all times.',
                'Use of offensive language, personal attacks, or discrimination will result in immediate disqualification.',
                'Arguments must remain topic-focused and evidence-based.'
            ]
        },
        {
            eyebrow: '/ Use of Aids',
            title: 'Permitted and prohibited aids',
            items: [
                'Electronic devices (phones, smartwatches, etc.) are strictly prohibited during the debate.',
                'Participants may use pen and paper for note-taking during preparation time.'
            ]
        },
        {
            eyebrow: '/ Timekeeping',
            title: 'Strict timing rules',
            items: [
                'Strict adherence to time limits is mandatory.',
                'A 30-second warning will be given before time ends.',
                'Exceeding time limits may result in penalties.'
            ]
        },
        {
            eyebrow: '/ Prize Pool Worth',
            title: 'Awards and prizes',
            items: [
                'Winners will receive hoodies, swag kits, and certificates of achievement.',
                'Prizes are provided as goodies; no registration fee for participants.'
            ]
        },
        {
            eyebrow: '/ Event Duration & Flow',
            title: 'Schedule and availability',
            items: [
                'Total event duration: 2 hours.',
                'Rounds will be conducted in quick succession.',
                'Participants must remain available throughout the event until elimination.'
            ]
        },
        {
            eyebrow: '/ Tie-Breaker',
            title: 'Rapid-fire tie-break rule',
            items: [
                'If a tie occurs, a rapid-fire question round will be conducted: 1 minute per participant.',
                'Judges will determine the winner based on this round.'
            ]
        },
        {
            eyebrow: '/ Disqualification',
            title: 'Disqualification conditions',
            items: [
                'Late reporting.',
                'Failure to produce required documents.',
                'Violation of the code of conduct.',
                'Use of unfair means or external assistance.'
            ]
        }
    ]
};
