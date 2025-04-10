import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="../assets/stephenking.jpg"
          alt="Stephen King"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Always Relevant Stephen King
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Stephen King has had a writing career which has spanned more than five decades, yet
              he never fails to surprise, thrill, and delight with his content. His writing
              and his wit stay fresh and relevant despite his extensive career. His books have 
              been made into mini-series and movies. He has collaborated with other great 
              writers but his unique style always comes through and his nightmares have haunted 
              generations. 

            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="../assets/octaviabutler.jpg"
          alt="Octavia E Butler"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Visionary Science Fiction Writer
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Octavia Butler was a visionary science fiction writer who is a master of world-building.
              From her dytopia fiction, like Parable of the Sower, to her history-bending novel Kindred,
              Butler has a knack for bringing real-world issues into futuristic settings. Her works deal 
              with issues of sexism, racism, classism, and corruption. Sadly, Butler passed in 2006, but 
              her powerful writing remains as a testament of her legacy.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="../assets/Margaret_Atwood_2015.jpg"
          alt="Margaret Atwood"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              More Than a Handmaid
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Perhaps best known for The Handmaid&apos;s Tale, Margaret Atwood is a master of 
              dystopian fiction. Among her 18 novels, the Oryx and Crake series is a standout. 
              While she is great writing dystopian fiction, Atwood has written many other kinds of literature 
              including poetry, non-fiction, graphic novels, children&apos;s books, and short fiction collections.
              Alias Grace, The Edible Women, and Surfacing are some other of her well-received pieces.                
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}