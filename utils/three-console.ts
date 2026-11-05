import { setConsoleFunction } from "three";

/**
 * Silencia avisos de depreciação do three.js disparados por bibliotecas de
 * terceiros — código que não está sob nosso controle.
 *
 * Hoje há exatamente um: `THREE.Clock`, depreciado no r183 em favor de
 * `THREE.Timer`. O `@react-three/fiber` 9.8.2 ainda faz `new THREE.Clock()` ao
 * montar o store da cena, e o aviso sai a cada montagem do `<Canvas>`.
 * Quando o r3f migrar para `Timer`, basta remover a entrada da lista (e, se ela
 * ficar vazia, este módulo inteiro).
 *
 * Qualquer outra mensagem do three.js continua indo para o console normalmente
 * — isto NÃO é um "mute" geral.
 *
 * Importado por efeito colateral em `app/page.tsx`.
 */
const SILENCED_MESSAGES = new Set([
  "THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.",
]);

setConsoleFunction((type, message, ...params) => {
  if (SILENCED_MESSAGES.has(message)) return;
  console[type](message, ...params);
});
