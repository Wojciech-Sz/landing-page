/* eslint-disable react/no-unescaped-entities */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f0f8ff] py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Opinie Naszych Klientów
          </h2>
          <Carousel className="w-full max-w-3xl">
            <CarouselContent>
              <CarouselItem>
                <div className="rounded-lg bg-white p-4 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <Avatar className="size-16">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-poppins text-lg font-bold">
                        John Doe
                      </p>
                      <p className="text-sm text-muted-foreground">
                        CEO, Acme Inc.
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "This product has been a game-changer
                    for our business. The\n features are
                    top-notch and the support team is
                    incredibly\n responsive."
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-lg bg-white p-4 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <Avatar className="size-16">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-poppins text-lg font-bold">
                        Jane Doe
                      </p>
                      <p className="text-sm text-muted-foreground">
                        CTO, Acme Inc.
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "I've tried many similar products, but
                    this one stands out\n with its intuitive
                    interface and powerful features.
                    Highly\n recommended!"
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="rounded-lg bg-white p-4 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <Avatar className="size-16">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-poppins text-lg font-bold">
                        Bob Smith
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Product Manager, Acme Inc.
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "This product has streamlined our
                    workflow and helped us\n deliver
                    projects more efficiently. I highly
                    recommend it to\n any team."
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
