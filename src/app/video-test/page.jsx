export default function VideoTestPage() {
    return (
        <main className="relative h-screen w-full overflow-hidden bg-black">
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Background video"
            >
                <source src="/videos/hero-background.mp4" type="video/mp4" />
            </video>
        </main>
    );
}
