import { useState } from "react";

export default function Clientaccordion({ client }) {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(client.codiceFiscale).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (

        <div className="accordion rounded" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header " id={`heading${client.id}`}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${client.id}`} aria-expanded="true" aria-controls={`collapse${client.id}`}>
                        {client.firstName} {client.lastName}
                    </button>
                </h2>
                <div id={`collapse${client.id}`} className="accordion-collapse collapse" aria-labelledby={`heading${client.id}`}>
                    <div className="accordion-body">
                        <p>
                            <strong>Codice Fiscale:</strong> {client.codiceFiscale}
                            <button
                                onClick={handleCopy}
                                className="call-btn copy-btn"
                                title="Copia codice fiscale">
                                <i className="bi bi-clipboard"></i>
                            </button>
                            {copied && <span className={`ms-2 copied-message ${copied ? 'visible' : ''}`}>
                                Copiato!
                            </span>}
                        </p>

                        <p>
                            <strong>Cellulare:</strong> {client.phone}
                            <a
                                href={`tel:${client.phone}`}
                                className="call-btn"
                                title="Chiama">
                                <i className="bi bi-telephone"></i>
                            </a>
                        </p>
                        <p>
                            <strong>Email:</strong> {client.email}
                            <a
                                href={`mailto:${client.email}`}
                                className="call-btn email-btn"
                                title="Email">
                                <i className="bi bi-envelope"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}