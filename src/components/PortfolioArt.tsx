import interfaces from "@/assets/interfaces-art.jpg";
import ai from "@/assets/ai-art.jpg";
import coding from "@/assets/coding-art.jpg";

const scenes = [
  { title: "Building Interfaces", image: interfaces, alt: "An ink-drawn workshop building a playful browser interface" },
  { title: "Exploring AI", image: ai, alt: "Hand-drawn hands connecting messages, ideas and little sparks" },
  { title: "Creative Coding", image: coding, alt: "A tiny cursor riding a looping animation playground" },
];

export function IllustratedScenes() {
  return (
    <div className="illustrated-scenes">
      {scenes.map((scene, i) => (
        <figure className={`scene scene-${i}`} data-scene key={scene.title}>
          <div className="scene-hover">
            <div data-depth={i === 1 ? "0.6" : "0.4"}>
              <img src={scene.image} alt={scene.alt} width={1536} height={768} className="scene-image" />
              <figcaption>{scene.title}</figcaption>
            </div>
            <svg className="scene-spark" viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
              <path d="M15 2 17 12 28 15 18 18 15 28 12 18 2 15 12 12Z" />
            </svg>
          </div>
        </figure>
      ))}
    </div>
  );
}

export function DrawnUnderline() {
  return (
    <svg viewBox="0 0 420 32" className="drawn-underline" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <path data-draw d="M8 20C103 7 238 15 406 8M253 20c-39 0-84 4-46 6 18 1 34-3 30-5" />
    </svg>
  );
}

export function ProjectArtwork({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 720 480" className={`project-art project-art-${index}`} role="img" aria-label={`Original concept artwork for Project ${index + 1}`}>
      <rect className="art-base" width="720" height="480" />
      {index === 0 && <>
        <path className="art-accent" d="M0 350 340 80l380 180v220H0Z" />
        <g className="art-window" transform="rotate(-7 360 240)">
          <rect x="150" y="80" width="420" height="310" rx="3" />
          <path d="M150 118h420" /><circle cx="169" cy="99" r="3" /><circle cx="182" cy="99" r="3" /><circle cx="195" cy="99" r="3" />
          <path d="M180 152h122m-122 13h75m-75 162h65m30 0h64m30 0h72" />
          <rect className="art-fill" x="180" y="193" width="150" height="105" />
          <path d="m180 285 50-63 35 37 27-19 38 45" />
          <rect x="352" y="193" width="180" height="105" /><path d="M373 216h138m-138 18h100m-100 18h119" />
        </g>
        <path className="art-cursor" d="m534 325 9 57 14-20 24 10 7-16-24-9 20-12Z" />
      </>}
      {index === 1 && <>
        <path className="art-accent" d="M130 0h90v480h-90zm365 0h90v480h-90z" />
        <g className="art-stroke" fill="none">
          <path d="M0 370c120 0 120-280 245-280S380 395 485 335 570 90 720 105" strokeWidth="2" />
          <path d="M0 383c120 0 122-280 245-280S380 408 485 348 570 103 720 118" strokeDasharray="4 8" />
        </g>
        <g className="art-window" transform="rotate(9 330 235)"><rect x="222" y="152" width="226" height="166" rx="2" /><path d="M222 180h226" /><circle cx="237" cy="166" r="3" /><path d="M248 229h57m-57 14h125m-125 14h99" /><path className="art-fill" d="m372 203 11 31 31 9-30 10-12 32-9-32-31-10 30-9Z" /></g>
        <circle className="art-cursor" cx="490" cy="335" r="20" />
      </>}
      {index === 2 && <>
        <path className="art-accent" d="M70 0h580l-95 480H-25Z" />
        <g className="art-window" transform="rotate(-4 360 240)">
          <rect x="130" y="80" width="460" height="320" rx="2" /><path d="M130 115h460" />
          <path d="M177 153h170m-170 15h117" />
          <rect className="art-fill" x="180" y="218" width="265" height="62" rx="16" /><circle cx="204" cy="246" r="3" /><circle cx="218" cy="246" r="3" /><circle cx="232" cy="246" r="3" />
          <rect x="345" y="307" width="197" height="47" rx="14" /><path d="M369 328h104m-104 12h75" />
          <path d="m476 185 5-20 6 20 20 5-20 6-6 20-5-20-20-6Z" />
        </g>
      </>}
      {index === 3 && <>
        <path className="art-accent" d="M360 45 648 240 360 435 72 240Z" />
        <g className="art-window"><rect x="173" y="123" width="374" height="240" rx="2" /><path d="M173 151h374" /><path d="M205 184h67m-67 12h105" /><rect className="art-fill" x="205" y="223" width="139" height="110" /><circle cx="275" cy="279" r="33" /><path d="m376 241 28-20 28 20m-56 65 28 20 28-20m-52-23h126m-126-15h92" /></g>
        <path className="art-stroke" fill="none" d="M88 363c-95-200 580-203 536-85-14 36-65 50-91 43" strokeDasharray="5 7" />
      </>}
    </svg>
  );
}

/** Gradient open pink box the hero panels emerge from — matches the reference artwork. */
export function OpenBox({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 250" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ob-lid" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0" stopColor="#fde4f3" />
          <stop offset="0.7" stopColor="#f9b5dc" />
          <stop offset="1" stopColor="#f9a2d4" />
        </linearGradient>
        <linearGradient id="ob-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c81d86" />
          <stop offset="1" stopColor="#9c0f6e" />
        </linearGradient>
        <linearGradient id="ob-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f88fd0" />
          <stop offset="0.55" stopColor="#f4b8e2" />
          <stop offset="1" stopColor="#efdcf0" />
        </linearGradient>
        <linearGradient id="ob-flap" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b0148a" />
          <stop offset="1" stopColor="#8e0d63" />
        </linearGradient>
        <linearGradient id="ob-shadow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#dcd7de" stopOpacity="0.9" />
          <stop offset="1" stopColor="#dcd7de" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* big pink circle rising behind the box */}
      <circle cx="262" cy="200" r="112" fill="#f77fc4" />
      {/* ground shadow streak */}
      <path d="M30 226h426l92-9H62Z" fill="url(#ob-shadow)" />
      {/* left lid raised open */}
      <path d="M40 14 300 16 262 106 6 104Z" fill="url(#ob-lid)" />
      {/* front-left face with warm ember */}
      <path d="M28 106 262 106 256 222 20 224Z" fill="url(#ob-face)" />
      <circle cx="254" cy="108" r="6" fill="#ff9440" opacity=".95" />
      {/* right panel with carry handle */}
      <path d="M298 16 462 18 450 222 292 222Z" fill="url(#ob-right)" />
      <rect x="374" y="34" width="66" height="14" rx="7" fill="#a0127a" />
      {/* right lid flap */}
      <path d="M462 18 516 104 452 104Z" fill="url(#ob-flap)" />
    </svg>
  );
}

/** Broad sweeping pink ribbon that runs behind the page content. */
export function PinkRibbon({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1600 620" preserveAspectRatio="none" className={className} aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <defs>
        <linearGradient id="ribbon-grad" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" stopColor="#fbd2e5" />
          <stop offset="0.45" stopColor="#f6a8cd" />
          <stop offset="1" stopColor="#f9c4dd" />
        </linearGradient>
      </defs>
      <path
        d="M-80 470 C 240 300, 480 560, 780 470 S 1300 160, 1680 250 L 1680 400 C 1330 320, 1060 600, 760 560 S 200 430, -80 560 Z"
        fill="url(#ribbon-grad)"
        opacity="0.5"
      />
    </svg>
  );
}