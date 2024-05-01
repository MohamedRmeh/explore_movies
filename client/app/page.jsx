import Hero from "@/components/Hero";
import Movies from "@/components/Movies";
import Submit from "@/components/Submit";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Movies/>
      <Submit/>
    </main>
  );
}

