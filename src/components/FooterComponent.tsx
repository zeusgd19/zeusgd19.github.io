import {Code2} from "lucide-react";

function FooterComponent() {
    return (
        <footer className="border-t py-8">
            <div className="container px-4 mr-auto ml-auto">
                <div className="flex flex-col md:flex-row justify-between items-center ">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Code2 className="h-5 w-5"/>
                        <span className="font-semibold">Darius Gabriel Dobre</span>
                    </div>
                    <p className="text-sm text-muted-foreground">© 2025 Darius Gabriel Dobre. Todos los derechos
                        reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;