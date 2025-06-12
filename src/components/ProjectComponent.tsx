import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Badge } from "@/components/ui/badge.tsx";
import {ExternalLink, Github} from "lucide-react";

interface Props {
    projects: {
            title: string,
            type: string,
            description: string,
            technologies: string[],
            github: string,
            demo: string
    }[]
}

function ProjectComponent(props: Props) {

    const {projects} = props

    return (
        <section id="proyectos" className="py-20 bg-muted/50">
            <div className="container-full px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Proyectos</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <Card key={index} className="h-full">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-xl">{project.title}</CardTitle>
                                        <Badge
                                            variant={
                                                project.type === "Backend" ? "default" : project.type === "Frontend" ? "secondary" : "outline"
                                            }
                                        >
                                            {project.type}
                                        </Badge>
                                    </div>
                                    <CardDescription
                                        className="text-base leading-relaxed">{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="outline">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline" asChild>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4"/>
                                                Código
                                            </a>
                                        </Button>
                                        <Button size="sm" asChild>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4"/>
                                                Demo
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectComponent;