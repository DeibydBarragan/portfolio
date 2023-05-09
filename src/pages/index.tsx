import Navbar from "@/components/navbar/navbar";
import HomePage from '../components/home/homePage';
import About from "@/components/about/about";
import Education from '../components/education/education';
import Layout from "@/components/layout/layout";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomePage/>
      <About/>
      <Education/>
    </Layout>
  )
}
