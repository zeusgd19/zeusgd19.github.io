import {Code2, Download} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

interface Props {
    scroll: (sectionId: string) => void,
}

function HeroComponent(props: Props) {

    const {scroll} = props

    return (
        <section id="inicio" className="py-20 md:py-32">
            <div className="px-4 container-full">
                <div className="flex flex-col items-center text-center space-y-6">
                    <div
                        className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center">
                        <Code2 className="h-16 w-16 text-primary-foreground"/>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Darius Gabriel Dobre</h1>
                        <p className="text-xl md:text-2xl text-muted-foreground">Desarrollador de Aplicaciones Web</p>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Titulado en Desarrollo de Aplicaciones Web con especialización en Backend. Apasionado
                            por crear
                            soluciones eficientes y explorar el mundo del desarrollo de videojuegos.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" onClick={() => scroll("proyectos")}>
                            Ver Proyectos
                        </Button>
                        <Button size="lg" variant="outline">
                            <Download className="mr-2 h-4 w-4"/>
                            Descargar CV
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroComponent;