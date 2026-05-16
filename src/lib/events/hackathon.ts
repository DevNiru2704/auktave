import type { EventType } from '../types';
import { ogImage, registrationUrl } from './shared';

export const hackathon: EventType = {
    slug: 'hackathon',
    name: '24 Hour AI Hackathon',
    image: ogImage,
    performer: { '@type': 'Organization', name: 'AUKTAVE Organizing Committee' },
    offers: { '@type': 'Offer', price: '200', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: registrationUrl },
    startDate: '2026-05-21T11:00:00+05:30',
    endDate: '2026-05-22T11:00:00+05:30',
    tagline: '24 hours. Track-based AI innovation.',
    summary: 'CATALYST 2K26 is a 24-hour in-campus AI hackathon that brings together innovators, developers, and problem-solvers to build impactful AI solutions. The event is track-based, so teams innovate within predefined AI domains.',
    duration: '24 Hours',
    teamSize: '2 - 5 Members',
    prizePool: '₹50,000+',
    highlight: true,
    registrationFee: '₹200 per head',
    coordinator: { name: 'Sriparna Das', role: 'Hackathon Lead', phone: '+91 8961086320', email: 'info.auktave@gmail.com' },
    rules: [
        'Open to all students currently enrolled in a college or university; valid college ID required.',
        'Teams must have 2 to 5 members and designate a Team Leader as the primary contact.',
        'Each participant can be part of only one team; multiple teams from the same college are allowed.',
        'Registration is valid only after all team members register before the deadline; false information may lead to disqualification.',
        'No registrations are accepted after the deadline.',
        'This is a 24-hour offline hackathon. Teams choose one track at the start and build within the allotted time.',
        'All work must be completed during the hackathon; pre-built projects or prior codebases are not allowed.',
        'Open-source libraries and tools are allowed but must be properly credited.',
        'Teams must maintain a GitHub repository with no commits before the official start time; regular commits are encouraged.',
        'Plagiarism (code or idea) or unauthorized external help leads to immediate disqualification.',
        'AI tools are allowed for assistance, but core logic must be original and teams must explain their implementation.',
        'Submission must include a working prototype/PoC, source code (GitHub preferred), README/documentation, and a demo or presentation.',
        'Projects are judged on innovation, functionality, technical implementation, user experience, real-world impact, and presentation clarity.',
        'Evaluation is track-wise, with winners selected within each track only.',
        'All team members must be present for the final presentation and Q&A; judges\' decisions are final.',
        'Professional conduct is required at all times; harassment or misconduct results in disqualification.',
        'Teams retain project ownership; organizers may showcase projects with proper credit.',
        'Participants must bring their own devices; basic facilities (power, internet, workspace) are provided.',
        'Organizers may modify rules if needed and participants must follow the schedule strictly.',
        'Judges\' decisions are final and participation implies acceptance of all rules.'
    ],
    tracks: ['AI for Healthcare', 'AI for Education', 'AI for Sustainability', 'AI for FinTech'],
    sections: [
        {
            eyebrow: '/ Overview',
            title: 'Event overview',
            items: [
                'A 24-hour in-campus AI hackathon focused on building impactful solutions with AI.',
                'Track-based format lets teams innovate within predefined AI domains.'
            ]
        },
        {
            eyebrow: '/ Eligibility',
            title: 'Who can participate',
            items: [
                'Open to all students currently enrolled in a college or university.',
                'Valid college ID is mandatory.',
                'Each participant can join only one team.',
                'Multiple teams from the same college are allowed.'
            ]
        },
        {
            eyebrow: '/ Team Formation',
            title: 'Build your team',
            items: [
                'Teams must have 2 to 5 members.',
                'Each team must designate a Team Leader as the primary contact.',
                'Team composition cannot be changed after registration.'
            ]
        },
        {
            eyebrow: '/ Registration',
            title: 'Registration rules',
            items: [
                'All participants must register through the official platform before the deadline.',
                'Registration is valid only after all team members are registered.',
                'Providing false or incomplete information may lead to disqualification.',
                'No registrations are accepted after the deadline.'
            ]
        },
        {
            eyebrow: '/ Format',
            title: 'Hackathon format',
            items: [
                'This is a 24-hour offline hackathon.',
                'Teams choose one track at the beginning of the event.',
                'Teams must develop their solution within the given time.',
                'The hackathon includes: Opening briefing, Development phase, Mid-evaluation checkpoint(s), Final presentation and judging.'
            ]
        },
        {
            eyebrow: '/ Tracks',
            title: 'AI domains',
            items: [
                'AI for Healthcare: diagnosis, prediction, medical assistance, healthcare accessibility.',
                'AI for Education: smart learning systems, personalized education, teaching automation.',
                'AI for Sustainability: climate solutions, energy optimization, waste management, environmental monitoring.',
                'AI for FinTech: fraud detection, smart finance tools, trading systems, financial inclusion.'
            ]
        },
        {
            eyebrow: '/ Development',
            title: 'Development rules',
            items: [
                'All work must be completed during the hackathon duration only.',
                'Use of pre-built projects, templates, or prior codebases is strictly prohibited.',
                'Teams are free to use any technology stack.',
                'Open-source libraries and tools are allowed but must be properly credited.',
                'Teams must maintain a GitHub repository with no commits before the official start time.',
                'Regular commits are encouraged.',
                'Any form of plagiarism (code or idea) leads to immediate disqualification.'
            ]
        },
        {
            eyebrow: '/ AI Usage',
            title: 'AI usage policy',
            items: [
                'AI tools (e.g., ChatGPT, Copilot) are allowed for assistance.',
                'Core logic must be original.',
                'Teams must understand and explain their implementation.',
                'Excessive reliance on AI without understanding may lead to penalties.'
            ]
        },
        {
            eyebrow: '/ Submissions',
            title: 'Submission requirements',
            items: [
                'A working prototype / proof of concept.',
                'Source code (GitHub repository preferred).',
                'A project description README/documentation.',
                'A demo or presentation.'
            ]
        },
        {
            eyebrow: '/ Judging',
            title: 'Judging criteria',
            items: [
                'Innovation and originality.',
                'Functionality and completion.',
                'Technical implementation.',
                'User experience and design.',
                'Real-world impact.',
                'Presentation and clarity.'
            ]
        },
        {
            eyebrow: '/ Evaluation',
            title: 'Track-wise evaluation',
            items: [
                'Projects are evaluated within their selected track.',
                'Each track has its own independent winner.',
                'Judges compare projects only within the same domain for fair evaluation.'
            ]
        },
        {
            eyebrow: '/ Presentation',
            title: 'Final presentation',
            items: [
                'Each team must present their solution to the judges.',
                'All team members must be present.',
                'Teams must demonstrate a working prototype.',
                'Teams must explain architecture and decisions.',
                'A Q&A round will follow.',
                'Judges\' decisions are final.'
            ]
        },
        {
            eyebrow: '/ Conduct',
            title: 'Code of conduct',
            items: [
                'Maintain professional and respectful behavior.',
                'No harassment, discrimination, or misconduct.',
                'Follow instructions from organizers.',
                'Violations may lead to disqualification.'
            ]
        },
        {
            eyebrow: '/ Disqualification',
            title: 'Disqualification criteria',
            items: [
                'Plagiarism or copied work.',
                'Pre-built solutions.',
                'Rule violations.',
                'False information.',
                'Unauthorized external help.',
                'Missing mandatory submissions.'
            ]
        },
        {
            eyebrow: '/ IP',
            title: 'Intellectual property',
            items: [
                'Teams retain ownership of their projects.',
                'Organizers may showcase projects with proper credit.',
                'All external tools and resources must be credited.'
            ]
        },
        {
            eyebrow: '/ Resources',
            title: 'Resources and responsibilities',
            items: [
                'Participants must bring their own laptops/devices.',
                'Basic facilities (power, internet, workspace) will be provided.',
                'Participants are responsible for their setup and data.'
            ]
        },
        {
            eyebrow: '/ General',
            title: 'General rules',
            items: [
                'Organizers may modify rules if necessary.',
                'Participants must follow the schedule strictly.',
                'Judges\' decisions are final.',
                'Participation implies acceptance of all rules.'
            ]
        },
        {
            eyebrow: '/ FAQs',
            title: 'Frequently asked questions',
            items: [
                'Is there any registration fee? Yes, the registration fee is ₹200 per team.',
                'Can we change our track after selecting it? Yes, teams can change their track even on the day of the event.',
                'Will basic facilities like internet, power, and food be provided? Yes, internet access, charging points, and food will be provided throughout the event.',
                'Are participants required to stay at the venue for the full duration? Yes, participants must remain at the venue for the entire duration of the hackathon.',
                'Will certificates be provided to all team members? Yes, certificates will be issued to all registered team members.',
                'What happens if a team cancels or does not show up? Will there be a refund? No refunds will be provided; refunds will only be issued if decided by the organizing team.',
                'Will mentors or support be available during the hackathon? Yes, support will be available to guide participants during the event.',
                'How will we receive detailed information? Detailed information will be shared with team leaders via email.'
            ]
        }
    ]
};
