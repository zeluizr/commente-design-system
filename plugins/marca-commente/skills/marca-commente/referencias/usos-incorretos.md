# O que rompe o sistema

Seis formas, todas do manual v1.2. As duas primeiras são as mais frequentes.

| ✕ | erro | correto |
|---|---|---|
| 1 | Escrever o nome com maiúscula inicial | Toda a família é caixa baixa: `commente.me`, `hablecon.app`, `smlk.me` |
| 2 | Usar o ponto redondo do teclado no lugar do quadrado de acento | Quadrado de 17% do corpo, na cor de acento |
| 3 | Trocar a tipografia do logotipo | Barlow Bold, sempre — Arial nunca entra num logotipo nem num título |
| 4 | Recolorir o isologo de integram.me ou de inmmerce | Identidade própria: isologo intocado |
| 5 | Aplicar o acento de um produto no ladrillo de outro | Um acento por produto, e só nele |
| 6 | Pôr o logotipo em azul sobre fundo de cor | Vai em branco — exceto acento claro, que mantém a cor base |

## Checklist de revisão

Ao revisar uma interface, um export ou um README de qualquer marca da família:

- [ ] O nome aparece em caixa baixa em **todo** lugar — inclusive em `<title>`, em
      `og:title`, no `package.json` e nos textos de botão.
- [ ] O ponto do nome é quadrado, não `.`.
- [ ] Os hex vêm de token, não estão soltos no componente.
- [ ] Barlow só em logotipo, título e subtítulo, pesos 700 e 900; Arial em todo o resto,
      400 e 700. Nenhuma outra família, nenhum outro peso.
- [ ] O acento é o da marca do projeto, não o de uma marca vizinha.
- [ ] O ponto sobre branco usa a versão escura, se o acento for claro.
- [ ] Nenhum rosa `#FF245E` nem guayaba `#FF5757` fazendo papel de cor de marca — são
      erro e aviso.
- [ ] O favicon é o ladrillo da marca, raio 22%.
- [ ] Nenhum acento claro fazendo de texto sobre branco — vai como fundo com texto em
      `--sobre-acento`, ou usa a versão escura. Vale para amarillo, amarillo inmmerce,
      ámbar, jade, azul claro, gris e lavanda.
- [ ] Texto sobre rosa `#FF245E` está em tinta `#1A1A1A`, não em branco: branco sobre rosa
      dá 3,71:1 e não passa.
- [ ] Nenhuma mascote fazendo de logotipo, favicon, app icon ou avatar — esse lugar é do
      ladrillo.
- [ ] Se for llmbattle.dev sobre a noche: o ladrillo manteve o azul e ganhou borda, o ponto
      está na lavanda plena, e o texto de acento usa `#A59AFF` e não `#9B8CFF` — as quatro
      regras de `referencias/superficie-noche.md`.

## Tema único

O sistema tem **um tema: claro**. Não existe tema escuro de produto e não se inventa um. A
única superfície escura da família é a noche `#2C2B40` de llmbattle.dev, que é cor de marca
e não se empresta — ver `referencias/superficie-noche.md`.
