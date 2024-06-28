import {
  BriefcaseIcon,
  Building2Icon,
  FacebookIcon,
  FileTextIcon,
  InstagramIcon,
  MapIcon,
  RefreshCwIcon,
  SettingsIcon,
  TwitterIcon,
} from "@/components/Icons";

export const headerLinks = [
  {
    label: "O Nas",
    route: "/#about",
  },
  {
    label: "Współprace",
    route: "/#partners",
  },
  {
    label: "Opinie",
    route: "/#testimonials",
  },
  {
    label: "Projekty",
    route: "/#projects",
  },
  {
    label: "Usługi",
    route: "/#services",
  },
];

export const team = [
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
  {
    firstName: "Imię",
    lastName: "Nazwisko",
    role: "Stanowisko",
  },
];

export const coop = [
  { name: "firma 1", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 2", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 3", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 4", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 5", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 6", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 7", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 8", logo: "/assets/icons/yourlogo.svg" },
  { name: "firma 9", logo: "/assets/icons/yourlogo.svg" },
];

export const projects = [
  {
    image: "/assets/images/house1-1.jpg",
    label: "Projekt 1",
    href: "/project/1",
    id: 1,
    details: {
      livingUA: "1000",
      totalUA: "2000",
      buildingArea: "3000",
      volume: "4000",
      localization: "Warszawa",
      price: "5000",
      description: "",
    },
    images: [
      "/assets/images/house1-1.jpg",
      "/assets/images/house1-2.jpg",
      "/assets/images/house1-3.jpg",
      "/assets/images/house1-4.jpg",
    ],
  },
  {
    image: "/assets/images/house1-1.jpg",
    label: "Projekt 2",
    href: "/project/2",
    id: 2,
    details: {
      livingUA: "1000",
      totalUA: "2000",
      buildingArea: "3000",
      volume: "4000",
      localization: "Warszawa",
      price: "5000",
      description: "",
    },
    images: [
      "/assets/images/house1-1.jpg",
      "/assets/images/house1-2.jpg",
      "/assets/images/house1-3.jpg",
      "/assets/images/house1-4.jpg",
    ],
  },
  {
    image: "/assets/images/house1-1.jpg",
    label: "Projekt 3",
    href: "/project/3",
    id: 3,
    details: {
      livingUA: "1000",
      totalUA: "2000",
      buildingArea: "3000",
      volume: "4000",
      localization: "Warszawa",
      price: "5000",
      description: "",
    },
    images: [
      "/assets/images/house1-1.jpg",
      "/assets/images/house1-2.jpg",
      "/assets/images/house1-3.jpg",
      "/assets/images/house1-4.jpg",
    ],
  },
  {
    image: "/assets/images/house2-1.jpg",
    label: "Projekt 4",
    href: "/project/4",
    id: 4,
    details: {
      livingUA: "1000",
      totalUA: "2000",
      buildingArea: "3000",
      volume: "4000",
      localization: "Warszawa",
      price: "5000",
      description: "",
    },
    images: {
      image1: "/assets/images/house2-1.jpg",
      image2: "/assets/images/house2-2.jpg",
      image3: "/assets/images/house2-3.jpg",
      image4: "/assets/images/house2-4.jpg",
    },
  },
  {
    image: "/assets/images/house2-1.jpg",
    label: "Projekt 5",
    href: "/project/5",
    id: 5,
    details: {
      livingUA: "1000",
      totalUA: "2000",
      buildingArea: "3000",
      volume: "4000",
      localization: "Warszawa",
      price: "5000",
      description: "",
    },
    images: [
      "/assets/images/house2-1.jpg",
      "/assets/images/house2-2.jpg",
      "/assets/images/house2-3.jpg",
      "/assets/images/house2-4.jpg",
    ],
  },
  {
    image: "/assets/images/house2-1.jpg",
    label: "Projekt 6",
    href: "/project/6",
    id: 6,
    details: {
      livingUA: "1000",
      totalUA: "2000",
      buildingArea: "3000",
      volume: "4000",
      localization: "Warszawa",
      price: "5000",
      description: "",
    },
    images: [
      "/assets/images/house2-1.jpg",
      "/assets/images/house2-2.jpg",
      "/assets/images/house2-3.jpg",
      "/assets/images/house2-4.jpg",
    ],
  },
];

export const offers = [
  {
    title: "Projekty indywidualne",
    description:
      "Budowa domu jednorodzinnego musi być przemyślana. w cenie projektu domu otrzymasz profesjonalne konsultacje doświadczonego architekta.",
    icon: (
      <BriefcaseIcon className="size-8 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Załatwianie formalności",
    description:
      "Pomagamy naszym Klientom w załatwianiu spraw w urzędach, opcjonalnie nadzorujemy procesy wydawania warunków zabudowy oraz pozwoleń na budowę.",
    icon: (
      <FileTextIcon className="size-8 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Budynki usługowe",
    description:
      "Posiadamy doświadczenie w projektowaniu budynków handlowo - usługowych oraz biurowych. Zapraszamy przedsiębiorców do współpracy.",
    icon: (
      <Building2Icon className="size-8 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Adaptacje projektów",
    description:
      "Oferujemy usługę adaptacji zakupionych przez Państwa projektów do działki inwestorów na terenie podlaskim.",
    icon: (
      <SettingsIcon className="size-8 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Mapy geodezyjne",
    description:
      "Dzięki współpracy z doświadczonymi geodetami oferujemy usługi w zakresie realizacji map do celów projektowych oraz wyznaczenia budynku na działce.",
    icon: (
      <MapIcon className="size-8 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Modernizacje i rozbudowy",
    description:
      "Wykonujemy również projekty indywidualne adaptacji starszych budynków oraz ich modernizacji, przebudowy czy zmian sposobu użytkowania.",
    icon: (
      <RefreshCwIcon className="size-8 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
];

export const footerLinks = [
  {
    href: "https://www.facebook.com/",
    name: "Facebook",
    icon: <FacebookIcon className="size-6" />,
  },
  {
    href: "https://x.com/home?lang=pl",
    name: "X",
    icon: <TwitterIcon className="size-6" />,
  },
  {
    href: "https://www.instagram.com/",
    name: "Instagram",
    icon: <InstagramIcon className="size-6" />,
  },
];
