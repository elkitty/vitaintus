import SessionCardRow from "@/app/components/SessionCard";
const Sessions = () => {
  return (
    <section className="relative w-full bg-[#CBC2B9] overflow-hidden py-32">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6 text-left pl-[40px] xl:pl-[60px]">
          <h2 className="h1-display m-0">
            —Sessions for
            <br />
            <em>Individuals & Couples</em>
          </h2>

          <p className="p m-0 max-w-[690px]">
            In a lively and supportive environment, I offer grounded and
            attentive spaces designed for both personal growth and relationship
            healing. Each session is an invitation to connect more deeply—with
            yourself, or with your partner—guided by presence, sensitivity, and
            authentic dialogue.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-[40px]">
          <SessionCardRow
            title="—COUPLES SESSIONS"
            text="A calm and attentive space to explore the patterns in your relationship. With guided conversation, we open the door to clearer communication and deeper connection."
            buttonLabel="Book a Session"
            href=""
            imageSrc="/sessions/cs-bg.jpg"
          />

          <SessionCardRow
            reverse
            title="—INDIVIDUAL SESSIONS"
            text="A grounded and compassionate space to connect with what 
          is alive within you. Together we explore patterns and ques
          tions that shape your way of being, opening the way to inte
          gration and personal growth."
            buttonLabel="Book a Session"
            href=""
            imageSrc="/sessions/is-bg.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Sessions;
