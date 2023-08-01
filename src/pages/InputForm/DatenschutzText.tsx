import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Impressum from './Impressum';
import Kontakt from './Kontakt';
import PrivacyText from './PrivacyText';
import DataVisualizationThree from '../../components/Pictures/DataVisualizationThree.png';

const DatenschutzText = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1600);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <Grid id='datenschutz' overflow='hidden'>
      <header style={{ width: '100%', height: '100%', position: 'relative' }}>
        <img
          src={DataVisualizationThree}
          alt='DataVisualization'
          width='100%'
          height='100%'
          style={{ marginTop: '-28%' }}
        />
        <Grid
          container
          spacing={2}
          direction='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          marginLeft='12%'
          marginTop={isMobile ? '-2%' : isTablet ? '-5%' : '-10%'}
          marginBottom={isMobile ? '20px' : '80px'}
        >
          <Typography variant={isMobile ? 'subtitle2' : isTablet ? 'h5' : 'h4'}>
            <h1 style={{ color: '#005B7F' }}>Datenschutzerklärung</h1>
          </Typography>
        </Grid>
      </header>
      <body>
        <Typography
          id='dazenschutz'
          variant='body1'
          style={{
            width: '76%',
            paddingLeft: '12%',
          }}
        >
          <div>
            <Typography variant={isMobile ? 'h6' : 'h4'}>Datenschutzinformation</Typography>
            <br />
            <Typography style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
              Im Rahmen der Nutzung dieser Webseite werden personenbezogene Daten von Ihnen durch
              uns als den für die Datenverarbeitung Verantwortlichen verarbeitet und für die Dauer
              gespeichert, die zur Erfüllung der festgelegten Zwecke und gesetzlicher
              Verpflichtungen erforderlich ist. Im Folgenden informieren wir Sie darüber, um welche
              Daten es sich dabei handelt, auf welche Weise sie verarbeitet werden und welche Rechte
              Ihnen diesbezüglich zustehen. Personenbezogene Daten sind gemäß Art. 4 Nr.1
              Datenschutzgrundverordnung (DSGVO) alle Informationen, die sich auf eine
              identifizierte oder identifizierbare natürliche Person beziehen.
            </Typography>
          </div>
          <Typography variant='body1' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            <ol>
              <li>Geltungsbereich</li>
              <li>
                Name und Kontaktdaten des für die Verarbeitung Verantwortlichen sowie des
                betrieblichen Datenschutzbeauftragten
              </li>
              <li>Verarbeitung personenbezogener Daten und Zwecke der Verarbeitung</li>
              <li>Weitergabe von Daten</li>
              <li>Cookies</li>
              <li>Betroffenenrechte</li>
              <li>Datensicherheit</li>
              <li>Aktualität und Änderung dieser Datenschutzinformation</li>
            </ol>
          </Typography>
          <Typography variant={isMobile ? 'h5' : 'h4'}>1. Geltungsbereich</Typography>
          <Typography style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            Diese Datenschutzinformation gilt für Datenverarbeitungen auf allen Projekt-Webseiten
            des Projektes, sowie aller im Zusammenhang mit dem Projekt angebotenen Dienste als
            Webdienst oder als mobile App (zur besseren Lesbarkeit im Folgenden: Webseite), sofern
            jeweils auf diese Datenschutzinformation verwiesen wird.
          </Typography>
          <br />
          <Typography variant={isMobile ? 'h5' : 'h4'}>
            2. Name und Kontaktdaten des für die Verarbeitung Verantwortlichen sowie des
            betrieblichen Datenschutzbeauftragten
          </Typography>
          <Typography style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            <text>Verantwortlicher im Sinne von Art. 4 Nr. 7 DSGVO:</text>
            <br />
            <text>Fraunhofer-Gesellschaft zur Förderung der angewandten Forschung e.V.</text>
            <br />
            <text>Hansastraße 27 c</text>
            <br />
            <text>80686 München</text>
            <br />
            <br />
            <text>
              für ihr Fraunhofer-Institut für Software- und Systemtechnik ISST Fraunhofer ISST
            </text>
            <br />
            <text>Speicherstraße 6</text>
            <br />
            <text>44147 Dortmund</text>
            <br />
            <text>(im Folgenden Fraunhofer-Fraunhofer ISST)</text>
            <br />
            <br />
            <text>
              E-Mail:&nbsp;
              <a href={`mailto: datenschutz@zv.fraunhofer.de`}>datenschutz@zv.fraunhofer.de</a>
            </text>
            <br />
            <text>Telefon: 0231-97677-0</text>
            <br />
            <text>Fax: 0231-9 76 77 - 1 99</text>
          </Typography>
          <Typography style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            Der Datenschutzbeauftragte von Fraunhofer ist unter der o.g. Anschrift in München, zu
            Hd. Datenschutzbeauftragter bzw. unter&nbsp;
            <a href={`mailto: datenschutz@zv.fraunhofer.de`}>datenschutz@zv.fraunhofer.de</a>&nbsp;
            erreichbar. Sie können sich jederzeit bei Fragen zum Datenschutzrecht oder Ihren
            Betroffenenrechten direkt an unseren Datenschutzbeauftragten wenden.
          </Typography>
          <br />
          <Typography variant={isMobile ? 'h5' : 'h4'}>
            3. Verarbeitung personenbezogener Daten und Zwecke der Verarbeitung
          </Typography>
          <h3>Beim Besuch der Webseite</h3>
          <Typography style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            Sie können unsere Webseite aufrufen, ohne Angaben zu Ihrer Identität preisgeben zu
            müssen. Der auf Ihrem Endgerät eingesetzte Browser sendet lediglich automatisch
            Informationen an den Server unserer Webseite (z.B. Browsertyp und –version, Datum und
            Uhrzeit des Zugriffs), um einen Verbindungsaufbau der Webseite zu ermöglichen. Hierzu
            gehört auch die IP-Adresse Ihres anfragenden Endgerätes. Diese wird temporär in einem
            sog. Logfile gespeichert und spätestens nach 30 Tagen gelöscht. Die Verarbeitung der
            IP-Adresse erfolgt zu technischen und administrativen Zwecken des Verbindungsaufbaus und
            –stabilität, um die Sicherheit und Funktionsfähigkeit unserer Webseite zu gewährleisten
            und etwaige rechtswidrige Angriffe hierauf notfalls verfolgen zu können. Die
            Rechtsgrundlage für die Verarbeitung der IP-Adresse ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            Unser berechtigtes Interesse folgt aus dem erwähnten Sicherheitsinteresse und der
            Erforderlichkeit einer störungsfreien Bereitstellung unserer Webseite. Aus der
            Verarbeitung der IP-Adresse und anderer Information in dem Logfile können wir keine
            unmittelbaren Rückschlüsse auf Ihre Identität ziehen. Darüber hinaus setzen wir beim
            Besuch unserer Website Cookies ein. Nähere Erläuterungen dazu erhalten Sie weiter unten
            in dieser Datenschutzinformation.
          </Typography>
          <br />
          <Typography variant={isMobile ? 'h5' : 'h4'}>4. Weitergabe von Daten</Typography>
          <Typography style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            Sofern wir personenbezogene Daten, die wir über die Webseite erheben, an
            Auftragsverarbeiter weitergeben, informieren wir Sie darüber in dieser
            Datenschutzinfomation bei dem jeweiligen Datenverarbeitungsvorgang unter Nennung des
            konkreten Empfängers. Im Übrigen geben wir Ihre personenbezogenen Daten nur weiter, wenn
            Sie gem. Art. 6 Abs. 1 S. 1 lit. a DSGVO Ihre ausdrückliche Einwilligung dazu erteilt
            haben; dies gem. Art. 6 Abs. 1 S. 1 lit. b DSGVO für Erfüllung eines Vertrages mit Ihnen
            erforderlich ist (zum Beispiel bei Weitergabe an Versandunternehmen zum Zwecke der
            Lieferung der von Ihnen bestellten Ware oder bei Weitergabe von Zahlungsdaten an
            Zahlungsdienstleister oder Kreditinstitute, um einen Zahlungsvorgang durchzuführen); für
            die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung
            besteht. Die weitergegebenen Daten dürfen von den Empfängern ausschließlich zu den
            genannten Zwecken verwendet werden.
          </Typography>
          <br />
          <Typography variant={isMobile ? 'h5' : 'h4'}>5. Cookies</Typography>
          <Typography style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die
            Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone
            o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem
            Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware.
            In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem
            spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir dadurch
            unmittelbar Kenntnis von Ihrer Identität erhalten. Der Einsatz von Cookies dient
            einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten. So setzen
            wir z.B. sogenannte Session-Cookies ein, um eine Sitzungssteuerung zu ermöglichen oder
            um Formulareingaben oder Warenkörbe während der Sitzung zu speichern. Session-Cookies
            werden spätestens mit dem Schließen Ihres Webbrowsers gelöscht. Die durch Cookies
            verarbeiteten Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten
            Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich. Die
            meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so
            konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein
            Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung
            von Cookies kann jedoch dazu führen, dass Sie nicht alles Funktionen unserer Website
            nutzen können.
          </Typography>
          <br />
          <Typography variant={isMobile ? 'h5' : 'h4'}>6. Betroffenenrechte</Typography>
          Sie haben das Recht:
          <Typography style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            <ul>
              <li>
                gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns
                zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser
                Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen;
              </li>
              <li>
                gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten
                zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die
                Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber
                denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das
                Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung
                oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten,
                sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer
                automatisierten Entscheidungsfindung einschließlich Profiling und ggf.
                aussagekräftigen Informationen zu deren Einzelheiten verlangen;
              </li>
              <li>
                gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung
                Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;
              </li>
              <li>
                gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten
                zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie
                Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus
                Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen erforderlich ist;
              </li>
              <li>
                gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die
                Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten
                nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch
                gegen die Verarbeitung eingelegt haben;
              </li>
              <li>
                gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben,
                in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die
                Übermittlung an einen anderen Verantwortlichen zu verlangen und
              </li>
              <li>
                gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel
                können Sie sich hierfür an die Aufsichtsbehörde ihres üblichen Aufenthaltsortes oder
                Arbeitsplatzes oder unseres Unternehmenssitzes wenden.
              </li>
            </ul>
          </Typography>
          <Typography
            style={{
              textAlign: 'justify',
              textJustify: 'inter-word',
              border: '1px solid black',
              margin: '10px',
              padding: '5px',
            }}
          >
            <h4>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h4>
            <text>
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
              jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die
              aufgrund von Artikel 6 Absatz 1 Buchstabe e DSGVO (Datenverarbeitung im öffentlichen
              Interesse) und Artikel 6 Absatz 1 Buchstabe f DSGVO (Datenverarbeitung auf der
              Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch
              für ein auf diese Bestimmung gestütztes Profiling von Artikel 4 Nr. 4 DSGVO. Legen Sie
              Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es
              sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen,
              die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Sofern sich Ihr
              Widerspruch gegen eine Verarbeitung von Daten zum Zwecke der Direktwerbung richtet, so
              werden wir die Verarbeitung umgehend einstellen. In diesem Fall ist die Angabe einer
              besonderen Situation nicht erforderlich. Dies gilt auch für das Profiling, soweit es
              mit solcher Direktwerbung in Verbindung steht. Möchten Sie von Ihrem Widerspruchsrecht
              Gebrauch machen, genügt eine E-Mail an&nbsp;
              <a href={`mailto: datenschutzkoordination@zv.fraunhofer.de`}>
                datenschutzkoordination@zv.fraunhofer.de.
              </a>
            </text>
          </Typography>
          <br />
          <Typography variant={isMobile ? 'h5' : 'h4'}>7. Datensicherheit</Typography>
          <Typography style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            Alle von Ihnen persönlich übermittelten Daten werden mit dem allgemein üblichen und
            sicheren Standard TLS (Transport Layer Security) verschlüsselt übertragen. TLS ist ein
            sicherer und erprobter Standard, der z.B. auch beim Onlinebanking Verwendung findet. Sie
            erkennen eine sichere TLS-Verbindung unter anderem an dem angehängten s am http (also
            https://..) in der Adressleiste Ihres Browsers oder am Schloss-Symbol im unteren Bereich
            Ihres Browsers. Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer
            Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen,
            teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff
            Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen
            Entwicklung fortlaufend verbessert.
          </Typography>
          <br />
          <Typography variant={isMobile ? 'h5' : 'h4'}>
            8. Aktualität und Änderung dieser Datenschutzinformation
          </Typography>
          <Typography style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
            Durch die Weiterentwicklung unserer Webseite und Angebote darüber oder aufgrund
            geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese
            Datenschutzinformation zu ändern. Die jeweils aktuelle Datenschutzinformation kann
            jederzeit auf der Webseite von Ihnen abgerufen und ausgedruckt werden.
          </Typography>
        </Typography>
      </body>
      <br />
      <br />
      <footer style={{ marginBottom: '20px' }}>
        <Typography variant='body2' color='text.secondary' align='center'>
          {'Copyright © '}
          <Link color='inherit' target='_blank' href='https://www.isst.fraunhofer.de/'>
            Fraunhofer ISST
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'} <br />
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: '20px',
              gap: '8rem',
              '@media (max-width: 600px)': {
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              },
            }}
          >
            <Impressum />
            <PrivacyText />
            <Kontakt />
          </Typography>
        </Typography>
      </footer>
    </Grid>
  );
};

export default DatenschutzText;
