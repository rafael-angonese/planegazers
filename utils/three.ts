/**
 * Compensação de iluminação para three.js >= r155.
 *
 * Até o r154 o renderer usava o modo "legacy lights", que multiplicava a
 * contribuição das luzes por PI. No r155 esse modo passou a vir desligado por
 * padrão e no r165 a flag `useLegacyLights` foi removida de vez — ou seja, as
 * mesmas intensidades passaram a produzir uma cena bem mais escura e com
 * matizes diferentes (o cubo vermelho, por exemplo, deixava de estourar para
 * laranja/branco).
 *
 * Multiplicar as intensidades por PI reproduz o resultado anterior.
 * As luzes pontuais também precisam de `decay={1}`: o padrão mudou de 1 para 2
 * no r155, deixando a queda de intensidade com a distância muito mais acentuada.
 *
 * @see https://github.com/mrdoob/three.js/releases/tag/r155
 */
export const LEGACY_LIGHT_SCALE = Math.PI;
