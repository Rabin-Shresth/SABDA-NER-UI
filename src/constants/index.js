import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About NER",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Reviews",
  },
];

export const about = [
  {
    id: "about-1",
    icon: star,
    title: "What is NER?",
    content:
      "Named Entity Recognition (NER) is a form of Natural Language Processing (NLP) that involve extracting and identifying essential information from text.",
  },
  {
    id: "about-2",
    icon: star,
    title: "What is Named Entity?",
    content:
      "The information that is extracted and categorised is called an entity or name entity. It can be any word of series of word that is used as a Named Entity, i.e. Person, Organisation and Location.",
  },
  {
    id: "about-3",
    icon: star,
    title: "What is SABDA NER?",
    content:
      "SABDA NER is a Nepali Language based NER application. It detects and categorizes important information in text known as named entities.",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "",
    content: "Recognizes ot Detects the entities from the given text.",
  },
  {
    id: "feature-2",
    icon: star,
    title: "",
    content: "Classifies entities into different categories, i.e. Person, Organisation and Location.",
  },
  {
    id: "feature-3",
    icon: star,
    title: "",
    content: "Converts unstrcutured information into structured data.",
  },
  {
    id: "feature-4",
    icon: star,
    title: "",
    content:
      "Bestows structure upon raw textual data extracting valuable insights.",
  },
  {
    id: "feature-5",
    icon: star,
    title: "",
    content:
      "Enables downstram analysis.",
  },
  {
    id: "feature-6",
    icon: star,
    title: "",
    content:
      "Allows web scraping to extract phrases for processing.",
  },
];

export const application = [
  {
    id: "app-1",
    icon: star,
    title: "",
    content:
      "Location Tracking.",
  },
  {
    id: "app-2",
    icon: star,
    title: "",
    content:
      "Organisational Evaluaion.",
  },
  {
    id: "app-3",
    icon: star,
    title: "",
    content:
      "News and Media Analysis",
  },
  {
    id: "app-4",
    icon: star,
    title: "",
    content:
      "General public and Public figure mentions",
  },
  {
    id: "app-5",
    icon: star,
    title: "",
    content:
      "Data Contextualisation",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:"..",
    name: "Herman Jensen",
    title: "Leader of",
    img: people01,
  },
  {
    id: "feedback-2",
    content:"...",
    name: "Steve Mark",
    title: "Leader of",
    img: people02,
  },
  {
    id: "feedback-3",
    content: "..",
    name: "Kenn Gallagher",
    title: "Founder of ",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "30+",
  },
  {
    id: "stats-2",
    title: "Trained Data",
    value: "25000+",
  },
  {
    id: "stats-3",
    title: "Validated Data",
    value: "15000+",
  },
  {
    id: "stats-4",
    title: "Tested Data",
    value: "1000+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://github.com/Rabin-Shresth/MajorProject-NER-Nepali",
      },
      {
        name: "How it Works",
        link: "https://medium.com/@shaikhrayyan123/a-comprehensive-guide-to-understanding-bert-from-beginners-to-advanced-2379699e2b51",
      },
      {
        name: "Our Model",
        link: "https://huggingface.co/bert-base-multilingual-uncased",
      },
      {
        name: "Terms & Services?",
        link: "",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "LinkedIn",
        link: "/",
      },
      {
        name: "Github",
        link: "/",
      },
      {
        name: "Email",
        link: "/",
      },
      {
        name: "Newsletters",
        link: "/",
      },
    ],
  },
  // {
  //   title: "Partner",
  //   links: [
  //     {
  //       name: "Become a Member",
  //       link: "",
  //     },
  //     {
  //       name: "Become a Partner",
  //       link: "/",
  //     },
  //   ],
  // },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];