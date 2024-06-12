import {
  BriefcaseIcon,
  Building2Icon,
  FileTextIcon,
  MapIcon,
  RefreshCwIcon,
  SettingsIcon,
} from "@/components/Icons";

export const headerLinks = [
  {
    label: "O Nas",
    route: "#about",
  },
  {
    label: "Projekty",
    route: "#projects",
  },
  {
    label: "Usługi",
    route: "#services",
  },
];

export const team = [
  "Imię Nazwisko",
  "Imię Nazwisko",
  "Imię Nazwisko",
  "Imię Nazwisko",
];

export const coop = [
  "firma 1",
  "firma 2",
  "firma 3",
  "firma 4",
  "firma 5",
];

export const projects = [
  {
    image: "/assets/images/house-inside.jpg",
    label: "Projekt 1",
    href: "#",
  },
  {
    image: "/assets/images/house-inside.jpg",
    label: "Projekt 2",
    href: "#",
  },
  {
    image: "/assets/images/house-inside.jpg",
    label: "Projekt 3",
    href: "#",
  },
  {
    image: "/assets/images/house-inside.jpg",
    label: "Projekt 4",
    href: "#",
  },
  {
    image: "/assets/images/house-inside.jpg",
    label: "Projekt 5",
    href: "#",
  },
  {
    image: "/assets/images/house-inside.jpg",
    label: "Projekt 6",
    href: "#",
  },
];

export const offers = [
  {
    title: "Projekty indywidualne",
    description:
      "Budowa domu jednorodzinnego musi być przemyślana. w cenie projektu domu otrzymasz profesjonalne konsultacje doświadczonego architekta.",
    icon: (
      <BriefcaseIcon className="size-6 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Załatwianie formalności",
    description:
      "Pomagamy naszym Klientom w załatwianiu spraw w urzędach, opcjonalnie nadzorujemy procesy wydawania warunków zabudowy oraz pozwoleń na budowę.",
    icon: (
      <FileTextIcon className="size-6 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Budynki usługowe",
    description:
      "Posiadamy doświadczenie w projektowaniu budynków handlowo - usługowych oraz biurowych. Zapraszamy przedsiębiorców do współpracy.",
    icon: (
      <Building2Icon className="size-6 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Adaptacje projektów",
    description:
      "Oferujemy usługę adaptacji zakupionych przez Państwa projektów do działki inwestorów na terenie podlaskim.",
    icon: (
      <SettingsIcon className="size-6 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Mapy geodezyjne",
    description:
      "Dzięki współpracy z doświadczonymi geodetami oferujemy usługi w zakresie realizacji map do celów projektowych oraz wyznaczenia budynku na działce.",
    icon: (
      <MapIcon className="size-6 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
  {
    title: "Modernizacje i rozbudowy",
    description:
      "Wykonujemy również projekty indywidualne adaptacji starszych budynków oraz ich modernizacji, przebudowy czy zmian sposobu użytkowania.",
    icon: (
      <RefreshCwIcon className="size-6 shrink-0 text-gray-900 dark:text-gray-50" />
    ),
  },
];

export const footerLinks = [
  "Link1",
  "Link2",
  "Link3",
  "Link4",
];
