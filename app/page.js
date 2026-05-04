import React from "react";
import { Scissors, MapPin, Phone, Mail, Star, PawPrint, CalendarDays } from "lucide-react";

export default function PoochParlourWebsite() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-cyan-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <PawPrint className="h-4 w-4" /> 1-to-1 dog grooming in Llantwit Major
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              The Pooch Parlour
            </h1>
            <p className="mt-4 text-xl font-semibold text-cyan-700">Professional dog grooming salon</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
              Fully qualified dog groomer offering calm, friendly 1-to-1 grooming appointments for dogs of all shapes and sizes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:07535508226" className="rounded-2xl bg-cyan-700 px-6 py-4 text-center font-bold text-white shadow-lg transition hover:bg-cyan-800">
                Call 07535 508226
              </a>
              <a href="mailto:Lauramarymaguire@hotmail.com" className="rounded-2xl bg-white px-6 py-4 text-center font-bold text-slate-900 shadow-sm ring-1 ring-stone-200 transition hover:bg-stone-100">
                Email to book
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
  <img
    src="/salon.jpg"
    alt="The Pooch Parlour salon"
    className="w-full h-full object-cover"
  />
</div>
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-md">
                  <Scissors className="h-12 w-12 text-cyan-700" />
                </div>
                <p className="text-2xl font-black text-slate-950">Fresh trims, happy dogs</p>
                <p className="mt-2 text-stone-600">Replace this panel with salon or dog photos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard icon={<Star />} title="100% recommended" text="Trusted by local dog owners with excellent Facebook reviews." />
          <InfoCard icon={<CalendarDays />} title="Appointments available" text="Message or call to arrange your dog’s next groom." />
          <InfoCard icon={<MapPin />} title="Based in Llantwit Major" text="East Street, Llantwit Major, United Kingdom." />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="font-bold uppercase tracking-widest text-cyan-700">Services</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">Gentle grooming for every pooch</h2>
            <p className="mt-4 text-stone-600">Simple service cards can be adjusted once prices and exact treatments are confirmed.</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Full groom", "Bath, dry, styling and finishing touches."],
              ["Bath & tidy", "A freshen-up for in-between full grooms."],
              ["Puppy introduction", "A calm first salon experience for younger dogs."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl bg-stone-50 p-7 shadow-sm ring-1 ring-stone-200">
                <Scissors className="mb-5 h-8 w-8 text-cyan-700" />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-bold uppercase tracking-widest text-cyan-700">About</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">A calm, personal grooming experience</h2>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              The Pooch Parlour offers fully qualified dog grooming from a friendly local salon in Llantwit Major. With 1-to-1 appointments, each dog gets focused attention in a relaxed environment.
            </p>
          </div>
          <div className="rounded-3xl bg-cyan-700 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-black">Book an appointment</h3>
            <div className="mt-6 space-y-4 text-lg">
              <p className="flex items-center gap-3"><Phone className="h-5 w-5" /> 07535 508226</p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5" /> Lauramarymaguire@hotmail.com</p>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5" /> East Street, Llantwit Major</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-8 text-center text-white">
        <p className="font-bold">The Pooch Parlour grooming salon</p>
        <p className="mt-2 text-sm text-slate-300">Dog grooming in Llantwit Major</p>
      </footer>
    </main>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
        {React.cloneElement(icon, { className: "h-6 w-6" })}
      </div>
      <h3 className="text-lg font-black">{title}</h3>
      <p className="mt-2 leading-7 text-stone-600">{text}</p>
    </div>
  );
}

