const brideFirstName = "Aneena";
const groomFirstName = "Loyed";
const namesJoined = `${brideFirstName} & ${groomFirstName}`;
const namesJoinedPlain = `${brideFirstName} and ${groomFirstName}`;

export const weddingConfig = {
  couple: {
    bride: {
      firstName: brideFirstName,
      lastName: "Vincent",
      fullName: "Aneena Vincent",
      role: "The bride",
      pronoun: "She",
      image: "/images/aneena.jpeg",
      family:
        "Daughter of Vincent & Lilly and sister to Alwin. A close-knit family rooted in love, faith, and togetherness.",
      work: "Works in technology, with a love for learning and creativity.",
    },
    groom: {
      firstName: groomFirstName,
      lastName: "Varghese",
      fullName: "Loyed Varghese",
      role: "The groom",
      pronoun: "He",
      image: "/images/loyed.jpeg",
      family:
        "Son of Varghese & Ancy, and brother to Leanda. Rooted in the love, memories, and values of the family that shaped him.",
      work: "Works as a Merchant Navy officer, travelling the seas while building a life grounded in family and purpose.",
    },
    namesJoined,
    namesJoinedPlain,
    initials: "A&L",
  },

  date: {
    display: "15 November 2026",
    displayLong: "Sunday, 15 November 2026",
    displayShort: "15 · 11 · 2026",
    displayMarquee: "15.11.2026",
    countdownTarget: "2026-11-15T11:00:00+05:30",
    year: 2026,
  },

  location: {
    region: "Kerala, India",
    churchArea: "Thuruthipuram",
  },

  seo: {
    title: `${namesJoined} | Wedding`,
    description: "Our Wedding.",
    lang: "en",
  },

  music: {
    src: "/music/red-velvet.mpeg",
    volume: 0.65,
    loop: true,
    preload: "auto" as const,
    muteAria: "Mute wedding music",
    unmuteAria: "Unmute wedding music",
    muteTitle: "Mute music",
    unmuteTitle: "Unmute music",
  },

  assets: {
    favicon: "/images/logo.png",
    logo: "/images/logo.png",
    saveTheDate: "/images/save-date.webp",
    hero: "/images/hero-blurred.png",
    couple: "/images/couple.jpeg",
    coupleSecondary: "/images/couple-2.webp",
    church: "/images/church-thuruthipuram.webp",
    invitation: "/images/invitation.png",
  },

  theme: {
    primary: "#691638",
    accent: "#C890A7",
    primaryRgb: "105, 22, 56",
    accentRgb: "200, 144, 167",
    dustyPink: "#c9aaa7",
    lightPink: "#ead3d0",
    offWhite: "#f7f3ed",
    sage: "#a9b0a0",
    terracotta: "#d9a070",
    ink: "#35312e",
    muted: "#77716c",
    line: "rgba(53, 49, 46, 0.13)",
    surface: "#fbf8f4",
  },

  flags: {
    saveTheDate: true,
    nav: true,
    hero: true,
    countdown: true,
    marquee: false,
    couple: true,
    story: true,
    gallery: true,
    venue: true,
    rsvp: true,
    upload: true,
    footer: true,
    music: true,
  },

  nav: {
    links: [
      { label: "Story", href: "#story", flag: "story" as const },
      { label: "Gallery", href: "#gallery", flag: "gallery" as const },
      { label: "Venue", href: "#venue", flag: "venue" as const },
      { label: "RSVP", href: "#rsvp", flag: "rsvp" as const },
    ],
  },

  endpoints: {
    rsvp: "https://script.google.com/macros/s/AKfycbxRiGkA8_39HVV6Irzm59olEsI9YJbHq-ExFd9cCBKbA9aYF0dnr8jtl8UYAyX6Aiv3wQ/exec",
    photos:
      "https://script.google.com/macros/s/AKfycbxJ2RQiVhs2-wJ0pjcJPRjFm-M3OmFiYUfqSptQBOC8nvH39UPRCtc4BFwAN1-kn--7/exec",
    wishes:
      "https://script.google.com/macros/s/AKfycbx9DmkJuMlGaY0CR_ccaa3L2pLELRx24a-3TPN39GqTq1XYiKAlZVoESqVuk30VBvmG4A/exec",
  },

  calendar: {
    title: `${namesJoined} — Wedding Day`,
    start: "2026-11-15T00:00:00+05:30",
    end: "2026-11-16T00:00:00+05:30",
    location: "Kerala, India",
    description: `Save the date for ${brideFirstName} & ${groomFirstName}'s wedding celebration.`,
    addLabel: "Add to calendar",
    overlayEyebrow: "Save the date",
  },

  palette: ["#C88C8D", "#B87880", "#edd9bc", "#9B6975", "#53015286"],

  gallery: [
    {
      src: "/images/gallery/couple-gallery-1.webp",
      alt: "Long Drives",
      number: "01",
      aspect: "aspect-[4/5]",
      imageClass: "object-[center_42%]",
      desktop: "md:col-span-4 md:translate-y-8",
      mobile: "translate-y-0",
    },
    {
      src: "/images/gallery/couple-gallery-2.webp",
      alt: "Together",
      number: "02",
      aspect: "aspect-[5/6]",
      imageClass: "object-center",
      desktop: "md:col-span-5 md:-translate-y-2",
      mobile: "translate-y-6",
    },
    {
      src: "/images/gallery/couple-gallery-3.webp",
      alt: "Waves & Tides",
      number: "03",
      aspect: "aspect-[4/5]",
      imageClass: "object-[center_48%]",
      desktop: "md:col-span-3 md:translate-y-28",
      mobile: "translate-y-0",
    },
    {
      src: "/images/gallery/couple-gallery-4.webp",
      alt: "Date Nights",
      number: "04",
      aspect: "aspect-[5/6]",
      imageClass: "object-center",
      desktop: "md:col-span-5 md:translate-y-20",
      mobile: "translate-y-10",
    },
    {
      src: "/images/gallery/couple-gallery-5.webp",
      alt: "Celebration",
      number: "05",
      aspect: "aspect-[4/5]",
      imageClass: "object-[center_42%]",
      desktop: "md:col-span-4 md:-translate-y-4",
      mobile: "translate-y-0",
    },
    {
      src: "/images/gallery/couple-gallery-7.webp",
      alt: "Tea + Laughter",
      number: "06",
      aspect: "aspect-[5/6]",
      imageClass: "object-[center_42%]",
      desktop: "md:col-span-5 md:translate-y-16",
      mobile: "translate-y-8",
    },
  ],

  events: [
    {
      number: "01",
      type: "Bethrothal",
      time: "4:00 PM",
      place: "St Francis Assisi Church",
      description:
        "We begin our betrothal surrounded by our families and loved ones, at the very place where we first met.",
      mapsUrl: "https://maps.app.goo.gl/owMGgWLTWnmmyMat9",
    },
    {
      number: "02",
      type: "Reception",
      time: "6:00 PM Onwards",
      place: "Infant Jesus Church Parish hall",
      description:
        "An evening of dinner, conversation, music, dancing, and celebrating together.",
      mapsUrl: "https://maps.app.goo.gl/FU5VgkeMbASUa4qz9",
    },
  ],

  copy: {
    saveTheDate: {
      eyebrow: "A new chapter begins",
      titleLead: "Save the",
      titleAccent: "Date",
      cta: "Open invitation",
      footer: "We can't wait to celebrate with you",
      imageAlt: "Wedding table setting",
    },
    hero: {
      eyebrow: "With joyful hearts, we invite you",
      cta: "Discover our story",
      ctaHref: "#story",
    },
    countdown: {
      eyebrow: "Until we say I do",
      title: "The countdown is on.",
      description: "Soon, two hearts become one beautiful beginning.",
    },
    marquee: [
      namesJoined,
      "15.11.2026",
      "Bethrothal",
      "Forever starts here",
    ],
    couple: {
      eyebrow: "Meet the couple",
      title: "Two lives, one beautiful beginning.",
      description: "A little glimpse into the people behind the invitation.",
      familyLabel: "Family",
      workLabel: "What we do",
    },
    story: {
      eyebrow: "Our story",
      titleLead: "It started",
      titleAccent: " with a hello.",
      intro:
        "Two separate journeys slowly became one shared story, filled with ordinary moments that somehow became the ones we treasure most.",
      stampLabel: "Bethrothal",
      asideEyebrow: "A little bit of us",
      asideTitleLead: "Somewhere between then",
      asideTitleAccent: " and now.",
      paragraphs: [
        "Somewhere between then and now. It all started with a glance at church — a little eye contact that neither of us knew would become the beginning of our story. Then came an Instagram follow, a few messages, and conversations that slowly turned a familiar face into someone we couldn’t imagine not knowing. Then came the miles. With him at sea, we learned to love through long calls, quiet waits, missed moments, and precious reunions.",
        "The distance wasn’t always easy, but it made every moment together mean a little more. From that first glance to crossing oceans and countless little moments, we found our way to each other. And now, after all the waiting, we’re ready for the chapter where coming home means coming home to each other. A simple glance. A love across oceans. A lifetime together.",
      ],
      imageAlt: `${namesJoinedPlain}`,
    },
    gallery: {
      eyebrow: "A few frames",
      title: "Moments worth keeping.",
    },
    venue: {
      eyebrow: "The celebration",
      titleLead: "Two moments.",
      titleAccent: "One celebration.",
      description:
        "From the quiet beauty of the church to an evening of celebration, we would love to have you with us.",
      churchImageAlt: "Church where the celebration begins",
      churchLabelEyebrow: "Where it begins",
      churchLabelTitle: "The Church",
      mapsCta: "Open location",
      paletteEyebrow: "The colour story",
      paletteTitleLead: "Colours for our ",
      paletteTitleAccent: "celebration.",
      paletteDescription: "A soft palette chosen for our Bethrothal.",
      paletteFooter: "Bethrothal palette",
    },
    rsvp: {
      eyebrow: "Be our guest",
      titleLead: "We'd love to",
      titleAccent: " hear from you.",
      description:
        "Let us know that you're coming. A little note from you would make our day even more special.",
      quote: '"The best moments are the ones we share."',
      formEyebrow: "RSVP",
      formTitle: "Save your place.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      attendanceLegend: "Will you be joining us?",
      attendanceYes: "Yes, I'll be there",
      attendanceNo: "Sorry, I can't make it",
      noteLabel: "Note",
      noteOptional: "(optional)",
      notePlaceholder: "A note for the couple...",
      submitIdle: "Send RSVP",
      submitBusy: "Sending...",
      successTitle: "Thank you.",
      successBody:
        "Your response has been received. We cannot wait to celebrate this beautiful day with you.",
      errorName: "Please enter your name.",
      errorAttendance: "Please let us know whether you'll be joining us.",
      errorSubmit: "Unable to send RSVP. Please try again.",
      errorGeneric: "Something went wrong. Please try again.",
    },
    upload: {
      eyebrow: "A little something",
      titleLead: "Keep this moment",
      titleAccent: "close to your heart.",
      description:
        "View our invitation, leave us a wish, or capture a little memory from the day.",
      invitationLabel: "View invitation",
      wishesLabel: "Send your wishes",
      photosLabel: "Share a memory",
      invitationAlt: "Wedding invitation",
      wishesEyebrow: "A little note",
      wishesTitle: "Send us your wishes.",
      wishesDescription:
        "Leave us a few words to carry with us into this beautiful new chapter.",
      wishNameLabel: "Your name",
      wishNamePlaceholder: "Enter your name",
      wishMessageLabel: "Your message",
      wishMessagePlaceholder: "Write something lovely...",
      wishSubmitIdle: "Send wishes",
      wishSubmitBusy: "Sending...",
      wishSuccess: "Your wishes have been sent. Thank you.",
      photosSelectedSingular: "photo",
      photosSelectedPlural: "photos",
      photosSelectedSuffix: "selected",
      memoriesEyebrow: "Your memories",
      addAnother: "Add another",
      selectedMemoryAlt: "Selected memory",
      removePhotoAria: "Remove photo",
      photosSelectedOnDevice: "Photos selected on this device",
      submitPhotosIdle: "Submit photos",
      submitPhotosBusy: "Uploading memories...",
      uploadSuccess: "Your memories have been shared.",
      closeInvitationAria: "Close invitation",
      closeGreetingsAria: "Close greetings",
      errorUpload: "Something went wrong while uploading your photos.",
      errorWishUnable: "Unable to send your wishes. Please try again.",
      errorWish: "Something went wrong while sending your wishes.",
    },
    footer: {
      eyebrow: "Until forever",
      creditUrl: "https://wyvernstack.com",
      creditLabel: "wyvernstack.com",
      copyrightName: "Wyvernstack",
    },
  },
} as const;

export type WeddingConfig = typeof weddingConfig;
export type WeddingFlag = keyof typeof weddingConfig.flags;

export function getNavLinks() {
  return weddingConfig.nav.links.filter(
    (link) => weddingConfig.flags[link.flag],
  );
}
