import { ArrowUp } from "lucide-react";

export const Footer = () =>
{
    return(
        <footer className="py-12 px-4 bg-card relative boarder-t boarder-boarder mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Ethan Heil. All rights reserved.
            </p>

            <a href="#home" className="p-2 rounded-button">
                <ArrowUp/>
            </a>

        </footer>
    );
}