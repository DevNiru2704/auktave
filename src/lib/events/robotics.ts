import type { EventType } from '../types';
import { ogImage, registrationUrl } from './shared';

export const robotics: EventType = {
    slug: 'robotics',
    name: 'Robotics Competition',
    image: ogImage,
    performer: { '@type': 'Organization', name: 'AUKTAVE Organizing Committee' },
    offers: { '@type': 'Offer', price: '200', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: registrationUrl },
    startDate: '2026-05-22T11:00:00+05:30',
    endDate: '2026-05-22T13:30:00+05:30',
    tagline: 'Three arenas. One robotics league.',
    summary: 'Pick your battlefield: Robo Soccer, Line Follower, or Drone Obstacle Course. Register once, compete in one sub-event.',
    duration: '2.5 Hours',
    teamSize: 'Varies by sub-event',
    prizePool: '₹30,000',
    highlight: true,
    coordinator: { name: 'Riya Banerjee', role: 'Robotics Lead', phone: '+91 98300 00001', email: 'info.auktave@gmail.com' },
    subEvents: [
        {
            slug: 'robo-soccer',
            name: 'Robo Soccer',
            tagline: 'Timed goals, tight control, zero tolerance for faults.',
            summary: 'A team-based robotics football event with strict bot specs and multi-stage gameplay: prelims, knockouts, and finals.',
            duration: '2.5 Hours',
            teamSize: '2 - 4 Members',
            prizePool: '₹7,000',
            coordinator: { name: 'Trishanjeet Das', role: 'Field Coordinator', phone: '+91 9002309368', email: 'info.auktave@gmail.com' },
            registrationFee: '₹300 per team',
            rules: [
                'This is a team event with 2 to 4 members per team.',
                'A team may comprise members from different colleges.',
                'No person shall be a member of multiple teams.',
                'Teams must showcase and get their bots measured as per specification before the match.',
                'No bots can be shared by two teams.',
                'Robots constructed using LEGO kits or its spare parts or any other readymade mechanism are not allowed.',
                'The bot can be wired or wireless.',
                'Use of pneumatics, hydraulics, lethal weapons like projectiles, acids, sharp cutters, strong electromagnets, tesla coil, fire, and EMP are strictly prohibited.',
                'Bots are not allowed to pick or hold the ball; if found faulty it may lead to disqualification.',
                'Intentional damage to the arena may lead to disqualification of the bot.',
                'The right spirit of participation is expected from every participant; disciplinary violations can lead to disqualification.',
                'The decision of the coordinators will be deemed final.',
                'Dimension of the bot should not exceed 30 cm x 30 cm (L x B).',
                'Weight of the bot must be below 3 kg with no tolerance.',
                'Maximum allowed voltage is 18V.',
                'Power of the bot should be fixed throughout the play; variable power is prohibited.',
                'For wired bots, pulling wires to alter the movement of the robots will not be tolerated and may lead to disqualification.',
                'The robot may have a ball-hitting mechanism, but the robot must comply with the dimension constraints throughout its performance.',
                'Touching the robot during the competition is strictly prohibited.',
                'Loose weights on the bot are not allowed.',
                'The length of wire attached with wired robots should be at least 5 m.',
                'Unnecessary attack on the opponent bot is not allowed.'
            ],
            sections: [
                {
                    eyebrow: '/ Event Details',
                    title: 'Prelims',
                    items: [
                        'The bot has to score a goal by passing through obstacles in the arena.',
                        'For every goal scored, +50 points will be credited.',
                        'For every obstacle touch, -10 points will be deducted.',
                        'A total of 3 minutes will be given to the robot in the arena.',
                        'Once the timer starts, it will stop after 3 minutes; no hand touch is allowed.',
                        'Until the bot topples, the bot will be replaced.',
                        'Technical time-out of 1 minute will be given.',
                        'According to the scores, the top 8 or 16 teams will qualify for the next round.'
                    ]
                },
                {
                    eyebrow: '/ Event Details',
                    title: 'Knockout',
                    items: [
                        '1v1 play between bots, chosen through a lottery system.',
                        'The ball will be placed at the center of the arena; bots will be placed in the extreme opposite corners of the arena.',
                        'A total of 6 minutes of gameplay with 3 minutes per half.',
                        'A total of 2 minutes of repair timeout will be given to every team.',
                        'In case of a tie, a golden goal wins.',
                        'In case of deadlock between bots for 10 seconds, the position will be reset to original.'
                    ]
                },
                {
                    eyebrow: '/ Event Details',
                    title: 'Final',
                    items: [
                        '1v1 play between two bots from the knockouts.',
                        'The ball will be placed at the center of the arena; bots will be placed in the extreme opposite corners of the arena.',
                        'A total of 8 minutes of gameplay with 4 minutes per half.',
                        'A total of 2 minutes of repair timeout will be given to every team.',
                        'In case of a tie, a golden goal wins.',
                        'In case of deadlock between bots for 10 seconds, the position will be reset to original.'
                    ]
                }
            ]
        },
        {
            slug: 'line-follower',
            name: 'Line Follower',
            tagline: 'Explore, learn, then sprint the shortest path.',
            summary: 'Autonomous line-maze challenge with a Dry Run exploration phase and an Actual Run speed phase on the shortest path.',
            duration: '2.5 Hours',
            teamSize: '2 - 4 Members',
            prizePool: '₹7,000',
            coordinator: { name: 'Md Saad', role: 'Field Coordinator', phone: '+91 9875535575', email: 'info.auktave@gmail.com' },
            registrationFee: '₹300 per team',
            rules: [
                'Design and program an autonomous robot to navigate a maze defined by a continuous black line on a flat 3 m x 3 m arena.',
                'Line width is 30 mm and line angle will be 90 degrees between adjacent black lines.',
                'The robot must analyse the maze during a Dry Run, then complete it via the shortest path in the fastest time during the Actual Run.',
                'Competition has two phases: Dry Run (Exploration Phase) and Actual Run (Speed Phase).',
                'Dry Run: Robot explores the maze from Start Zone to End Zone, crossing checkpoints and storing path data.',
                'Dry Run completion is mandatory to qualify for the Actual Run.',
                'Dry Run restart limit: maximum 3 restarts allowed (from last crossed checkpoint).',
                'Actual Run: Robot traverses the maze using the shortest path.',
                'Actual Run timer runs from organiser\'s signal until the red LED glows at the End Zone.',
                'Actual Run restart limit: maximum 3 restarts allowed (from Start Zone).',
                'Max dimensions: 220 mm x 220 mm x 220 mm (L x B x H).',
                'Onboard battery is mandatory; max voltage is 12V anywhere in the system.',
                'Mandatory red LED that clearly glows upon detecting the End Zone.',
                'Single switch start mechanism only.',
                'Valid institute ID card required for all team members.',
                'Spare bot permitted but must pass bot verification independently.',
                'Teams must report to the venue at least 30 minutes before their scheduled slot.',
                'Calibration window: 2 minutes before each run.',
                'Dry Run time limit: to be announced on the day of competition.',
                'Actual Run time limit: to be announced on the day of competition.',
                'Dispute window: must be raised in writing within 15 minutes of incident.',
                'Register the team and bot at the event venue upon arrival.',
                'Bot must pass verification and safety inspection before competing.',
                'Spare bot (if any) must also pass bot verification independently.',
                'All team members must carry valid institute ID cards at all times.',
                'Organisers reserve the right to modify rules; any changes will be communicated before the event.',
                'The maze layout is designed and controlled entirely by the organisers; participants will not have access to the maze map before the Dry Run.',
                'The Judging Panel\'s ruling is final and binding in all matters.',
                'Algorithm alteration after calibration begins is a disqualification.',
                'Use of camera-based vision, image processing, or AI-based systems is disallowed.',
                'Damage to arena surface, tape, or walls is disallowed.',
                'Exceeding restart limit in either run results in disqualification for that run.',
                'Use of onboard Wi-Fi or Bluetooth during runs is disallowed.',
                'Robot transmitting or receiving data during a match is disallowed.',
                'Manual control of robot at any time during runs is disallowed.',
                'Robot splitting into multiple units during a run is disallowed.',
                'Use of fully assembled competition-ready kits (e.g., LEGO) is disallowed.',
                'Penalties (non-disqualifying): manual intervention/touching the robot (-10 points per occurrence).',
                'Penalties (non-disqualifying): false start (robot moves before organiser\'s signal) (-10 points).'
            ],
            sections: [
                {
                    eyebrow: '/ Scoring',
                    title: 'Score formula',
                    items: [
                        'TOTAL SCORE = (A + B + S + C) - P.',
                        'A = Checkpoint score (Dry Run) — 25 points per checkpoint (max 4 checkpoints).',
                        'B = Dry Run completion bonus — 30 points.',
                        'S = Shortest Path bonus (Actual Run) — 30 points.',
                        'C = Time bonus — Maximum Actual Run time minus time taken (in seconds).',
                        'P = Total penalties deducted.'
                    ]
                },
                {
                    eyebrow: '/ Deliverables',
                    title: 'What teams must bring',
                    items: [
                        'Fully built autonomous robot meeting all specifications.',
                        'Onboard battery with max voltage of 12V.',
                        'Mandatory red LED to indicate End Zone detection.',
                        'Single switch start mechanism.',
                        'Valid institute ID card for all team members.',
                        'Spare bot allowed if it passes verification independently.'
                    ]
                },
                {
                    eyebrow: '/ Schedule',
                    title: 'Timing and deadlines',
                    items: [
                        'Calibration window: 2 minutes before each run.',
                        'Dry Run time limit: to be announced on the day of competition.',
                        'Actual Run time limit: to be announced on the day of competition.',
                        'Arrival requirement: at least 30 minutes before scheduled slot.',
                        'Dispute window: must be raised in writing within 15 minutes of incident.'
                    ]
                },
                {
                    eyebrow: '/ Submission',
                    title: 'On-site registration',
                    items: [
                        'Register the team and bot at the event venue upon arrival.',
                        'Bot must pass verification and safety inspection before competing.',
                        'Spare bot (if any) must also pass bot verification independently.',
                        'All team members must carry valid institute ID cards at all times.'
                    ]
                },
                {
                    eyebrow: '/ Permissions',
                    title: 'Copyright and authority',
                    items: [
                        'Organisers reserve the right to modify rules; any changes will be communicated before the event.',
                        'The maze layout is designed and controlled entirely by the organisers; participants will not have access to the maze map before the Dry Run.',
                        'The Judging Panel\'s ruling is final and binding in all matters.'
                    ]
                },
                {
                    eyebrow: '/ Disqualification',
                    title: 'Disqualification criteria',
                    items: [
                        'Algorithm alteration after calibration begins.',
                        'Use of camera-based vision, image processing, or AI-based systems.',
                        'Damage to arena surface, tape, or walls.',
                        'Exceeding restart limit in either run (disqualified for that run).',
                        'Use of onboard Wi-Fi or Bluetooth during runs.',
                        'Robot transmitting or receiving data during a match.',
                        'Manual control of robot at any time during runs.',
                        'Robot splitting into multiple units during a run.',
                        'Use of fully assembled competition-ready kits (e.g., LEGO).'
                    ]
                },
                {
                    eyebrow: '/ Penalties',
                    title: 'Non-disqualifying penalties',
                    items: [
                        'Manual intervention/touching the robot: -10 points per occurrence.',
                        'False start (robot moves before organiser\'s signal): -10 points.',
                        'The Judging Panel\'s decision is final and binding.'
                    ]
                }
            ]
        },
        {
            slug: 'drone-obstacle-course',
            name: 'Drone Obstacle Course',
            tagline: 'Fly tight gates and sharp turns.',
            summary: 'A timed obstacle course where each drone must clear every obstacle and follow checkpoint rules with strict penalties.',
            duration: '2.5 Hours',
            teamSize: '1 - 5 Members',
            prizePool: '₹10,000',
            coordinator: { name: 'Mizan-ur Rahman Mondal', role: 'Field Coordinator', phone: '+91 7003670838', email: 'info.auktave@gmail.com' },
            offers: { '@type': 'Offer', price: '400', priceCurrency: 'INR', availability: 'https://schema.org/InStock', url: registrationUrl },
            registrationFee: '₹400 per team',
            rules: [
                'Open to students from all recognized colleges and universities; register via the official portal.',
                'Required documents: photocopy of valid Government ID and photocopy of valid College or University or Work ID.',
                'An enrollment letter will be issued after registration and must be presented as a hard copy at the entry gate.',
                'Registration fee is ₹400 per participant or team.',
                'Allowed drone categories: 3-inch, 5-inch, 330mm, 450mm, and 550mm frame classes.',
                'Participants must report at least 30 minutes prior to the event start time; late arrivals are not permitted.',
                'Each participant will be assigned a Point of Contact on arrival.',
                'The drone must pass through every obstacle; failure results in disqualification.',
                'If any obstacle is missed, participants must restart from the last checkpoint and the timer pauses during restart.',
                'If the drone veers off track, return to the last checkpoint and the timer pauses during return.',
                'One repair break of 2 minutes is allowed for a crash or malfunction; failure to recover results in disqualification.',
                'If a tie occurs, the participant with fewer penalties wins; equal penalties result in a rematch.',
                'Participants will be allotted a sequence number used as the competition order.',
                'Maintain professional and respectful behavior; offensive language or discrimination leads to disqualification.',
                'Grievances must be filed with the member in charge of this competition.',
                'Participants may be disqualified for late reporting, missing documents, code of conduct violations, or unfair means.'
            ],
            sections: [
                {
                    eyebrow: '/ Eligibility',
                    title: 'Eligibility and registration',
                    items: [
                        'Open to students from all recognized colleges and universities.',
                        'Register via the official portal.',
                        'Required documents: photocopy of valid Government ID and photocopy of valid College or University or Work ID.',
                        'Enrollment letter must be presented as a hard copy at the entry gate.',
                        'Registration fee is ₹400 per participant or team.'
                    ]
                },
                {
                    eyebrow: '/ Entry',
                    title: 'Reporting and entry',
                    items: [
                        'Report at least 30 minutes before the start time.',
                        'Late arrivals are not permitted.',
                        'Each participant will be assigned a Point of Contact for assistance.'
                    ]
                },
                {
                    eyebrow: '/ Format',
                    title: 'Competition format',
                    items: [
                        'The drone must pass through every obstacle; failure results in disqualification.',
                        'If an obstacle is missed, restart from the last checkpoint and the timer pauses during restart.',
                        'If the drone veers off track, return to the last checkpoint and the timer pauses during return.',
                        'One repair break of 2 minutes is allowed for a crash or malfunction; failure to recover results in disqualification.',
                        'If a tie occurs, fewer penalties wins; equal penalties result in a rematch.'
                    ]
                },
                {
                    eyebrow: '/ Structure',
                    title: 'Competition structure',
                    items: [
                        'Participants are allotted a sequence number used as the competition order.'
                    ]
                },
                {
                    eyebrow: '/ Conduct',
                    title: 'Code of conduct',
                    items: [
                        'Maintain professional and respectful behavior at all times.',
                        'Offensive language, personal attacks, or discrimination lead to immediate disqualification.',
                        'Grievances must be filed with the member in charge of this competition.'
                    ]
                },
                {
                    eyebrow: '/ Disqualification',
                    title: 'Disqualification conditions',
                    items: [
                        'Late reporting.',
                        'Failure to produce required documents.',
                        'Violation of code of conduct.',
                        'Use of unfair means or external assistance.'
                    ]
                }
            ]
        }
    ]
};
