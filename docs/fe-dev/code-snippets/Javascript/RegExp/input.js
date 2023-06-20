const REGEXP_KOREAN_ALPHABET = '[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]{1,}'
const REGEXP_KOREAN_ALPHABET_NUMBER = '[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ0-9 _]{1,}'
const REGEXP_KOREAN_ALPHABET_WHITESPACE = '[a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ ]{1,}'
const REGEXP_NUMBER = '[0-9]{0,}'

const REGEXP = {
  // 한글, 영문, 숫자, 공백허용, 특수기호 불가능
  KOREAN_ALPHABET_NUMBER_WHITESPACE: /[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9\s]/g,
  // 한글, 영문, 숫자, 공백허용, 일부 특수기호 허용 (즉, 이모지 불가능)
  ALL_AND_LIMITED_SPECIAL_CHARACTERS: /[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9\s`₩~!@#$%^&*()_+\-=[\]{}<>,.?/|\\'":;]/g,
  // 숫자만 허용
  NUMBER: /[0-9]/g,
};
