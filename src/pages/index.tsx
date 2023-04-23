import Navbar from "@/components/navbar/Navbar";
import HomePage from '../components/home/HomePage';
import About from "@/components/about/About";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar/>
      <div className="flex flex-col p-4 gap-10">
        <HomePage/>
        <About/>
      </div>
    </>
  )
}
