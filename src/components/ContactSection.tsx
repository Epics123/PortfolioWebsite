import { Mail, MapPin, Phone } from "lucide-react";


export const ContactSection = () =>
{
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Think I'm a good fit for you or want to collaborate? I am always open to discussing new opportunities. Don't hesitate to reach out!
                </p>

                <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                </h3>

                <div className="flex justify-center">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="p3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <a href="mailto:eheil20@gmail.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                            eheil20@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <a className="text-muted-foreground hover:text-primary transition-colors">
                                            +1 (585)-626-0083
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <a className="text-muted-foreground hover:text-primary transition-colors">
                                            Rochester, NY, USA
                                        </a>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </section>
    );
}