import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import { AUTO_LANGUAGE, SectionType } from './constants';
import { useEffect } from 'react';
import { useStore } from './hooks/useStore';
import { TextArea } from './components/TextArea';
import { LanguageSelector } from './components/LanguageSelector';
import { ArrowsIcon } from './components/Icons';
// import { translate } from './services/deelp-translate';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useDebounce } from './hooks/useDebounce';
import { translate } from './services/openai-translate';

function App() {
  const {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguage,
    setToLanguage,
    setFromLanguage,
    setFromText,
    setResult,
  } = useStore();

  const debouncedText = useDebounce({ value: fromText, delay: 300 });

  useEffect(() => {
    if (debouncedText === '') return;

    console.log(debouncedText);

    // if (fromText === '') return;
    translate({ fromLanguage, toLanguage, text: debouncedText })
      .then((result) => {
        if (result == null) return; // comprobacion debil '==' de null y undefined

        setResult(result);
      })
      .catch((er) => {
        console.log(er?.message);
        setResult('Error');
      });
  }, [debouncedText, fromLanguage, toLanguage]);

  return (
    <Container fluid>
      <h1>My Traductor</h1>
      <Row>
        <Col>
          <Stack gap={2}>
            <h2>From</h2>
            <LanguageSelector type={SectionType.From} value={fromLanguage} onChange={setFromLanguage} />
            <TextArea
              type={SectionType.From}
              placeholder='Introduce el texto'
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button
            variant='link'
            disabled={fromLanguage === AUTO_LANGUAGE || fromLanguage === toLanguage}
            onClick={() => {
              interchangeLanguage();
            }}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <h2>To</h2>
            <LanguageSelector type={SectionType.To} value={toLanguage} onChange={setToLanguage} />
            <TextArea
              type={SectionType.To}
              placeholder='Traduccion'
              value={result}
              onChange={setResult}
              loading={loading}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
