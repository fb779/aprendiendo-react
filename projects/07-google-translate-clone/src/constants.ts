export const SUPPORTED_LANGUAGES = {
  en: 'English',
  es: 'Espanol',
  de: 'Deutsch',
};

export const AUTO_LANGUAGE = 'auto';

export const enum ACTIONS_NAMES {
  INTERCHANGE_LANGUAGES = 'INTERCHANGE_LANGUAGES',
  SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
  SET_FROM_TEXT = 'SET_FROM_TEXT',
  SET_RESULT = 'SET_RESULT',
}

export enum SectionType {
  From = 'from',
  To = 'to',
}

export const modelsAi = {
  gpt35turbo: 'gpt-3.5-turbo',
};
