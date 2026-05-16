import type { EventType } from '../types';

export const ieeeSession: EventType = {
    slug: 'ieee-session',
    name: 'IEEE Special Session',
    startDate: '2026-05-22T10:00:00+05:30',
    endDate: '2026-05-22T11:00:00+05:30',
    tagline: 'A signal from the standards bearers.',
    summary: 'An exclusive IEEE SB AUK-curated session featuring keynotes, technical talks, and a research paper showcase. A trust mark for AUKTAVE 2K26.',
    duration: '1 Hour',
    teamSize: 'Open to all',
    prizePool: 'Certificates',
    registrationFee: 'No registration fee',
    coordinator: { name: 'Humza Ahmad', role: 'Field Coordinator', phone: '+91 8240253854', email: 'info.auktave@gmail.com' },
    rules: [
        'Speakers must submit a 150–300 word abstract at least 48 hours before the session.',
        'Talk length: 20 minutes presentation + 10 minutes Q&A (unless otherwise stated).',
        'Slides must be uploaded in PDF format at least 1 hour before the session to the organisers\' portal.',
        'Presentations should be technical and educational; promotional or sales content is not permitted.',
        'Demonstrations that use AI tools must clearly list the tools and datasets used; attribution is required.',
        'Recording of sessions is allowed only with explicit permission from both the speaker and IEEE SB AUK; organisers may record for archival purposes.',
        'Q&A is moderated and strictly time-boxed to maintain schedule flow.',
        'Speakers should arrive 30 minutes prior for AV checks; organisers provide standard AV kit and technical support.',
        'Respectful, evidence-based discourse is required; offensive language or personal attacks may lead to removal from the session.',
        'Attendance certificates are issued post-session to registered attendees and IEEE SB AUK members as applicable.'
    ]
};
