import './App.css'
import HeaderComponent from "./components/HeaderComponent.tsx";
import HeroComponent from "@/components/HeroComponent.tsx";
import {useState} from "react";
import AboutComponent from "@/components/AboutComponent.tsx";
import SkillsComponent from "@/components/SkillsComponent.tsx";
import ProjectComponent from "@/components/ProjectComponent.tsx";
import ContactComponent from "@/components/ContactComponent.tsx";
import FooterComponent from "@/components/FooterComponent.tsx";

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const skills = {
        backend: [
            { name: "PHP", level: "Avanzado" },
            { name: "Symfony", level: "Intermedio" },
            { name: "Node.js", level: "Básico" },
            { name: "API REST", level: "Intermedio" },
            { name: "MySQL", level: "Intermedio" },
            { name: "PostgreSQL", level: "Básico" },
        ],
        frontend: [
            { name: "HTML5/CSS3", level: "Avanzado" },
            { name: "JavaScript", level: "Intermedio" },
            { name: "Angular", level: "Intermedio" },
            { name: "React", level: "Básico" },
            { name: "Vue.js", level: "Básico" },
            { name: "Bootstrap", level: "Intermedio" },
        ],
        gamedev: [
            { name: "Unity", level: "Básico" },
            { name: "C#", level: "Básico" },
            { name: "Game Design", level: "Básico" },
        ],
        tools: [
            { name: "Git", level: "Intermedio" },
            { name: "Docker", level: "Básico" },
            { name: "VS Code", level: "Avanzado" },
            { name: "Postman", level: "Intermedio" },
        ],
    }

    const projects = [
        {
            title: "Spotify Clone",
            description:
                "Plataforma web completa clone de Spotify hecha con Symfony y Angular.",
            technologies: ["Symfony", "Supabase", "Tailwind", "Angular"],
            type: "Backend y Fronted",
            github: "https://github.com/zeusgd19/symfony-spotify",
            demo: "https://spotifyclone.shop",
        },
        {
            title: "Weather Web",
            description:
                "Página web de clima de práctica hecha con React",
            technologies: ["React", "CSS"],
            type: "Frontend",
            github: "https://github.com/zeusgd19/weather-app",
            demo: "https://weather-web-react-zeusgd19.netlify.app",
        },
        {
            title: "PDF Resummer",
            description:
                "App creado para un hackaton de Vercel en el que habia que usar inteligencia artificial, hice un resumidor de PDFs",
            technologies: ["React", "ChatGPT"],
            type: "Frontend",
            github: "https://github.com/zeusgd19/pdf-resummer",
            demo: "https://pdf-resummer.netlify.app",
        },
        {
            title: "TicTacToe",
            description:
                "Juego de tres en raya online",
            technologies: ["NodeJs", "Express", "CSS"],
            type: "Backend y Frontend",
            github: "https://github.com/zeusgd19/TicTacToe",
            demo: "https://main-bvxea6i-5ivvulklovbpi.de-2.platformsh.site/",
        }
    ]

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
    }
  return (
      <div className="min-h-screen bg-background">
        <HeaderComponent scroll={scrollToSection} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}></HeaderComponent>
        <HeroComponent scroll={scrollToSection}></HeroComponent>
        <AboutComponent></AboutComponent>
        <SkillsComponent skills={skills}></SkillsComponent>
        <ProjectComponent projects={projects}></ProjectComponent>
        <ContactComponent></ContactComponent>
        <FooterComponent></FooterComponent>
      </div>
  )
}

export default App
