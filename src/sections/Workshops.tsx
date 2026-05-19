import Button from "@/app/components/Button";

const Workshops = () => {
  return (
    <section className="w-full h-[610px]">
      <div className="flex w-full h-full">
        <div
          style={{ flex: "1 1 0%" }}
          className="h-full overflow-hidden rounded-tr-[75px] rounded-br-[75px]"
        >
          <img
            src="/workshops/bg-workshops.jpg"
            alt="Imagen de un taller"
            className="h-full w-full  object-cover"
          />
        </div>

        <div
          style={{ flex: "3 1 0%" }}
          className="h-full px-[50px] flex items-center"
        >
          <div className="w-full text-left flex flex-col justify-center gap-6">
            <h2 className="h1-display">—Art<br/><em>Workshops</em></h2>
            <p className="p">In a lively and supportive environment, movement, drawing, and writing become gateways to self-discovery. Each workshop invites you to reconnect with your body, explore meaningful questions, and uncover fresh perspectives. By engaging creatively, you open space for personal growth and shared transformation.</p>
            <Button href="" variant="dark">Learn More</Button>
            
          </div>
        </div>
        <div
          style={{ flex: "4 1 0%"}}
          className="h-full overflow-hidden rounded-tl-[75px] rounded-bl-[75px]"
        >
          <img
            src="/workshops/bg-workshops-b.jpg"
            alt="Imagen de un taller"
            className="h-full w-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Workshops;
