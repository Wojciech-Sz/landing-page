import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { projects } from "@/constans";
import Image from "next/image";

export default function ProjectDetails({
  id,
}: {
  id: number;
}) {
  const project = projects.find(
    (project) => project.id === Number(id)
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-center text-3xl font-bold">
        {project?.label}
      </h2>
      <Carousel className="mb-8">
        <CarouselContent>
          {Array.isArray(project?.images) &&
            project?.images.map((image, i) => (
              <CarouselItem
                key={i}
                className="flex w-full items-center justify-center"
              >
                <Image
                  src={image}
                  width={800}
                  height={500}
                  alt="Project Image 1"
                  className="aspect-video rounded-md object-cover"
                />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
          <h3 className="mb-4 text-xl font-bold">
            Informacje o Projekcie
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Pow. użytkowa mieszkalna:</span>
              <span>150 m²</span>
            </li>
            <li className="flex justify-between">
              <span>Pow. użytkowa całkowita :</span>
              <span>200 m²</span>
            </li>
            <li className="flex justify-between">
              <span>Pow. zabudowy :</span>
              <span>300 m²</span>
            </li>
            <li className="flex justify-between">
              <span>Kubatura:</span>
              <span>500 m³</span>
            </li>
            <li className="flex justify-between">
              <span>Lokalizacja:</span>
              <span>Białystok, Polska</span>
            </li>
            <li className="flex justify-between">
              <span>Cena:</span>
              <span>$1,500,000</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
          <h3 className="mb-4 text-xl font-bold">
            Opis Projektu
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Ten nowoczesny dom jednorodzinny to połączenie
            elegancji, funkcjonalności i komfortu.
            Zaprojektowany z myślą o rodzinie, oferuje
            przestronne wnętrza i otwarte przestrzenie,
            które sprzyjają wspólnemu spędzaniu czasu.
            Jasne, naturalnie doświetlone pomieszczenia oraz
            starannie dobrane materiały tworzą harmonijną
            całość, która zachwyca zarówno estetyką, jak i
            praktycznością.
          </p>
        </div>
      </div>
    </div>
  );
}
