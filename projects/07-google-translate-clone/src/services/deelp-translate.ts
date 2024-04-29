import { AUTO_LANGUAGE } from '../constants';
import { FromLanguage, Language } from '../types.d';
import * as deepl from 'deepl-node';

const authKey = 'f63c02c5-f056-...'; // Replace with your key
const deelp = new deepl.Translator(authKey);

type Props = { fromLanguage: FromLanguage; toLanguage: Language; text: string };

export async function translate({ fromLanguage, toLanguage, text }: Props) {
  const sourceLang = fromLanguage === AUTO_LANGUAGE ? null : fromLanguage;
  const targetLang = toLanguage;

  const avilableLanguages = await deelp.getSourceLanguages();
  console.log(avilableLanguages);

  const result = await deelp.translateText(text, sourceLang, targetLang);
  console.log(result.text); // Bonjour, le monde !
}
