import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import {Code2, Database, Gamepad2, Server} from "lucide-react";

interface Props {
    skills: {
        backend: {
            name: string,
            level: string
        }[],
        frontend: {
            name: string,
            level: string
        }[],
        gamedev: {
            name: string,
            level: string
        }[],
        tools: {
            name: string,
            level: string
        }[]
    }
}
function SkillsComponent(props: Props) {
    const {skills} = props

    return (
        <section id="habilidades" className="py-20">
            <div className="container-full px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Habilidades Técnicas</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Server className="h-5 w-5"/>
                                    Backend
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {skills.backend.map((skill, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-sm">{skill.name}</span>
                                        <Badge
                                            variant={
                                                skill.level === "Avanzado"
                                                    ? "default"
                                                    : skill.level === "Intermedio"
                                                        ? "secondary"
                                                        : "outline"
                                            }
                                        >
                                            {skill.level}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Code2 className="h-5 w-5"/>
                                    Frontend
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {skills.frontend.map((skill, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-sm">{skill.name}</span>
                                        <Badge
                                            variant={
                                                skill.level === "Avanzado"
                                                    ? "default"
                                                    : skill.level === "Intermedio"
                                                        ? "secondary"
                                                        : "outline"
                                            }
                                        >
                                            {skill.level}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Gamepad2 className="h-5 w-5"/>
                                    Game Dev
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {skills.gamedev.map((skill, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-sm">{skill.name}</span>
                                        <Badge
                                            variant={
                                                skill.level === "Avanzado"
                                                    ? "default"
                                                    : skill.level === "Intermedio"
                                                        ? "secondary"
                                                        : "outline"
                                            }
                                        >
                                            {skill.level}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Database className="h-5 w-5"/>
                                    Herramientas
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {skills.tools.map((skill, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                        <span className="text-sm">{skill.name}</span>
                                        <Badge
                                            variant={
                                                skill.level === "Avanzado"
                                                    ? "default"
                                                    : skill.level === "Intermedio"
                                                        ? "secondary"
                                                        : "outline"
                                            }
                                        >
                                            {skill.level}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsComponent;