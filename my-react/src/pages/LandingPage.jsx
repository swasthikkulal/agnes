import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Fast delivery",
    text: "Launch clean pages quickly with reusable sections and polished spacing.",
  },
  {
    title: "Modern layout",
    text: "Responsive blocks keep content balanced across mobile, tablet, and desktop.",
  },
  {
    title: "Clear actions",
    text: "Focused calls to action guide visitors toward the next step.",
  },
];

const stats = [
  { value: "48h", label: "Prototype time" },
  { value: "12k+", label: "Visitors reached" },
  { value: "99%", label: "Responsive fit" },
];

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80"
          alt="Creative team planning a product launch"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/75" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <Link to="/" className="text-xl font-bold tracking-wide">
            Agnes Studio
          </Link>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-200 md:flex">
            <a href="#work">Work</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </div>
          <Link to="/contact" className="btn btn-primary btn-sm rounded-md">
            Start now
          </Link>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pb-12 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pt-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Product landing experience
            </p>
            <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Build a launch page that feels premium from the first click.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              A focused landing page for showcasing products, services, and
              campaigns with strong visuals, clean sections, and direct actions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/register" className="btn btn-primary rounded-md">
                Get started
              </Link>
              <a href="#work" className="btn btn-outline rounded-md text-white">
                View work
              </a>
            </div>
          </div>

          <div className="self-end border border-white/15 bg-white/10 p-5 backdrop-blur-md">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-bold text-cyan-200">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Why it works
            </p>
            <h2 className="mt-3 text-4xl font-bold">Designed for conversion</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-md border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            alt="Bright workspace with design boards"
            className="h-[420px] w-full rounded-md object-cover"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Showcase
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              A visual story with useful sections below the fold.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              The page gives visitors the core message immediately, then follows
              with proof points and a clear path into registration or contact.
            </p>
            <div id="contact" className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-primary rounded-md">
                Contact us
              </Link>
              <Link to="/" className="btn rounded-md">
                Back home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
