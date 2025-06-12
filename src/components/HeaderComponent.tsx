import { Button} from "@/components/ui/button.tsx";
import { Code2, X, Menu,  } from 'lucide-react'

interface Props {
    scroll: (sectionId: string) => void,
    setIsMenuOpen: (value: boolean) => void,
    isMenuOpen: boolean,
}

function HeaderComponent(props: Props) {
    const {scroll, setIsMenuOpen, isMenuOpen} = props
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 w-full">
                <div className="flex items-center space-x-2">
                    <Code2 className="h-6 w-6"/>
                    <span className="font-bold text-xl">Darius Gabriel Dobre</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-6">
                    <button
                        onClick={() => scroll("inicio")}
                        className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                    >
                        Inicio
                    </button>
                    <button
                        onClick={() => scroll("sobre-mi")}
                        className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                    >
                        Sobre mí
                    </button>
                    <button
                        onClick={() => scroll("habilidades")}
                        className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                    >
                        Habilidades
                    </button>
                    <button
                        onClick={() => scroll("proyectos")}
                        className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                    >
                        Proyectos
                    </button>
                    <button
                        onClick={() => scroll("contacto")}
                        className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                    >
                        Contacto
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
                </Button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t bg-background">
                    <nav className="flex flex-col space-y-4 p-4">
                        <button
                            onClick={() => scroll("inicio")}
                            className="text-left text-sm font-medium hover:text-primary transition-colors"
                        >
                            Inicio
                        </button>
                        <button
                            onClick={() => scroll("sobre-mi")}
                            className="text-left text-sm font-medium hover:text-primary transition-colors"
                        >
                            Sobre mí
                        </button>
                        <button
                            onClick={() => scroll("habilidades")}
                            className="text-left text-sm font-medium hover:text-primary transition-colors"
                        >
                            Habilidades
                        </button>
                        <button
                            onClick={() => scroll("proyectos")}
                            className="text-left text-sm font-medium hover:text-primary transition-colors"
                        >
                            Proyectos
                        </button>
                        <button
                            onClick={() => scroll("contacto")}
                            className="text-left text-sm font-medium hover:text-primary transition-colors"
                        >
                            Contacto
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default HeaderComponent;