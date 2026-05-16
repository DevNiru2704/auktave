import type { EventType } from '../types';
import { ogImage, registrationUrl } from './shared';

export const btechPresentations: EventType = {
    slug: 'btech-presentations',
    name: 'B.Tech Final Year Presentations',
    image: ogImage,
    performer: { '@type': 'Organization', name: 'AUKTAVE Organizing Committee' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: registrationUrl },
    startDate: '2026-05-22T13:30:00+05:30',
    endDate: '2026-05-22T15:00:00+05:30',
    tagline: 'Defend your thesis. Win the floor.',
    summary: 'ASETK–ProjectXpo is an innovation and project demonstration event organized by the Amity School of Engineering and Technology (ASETK), Amity University Kolkata. This exclusive event recognizes outstanding technical projects and provides a professional platform for students to demonstrate projects before an external panel of experts.',
    duration: '1.5 Hours',
    coordinator: { name: 'Humza Ahmad', role: 'Field Coordinator', phone: '+91 8240253854', email: 'info.auktave@gmail.com' },
    rules: [
        'Participation is strictly limited to students of Amity University Kolkata (AUK).',
        'Only B.Tech Final-Year Project Teams of ASETK are eligible to participate.',
        'Projects must be part of the official major project submission/evaluation process.',
        'Only projects securing a minimum of 80% marks during the project semester evaluation process will be considered eligible for ASETK–ProjectXpo selection.',
        'Eligible projects will undergo evaluation by an External Panel of Judges during the exhibition and demonstration round.',
        'Projects will be assessed on the basis of: technical implementation, working prototype/system design, innovation and originality, presentation quality, and societal relevance and impact.',
        'Assessment Criteria & Weightage: Poster Presentation (15 marks), Implementation / Working Prototype / Model / System Design (15 marks), Innovation / Novelty (10 marks), Societal Impact (10 marks). Total: 50 marks. Evaluated by: External Panel of Judges.',
        'A proper project poster must be displayed during evaluation.',
        'The project should be functional and demonstrable.',
        'Teams must be prepared to explain: Problem Statement, Methodology, Technical Architecture, Innovation Aspect, Practical Applications, and Future Scope.',
        'Teams must maintain professionalism throughout the event.',
        'Following the exhibition and evaluation process, the external jury panel will identify the Top 3 Outstanding Projects from among the shortlisted teams.',
        'The decision of the jury panel shall be final and binding.',
        'Winning teams will receive official Certificates of Excellence issued by the institute along with official awards: Best Project (Trophy, Memento, Physical Certificate), 2nd Prize / 1st Runner-Up (Trophy, Memento, Physical Certificate), 3rd Prize / 2nd Runner-Up (Trophy, Memento, Physical Certificate).',
        'Teams must report to the venue within the allotted reporting time.',
        'Participants are responsible for the safety and handling of their project equipment.',
        'Any form of plagiarism or misrepresentation may lead to disqualification.',
        'Teams must maintain discipline and professional conduct throughout the event.',
        'Judges reserve the right to question teams regarding technical implementation and originality.',
        'The organizing committee reserves the right to modify rules if necessary.',
        'Faculty Organizers: Dr. Abhishek Mukhopadhyay, Prof. Shaon Bandyopadhyay.'
    ]
};
