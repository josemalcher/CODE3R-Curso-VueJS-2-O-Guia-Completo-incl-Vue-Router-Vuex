# Curso Vue JS 2 - O Guia Completo (incl. Vue Router & Vuex)

https://www.udemy.com/course/vue-js-completo/

VueJS é um framework Javascript fantástico p construir aplicações Frontend! Vue.js mistura o melhor do Angular + React!

## <a name="indice">Índice</a>

01. [Seção 01: Introdução ](#parte1)     
02. [Seção 02: Usando VueJS para Interagir com a DOM ](#parte2)     
03. [Seção 03: Usando Condicionais & Renderização de Listas ](#parte3)     
04. [Seção 04: Projeto #01 - O Matador de Monstros ](#parte4)     
05. [Seção 05: Entendendo a Instância Vue ](#parte5)     
06. [Seção 06: Fluxo de Desenvolvimento "Real" Usando Vue CLI ](#parte6)     
07. [Seção 07: Introdução aos Componentes ](#parte7)     
08. [Seção 08: Comunicação Entre Componentes ](#parte8)     
09. [Seção 09: Uso Avançado de Componentes ](#parte9)     
10. [Seção 10: Projeto #02 - Tarefas (TODO) ](#parte10)     
11. [Seção 11: Manipulando Entrada de Usuário com Formulários ](#parte11)     
12. [Seção 12: Usando e Criando Diretivas ](#parte12)     
13. [Seção 13: Melhorando sua App com Filtros e Mixins ](#parte13)     
14. [Seção 14: Adicionando Animações e Transições ](#parte14)     
15. [Seção 15: Conectando com Servidor via HTTP ](#parte15)     
16. [Seção 16: Rotas em uma Aplicação VueJS ](#parte16)     
17. [Seção 17: Melhor Gerenciamento de Estado com Vuex ](#parte17)     
18. [Seção 18: Projeto #03 - The Stock Trader ](#parte18)     
19. [Seção 19: Publicando uma Aplicação VueJS na Amazon ](#parte19)     
20. [Seção 20: Bonus: Projeto #04 - Projeto Calculadora ](#parte20)     
21. [Seção 21: Bonus: Projeto #05 - Problema Monty Hall ](#parte21)     
22. [Seção 22: Bonus: Projeto #06 - Base de Conhecimento Backend ](#parte22)     
23. [Seção 23: Bonus: Projeto #06 - Base de Conhecimento Frontend ](#parte23)     
24. [Seção 24: Bonus: CSS Grid & Flexbox ](#parte24)     
25. [Seção 25: Bonus: Javascript Essencial ](#parte25)     
26. [Seção 26: Bonus: HTML Essencial](#parte26)     
---


## <a name="parte1">1 - Seção 1: Introdução</a>

1. Introdução do Curso

2. Vamos Criar Nossa Primeira APP em VueJS

- [Secao-01-Introducao/primeira-app-vue.html](Secao-01-Introducao/2-primeira-app-vue.html)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Primeira APP VUE</title>
</head>
<body>

<div id="app">
    <p>{{titulo}}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Usando Vue JS 2 !'
        }
    });
</script>
</body>
</html>
```

3. Extendendo Nossa Aplicação VueJS

- [Secao-01-Introducao/3-Extendendo-Nossa-Aplicacao-VueJS.html](Secao-01-Introducao/3-Extendendo-Nossa-Aplicacao-VueJS.html)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Primeira APP VUE</title>
</head>
<body>

<div id="app">
    <input type="text" v-on:input="alterarTitulo">
    <p>{{titulo}}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Usando Vue JS 2 !'
        },
        methods: {
            alterarTitulo(event) {
                this.titulo = event.target.value
            }
        }
    });
</script>
</body>
</html>
```

4. Executando o Código Localmente

5. Mensagem do Maximilian Schwarzmüller

6. Visão Geral do Curso

7. Tire Proveito de Todos os Recursos do Curso!

8. Atalhos no Visual Studio Code

9. Recursos do Módulo & Links Úteis

10. Usando o terminal

11. Terminais

- https://blog.cod3r.com.br/terminal-no-windows/
- https://blog.cod3r.com.br/terminal-no-macos-e-linux/

12. Aviso importante aos usuários de Windows



[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - Seção 2: Usando VueJS para Interagir com a DOM </a>

13. Introdução do Módulo

14. Entendendo VueJS Templates

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/14-EntendendoVueJSTemplates.js.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/14-EntendendoVueJSTemplates.js.html)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seção 2</title>
</head>
<body>

<div id="app">
    <p>{{titulo}}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Usando Vue JS 2 !'
        }
    });
</script>
</body>
</html>
```

15. Sintaxe de Template e Instância VueJS Trabalhando Juntos

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/15-SintaxedeTemplateeInstanciaVueJSTrabalhandoJuntos.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/15-SintaxedeTemplateeInstanciaVueJSTrabalhandoJuntos.html)

```vue
<div id="app">
    <p>{{titulo}}</p>
    <p>{{saudacao()}}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Usando Vue JS 2 !'
        }, methods: {
            saudacao: function (){
                return 'Boa Semana'; // sempre retorna string para o HTML
            }
        }
    });
</script>
```
16. Acessando Dados na Instância VueJS

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/16-AcessandoDadosnaInstanciaVueJS.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/16-AcessandoDadosnaInstanciaVueJS.html)

```vue

<div id="app">
  <p>{{titulo}}</p>
  <p>{{saudacao()}}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      titulo: 'Usando Vue JS 2 !'
    }, methods: {
      saudacao: function (){
        console.log(this)
        /* (...)
          saudacao: ƒ ()
          titulo: "Usando Vue JS 2 !"
        */
        return this.titulo;
      }
    }
  });
</script>
```

17. Binding de Atributos

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/17-BindingdeAtributos.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/17-BindingdeAtributos.html)

```vue

<div id="app">
  <p>{{titulo}}</p>
  <p>{{saudacao()}}</p>
  <a v-bind:href="link">Blog José Malcher Jr.</a>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      titulo: 'Usando Vue JS 2 !',
      link: 'https://josemalcher.net'
    }, methods: {
      saudacao: function (){
        return this.titulo;
      }
    }
  });
</script>
```

18. Entendendo e Usando Diretivas

19. Evitando Re-Renderização com v-once

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/19-Evitando-Re-Renderizacao-com-v-once.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/19-Evitando-Re-Renderizacao-com-v-once.html)

```vue

<div id="app">
  <p v-once>{{titulo}}</p>
  <p>{{saudacao()}}</p>
  <a v-bind:href="link">Blog José Malcher Jr.</a>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      titulo: 'Titulo com V-Once',
      link: 'https://josemalcher.net'
    }, methods: {
      saudacao: function (){
        this.titulo = 'BOM DIA!!! (titulo alterado junto com saudação)'
        return this.titulo;
      }
    }
  });
</script>
```


20. Como Imprimir HTML Puro

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/20-Como-Imprimir-HTML-Puro.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/20-Como-Imprimir-HTML-Puro.html)

```vue

<div id="app">
  <p v-once>{{titulo}}</p>
  <p>{{saudacao()}}</p>
  <a v-bind:href="link">Blog José Malcher Jr.</a>

  <p v-html="linkHTML"></p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      titulo: 'Titulo com V-Once',
      link: 'https://josemalcher.net',
      linkHTML: '<a href="https://josemalcher.net">José Malcher Jr. Blog</a>'
    }, methods: {
      saudacao: function (){
        this.titulo = 'BOM DIA!!! (titulo alterado junto com saudação)'
        return this.titulo;
      }
    }
  });
</script>
```

21. Hora de Praticar - Template

```vue
<script src="https://unpkg.com/vue"></script>

<div id="desafio">
    <!-- 1) Preencha a tag <p> abaixo com o seu Nome e Idade - usando Interpolação -->
    <p>Usando VueJS - SEU_NOME (IDADE)</p>
    
    <!-- 2) Exiba sua idade multiplicada por 3 -->
    <p></p>
    
    <!-- 3) Chame uma função para exibir um número randomico
        entre 0 and 1 (Math.random()) -->
    <p></p>
    
    <!-- 4) Procure uma imagem no google e exiba na tag img 
        fazendo o binding no atributo "src" -->
    <div>
        <img height="400">
    </div>
    
    <!-- 5) Inicialize o input com o seu nome (use o atributo "value") -->
    <div>
        <input type="text">
    </div>
</div>
<script src="app.js"></script>
```

22. Hora de Praticar - Template (Resposta)

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/21-HoradePraticar-Template/index.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/21-HoradePraticar-Template/index.html)

```vue
<script src="https://unpkg.com/vue"></script>

<div id="desafio">
    <!-- 1) Preencha a tag <p> abaixo com o seu Nome e Idade - usando Interpolação -->
    <p>Usando VueJS - {{nome}} ({{idade}})</p>

    <!-- 2) Exiba sua idade multiplicada por 3 -->
    <p>Mutaches {{ idade * 3 }} - Método {{ idadeVezesTres()}}</p>

    <!-- 3) Chame uma função para exibir um número randomico
        entre 0 and 1 (Math.random()) -->
    <p>{{ Math.random() }} - Método{{ random() }}</p>

    <!-- 4) Procure uma imagem no google e exiba na tag img
        fazendo o binding no atributo "src" -->
    <div>
        <img v-bind:src="image" height="200">
    </div>

    <!-- 5) Inicialize o input com o seu nome (use o atributo "value") -->
    <div>
        <input type="text" v-bind:value="nome">
    </div>
</div>
<script src="app.js"></script>
```

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/21-HoradePraticar-Template/app.js](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/21-HoradePraticar-Template/app.js)

```javascript
new Vue({
    el: '#desafio',
    data: {
        nome: 'José Malcher Jr.',
        idade: '36',
        image: 'https://pbs.twimg.com/profile_images/1106193889/logo_Super_A__o_Web_caixa_pequena_400x400.png'
    }, methods: {
        idadeVezesTres(){
            return this.idade * 3
        },
        random(){
            return Math.random();
        }
    }
});
```

23. Escutando Eventos

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/23-Escutando-Eventos.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/23-Escutando-Eventos.html)

```vue

<div id="app">
  <p>{{contador}}</p>
  <button v-on:click="somar">SOMAR 1</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      contador: 0
    },
    methods: {
      somar(){
        this.contador++
      }
    }
  });
</script>
```

24. Obtendo Dados do Evento

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/24-ObtendoDadosdoEvento.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/24-ObtendoDadosdoEvento.html)

```vue

<div id="app">
    <p>{{contador}}</p>
    <button v-on:click="somar">SOMAR 1</button>
    <p v-on:mouseover="atualizaXY">Mouse: {{ x }} - {{ y }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            contador: 0,
            x: 0,
            y: 0
        },
        methods: {
            somar(){
                this.contador++
            },
            atualizaXY(event){
                this.x = event.clientX
                this.y = event.clientY
            }

        }
    });
</script>
```

25. Passando nosso próprios Argumentos com Eventos

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/25-PassandonossopropriosArgumentoscomEventos.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/25-PassandonossopropriosArgumentoscomEventos.html)

```vue

<div id="app">
  <p>{{contador}}</p>
  <button v-on:click="somar(5, $event)">SOMAR 1</button>
  <p v-on:mouseover="atualizaXY">Mouse: {{ x }} - {{ y }}</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      contador: 0,
      x: 0,
      y: 0
    },
    methods: {
      somar(passo, ev){
        console.log(passo, ev) // 5 MouseEvent {isTrusted: true, screenX: 1446, screenY: -942, (...)
        this.contador += passo
      },
      atualizaXY(event){
        this.x = event.clientX
        this.y = event.clientY
      }

    }
  });
</script>
```

26. Modificadores de Eventos

- [https://vuejs.org/v2/guide/events.html#Event-Modifiers](https://vuejs.org/v2/guide/events.html#Event-Modifiers)
- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/26-ModificadoresdeEventos.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/26-ModificadoresdeEventos.html)

```vue
<div id="app">
    <p>{{contador}}</p>
    <button v-on:click="somar(5, $event)">SOMAR 1</button>
    <p v-on:mouseover="atualizaXY">Mouse: {{ x }} - {{ y }}
        <span v-on:mousemove.stop.prevent>PARAR EFEITO AQUI!</span>
    </p>
    <a v-on:click="naoNavegar" href="https://google.com">GOOGLE</a>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            contador: 0,
            x: 0,
            y: 0
        },
        methods: {
            somar(passo, ev) {
                console.log(passo, ev) // 5 MouseEvent {isTrusted: true, screenX: 1446, screenY: -942, (...)
                this.contador += passo
            },
            atualizaXY(event) {
                this.x = event.clientX
                this.y = event.clientY
            },
            naoNavegar(event) {
                console.log('Não Navegar aqui')
                event.preventDefault()
            },
            parar(event) {
                event.stopPropagation()
            }

        }
    });
</script>
```

27. Eventos de Teclado

-[https://vuejs.org/v2/guide/events.html#Key-Modifiers](https://vuejs.org/v2/guide/events.html#Key-Modifiers)

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/28-Hora-de-Praticar-Eventos.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/28-Hora-de-Praticar-Eventos.html)

```vue
<div id="app">
<p>{{contador}}</p>
<button v-on:click="somar(5, $event)">SOMAR 1</button>
<p v-on:mouseover="atualizaXY">Mouse: {{ x }} - {{ y }}
  <span v-on:mousemove.stop.prevent>PARAR EFEITO AQUI!</span>
</p>
<a v-on:click="naoNavegar" href="https://google.com">GOOGLE</a>

<input type="text" v-on:keyup.enter.alt="exibirAlerta">
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
new Vue({
  el: '#app',
  data: {
    contador: 0,
    x: 0,
    y: 0
  },
  methods: {
    somar(passo, ev) {
      console.log(passo, ev) // 5 MouseEvent {isTrusted: true, screenX: 1446, screenY: -942, (...)
      this.contador += passo
    },
    atualizaXY(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    naoNavegar(event) {
      console.log('Não Navegar aqui')
      event.preventDefault()
    },
    exibirAlerta(){
      console.log('ENTROU COM ENTER + ALT')
    },
    parar(event) {
      event.stopPropagation()
    }

  }
});
</script>

```

28. Hora de Praticar - Eventos

```vue
<script src="https://unpkg.com/vue"></script>

<div id="desafio">
    <!-- 1) Exiba um alert quando o botão for clicado -->
    <div>
        <button>Exibir Alerta</button>
    </div>
    
    <!-- 2) Escute o evento "keydown" e armazene o valor na propriedade
        data (dica: event.target.value) -->
    <div>
        <input type="text">
        <p>{{ valor }}</p>
    </div>
    
    <!-- 3) Ajuste o exemplo 2 para disparar o evento "keydown" somente
        quando a tecla for ENTER -->
    <div>
        <input type="text">
        <p>{{ valor }}</p>
    </div>
</div>
<script src="app.js"></script>
```

29. Hora de Praticar - Eventos (Resposta)

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/29-HoradePraticar-Eventos/index.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/29-HoradePraticar-Eventos/index.html)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script src="https://unpkg.com/vue"></script>

<div id="desafio">
    <!-- 1) Exiba um alert quando o botão for clicado -->
    <div>
        <button v-on:click="exibirAlerta">Exibir Alerta</button>
    </div>

    <!-- 2) Escute o evento "keyup" e armazene o valor na propriedade
        data (dica: event.target.value) -->
    <div>
        <input type="text" v-on:keyup="valor = $event.target.value">
        <p>{{ valor }}</p>
    </div>

    <!-- 3) Ajuste o exemplo 2 para disparar o evento "keydown" somente
        quando a tecla for ENTER -->
    <div>
        <input type="text" v-on:keydown.enter="valor = $event.target.value">
        <input type="text" v-on:keydown.enter="alterarValor">
        <p>{{ valor }}</p>
    </div>
</div>
<script src="app.js"></script>
</body>
</html>
```

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/29-HoradePraticar-Eventos/app.js](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/29-HoradePraticar-Eventos/app.js)

```javascript
new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Estou Alertando AGORA!!');
        },
        alterarValor(event) {
            this.valor = event.target.value;
        }
    }
})
```

30. Código JavaScript no Template

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/30-CodigoJavaScriptnoTemplate.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/30-CodigoJavaScriptnoTemplate.html)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seção 2</title>
</head>
<body>

<div id="app">
    <p>{{contador}}</p>
    <p>{{contador > 10 ? 'MAIOR que 10' : 'Menor que 10'}}</p>
    <button v-on:click="somar(5, $event)">SOMAR 1</button>
</div>

<script src="https://unpkg.com/vue"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            contador: 0,
        },
        methods: {
            somar() {
                this.contador++
            }
        }
    });
</script>
</body>
</html>
```

31. Usando Two-Way-Binding

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/31-Usando-Two-Way-Binding.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/31-Usando-Two-Way-Binding.html)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seção 2</title>
</head>
<body>

<div id="app">
    <p>{{titulo}}</p>
    <input type="text" v-model="titulo">
</div>

<script src="https://unpkg.com/vue"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Título Principal',
        }
    });
</script>
</body>
</html>
```

32. Propriedades Computadas

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/32-PropriedadesComputadas.html](Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/32-PropriedadesComputadas.html)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seção 2</title>
</head>
<body>

<div id="app">
    <button v-on:click="aumentar">Aumentar</button>
    <button v-on:click="contador2++">Aumentar 2</button>
    <button v-on:click="diminur">Diminuir</button>
    <p>Contador: {{ contador }} | {{ contador2}}</p>
    <p>Resultado: {{ resultado }}</p>
</div>

<script src="https://unpkg.com/vue"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            contador: 0,
            contador2: 0,
        },
        computed: {
            resultado() {
                console.log('Método computed resultado chamado....')
                return this.contador >= 5 ? 'MAIOR ou IGUAL a 5' : 'Menor que 5'
            }
        },
        methods: {
            aumentar() {
                this.contador++

            },
            diminur() {
                this.contador--
            }
        }
    });
</script>
</body>
</html>
```

33. Monitorando as Mudanças

34. Sintaxe Reduzida (Shorthands)

35. Hora de Praticar - Propriedades Reativas

36. Hora de Praticar - Propriedades Reativas (Resposta)

37. Estilo Dinâmico e Classe CSS #01

38. Estilo Dinâmico e Classe CSS #02

39. Estilo Dinâmico e Classe CSS #03

40. Estilo Dinâmico Sem Classes CSS

41. Hora de Praticar: Estilo

42. Hora de Praticar: Estilo (Resposta)

43. Conclusão do Módulo

44. Recursos do Módulo & Links Úteis


[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Seção 3: Usando Condicionais & Renderização de Listas </a>



[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - Seção 4: Projeto #01 - O Matador de Monstros </a>



[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Seção 5: Entendendo a Instância Vue </a>



[Voltar ao Índice](#indice)

---


## <a name="parte6">6 - Seção 6: Fluxo de Desenvolvimento "Real" Usando Vue CLI </a>



[Voltar ao Índice](#indice)

---


## <a name="parte7">7 - Seção 7: Introdução aos Componentes </a>



[Voltar ao Índice](#indice)

---


## <a name="parte8">8 - Seção 8: Comunicação Entre Componentes </a>



[Voltar ao Índice](#indice)

---


## <a name="parte9">9 - Seção 9: Uso Avançado de Componentes </a>



[Voltar ao Índice](#indice)

---


## <a name="parte10">10 - Seção 10: Projeto #02 - Tarefas (TODO) </a>



[Voltar ao Índice](#indice)

---


## <a name="parte11">11 - Seção 11: Manipulando Entrada de Usuário com Formulários </a>



[Voltar ao Índice](#indice)

---


## <a name="parte12">12 - Seção 12: Usando e Criando Diretivas </a>



[Voltar ao Índice](#indice)

---


## <a name="parte13">13 - Seção 13: Melhorando sua App com Filtros e Mixins </a>



[Voltar ao Índice](#indice)

---


## <a name="parte14">14 - Seção 14: Adicionando Animações e Transições </a>



[Voltar ao Índice](#indice)

---


## <a name="parte15">15 - Seção 15: Conectando com Servidor via HTTP </a>



[Voltar ao Índice](#indice)

---


## <a name="parte16">16 - Seção 16: Rotas em uma Aplicação VueJS </a>



[Voltar ao Índice](#indice)

---


## <a name="parte17">17 - Seção 17: Melhor Gerenciamento de Estado com Vuex </a>



[Voltar ao Índice](#indice)

---


## <a name="parte18">18 - Seção 18: Projeto #03 - The Stock Trader </a>



[Voltar ao Índice](#indice)

---


## <a name="parte19">19 - Seção 19: Publicando uma Aplicação VueJS na Amazon </a>



[Voltar ao Índice](#indice)

---


## <a name="parte20">20 - Seção 20: Bonus: Projeto #04 - Projeto Calculadora </a>



[Voltar ao Índice](#indice)

---


## <a name="parte21">21 - Seção 21: Bonus: Projeto #05 - Problema Monty Hall </a>



[Voltar ao Índice](#indice)

---


## <a name="parte22">22 - Seção 22: Bonus: Projeto #06 - Base de Conhecimento Backend </a>



[Voltar ao Índice](#indice)

---


## <a name="parte23">23 - Seção 23: Bonus: Projeto #06 - Base de Conhecimento Frontend </a>



[Voltar ao Índice](#indice)

---


## <a name="parte24">24 - Seção 24: Bonus: CSS Grid & Flexbox </a>

[Seção 24: Bonus: CSS Grid & Flexbox](/Secao-24-Bonus-CSS-Grid-Flexbox)

[Voltar ao Índice](#indice)

---


## <a name="parte25">25 - Seção 25: Bonus: Javascript Essencial </a>

410. Função: Cidadão de Primeira Classe

- [Secao-25-Bonus-Javascript-Essencial/410-Funcao-Cidadao-de-Primeira-Classe.js](Secao-25-Bonus-Javascript-Essencial/410-Funcao-Cidadao-de-Primeira-Classe.js)

```javascript
//Função em JS é FirstClass Object (Citizens)
// Highter-order function

// cliar de forma literal
function fn1() {

}

// Armazenar em uma variável
const fn2 = function () {
}

// armazenar em um array
const array = [function (a, b) {
    return a + b
}, fn1, fn2]
console.log(array[0](2, 3));

//Armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
    return "Olá";
};
console.log(obj.falar());

// Passar função como param
function run(fun) {
    fun();
}

run(function () {
    console.log('Correndo por funções')
})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    };
}

//soma(2, 3)(4); // 9
const cincoMais = soma(3, 2);
cincoMais(4); //9
```

411. Função: Parâmetros e Retorno São Opcionais

-[Secao-25-Bonus-Javascript-Essencial/411-Funcao-Parametros-e-Retorno-Sao-Opcionais.js](Secao-25-Bonus-Javascript-Essencial/411-Funcao-Parametros-e-Retorno-Sao-Opcionais.js)

```javascript
function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area} m2`);
    }else{
        return area
    }
}

console.log(area(2,2)); // 4
console.log(area(2)); // NaN
console.log(area());// NaN
console.log(area(2,3,4,5)); // 5
console.log(area(10,10)); // Valor acima do permitido: 100 m2
// undefined
```

412. Função: "this" pode Variar
     
413. Função: "this" e a Função bind #01

- [Secao-25-Bonus-Javascript-Essencial/413-Funcao-this-e-a-Funcao-bind.js](Secao-25-Bonus-Javascript-Essencial/413-Funcao-this-e-a-Funcao-bind.js)

```javascript
const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar();

//falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()
```
     
414. Função: "this" e a Função bind #02

- [Secao-25-Bonus-Javascript-Essencial/414-Funcao-this-e-a-Funcao-bind.js](Secao-25-Bonus-Javascript-Essencial/414-Funcao-this-e-a-Funcao-bind.js)

```javascript
function Pessoa(){
    this.idade = 0;

    const self = this;

    setInterval(function () {
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/,1000);
}
new Pessoa()
```

415. Funções Arrow #01

- [Secao-25-Bonus-Javascript-Essencial/415-Funcoes-Arrow.js](Secao-25-Bonus-Javascript-Essencial/415-Funcoes-Arrow.js)

```javascript
let dobro = function (a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // retorno implícito
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá';
};

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola());
```

416. Funções Arrow #02

- [Secao-25-Bonus-Javascript-Essencial/416-Funcoes-Arrow.js](Secao-25-Bonus-Javascript-Essencial/416-Funcoes-Arrow.js)

```javascript
function Pessoa(){
    this.idade = 0;

    setInterval(() => {
        this.idade++
        console.log(this.idade);
    }, 1000)
}

new Pessoa()
```

417. Funções Arrow #03

- [Secao-25-Bonus-Javascript-Essencial/417-Funcoes-Arrow.js](Secao-25-Bonus-Javascript-Essencial/417-Funcoes-Arrow.js)

```javascript
let comparaComThis = function (param) {
    console.log(this === param)
};

comparaComThis(global); // global - escopo NODE
// true
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global); // false
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global); // false
comparaComThisArrow(module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj) // false
comparaComThisArrow(module.exports) // true
```

418. Funções Anônimas

- [Secao-25-Bonus-Javascript-Essencial/418-Funcoes-Anonimas.js](Secao-25-Bonus-Javascript-Essencial/418-Funcoes-Anonimas.js)

```javascript
const soma = function (x, y) {
    return x + y;
};

const imprimeResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
};

imprimeResultado(3, 4);
imprimeResultado(3, 4, soma);
imprimeResultado(3, 4, function (x, y) {
    return x - y
});

imprimeResultado(3, 4, (x, y) => x * y);

const pessoa = {
    falar: function () {
        console.log('OLÁ!!!')
    },
    raiva() {
        console.log('GRRRRR!')
    }
}
pessoa.falar()
pessoa.raiva()
```


419. Funções Callback #01
     
- []()

````javascript
const fabricantes = ["Mercedes", "Audio", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(fabricantes => console.log(fabricantes));
````

420. Funções Callback #02

- [Secao-25-Bonus-Javascript-Essencial/420-FuncoesCallback.js](Secao-25-Bonus-Javascript-Essencial/420-FuncoesCallback.js)

```javascript
const notas = [7.7,6.6, 5.9, 5.5, 9.9, 8.9, 7.9];

// sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas);

//Com call back
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});

console.log(notasBaixas2)

const notasMenorque7 = nota => nota < 7;
const notasBaixa3    = notas.filter(notasMenorque7);
console.log(notasBaixa3)
```

421. Funções Callback #03

- [Secao-25-Bonus-Javascript-Essencial/421-FuncoesCallback.js](Secao-25-Bonus-Javascript-Essencial/421-FuncoesCallback.js)

```javascript
// exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function (ev) {
    console.log('O evento ocorreu');
};
```

422. Funções Construtoras

- [Secao-25-Bonus-Javascript-Essencial/422-FuncoesConstrutoras.js](Secao-25-Bonus-Javascript-Essencial/422-FuncoesConstrutoras.js)

```javascript
function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0;

    //Método Publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    };
    // Método Publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    };
}

const uno = new Carro
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro)  //function
console.log(typeof ferrari) //object
```
     
423. Array: Map #01

- [Secao-25-Bonus-Javascript-Essencial/423-Array-Map.js](Secao-25-Bonus-Javascript-Essencial/423-Array-Map.js)

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// For com propósito
let resultado = nums.map(function (value) {
    return value * 2;
});

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);
```

424. Array: Map #02

- [Secao-25-Bonus-Javascript-Essencial/423-Array-Map.js](Secao-25-Bonus-Javascript-Essencial/423-Array-Map.js)

```javascript
const carrinho = [
    '{"nome": "borracha"         , "preco": 3.45}',
    '{"nome": "lapis"            , "preco": 0.45}',
    '{"nome": "Kit lapis de cor" , "preco": 10.45}',
    '{"nome": "Caneta"           , "preco": 1.45}',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado);
```

425. Array: Map #03

- [Secao-25-Bonus-Javascript-Essencial/425-Array-Map.js](Secao-25-Bonus-Javascript-Essencial/425-Array-Map.js)

```javascript
Array.prototype.map2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
};

const carrinho = [
    '{"nome": "borracha"         , "preco": 3.45}',
    '{"nome": "lapis"            , "preco": 0.45}',
    '{"nome": "Kit lapis de cor" , "preco": 10.45}',
    '{"nome": "Caneta"           , "preco": 1.45}',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);

console.log(resultado);
```

426. Array: Filter #01

- [Secao-25-Bonus-Javascript-Essencial/426-Array-Filter.js](Secao-25-Bonus-Javascript-Essencial/426-Array-Filter.js)

```javascript
const produtos = [
    {nome: 'Notebook',         preco: 2000 , fragil: true},
    {nome: 'Ipad Pro',         preco: 5000 , fragil: true},
    {nome: 'Copo de vidro',    preco: 1 ,    fragil: false},
    {nome: 'copo de plastico', preco: 4 , fragil: false},
    {nome: 'copo de vidro',    preco: 5 , fragil: true},
    {nome: 'celular',          preco: 1000 , fragil: true},
]

console.log(produtos.filter(function (p) {
    return false;
}));

const caro   = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));
```


427. Array: Filter #02

- [Secao-25-Bonus-Javascript-Essencial/427-Array-Filter.js](Secao-25-Bonus-Javascript-Essencial/427-Array-Filter.js)

```javascript
Array.prototype.filter2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray

};

const produtos = [
    {nome: 'Notebook',         preco: 2000 , fragil: true},
    {nome: 'Ipad Pro',         preco: 5000 , fragil: true},
    {nome: 'Copo de vidro',    preco: 1 ,    fragil: false},
    {nome: 'copo de plastico', preco: 4 , fragil: false},
    {nome: 'copo de vidro',    preco: 5 , fragil: true},
    {nome: 'celular',          preco: 1000 , fragil: true},
]

const caro   = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));
```

428. Array: Reduce #01

- [Secao-25-Bonus-Javascript-Essencial/428-Array-Reduce.js](Secao-25-Bonus-Javascript-Essencial/428-Array-Reduce.js)

```javascript
const alunos = [
    {nome: 'jose', nota: 10, bolsista: false},
    {nome: 'maria', nota: 5, bolsista: false},
    {nome: 'carlos', nota: 7, bolsista: true},
    {nome: 'fabio', nota: 4, bolsista: false},
    {nome: 'lorena', nota: 9, bolsista: true},
]

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual
}, 0); // valor inicial do acumulador

console.log(resultado)
/*
[ 10, 5, 7, 4, 9 ]
0 10
10 5
15 7
22 4
26 9
35
*/
```

429. Array: Reduce #02

- [Secao-25-Bonus-Javascript-Essencial/429-Array-Reduce.js](Secao-25-Bonus-Javascript-Essencial/429-Array-Reduce.js)

```javascript
const alunos = [
    {nome: 'jose', nota: 10, bolsista: false},
    {nome: 'maria', nota: 5, bolsista: false},
    {nome: 'carlos', nota: 7, bolsista: true},
    {nome: 'fabio', nota: 4, bolsista: false},
    {nome: 'lorena', nota: 9, bolsista: true},
]

// Desafio 1: todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsistas) => resultado && bolsistas
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)); // false

// Desafio 2: Algum aluno é bolsista?
const algumBolsistas = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))// true
```

430. Array: Reduce #03
     
- [Secao-25-Bonus-Javascript-Essencial/430-Array-Reduce.js](Secao-25-Bonus-Javascript-Essencial/430-Array-Reduce.js)

```javascript
Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1;
    let acumulador = valorInicial || this[0]

    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this);
    }
    return acumulador;
};

const soma = (total, valor) => total + valor;
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros.reduce2(soma, 10));

//
```

431. ESNext: Revisão #01

- [Secao-25-Bonus-Javascript-Essencial/431-ESNext-Revisao.js](Secao-25-Bonus-Javascript-Essencial/431-ESNext-Revisao.js)

```javascript
// let e const
{
    var a = 10 // global

    let b = 30 // bloco
    console.log(b)
}
console.log(a)
//console.log(b) //  b is not defined

//Template String
const produto = 'iPad';
console.log(`${produto} é CARO!`);

//Destructuring
const [l, e, ...tras] = 'TESTE';
console.log(l, e, tras); // T E [ 'S', 'T', 'E' ]

const [x, y, z] = [1, 2, 3];
console.log(x,y) // 1 2

const {idade: i, nome} = {nome: 'ANA' , idade: 23};
console.log(i, nome); // 23 ANA


```

432. ESNext: Revisão #02

- [Secao-25-Bonus-Javascript-Essencial/432-ESNext-Revisao.js](Secao-25-Bonus-Javascript-Essencial/432-ESNext-Revisao.js)

```javascript
// Arrow function
const soma = (a, b) => a + b;
console.log(soma(2,3))

// Arrow FUnction (this)
const lexico1 = () => console.log(this === exports); // true
const lexico2 = lexico1.bind({}); // true
lexico1()
lexico2();

// param default
function log(texto = 'Node') {
    console.log(texto);
}

log(); // Node
log(undefined);// Node
log(null);// null
log('MUDOU'); // MUDOU

// operador rest

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n);
    return total;
}

console.log(total(2, 4, 6));
```

433. ESNext: Revisão #03
     
- [Secao-25-Bonus-Javascript-Essencial/433-ESNext-Revisao.js](Secao-25-Bonus-Javascript-Essencial/433-ESNext-Revisao.js)

```javascript
// ES8: Object. values / Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) //     [ 1, 2, 3 ]
console.log(Object.entries(obj))//     [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


//Melhorias na Notação Literal
const nome = 'JOSE';
const pessoa = {
    nome,
    ola() {
        return "Olá!"
    }
}
console.log(pessoa.nome, pessoa.ola()); // JOSE Olá!

//class
class Animal {

}

class Cachorro extends Animal {
    falar(){
        return 'Au au au ';
    }
}

console.log(new Cachorro().falar()); // Au au au

```

434. ESNext: Operador Rest/Spread

- [Secao-25-Bonus-Javascript-Essencial/434-ESNext-Operador-Rest-Spread.js](Secao-25-Bonus-Javascript-Essencial/434-ESNext-Operador-Rest-Spread.js)

```javascript
// Oeprador ... rest(juntar)/Spread (espalhar)
// usar rest com parâmetros de função

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 20000}
const clone = {ativo: true, ...funcionario};
console.log(clone); // { ativo: true, nome: 'Maria', salario: 20000 }


// usar spread com array
const grupoA = ['João', 'Pedro', 'Goria'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];

console.log(grupoFinal); // [ 'Maria', 'João', 'Pedro', 'Goria', 'Rafaela' ]

```
     
435. Promises

- [Secao-25-Bonus-Javascript-Essencial/435-Promises.js](Secao-25-Bonus-Javascript-Essencial/435-Promises.js)

```javascript
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Que Top')
    .then(frase => frase.concat('?!?'))
    .then(outrafrase => console.log(outrafrase))
    .catch(e => console.log(e))
```
     
436. Usando Callbacks Aninhadas

- [Secao-25-Bonus-Javascript-Essencial/436-Usando-Callbacks-Aninhadas.js](Secao-25-Bonus-Javascript-Essencial/436-Usando-Callbacks-Aninhadas.js)

```javascript
// http://files.cod3r.com.br/curso-js/turmaA.json

const http = require('http')
//sem promise...
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado));
        })
    })
}

// let nomes = []
// getTurma('A', alunos => {
//     console.log(alunos);
// })

let nomes = [];
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes);
        })
    })
})

/*[
  'A: Kellia',   'A: Hi',     'A: Inge',
  'A: Myrle',    'A: Doreen', 'A: Pennie',
  'A: Faye',     'A: Leena',  'A: Taylor',
  'A: Juieta',   'B: Rossie', 'B: Mary',
  'B: Dionysus', 'B: Myca',   'B: Sharlene',
  'B: Meghan',   'B: Perice', 'B: Micheil',
  'B: Nat',      'B: Bone',   'C: Kellina',
  'C: Barrie',   'C: Darda',  'C: Rainer',
  'C: Joan',     'C: Kasper', 'C: Sammie',
  'C: Scott',    'C: Kiel',   'C: Dell'
]
*/
```

437. Refatorando Callbacks p/ Promises

- [Secao-25-Bonus-Javascript-Essencial/437-Refatorando-Callbacks-p-Promises.js](Secao-25-Bonus-Javascript-Essencial/437-Refatorando-Callbacks-p-Promises.js)

```javascript
// http://files.cod3r.com.br/curso-js/turmaA.json

const http = require('http')
// COM PROMISE...
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (e){
                    reject(e);
                }

            })
        })
    } );

}

// let nomes = []
// getTurma('A', alunos => {
//     console.log(alunos);
// })

let nomes = [];
getTurma('A').then( alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then( alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes);
        })
    })
})
/*[
  'A: Kellia',   'A: Hi',     'A: Inge',
  'A: Myrle',    'A: Doreen', 'A: Pennie',
  'A: Faye',     'A: Leena',  'A: Taylor',
  'A: Juieta',   'B: Rossie', 'B: Mary',
  'B: Dionysus', 'B: Myca',   'B: Sharlene',
  'B: Meghan',   'B: Perice', 'B: Micheil',
  'B: Nat',      'B: Bone',   'C: Kellina',
  'C: Barrie',   'C: Darda',  'C: Rainer',
  'C: Joan',     'C: Kasper', 'C: Sammie',
  'C: Scott',    'C: Kiel',   'C: Dell'
]
*/

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message));


```

[Voltar ao Índice](#indice)

---


## <a name="parte26">26 - Seção 26: Bonus: HTML Essencial</a>

[Seção 26: Bonus: HTML Essencial](/Secao-26-Bonus-HTML-Essencial)

[Voltar ao Índice](#indice)

---

