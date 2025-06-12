import {Gamepad2, Server} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function AboutComponent() {
    return (
        <section id="sobre-mi" className="py-20 bg-muted/50">
            <div className="container-full px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre mí</h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed">
                                Soy un desarrollador web recién graduado del Grado Superior en Desarrollo de
                                Aplicaciones Web. Durante
                                mi formación, he adquirido sólidos conocimientos en tecnologías tanto de frontend como
                                de backend, con
                                una especial inclinación hacia el desarrollo del lado del servidor.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Mi experiencia incluye el trabajo con frameworks como Symfony para PHP, así como
                                tecnologías frontend
                                modernas como Angular, React y Vue.js. También tengo conocimientos en bases de datos
                                relacionales y
                                diseño de APIs REST.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Además del desarrollo web, tengo un gran interés en el desarrollo de videojuegos, área
                                en la que estoy
                                comenzando a explorar con Unity y C#.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Server className="h-5 w-5"/>
                                        Especialización
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Backend Development con PHP y Symfony</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Gamepad2 className="h-5 w-5"/>
                                        Interés Personal
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Desarrollo de Videojuegos con Unity</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutComponent;