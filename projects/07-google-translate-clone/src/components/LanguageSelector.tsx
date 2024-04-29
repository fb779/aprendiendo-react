import { Form } from 'react-bootstrap';
import { FromLanguage, Language } from '../types.d';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES, SectionType } from '../constants';

/**
 * Contrato tipo interfaz
 **/
// interface Props {
//   onChange: (language: string) => void;
// }

/**
 * Contrato tipo type
 **/
type Props =
  | {
      type: SectionType.From;
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | {
      type: SectionType.To;
      value: Language;
      onChange: (language: Language) => void;
    };

// export const LanguageSelector: FC<Props> = ({ onChange }) => {
export const LanguageSelector = ({ onChange, type, value }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };

  return (
    <Form.Select aria-label='Selecciona tu idioma' onChange={handleChange} value={value}>
      {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar Idioma </option>}

      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => {
        return (
          <option value={key} key={key}>
            {literal}
          </option>
        );
      })}
    </Form.Select>
  );
};
