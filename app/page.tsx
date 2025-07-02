"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f1ed]">
      {/* Header */}
      <header className="px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-left">
            <h1 className="text-base font-medium text-[#4a4a4a] freight-sans tracking-wide">
              Serena Blake, PsyD
            </h1>
            <p className="text-sm text-[#6b6b6b] freight-sans mt-0.5">
              Psychological Services
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Height with Ocean/Coast Background */}
      <section className="relative h-screen flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        >
          {/* Light overlay to make text readable but keep the ocean visible */}
          <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        </div>
        <div className="relative z-10 text-white max-w-5xl px-8">
          <h2 className="text-[56px] leading-[1.1] font-normal mb-8 freight-display">
            Psychological Care for
            <br />
            Change, Insight, and Well-Being
          </h2>
          <p className="text-[18px] mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed freight-sans">
            Offering individual psychotherapy for adolescents and adults in
            Michigan and{" "}
            <span className="underline decoration-1 underline-offset-2">
              over U.S. states
            </span>{" "}
            through PSYPACT participation
          </p>
          <Button className="bg-[#5a8a8a] hover:bg-[#4a7a7a] text-white px-8 py-3 rounded-full text-[14px] font-medium freight-sans tracking-wide">
            SCHEDULE A CONSULTATION
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="pr-8">
              <h3 className="text-[36px] font-normal mb-10 text-[#3a3a3a] freight-display leading-tight">
                About Dr. Serena Blake
              </h3>
              <div className="space-y-6 text-[#5a5a5a] leading-[1.7] text-[16px] freight-sans">
                <p>
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                  based in Los Angeles, CA, with eight years of experience and
                  over 500 client sessions. She blends evidence-based
                  approaches—like cognitive-behavioral therapy and
                  mindfulness—with compassionate, personalized care to help you
                  overcome anxiety, strengthen relationships, and heal from
                  trauma. Whether you meet in her Maplewood Drive office or
                  connect virtually via Zoom, Dr. Blake is committed to creating
                  a safe, supportive space for you to thrive.
                </p>
              </div>
            </div>
            <div className="flex justify-center pl-4">
              <div className="relative">
                <img
                  src="blake.jpg"
                  alt="Dr. Serena Blake"
                  className="rounded-lg w-[380px] h-[475px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-8 bg-[#ebe7e1]">
        <div className="max-w-5xl mx-auto text-center">
          <blockquote className="text-[32px] font-normal italic text-[#3a3a3a] leading-[1.3] freight-display mb-10">
            "Therapy can be a space where you invest in yourself—
            <br />
            one of the highest forms of self-care."
          </blockquote>
          <p className="text-[#5a5a5a] max-w-3xl mx-auto text-[16px] leading-[1.7] freight-sans">
            Therapy is an incredible investment in yourself, your relationships,
            and your overall quality of life. Together, we will work to provide
            individualized attention that meets your needs and circumstances as
            we navigate through the process to make positive change in your
            life.
          </p>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[36px] font-normal text-center mb-20 text-[#3a3a3a] freight-display">
            Areas of Focus
          </h3>
          <div className="grid md:grid-cols-3 gap-16">
            {/* Healthcare Providers */}
            <div className="text-center">
              <div className="relative mb-8">
                <img
                  src="anxiety.jpg"
                  alt="Healthcare Providers"
                  className="w-[280px] h-[280px] rounded-full object-cover mx-auto"
                />
              </div>
              <h4 className="text-[22px] font-medium mb-6 text-[#3a3a3a] freight-display leading-tight">
                Anxiety & Stress Management
              </h4>
              <p className="text-[#5a5a5a] leading-[1.7] text-[15px] freight-sans">
                Managing anxiety and stress in a demanding work environment is
                crucial for maintaining overall well-being. In such contexts,
                individuals often encounter challenges like anxiety, burnout,
                and various emotional strains. These issues can manifest as
                sleep disturbances, obsessive thoughts, or even affect
                relationships and work performance. My therapeutic approach aims
                to provide a supportive community where these concerns can be
                openly discussed and understood.
              </p>
            </div>

            {/* Trauma and Grief */}
            <div className="text-center">
              <div className="relative mb-8">
                <img
                  src="relationship.jpg"
                  alt="Trauma and Grief"
                  className="w-[280px] h-[280px] rounded-full object-cover mx-auto"
                />
              </div>
              <h4 className="text-[22px] font-medium mb-6 text-[#3a3a3a] freight-display leading-tight">
                Relationship Counseling
              </h4>
              <p className="text-[#5a5a5a] leading-[1.7] text-[15px] freight-sans">
                Relationship counseling offers a supportive space for couples or
                individuals to explore challenges in their personal connections.
                Whether you're facing communication breakdowns, trust issues,
                recurring conflicts, or feeling emotionally distant, counseling
                can help unpack the deeper patterns at play. My approach focuses
                on fostering understanding, rebuilding emotional safety, and
                creating practical tools to strengthen your bond.
              </p>
            </div>

            {/* Second Generation */}
            <div className="text-center">
              <div className="relative mb-8">
                <img
                  src="trauma.jpg"
                  alt="Second Generation"
                  className="w-[280px] h-[280px] rounded-full object-cover mx-auto"
                />
              </div>
              <h4 className="text-[22px] font-medium mb-6 text-[#3a3a3a] freight-display leading-tight">
                Trauma Recovery
              </h4>
              <p className="text-[#5a5a5a] leading-[1.7] text-[15px] freight-sans">
                Trauma can leave lasting emotional and physical imprints, often
                showing up as anxiety, hypervigilance, numbness, or difficulty
                trusting others. Trauma recovery is not about "getting over it,"
                but about gently processing what happened, reclaiming safety,
                and rebuilding a sense of self that may have been disrupted. In
                therapy, we work at your pace to explore and understand your
                experiences, while grounding you in the present.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="py-18 px-8 bg-[#f4f1ed]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-[36px] font-normal mb-10 text-[#3a3a3a] freight-display">
            Information and Details
          </h3>
          <div className="space-y-4 text-[#4a4a4a] text-[16px] freight-sans">
            <p>
              <strong className="font-semibold">Individual Session:</strong>{" "}
              $200
            </p>
            <p>
              <strong className="font-semibold">Couples Session:</strong> $240
            </p>
            <p>
              <strong className="font-semibold">In-person: </strong> Tue & Thu,
              10 AM–6 PM
            </p>
            <p>
              <strong className="font-semibold">Virtual via Zoom:</strong> Mon,
              Wed & Fri, 1 PM–5 PM
            </p>
            <p>
              <strong className="font-semibold">Experience:</strong> 8 years of
              practice, 500+ sessions
            </p>
          </div>
        </div>
      </section>

      {/* Unable to accept new clients */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* <p className="text-[#4a4a4a] text-[18px] freight-sans">
            Unable to accept new clients at this time.
          </p> */}
        </div>
      </section>

      {/* Final Quote Section - Much Bigger */}
      <section className="relative py-32 px-8">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <blockquote className="text-[34px] font-normal italic leading-[1.3] freight-display">
            "I have come to believe that caring for myself is not
            self-indulgent.
            <br />
            Caring for myself is an act of survival."
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-[#f4f1ed]">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-[18px] font-medium mb-8 text-[#3a3a3a] freight-display">
            Serena Blake Ph.D, Licensed Psychologist
          </h4>
          <div className="space-y-3 text-[#5a5a5a] text-[15px] freight-sans">
            <p className="font-medium text-[#4a4a4a] text-[16px]">Contact</p>
            <p>
              Phone:{" "}
              <span className="underline decoration-1 underline-offset-2">
                (323) 555-0192
              </span>{" "}
            </p>
            <p>
              Email:{" "}
              <span className="underline decoration-1 underline-offset-2">
                serena@blakepsychology.com
              </span>
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-[#d0ccc6]">
            <p className="text-[13px] text-[#7a7a7a] freight-sans">
              © 2025 Serena Blake PsyD Psychological Services, LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
