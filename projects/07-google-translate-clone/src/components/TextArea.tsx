import { Form } from 'react-bootstrap';
import { SectionType } from '../constants';

type Props = {
  type: SectionType;
  placeholder: string;
  loading?: boolean;
  value: string;
  onChange: (language: string) => void;
};

const commonStyles = { border: 0, height: '200px' };

const getPlaceholder = ({ type, loading }: { type: SectionType; loading?: boolean }) => {
  if (type === SectionType.From) return 'Introducir texto';
  if (loading === true) return 'Cargando...';
  return 'Traduccion';
};

export const TextArea = ({ type, value, loading, onChange }: Props) => {
  const styles = type === SectionType.From ? commonStyles : { ...commonStyles, backgroundColor: '#f5f5f5' };

  const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as='textarea'
      placeholder={getPlaceholder({ type, loading })}
      style={styles}
      value={value}
      onChange={handleChangeText}
      disabled={type === SectionType.To}
    />
  );
};
