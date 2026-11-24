export type Category = "Backend" | "Frontend" | "Fullstack" | "UX";
export const categories: Category[] = [
  "Backend",
  "Frontend",
  "Fullstack",
  "UX",
];
export type CategoryFilter = "Alla" | Category;

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  categories: Category[];
  year: number;
  summary: string;
  description: string;
  role: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  images?: ProjectImage[];
  thumbnail?: ProjectImage;
}

export const projects: Project[] = [
  {
    slug: "biografen-regalia",
    title: "Biografen Regalia",
    categories: ["UX", "Backend", "Frontend", "Fullstack"],
    year: 2026,

    summary:
      "En komplett biografwebbplats med filmvisningar, biljettbokning och administrationsgränssnitt. Utvecklad som ett fullstackprojekt i grupp.",

    description:
      "Biografen Regalia är ett skolprojekt där vi utvecklade en komplett webbapplikation för en fiktiv biograf. Projektet omfattade hela utvecklingsprocessen, från design och prototyper i Figma till frontend, backend och databashantering. Frontend byggdes med React och TypeScript, medan backend utvecklades med Node.js och Express med en MySQL-databas. Mitt huvudsakliga arbete låg inom databashantering i MySQL med DBeaver, utveckling och underhåll av Express-routes samt frontendens hero-sektion och administrationssida. Projektet är publicerat och tillgängligt online.",

    role: "Fullstackutvecklare i projektgrupp: Figma-design, MySQL, Express-routes, hero-sektion och administrationssida",

    features: [
      "Biografwebbplats med presentation av filmer och visningar",
      "Filmvisningar med information om tillgängliga föreställningar",
      "Biljettbokningsflöde med hantering av bokningar",
      "Hantering av tillgängliga platser och biljettkategorier",
      "Användarhantering och autentisering",
      "Administrationssida för biografens administrativa funktioner",
      "Responsivt frontendgränssnitt byggt med React",
      "REST API med Node.js och Express",
      "MySQL-databas med relationsbaserad datamodell",
      "Design och prototyper framtagna i Figma",
    ],

    tech: [
      "Figma",
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Node.js",
      "Express",
      "MySQL",
      "DBeaver",
      "Bootstrap",
      "React Bootstrap",
      "SCSS",
    ],

    liveUrl: "https://bioregalia.se/",
    repoUrl: "https://github.com/noiralba/Regalia",
    thumbnail: {
      src: "/projects/regalia/thumbnail_regalia.gif",
      alt: "bild på biografen Regalia hero-sektion",
    },
    images: [
      { src: "/projects/regalia/bild1.png", alt: "" },
      { src: "/projects/regalia/bild2.png", alt: "" },
      { src: "/projects/regalia/bild3.png", alt: "" },
      { src: "/projects/regalia/bild4.png", alt: "" },
      { src: "/projects/regalia/bild5.png", alt: "" },
    ],
  },

  {
    slug: "alexander-app",
    title: "Alexander",
    categories: ["Frontend"],
    year: 2026,

    summary:
      "Ett gemensamt frontendprojekt utvecklat i React och TypeScript inför en LIA-ansökan, med fokus på samarbete, komponentbaserad utveckling och kodintegration.",

    description:
      "Alexander är ett samarbetsprojekt som jag utvecklade tillsammans med en vän inför en LIA-ansökan. Syftet var att visa hur vi kan samarbeta, dela upp utvecklingsarbetet och kombinera våra kunskaper i ett gemensamt projekt. Vi delade upp arbetet mellan oss där jag ansvarade för att utveckla komponenter och sidor samt integrera applikationens olika delar. Min vän arbetade med CSS och tog fram datastrukturen och frågorna. När de olika delarna var färdiga ansvarade jag för att sammanfoga vår kod och se till att komponenterna fungerade tillsammans. Projektet gav oss praktisk erfarenhet av samarbete, kodintegration och gemensam frontendutveckling.",

    role: "Frontendutvecklare i par: komponenter, sidor, kodintegration och sammanfogning av gemensam kod",

    features: [
      "Komponentbaserad frontendarkitektur med React",
      "Återanvändbara komponenter för applikationens olika delar",
      "Separata sidor med TypeScript",
      "Integration av gemensam datastruktur och frågelogik",
      "Sammanfogning och integration av kod från två utvecklare",
      "Gemensam utveckling med uppdelade ansvarsområden",
      "CSS-styling och visuell utformning i samarbete",
    ],

    tech: ["React 19", "TypeScript", "Vite", "CSS"],

    repoUrl: "https://github.com/Eiswohld/winner_stays_app",
    thumbnail: {
      src: "/projects/alexander/bild1.png",
      alt: "bild på Alexander quiz",
    },
    images: [
      { src: "projects/alexander/bild1.png", alt: "" },
      { src: "/projects/alexander/bild2.png", alt: "" },
      { src: "/projects/alexander/bild3.png", alt: "" },
    ],
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    categories: ["Frontend"],
    year: 2026,

    summary:
      "Responsiv portfolio byggd med React och TypeScript för att presentera min utvecklarprofil, tekniska kompetenser och personliga projekt.",

    description:
      "Personal Portfolio är en webbapplikation som jag utvecklade för att samla och presentera mina projekt och erfarenheter som utvecklare. Webbplatsen innehåller en personlig presentation, information om mina tekniska inriktningar och en projektdel där besökare kan filtrera projekt efter frontend, backend och fullstack. Varje projekt har en egen detaljsida med beskrivning, funktioner och använda tekniker. Jag har byggt applikationen med React och TypeScript, med fokus på komponentbaserad struktur, återanvändbar data, responsiv design och tillgänglighet.",

    role: "Ensam utvecklare: design, frontend, komponentstruktur, routing och deployment",

    features: [
      "Personlig presentationssida med information om mig och mina kompetenser",
      "Projektöversikt med återanvändbara projektkort",
      "Filtrering av projekt efter Frontend, Backend och Fullstack",
      "Separata detaljsidor för varje projekt med dynamisk routing",
      "Centraliserad projektdata med TypeScript",
      "Responsiv navigering för desktop och mobil",
      "Tillgänglighetsanpassning med tangentbordsnavigering och ARIA-attribut",
      "Lazy loading av projektdetaljsidor",
      "Automatisk deployment till GitHub Pages med GitHub Actions",
    ],

    tech: [
      "React 19",
      "TypeScript",
      "React Router",
      "Vite",
      "CSS",
      "Git",
      "GitHub Actions",
      "GitHub Pages",
    ],

    repoUrl: "https://github.com/TacoKrydda/portfolio_app",
    thumbnail: {
      src: "/projects/portfolio_app/thumbnail.gif",
      alt: "gif på portfolio sidan",
    },
  },
  {
    slug: "authentication-app",
    title: "Authentication API",
    categories: ["Backend"],
    year: 2026,

    summary:
      "Ett REST API för användarautentisering med säker lösenordshantering, JWT och användaradministration.",

    description:
      "Authentication API är ett backendprojekt byggt med Node.js, Express och TypeScript. API:et hanterar registrering, inloggning och användarkonton med JWT-baserad autentisering. Projektet använder bcryptjs för säker lösenordshashning och SQLite för datalagring. Jag har strukturerat backend enligt MVC-principer med separerade controllers, routes och middleware för att skapa en tydlig och underhållbar kodbas.",

    role: "Ensam utvecklare: backend, API, autentisering och databashantering",

    features: [
      "Registrering och inloggning med JWT-autentisering",
      "Säker lösenordshashning med bcryptjs",
      "Skyddade API-rutter med autentiseringsmiddleware",
      "CRUD-operationer för användarprofiler",
      "Möjlighet att uppdatera e-post och lösenord",
      "Kontrollerad datavalidering för e-post och lösenord",
      "SQLite-databas med better-sqlite3",
      "MVC-inspirerad arkitektur med TypeScript",
    ],

    tech: [
      "Node.js",
      "TypeScript",
      "Express",
      "SQLite",
      "better-sqlite3",
      "JWT",
      "bcryptjs",
    ],

    repoUrl: "https://github.com/TacoKrydda/authentication_app",
  },
  {
    slug: "upload-images-app",
    title: "Upload Images App",
    categories: ["Fullstack"],
    year: 2024,

    summary:
      "Webbapplikation för uppladdning och hantering av bilder, med möjlighet att organisera, beskriva och söka bilder med hjälp av taggar.",

    description:
      "Upload Images App är en webbapplikation som jag utvecklade för att hantera och organisera bilder. Användare kan ladda upp flera bilder samtidigt, lägga till beskrivningar och kategorisera dem med taggar. Applikationen har ett bildgalleri, en detaljvy och funktioner för att söka efter bilder baserat på valda taggar. Jag byggde projektet med ASP.NET Core MVC och Entity Framework Core, med en separat servicelösning för bildhantering och databasoperationer.",

    role: "Ensam utvecklare: frontend, backend, bildhantering och databasintegration",

    features: [
      "Ladda upp flera bilder samtidigt",
      "Lägga till beskrivningar och flera taggar till bilder",
      "Bildgalleri för att visa uppladdade bilder",
      "Detaljvy med bildinformation, taggar och uppladdningsdatum",
      "Söka och filtrera bilder baserat på taggar",
      "Dynamiska taggförslag vid sökning",
      "Redigera bildbeskrivningar och taggar",
      "Ta bort bilder och tillhörande filer från servern",
      "Many-to-many-relation mellan bilder och taggar med Entity Framework Core",
    ],

    tech: [
      "C#",
      ".NET 8",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "Razor Views",
      "Bootstrap",
      "Select2",
    ],

    repoUrl: "https://github.com/TacoKrydda/UploadImagesApp",
    thumbnail: {
      src: "/projects/upload-images-app/bild3.png",
      alt: "bild på när man laddar upp en bild",
    },
    images: [
      { src: "/projects/upload-images-app/bild1.png", alt: "" },
      { src: "/projects/upload-images-app/bild2.png", alt: "" },
      { src: "/projects/upload-images-app/bild3.png", alt: "" },
    ],
  },
  {
    slug: "e-commerce-app",
    title: "E-commerce App",
    categories: ["Fullstack"],
    year: 2025,

    summary:
      "En e-handelsplattform för kläder med React-baserat gränssnitt och ASP.NET Core Web API för produkt-, lager- och orderhantering.",

    description:
      "E-commerce App är ett större personligt projekt som jag utvecklade på fritiden under 2025. Målet var att bygga en komplett e-handelsplattform med produktkatalog, filtrering, produktvarianter och kundvagn. Jag byggde frontend med React och TypeScript samt backend med C# och ASP.NET Core Web API. Projektet innehåller även en separat klassbiblioteksstruktur med Entity Framework Core, DTO:er och servicelager för att hantera data och affärslogik. Projektets omfattning växte dock mer än planerat och utvecklingen avslutades i förtid innan hela köpresan och autentiseringen hann implementeras.",

    role: "Ensam utvecklare: frontend, backend, API-design, databashantering och arkitektur",

    features: [
      "Produktkatalog med produktdetaljer och bildvisning",
      "Produktvarianter baserade på färg och storlek",
      "Filtreringsgränssnitt för produkter",
      "Kundvagn med möjlighet att ändra antal och ta bort produkter",
      "Responsiv navigering för desktop och mobil",
      "REST API för produkter, varumärken, kategorier och lager",
      "Backendfunktioner för kunder, kundvagn och orderhantering",
      "Databashantering med Entity Framework Core och SQL Server",
      "Separata DTO:er, servicelager och interfaces",
      "AutoMapper för objektmappning",
    ],

    tech: [
      "React",
      "TypeScript",
      "React Router",
      "Axios",
      "CSS Modules",
      "C#",
      ".NET 8",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server",
      "AutoMapper",
      "Swagger",
    ],

    repoUrl: "https://github.com/TacoKrydda/E-commerceApp",
    thumbnail: {
      src: "/projects/E-commerceApp/bild1.png",
      alt: "bild på webbshopen",
    },
    images: [
      { src: "/projects/E-commerceApp/bild1.png", alt: "" },
      { src: "/projects/E-commerceApp/bild2.png", alt: "" },
      { src: "/projects/E-commerceApp/bild3.png", alt: "" },
    ],
  },
];

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
