import NavBar from "../components/NavBar";
import StartBackground from "../components/StartBackground";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      <ThemeToggle />
      <StartBackground />
      <NavBar />
    </div>
  );
}
