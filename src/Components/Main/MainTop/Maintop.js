import React from 'react';
import '../MainTop/Maintop.css'

function Maintop() {
    return (
        <>
            {/* maintop Outer section start */}
            <div className="maintopOuter">
                {/* max Width container */}
                <div className="maintop-maxwidth">
                    {/* Sections start */}
                    <div className="Card">
                        <h1>Blogg og fagbank</h1>
                        <p>Totalhms.no er en av Norges ledende kunnskapskanal innenfor Helse, miljø og sikkerhet. Vi dekker et vidt spekter av dagsaktuelle problemstillinger og utfordringer. Her kan du lese om nyheter, oppdateringer av lover &amp; forskrifter og gode tips til implementering i HMS-arbeidet.</p>
                        <h2>Vi skaper ny kunnskap og bidrar til kompetanse for fremtiden!</h2>
                    </div>

                    {/* Sections end */}
                </div>
            </div>
            {/* maintop Outer section end */}
        </>
    )
}

export default Maintop