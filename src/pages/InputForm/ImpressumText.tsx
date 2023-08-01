import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Impressum from './Impressum';
import Kontakt from './Kontakt';
import PrivacyText from './PrivacyText';
import DataVisualizationThree from '../../components/Pictures/DataVisualizationThree.png';

const ImpressumText = () => {
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
    <Grid id='impressum' overflow='hidden'>
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
          marginBottom={isMobile ? '20px' : '40px'}
        >
          <Typography variant={isMobile ? 'subtitle1' : isTablet ? 'h5' : 'h4'}>
            <h1 style={{ color: '#005B7F' }}>Impressum</h1>
          </Typography>
        </Grid>
      </header>
      <br />
      <body>
        <Typography
          variant='body1'
          style={{
            width: '76%',
            marginLeft: '12%',
            marginRight: '12%',
            textAlign: 'justify',
            textJustify: 'inter-word',
          }}
        >
          Das Fraunhofer-Institut für Software- und Systemtechnik ISST Speicherstraße 6, 44147
          Dortmund ist eine rechtlich nicht selbstständige Einrichtung der Fraunhofer-Gesellschaft
          zur Förderung der angewandten Forschung e.V. Hansastraße 27c, 80686 München
          <br />
          Internet: www.fraunhofer.de
          <br />
          E-Mail:&nbsp; <a href={`mailto: info@zv.fraunhofer.de`}>info@zv.fraunhofer.de</a>
          <br />
          <p>
            <Typography variant={isMobile ? 'h5' : 'h4'}>Verantwortlicher Redakteur:</Typography>
            <br />
            Das Fraunhofer-Institut für Software- und Systemtechnik E-Mail:
            markus.spiekermann@isst.fraunhofer.de. Hinweis: Bei allgemeinen Fragen zum Institut,
            wenden Sie sich bitte an die unter Kontakt angegebenen Ansprechpartner.
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: DE 129515865.
            Registergericht Amtsgericht München Eingetragener Verein Register-Nr. VR 4461
            <br />
          </p>
          <p>
            <Typography variant={isMobile ? 'h5' : 'h4'}>Vorstand</Typography>
            <br />
            Prof. Dr.-Ing. Reimund Neugebauer | Präsident
            <br />
            Prof. Dr. Alexander Kurz | Mitglied des Vorstands
          </p>
          <p>
            <Typography variant={isMobile ? 'h5' : 'h4'}>Nutzungsrechte</Typography>
            <br />
            Copyright © by Fraunhofer-Gesellschaft Alle Rechte vorbehalten. Die Urheberrechte dieser
            Web-Site liegen vollständig bei der Fraunhofer-Gesellschaft. Ein Download oder Ausdruck
            dieser Veröffentlichungen ist ausschließlich für den persönlichen Gebrauch gestattet.
            Alle darüber hinaus gehenden Verwendungen, insbesondere die kommerzielle Nutzung und
            Verbreitung, sind grundsätzlich nicht gestattet und bedürfen der schriftlichen
            Genehmigung.
            <br />
            Anfragen richten Sie bitte an:
            <br />
            Fraunhofer-Institut für Software- und Systemtechnik
            <br />
            Speicherstraße 6, 44147 Dortmund.
            <br />
            Ein Download oder Ausdruck ist darüber hinaus lediglich zum Zweck der Berichterstattung
            über die Fraunhofer-Gesellschaft und Ihre Institute nach Maßgabe unten stehender
            Nutzungsbedingungen gestattet.
            <br />
            Grafische Veränderungen an Bildmotiven - außer zum Freistellen des Hauptmotivs - sind
            nicht gestattet. Es ist stets die Quellenangabe und Übersendung von zwei kostenlosen
            Belegexemplaren an die oben genannte Adresse erforderlich. Die Verwendung ist
            honorarfrei.
          </p>
          <Typography variant={isMobile ? 'h5' : 'h4'}>Haftungshinweis</Typography>
          <br />
          Wir übernehmen keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten
          Seiten sind ausschließlich deren Betreiber verantwortlich. Wir sind bemüht, das Webangebot
          stets aktuell und inhaltlich richtig sowie vollständig anzubieten. Dennoch ist das
          Auftreten von Fehlern nicht völlig auszuschließen. Das Fraunhofer-Institut bzw. die
          Fraunhofer-Gesellschaft übernimmt keine Haftung für die Aktualität, die inhaltliche
          Richtigkeit sowie für die Vollständigkeit der in ihrem Webangebot eingestellten
          Informationen. Dies bezieht sich auf eventuelle Schäden materieller oder ideeller Art
          Dritter, die durch die Nutzung dieses Webangebotes verursacht wurden. Geschützte Marken
          und Namen, Bilder und Texte werden auf unseren Seiten in der Regel nicht als solche
          kenntlich gemacht. Das Fehlen einer solchen Kennzeichnung bedeutet jedoch nicht, dass es
          sich um einen freien Namen, ein freies Bild oder einen freien Text im Sinne des
          Markenzeichenrechts handelt.
          <br />
        </Typography>
      </body>
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

export default ImpressumText;
