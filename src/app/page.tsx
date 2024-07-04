import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import AboutMe from "@/components/AboutMe/AboutMe";
import Interests from "@/components/Interests/Interests";
import ContactForm from "@/components/ContactForm/ContactForm";


export default function Home() {
  return (
    <main className={styles.main}>
        <AboutMe />
        <Interests />
        <ContactForm />
    </main>
  );
}
