export { events } from './events';

export const sponsors = [
    {
        tier: "TITLE SPONSOR",
        price: "₹25,000",
        perks: [
            "Naming rights",
            "Speaking opportunity at inaugural",
            "Logo on all creatives, certificates & media",
            "Dedicated video branding & Presentation Slot",
            "3 premium standees"
        ]
    },
    {
        tier: "POWERED BY",
        price: "₹15,000",
        perks: [
            "Prominent logo placement",
            "Event mentions & announcements",
            "Branding on official creatives",
            "Video branding slot",
            "2 standees"
        ]
    },
    {
        tier: "SPONSORED BY",
        price: "₹10,000",
        perks: ["Logo on promotional materials", "Event-level branding", "Certificate branding", "1 standee"]
    },
    {
        tier: "CO-SPONSORED BY",
        price: "₹5,000",
        perks: ["Logo on selected creatives", "EMCEE mentions", "Certificate branding"]
    },
    {
        tier: "PARTNERS",
        price: "₹2,000",
        perks: ["Logo on posters & screens", "On-ground recognition", "Basic promotional visibility"]
    },
    {
        tier: "IN-KIND SPONSORSHIP",
        price: "NA",
        description:
            "We welcome collaborations in the form of products, services, or logistical support. Examples: Food & Beverage, Merchandise, Media Coverage, Hydration, etc.",
        perks: ["Branding equivalent to contribution", "Product/service integration", "Event"]
    }
];

export const day1 = [
    { time: "10:00AM - 11:00AM", title: "Inaugural Ceremony", venue: "Auditorium", note: "Inaugural address by VC, Registrar, Dean, HOI" },
    { time: "11:00 AM ONWARDS", title: "24 Hr Hackathon Start", venue: "Incubation Center", note: "Beginning of the 24hr hackathon" },
    { time: "11:00AM - 1:00PM", title: "Keynote Session", venue: "Auditorium", note: "Keynote speaking session by industry speakers" },
    { time: "1:00PM - 2:00PM", title: "Break", venue: "Audi Lobby", note: "Refreshments and lunch break" },
    { time: "2:00PM - 4:00PM", title: "Research & Project Expo", venue: "Audi Lobby", note: "Poster presentation of individual research and projects" },
    { time: "4:00PM - 5:00PM", title: "Tech Debate", venue: "Audi Seminar Hall", note: "A competitive debate about technology" }
];

export const day2 = [
    { time: "10:00AM - 11:00AM", title: "IEEE Introduction Session", venue: "Auditorium", note: "Introductory session on IEEE AUK SB" },
    { time: "11:00 AM", title: "24 Hr Hackathon End", venue: "Incubation Center", note: "End of the 24hr hackathon" },
    { time: "11:00 AM - 1:30PM", title: "Robotics Competition", venue: "Atrium", note: "A flagship robotics event" },
    { time: "1:30PM - 3:00PM", title: "B.Tech Final Year Presentation", venue: "Audi Lobby", note: "Project presentation by B.Tech final year students of ASET Kol." },
    { time: "3:00PM - 4:00PM", title: "AI Short Film Competition", venue: "Auditorium", note: "A clash of ideologies on AI short films" },
    { time: "4:00PM - 5:00PM", title: "Prize Distribution", venue: "Auditorium", note: "Closing ceremony of the event" }
];

export const faqs = [
    { q: "Who can register for AUKTAVE 2K26?", a: "Any student from a recognised college or university. Some events are restricted to B.Tech final year, mentioned in the event detail." },
    { q: "Is there an entry fee?", a: "Most events have a small participation fee that varies per event. The fee is shown on each event page during registration." },
    { q: "Can I participate in multiple events?", a: "Yes. We have built the schedule so most events do not overlap. Pick wisely if you are doing the Hackathon and a Day 2 event." },
    { q: "Do I need to bring my own laptop?", a: "Yes for the Hackathon, Expo, AI Film, and Presentations. Robotics and Debate do not require it." },
    { q: "Is accommodation provided?", a: "Hostel accommodation is available on request for outstation participants on a first come basis. Mention it in the registration." },
    { q: "What about food?", a: "Meals and snacks are provided across the 24 hour window for all registered participants." },
    { q: "How are winners decided?", a: "Independent jury per event. Decisions are final. Detailed rubrics are shared with finalists." }
];

export const stats = [
    { value: "48", label: "Hours of Chaos" },
    { value: "7", label: "Events to Explore" },
    { value: "500+", label: "Participants Expected" },
    { value: "₹1.5L+", label: "Total Prize Pool Worth" }
];
