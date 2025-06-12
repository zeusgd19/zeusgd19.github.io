import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Github, Linkedin, Mail, MapPin, Phone} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

function ContactComponent() {
    return (
        <section id="contacto" className="py-20">
            <div className="container-full px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">Contacto</h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-center gap-2">
                                    <Mail className="h-5 w-5"/>
                                    Email
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">dariugd19@gmail.com</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-center gap-2">
                                    <Phone className="h-5 w-5"/>
                                    Teléfono
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">+34 643 621 663</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-center gap-2">
                                    <MapPin className="h-5 w-5"/>
                                    Ubicación
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Castellon, España</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground">
                            ¿Tienes un proyecto interesante? ¡Me encantaría saber más sobre él!
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href='https://mail.google.com/mail/?view=cm&to=dariusgd19@gmail.com' target='_blank'>
                                <Button size="lg" className='cursor-pointer'>
                                    <Mail className="mr-2 h-4 w-4"/>
                                    Enviar Email
                                </Button>
                            </a>
                            <Button size="lg" variant="outline" asChild>
                                <a href="https://www.linkedin.com/in/darius-gabriel-dobre-579636345/" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="mr-2 h-4 w-4"/>
                                    LinkedIn
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="https://github.com/zeusgd19" target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4"/>
                                    GitHub
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ContactComponent;