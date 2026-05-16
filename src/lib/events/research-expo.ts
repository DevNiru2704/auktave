import type { EventType } from '../types';
import { ogImage, registrationUrl } from './shared';

export const researchExpo: EventType = {
    slug: "research-expo",
    name: "Research and Project Expo",
    image: ogImage,
    performer: { "@type": "Organization", name: "AUKTAVE Organizing Committee" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR", availability: "https://schema.org/InStock", url: registrationUrl },
    startDate: "2026-05-21T14:00:00+05:30",
    endDate: "2026-05-21T16:00:00+05:30",
    tagline: "Innovate. Integrate. Inspire. - Emerging Trends in STEM",
    summary: "The Research Poster Competition is a platform for researchers, designers, and creative practitioners to showcase work that addresses social, environmental, and community-centred concerns through STEM.",
    duration: "2 Hours",
    teamSize: "1 - 4 Members",
    prizePool: "₹10,000",
    registrationFee: "₹200 per team",
    fieldCoordinators: [
        { name: "Md Saad", role: "Field Coordinator", phone: "+91 98300 00002", email: "info.auktave@gmail.com" },
        { name: "Khushi Mehta", role: "Field Coordinator", phone: "+91 79808 44018", email: "info.auktave@gmail.com" }
    ],
    rules: [
        "Submit digital copy of poster in PDF format only",
        "Include scanned copies of student ID card and govt. ID",
        "Subject line of email submission must include: \"Research Poster Competition - For Category [name]\"",
        "Late submissions will not be accepted.",
        "All entries must meet the specified format and size requirements to be eligible for screening"
    ],
    prizes: [
        "First Prize:  ₹3000 Cash Prize + Merit Certificate + Exclusive Memento/Goodies",
        "Second Prize:  ₹2000 Cash Prize + Merit Certificate + Exclusive Memento/Goodies",
        "Third Prize : ₹1000 Cash Prize + Merit Certificate + Exclusive Memento/Goodies",
        "Participation certificate"
    ],
    sections: [
        {
            eyebrow: "/ Overview",
            title: "Research Poster Competition Guidelines",
            items: [
                "The Research Poster Competition is a platform for researchers, designers, and creative practitioners to showcase work that addresses social, environmental, and community-centred concerns through STEM.",
                "The competition celebrates work that demonstrates innovation, originality, and social impact.",
                "It serves as a forum for cross-disciplinary dialogue and aims to build networks among creative practitioners while contributing ideas that address pressing societal issues.",
                "Submissions should address present ongoing scientific discoveries, technological advancements, sustainable solutions or futuristic concepts through visually engaging posters.",
                "Participants are encouraged to combine creativity how community and public-oriented concerns are integrated into creative and research processes, or demonstrate how art and design practices can be more inclusive, disruptive, and transformative in society."
            ]
        },
        {
            eyebrow: "/ Eligibility & Participation",
            title: "Who can participate",
            items: [
                "Students pursuing degrees in STEM fields",
                "Students from any university or educational institution",
                "Individual or team submissions accepted",
                "The designated poster presenter must be available to discuss work during the exhibition period",
                "The presenter must be present at assigned location during designated presentation time slot",
                "Printed poster must be brought by presenter to the competition venue"
            ]
        },
        {
            eyebrow: "/ Submission Guidelines",
            title: "Entry process",
            items: [
                "Submit digital copy of poster in PDF format only",
                "Include scanned copies of student ID card and govt. ID",
                "Subject line of email submission must include: \"Research Poster Competition - For Category [name]\"",
                "Submit to official competition email address",
                "Submission Deadline: 18-05-2026",
                "Late submissions will not be accepted."
            ]
        },
        {
            eyebrow: "/ Poster Requirements",
            title: "What must appear on the poster",
            items: [
                "AUKTAVE 2026 at the top right of the poster",
                "Official AUKTAVE 2026 Logo",
                "Poster Title/Theme on the top left",
                "Relevant Category/Event Name on the top left",
                "“Prepared By” section containing Author Name(s), Institutional Affiliation, and Contact Information at the bottom right.",
                "Mention the above outside the border of the poster, as mentioned."
            ]
        },
        {
            eyebrow: "/ Poster Categories",
            title: "STEM research categories",
            items: [
                "1. Science Research",
                "Research projects in fundamental and applied sciences including:",
                "Physics",
                "Chemistry",
                "Biology",
                "Environmental Science",
                "Earth and Space Science",
                "Biotechnology",
                "Microbiology",
                "Mathematical Sciences"
            ]
        },
        {
            eyebrow: "/ Poster Categories",
            title: "Technology Research",
            items: [
                "2. Technology Research",
                "Research focused on computing, digital systems, and emerging technologies including:",
                "Artificial Intelligence and Machine Learning",
                "Data Science and Analytics",
                "Cybersecurity",
                "Internet of Things",
                "Software and Application Development",
                "Cloud Computing",
                "Human-Computer Interaction",
                "AR?VR and Simulation Technologies"
            ]
        },
        {
            eyebrow: "/ Poster Categories",
            title: "Engineering Research",
            items: [
                "3. Engineering Research",
                "Research and innovation in engineering disciplines including:",
                "Mechanical Engineering",
                "Electrical and Electronics Engineering",
                "Civil Engineering",
                "Robotics and Automation",
                "Embedded Systems",
                "Mechatronics",
                "Aerospace Engineering",
                "Renewable Energy Systems"
            ]
        },
        {
            eyebrow: "/ Poster Categories",
            title: "Mathematical and Computational Research",
            items: [
                "4. Mathematical and Computational Research",
                "Research involving mathematical modelling, computation and analytical methods, including:",
                "Applied Mathematics",
                "Statistical Modelling",
                "Computational Science",
                "Operations Research",
                "Optimization Techniques",
                "Numerical Methods",
                "Algorithm Design"
            ]
        },
        {
            eyebrow: "/ Poster Categories",
            title: "Inter-disciplinary STEM Research",
            items: [
                "5. Inter-disciplinary STEM Research",
                "Projects integrating multiple STEM domains to address real world challenges, including but not limited to:",
                "Smart Cities",
                "Sustainable Development",
                "Healthcare Technology",
                "Climate and Energy Solutions",
                "Agricultural Innovation",
                "Assistive Technologies",
                "STEM for social impact"
            ]
        },
        {
            eyebrow: "/ Poster Specifications",
            title: "Format and production requirements",
            items: [
                "Physical dimensions: 22 inches×28 inches",
                "Display limited to one side only",
                "Single poster per submission",
                "Title, author, co-author names, and institution must be clearly visible",
                "Resolution appropriate for printing at specified dimensions",
                "Design must be legible and clear when displayed at full size",
                "Participants responsible for poster printing costs",
                "Organizers do not provide printing services",
                "Ensure design is printer-ready and high resolution"
            ]
        },
        {
            eyebrow: "/ Design & Content Guidelines",
            title: "Content balance",
            items: [
                "25% text content",
                "45% graphics, images, and visualizations",
                "30% white space"
            ]
        },
        {
            eyebrow: "/ Design & Content Guidelines",
            title: "Text and readability",
            items: [
                "Minimize text; use concise, clear language",
                "Title banner must be legible from 6 feet away",
                "Body text must be legible from 3 feet away",
                "Avoid using all capital letters for body text",
                "Use title case for headings where appropriate"
            ]
        },
        {
            eyebrow: "/ Design & Content Guidelines",
            title: "Typography",
            items: [
                "Select 2 to 3 font families maximum",
                "Maintain consistent font sizing and styling throughout",
                "Ensure adequate contrast between text and background",
                "Use sans-serif fonts for headers for better visibility",
                "Consider readability on various display distances"
            ]
        },
        {
            eyebrow: "/ Design & Content Guidelines",
            title: "Colour scheme",
            items: [
                "Use 2 to 3 primary colours maximum",
                "Maintain consistency in colour usage throughout",
                "Ensure sufficient contrast for text accessibility"
            ]
        },
        {
            eyebrow: "/ Design & Content Guidelines",
            title: "Visual hierarchy and consistency",
            items: [
                "Organize content to flow logically from section to section",
                "Maintain consistent margins throughout",
                "Keep line spacing consistent",
                "Use uniform border colours, styles, and thickness",
                "Apply shading consistently",
                "Create clear sections for different content types"
            ]
        },
        {
            eyebrow: "/ Design & Content Guidelines",
            title: "Graphics and visualizations",
            items: [
                "Use high-resolution photographs and images wherever possible",
                "Include charts, graphs, and photography to illustrate data",
                "Avoid large tables of raw data; use visualizations instead",
                "Use visual representation tools appropriate to content type",
                "Ensure all graphics are clearly labelled and relevant",
                "Sketch diagrams and visual journey representations where applicable"
            ]
        },
        {
            eyebrow: "/ Evaluation Criteria",
            title: "Initial check",
            items: [
                "Layout",
                "1. Poor: Neither clean nor straightforward",
                "2. Sub-par: Much left to be desired/better",
                "3. Acceptable: Some left to be desired/better",
                "4. Superior: Information clean, straightforward, organized",
                "Science-based order (IMRAD)",
                "1. Poor: Much disorder/chaotic, no references",
                "2. Sub-par: Some disorder (or missing), no references",
                "3. Acceptable: Disorder and references or order without references",
                "4. Superior: Good order and one or more references",
                "Use of graphics",
                "1. Poor: Visually unpleasant",
                "2. Sub-par: Much left to be desired / better",
                "3. Acceptable: Some left to be desired / better",
                "4. Superior: Visually helpful, eye catching, pleasant to eyes",
                "Central message communicating (Wordy and / or busy)",
                "1. Poor: Very distracting and hard to review / understand (wall of text; very busy and/or very wordy)",
                "2. Sub-par: Distracting and hard to quickly review/understand (majority was text; busy and/or wordy)",
                "3. Acceptable: Decent communication (some wordiness but could be quickly reviewed/understood)",
                "4. Superior: Concise communication (neither busy nor wordy, use of bullet points, easy, and quick to review/understand)"
            ]
        },
        {
            eyebrow: "/ Evaluation Criteria",
            title: "Jury evaluation",
            items: [
                "Clarity (30% of score)",
                "Clear interpretation and presentation of theme",
                "How inclusive or transformative the work is for audiences",
                "Clear explanation of concept and content relationship to theme",
                "Originality (20% of score)",
                "Ideas presented",
                "Data sources and interpretation",
                "Conclusions and proposed solutions",
                "Uniqueness of approach and perspective",
                "Artistic techniques and formal qualities (for visual/performing arts)",
                "Creativity (20% of score)",
                "Unique perspective and research approach",
                "Innovative methodologies",
                "Creative presentation of content",
                "Originality of outcome (product, service, policy, system, event, etc.)",
                "Unique visual expression and imagination",
                "Application of materials, tools, and techniques",
                "Visual Representation (20% of score)",
                "Quality of data visualization and graphics",
                "Visual hierarchy and organization of content",
                "Continuity and flow throughout poster",
                "Graphics and design quality",
                "Visual representation of concept and narrative",
                "Overall composition and layout",
                "Impact (10% of score)",
                "Anticipated contribution and demonstrated need",
                "Functionality and emotional connection",
                "Potential for social impact",
                "Message clarity and transmission of ideas",
                "Aesthetic and social value"
            ]
        },
        {
            eyebrow: "/ Screening & Selection Process",
            title: "Shortlisting and jury panel",
            items: [
                "Emailed entries would be checked for guideline alliance and appropriateness",
                "Top 20 entries among all categories (total 50 entries maximum)",
                "Selection based on meeting guidelines and evaluation rubric",
                "Screening committee has discretion to reject entries not meeting requirements",
                "4 eminent experts constitute jury panel for final judging",
                "Jury evaluates posters and presentations",
                "Jury decision is final for all award determinations"
            ]
        },
        {
            eyebrow: "/ Presentation Requirements",
            title: "Exhibition and logistics",
            items: [
                "Specific campus and venue location provided in acceptance letter",
                "Designated presentation time slot assigned to each presenter",
                "Presenter must be present during assigned time slot",
                "Live discussion with jury members during presentation period",
                "Printed poster must be brought to venue",
                "Set-up time provided before presentation"
            ]
        },
        {
            eyebrow: "/ Submission Formats & Technical Specifications",
            title: "Files and documentation",
            items: [
                "Poster submission format: PDF",
                "High resolution at print-ready dimensions (300 DPI minimum recommended)",
                "Student ID card (scanned copy)",
                "any unexpired Government ID",
                "Subject line: \"Research Poster Competition - For Category [Category Name]\"",
                "Attach all required documents",
                "Use official submission email address provided by organizers"
            ]
        },
        {
            eyebrow: "/ Registration & Fees",
            title: "Cost and coverage",
            items: [
                "Registration Fees :  Rs. 200",
                "Poster printing costs borne entirely by participants",
                "Travel cost not covered by organizers",
                "Participants responsible for all production expenses"
            ]
        },
        {
            eyebrow: "/ General Guidelines & Tips",
            title: "Design best practices",
            items: [
                "Posters should stimulate discussion, not serve as full presentation",
                "Keep presentation accessible to viewers of varying background knowledge",
                "Use visual storytelling to engage diverse audiences",
                "Ensure design allows for standing space and interaction"
            ]
        },
        {
            eyebrow: "/ General Guidelines & Tips",
            title: "Content organization",
            items: [
                "Follow logical flow from introduction to conclusion",
                "Group related information together",
                "Use visual breaks between content sections",
                "Number or sequence information where helpful",
                "Highlight key findings and conclusions"
            ]
        },
        {
            eyebrow: "/ General Guidelines & Tips",
            title: "Image and photo quality",
            items: [
                "Use original, high-resolution photographs when possible",
                "Ensure images are relevant and directly support content",
                "Crop or frame images intentionally",
                "Provide captions for all images and visualizations",
                "Obtain necessary permissions for image use"
            ]
        },
        {
            eyebrow: "/ General Guidelines & Tips",
            title: "Accessibility considerations",
            items: [
                "Verify text and background colour contrast using accessibility tools",
                "Provide alternative text or captions for visual-only information",
                "Ensure fonts are legible for viewers at distance"
            ]
        },
        {
            eyebrow: "/ General Guidelines & Tips",
            title: "Testing and refinement",
            items: [
                "Complete design well before printing deadline",
                "Check for spelling and grammar errors",
                "Verify all citations and data accuracy"
            ]
        },
        {
            eyebrow: "/ General Guidelines & Tips",
            title: "Presentation preparation",
            items: [
                "Practice presenting within time constraints",
                "Prepare brief summary of key points",
                "Anticipate likely questions from audience",
                "Arrange supporting materials(handouts, samples), if any, in advance",
                "Arrive early to set up and familiarize with the environment"
            ]
        },
        {
            eyebrow: "/ Important Notes",
            title: "Eligibility and compliance",
            items: [
                "All entries must meet the specified format and size requirements to be eligible for screening",
                "Entries not received by submission deadline will not be reviewed",
                "Entries not meeting technical specifications may be rejected",
                "Participants must follow specific email subject line format for proper organization",
                "Competition organizers reserve right to photograph posters and presentations for documentation",
                "By submitting, participants agree to guidelines and decisions of screening committee and jury",
                "For questions regarding specific submissions or technical issues, contact organizers promptly",
                "Any form of plagiarism, inappropriate content, or violation of event guidelines may lead to disqualification.",
                "The decision of the organizing committee and judges shall be final."
            ]
        },
        {
            eyebrow: "/ Contact & Support",
            title: "Where to reach out",
            items: [
                "Submission process and technical requirements",
                "Registration and fee payment",
                "Poster design and content guidance",
                "Accessibility accommodations",
                "Schedule and venue logistics",
                "Award announcements and results",
                "Contact the competition organizing committee at the official email address provided during registration."
            ]
        }
    ]
};
