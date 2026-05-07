"use client";
import Link from "next/link";
import GlitchText from "@/components/GlitchText";

export default function TeamsPage() {
    return (
        <div className="pt-32 pb-24 px-5 lg:px-10 vines-bg" data-testid="teams-page">
            <div className="max-w-6xl mx-auto">
                <p className="eyebrow mb-4">/ Teams</p>
                <GlitchText as="h1" className="text-6xl lg:text-8xl mb-8">Meet The Teams</GlitchText>

                <p className="text-bone/70 text-lg lg:text-xl max-w-3xl leading-relaxed mb-12">
                    AUKTAVE brings together students, makers, and creators from across campuses. This page lists participating teams, their projects, and contact leads. (Placeholder — team roster will be added closer to event day.)
                </p>

                <div className="grid lg:grid-cols-3 gap-6 mb-12">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="card-upside p-6">
                            <h3 className="headline text-2xl mb-2">Team #{String(i).padStart(2, "0")}</h3>
                            <p className="text-bone/60 mb-3">Project: TBD</p>
                            <p className="text-bone/50 text-sm">Members: 1 - 3</p>
                        </div>
                    ))}
                </div>

                <div className="card-upside p-8 text-center">
                    <p className="text-bone/70">Want to be featured here? Ensure your team registers via the <Link href="/register" className="text-signal">registration page</Link>.</p>
                </div>
            </div>
        </div>
    );
}
