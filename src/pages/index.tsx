import Navbar from "@/components/navbar/Navbar";
import HomePage from '../components/home/HomePage';
import About from "@/components/about/About";
import Education from '../components/education/Education';
import Layout from "@/components/layout/Layout";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomePage/>
      <About/>
      <Education/>
    </Layout>
  )
}
