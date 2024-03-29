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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/14-EntendendoVueJSTemplates.js.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/14-EntendendoVueJSTemplates.js.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/15-SintaxedeTemplateeInstanciaVueJSTrabalhandoJuntos.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/15-SintaxedeTemplateeInstanciaVueJSTrabalhandoJuntos.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/16-AcessandoDadosnaInstanciaVueJS.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/16-AcessandoDadosnaInstanciaVueJS.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/17-BindingdeAtributos.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/17-BindingdeAtributos.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/19-Evitando-Re-Renderizacao-com-v-once.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/19-Evitando-Re-Renderizacao-com-v-once.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/20-Como-Imprimir-HTML-Puro.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/20-Como-Imprimir-HTML-Puro.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/21-HoradePraticar-Template/index.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/21-HoradePraticar-Template/index.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/21-HoradePraticar-Template/app.js](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/21-HoradePraticar-Template/app.js)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/23-Escutando-Eventos.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/23-Escutando-Eventos.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/24-ObtendoDadosdoEvento.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/24-ObtendoDadosdoEvento.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/25-PassandonossopropriosArgumentoscomEventos.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/25-PassandonossopropriosArgumentoscomEventos.html)

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
- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/26-ModificadoresdeEventos.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/26-ModificadoresdeEventos.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/28-Hora-de-Praticar-Eventos.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/28-Hora-de-Praticar-Eventos.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/29-HoradePraticar-Eventos/index.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/29-HoradePraticar-Eventos/index.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/29-HoradePraticar-Eventos/app.js](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/29-HoradePraticar-Eventos/app.js)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/30-CodigoJavaScriptnoTemplate.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/30-CodigoJavaScriptnoTemplate.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/31-Usando-Two-Way-Binding.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/31-Usando-Two-Way-Binding.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/32-PropriedadesComputadas.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/32-PropriedadesComputadas.html)

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

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/33-Monitorando-as-Mudancas.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/33-Monitorando-as-Mudancas.html)

```vue

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
        watch: {
            contador(){ // mesmo nome da propriedade
                setTimeout(() => {
                    this.contador = 0;
                }, 2000)
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
```

34. Sintaxe Reduzida (Shorthands)

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/34-Sintaxe-Reduzida-Shorthands.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/34-Sintaxe-Reduzida-Shorthands.html)

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
  <button @click="somar">SOMAR 1</button>
  <input type="text" :value="contador">
</div>

<script src="https://unpkg.com/vue"></script>
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
</body>
</html>
```

35. Hora de Praticar - Propriedades Reativas

```javascript
<script src="https://unpkg.com/vue"></script>

<div id="desafio">
    <!-- 1) Exibir em "resultado" o texto 'Valor Diferente' enquanto
        "valor" for diferente de 37 - "valor" é alterado pelos botões.
        Mostrar 'Valor Igual' quando "valor" for igual a 37 -->
        
    <!-- 2) Monitorar as mudança de "resultado" e reiniciar "valor"
        para 0 depois de 5 segundos (dica: setTimeout(..., 5000) -->            
    <div>
        <p>Valor atual: {{ valor }}</p>
        <button @click="valor += 5">Somar 5</button>
        <button @click="valor += 1">Somar 1</button>
        <p>{{ resultado }}</p>
    </div>

</div>
<script src="app.js"></script>
```

36. Hora de Praticar - Propriedades Reativas (Resposta)

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/35-Hora-de-Praticar-Propriedades-Reativas/app.js](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/35-Hora-de-Praticar-Propriedades-Reativas/app.js)

```javascript
new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            return this.valor == 37 ? 'Valor Igual' : 'Valor diferente';
        }
    },
    watch: {
        resultado(){
            setTimeout(()=>{
                this.valor = 0
            }, 5000)
        }
    }
});
```

37. Estilo Dinâmico e Classe CSS #01

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/37-Estilo-Dinamico-e-Classe-CSS.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/37-Estilo-Dinamico-e-Classe-CSS.html)

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seção 2</title>
</head>
<style>
    #app {
        display: flex;
        justify-content: space-around;
    }

    .demo {
        width: 100px;
        height: 100px;
        background: gray;
    }

    .c1 {
        background-color: red;
    }

    .c2 {
        background-color: black;
    }

    .c3 {
        background-color: blue
    }
</style>
<body>

<div id="app">
    <div class="demo" :class="{c1:aplicarC1}" @click="aplicarC1 = !aplicarC1"></div>
    <div class="demo"></div>
    <div class="demo"></div>
</div>

<script src="https://unpkg.com/vue"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            aplicarC1: false
        }

    });
</script>
</body>
</html>
```

38. Estilo Dinâmico e Classe CSS #02

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/38-Estilo-Dinamico-e-Classe-CSS.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/38-Estilo-Dinamico-e-Classe-CSS.html)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Seção 2</title>
</head>
<style>
  #app {
    display: flex;
    justify-content: space-around;
  }

  .demo {
    width: 100px;
    height: 100px;
    background: gray;
  }

  .c1 {
    background-color: red;
  }

  .c2 {
    background-color: green;
  }

  .c3 {
    background-color: blue
  }
</style>
<body>

<div id="app">
  <div class="demo" :class="estilo1"
       @click="aplicarC1 = !aplicarC1"></div>
  <div class="demo"></div>
  <div class="demo"></div>
</div>

<script src="https://unpkg.com/vue"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      aplicarC1: false
    },
    computed:{
      estilo1(){
        return {
          c1: this.aplicarC1,
          c2: !this.aplicarC1
        }
      }
    }

  });
</script>
</body>
</html>
```

39. Estilo Dinâmico e Classe CSS #03

- []()

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seção 2</title>
</head>
<style>
    .caixas {
        display: flex;
        justify-content: space-around;
    }

    .demo {
        width: 100px;
        height: 100px;
        background: gray;
    }

    .c1 {
        background-color: red;
    }

    .c2 {
        background-color: green;
    }

    .c3 {
        background-color: blue
    }
    .girar{
        transform: rotate(45deg);
    }
</style>
<body>

<div id="app">
    <div class="caixas">
        <div class="demo" :class="estilo1"
             @click="aplicarC1 = !aplicarC1"></div>
        <div class="demo" :class="estilo1"></div>
        <div class="demo" :class="[classCSS, {girar: aplicarGirar }]"></div>
    </div>
    <hr>
    <input type="text" v-model="classCSS">
</div>

<script src="https://unpkg.com/vue"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            aplicarC1: false,
            classCSS: 'c1',
            aplicarGirar: true

        },
        computed: {
            estilo1() {
                return {
                    c1: this.aplicarC1,
                    c2: !this.aplicarC1
                }
            }
        }

    });
</script>
</body>
</html>
```

40. Estilo Dinâmico Sem Classes CSS

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/40-Estilo-Dinamico-Sem-Classes-CSS.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/40-Estilo-Dinamico-Sem-Classes-CSS.html)

```vue

<div id="app">
    <div class="caixas">
        <div class="demo" :style="{backgroundColor: cor}"></div>
        <div class="demo" :style="[meuEstilo, {height: altura}]"></div>
        <div class="demo"></div>
    </div>
    <hr>
    <input type="text" v-model="cor">
    <input type="text" v-model="largura">
</div>

<script src="https://unpkg.com/vue"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            cor: 'red',
            largura: 100,
            altura: 50
        },
        computed: {
            meuEstilo(){
                return{
                    backgroundColor: this.cor,
                    width: this.largura + 'px'
                }
            }
        }

    });
</script>
```

41. Hora de Praticar: Estilo

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/41-Hora-de-Praticar-Estilo](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/41-Hora-de-Praticar-Estilo)

```vue
<link rel="stylesheet" href="styles.css">
<script src="https://unpkg.com/vue"></script>

<div id="desafio">
	<!-- 1) Iniciar a execução do efeito usando botão. 
    O efeito deve alternadamente trocar as classes "destaque" e
    "encolher" para cada chamada de setInteval. Use a div abaixo
	com id "efeito" para associar as classes CSS. -->
	<h2>#01</h2>
	<div>
		<button @click="iniciarEfeito">Iniciar Efeito</button>
		<div id="efeito"></div>
	</div>
	
	<!-- 2) Crie duas classes CSS e associe a div usando a
		sintaxe de array -->
	<h2>#02</h2>
	<div>Estou sem classe CSS :(</div>

	<!-- 3) Aplique na div abaixo a classe informada pelo usuário
		(crie classe CSS de exemplo). -->
	<h2>#03</h2>
	<div>
		<input type="text">
		<div></div>
	</div>

	<!-- 4) Aplique na div abaixo a classe informada pelo usuário e
    outra classe usando o valor true/false (crie classes CSS de exemplo). -->
	<h2>#04</h2>
	<div>
		<input type="text">
		<input type="text">
		<div></div>
	</div>

	<!-- 5) Repita 3) mas utilizando estilos ao invés de classes CSS.
    Associe os estilos a div abaixo  -->
	<h2>#05</h2>
	<div>
		<input type="text">
		<div></div>
	</div>

	<!-- 6) Crie uma barra de progresso simples com setInterval 
    e binding de estilo. -->
	<h2>#06</h2>
	<div>
		<button @click="iniciarProgresso">Iniciar</button>
		<div></div>
	</div>
</div>
<script src="app.js"></script>
```

42. Hora de Praticar: Estilo (Resposta)

- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/41-Hora-de-Praticar-Estilo/index.html](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/41-Hora-de-Praticar-Estilo/index.html)
- [Secao-2-Usando-VueJS-para-Interagir-com-a-DOM/41-Hora-de-Praticar-Estilo/app.js](Secao-02-Usando-VueJS-para-Interagir-com-a-DOM/41-Hora-de-Praticar-Estilo/app.js)

```vue
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<link rel="stylesheet" href="style.css">
<script src="https://unpkg.com/vue"></script>

<div id="desafio">
  <!-- 1) Iniciar a execução do efeito usando botão.
  O efeito deve alternadamente trocar as classes "destaque" e
  "encolher" para cada chamada de setInteval. Use a div abaixo
  com id "efeito" para associar as classes CSS. -->
  <h2>#01</h2>
  <div>
    <button @click="iniciarEfeito">Iniciar Efeito</button>
    <div id="efeito" :class="classe1"></div>
  </div>

  <!-- 2) Crie duas classes CSS e associe a div usando a
      sintaxe de array -->
  <h2>#02</h2>
  <div :class="[{perigo}, 'quadrado']">Estou sem classe CSS :(</div>

  <!-- 3) Aplique na div abaixo a classe informada pelo usuário
      (crie classe CSS de exemplo). -->
  <h2>#03</h2>
  <div>
    <input type="text" v-model="classe3">
    <div :class="classe3"></div>
  </div>

  <!-- 4) Aplique na div abaixo a classe informada pelo usuário e
  outra classe usando o valor true/false (crie classes CSS de exemplo). -->
  <h2>#04</h2>
  <div>
    <input type="text" v-model="classe4">
    <input type="text" @input="setPerigo">
    <div :class="[classe4, {perigo}]"></div>
  </div>

  <!-- 5) Repita 3) mas utilizando estilos ao invés de classes CSS.
  Associe os estilos a div abaixo  -->
  <h2>#05</h2>
  <div>
    <input type="text" v-model="cor5">
    <div :style="[estilo5, {backgroundColor: cor5}]"></div>
  </div>

  <!-- 6) Crie uma barra de progresso simples com setInterval
  e binding de estilo. -->
  <h2>#06</h2>
  <div>
    <button @click="iniciarProgresso">Iniciar</button>
    <div class="barra-progresso">
      <div class="progresso" :style="{width}"></div>
    </div>
  </div>
</div>
<script src="app.js"></script>
</body>
</html>
```

```javascript
new Vue({
    el: '#desafio',
    data: {
        classe1: 'destaque',
        perigo: true,
        classe3: '',
        classe4: '',
        cor5: '',
        estilo5: {
            width: '100px',
            height: '100px',
        },
        width: '0',
    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.classe1 = this.classe1 == 'destaque'
                    ? 'encolher' : 'destaque'
            }, 1000)
        },
        iniciarProgresso() {
            let valor = 0
            const temporizador = setInterval(() => {
                valor += 5
                this.width = `${valor}%`
                if(valor == 100) clearInterval(temporizador)
            }, 500)
        },
        setPerigo(event) {
            if(event.target.value == "true") {
                this.perigo = true
            } else if(event.target.value == "false") {
                this.perigo = false
            }
        }
    }
})

```

43. Conclusão do Módulo

44. Recursos do Módulo & Links Úteis

Links Úteis:

Documentação Oficial - Introdução: https://br.vuejs.org/v2/guide/

Documentação Oficial - Sintaxe de Template: https://br.vuejs.org/v2/guide/syntax.html

Documentação Oficial - Manipulação de Eventos: https://br.vuejs.org/v2/guide/events.html

Documentação Oficial - Dados Computados & Observadores: https://br.vuejs.org/v2/guide/computed.html

Documentação Oficial - Interligações de Classe e Estilo: https://br.vuejs.org/v2/guide/class-and-style.html

[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Seção 3: Usando Condicionais & Renderização de Listas </a>

45. Introdução do Módulo

46. Renderização Condicional com v-if/v-else

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/46-RenderizacaoCondicional-com-v-if-v-else.html](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/46-RenderizacaoCondicional-com-v-if-v-else.html)

```vue
<div id="app">
    <p v-if="logado">Usuário Logado: {{ nome }}</p>
    <p v-else>Nenhum usuário logado</p>
    <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar'}}</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            nome: 'José',
            logado: false
        }
    });
</script>

```

47. Seleção Múltipla com v-else-if

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/47-Selecao-Multipla-com-v-else-if.html](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/47-Selecao-Multipla-com-v-else-if.html)

```vue
<div id="app">
  <p v-if="logado">Usuário Logado: {{ nome }}</p>
  <p v-else-if="anonimo">Navegando como ANÔNIMO</p>
  <p v-else>Nenhum usuário logado</p>
  <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar'}}</button>
  <input type="checkbox" v-model="anonimo">
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      nome: 'José',
      logado: false,
      anonimo: true
    }
  });
</script>
```

48. Usando v-if com Template

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/48-Usando-v-if-com-Template.html](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/48-Usando-v-if-com-Template.html)

```vue

<div id="app">
    <template v-if="logado">
        <p>Usuário Logado: {{ nome }}</p>
        <p>Perfil: Admin</p>
    </template>
    <p v-else-if="anonimo">Navegando como ANÔNIMO</p>
    <p v-else>Nenhum usuário logado</p>
    <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar'}}</button>
    <input type="checkbox" v-model="anonimo">
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            nome: 'José',
            logado: false,
            anonimo: true
        }
    });
</script>
```

49. Esconda o Elemento com v-show

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/49-Esconda-o-Elemento-com-v-show.html](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/49-Esconda-o-Elemento-com-v-show.html)

```vue

<div id="app">
    <template v-if="logado">
        <p>Usuário Logado: {{ nome }}</p>
        <p>Perfil: Admin</p>
    </template>
    <p v-else-if="anonimo">Navegando como ANÔNIMO</p>
    <p v-else>Nenhum usuário logado</p>
    <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar'}}</button>
    <input type="checkbox" v-model="anonimo">
    <hr>
    <footer v-show="logado">Desenvolvido para você - admin!</footer>
    <footer v-show="!logado">Desenvolvido para você - DESCONHECIDO!!!</footer>

</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            nome: 'José',
            logado: false,
            anonimo: false
        }
    });
</script>
```

50. Renderizando Lista com v-for

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/50-Renderizando-Lista-com-v-for.html](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/50-Renderizando-Lista-com-v-for.html)

```vue

<div id="app">
  <ul>
    <li v-for="cor in cores"> {{ cor }}</li>
  </ul>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      cores: ['vermelho', 'verde', 'amarelo', 'azul'],
      pessoas: [
        {nome: 'Jose', idade: 36, peso: 90},
        {nome: 'Luciana', idade: 34, peso: 70},
      ]
    }
  });
</script>
```

51. Acessando o Índice Atual

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/51-Acessando-o-Indice-Atual.html](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/51-Acessando-o-Indice-Atual.html)

```vue

<div id="app">
    <ul>
        <li v-for="(cor, i) in cores"> {{ i + 1 }} -  {{ cor }}</li>
    </ul>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            cores: ['vermelho', 'verde', 'amarelo', 'azul'],
            pessoas: [
                {nome: 'Jose', idade: 36, peso: 90},
                {nome: 'Luciana', idade: 34, peso: 70},
            ]
        }
    });
</script>
```

52. Usando v-for com Template

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/52-Usando-v-for-comTemplate.html](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/52-Usando-v-for-comTemplate.html)

```vue
<div id="app">
    <ul>
        <li v-for="(cor, i) in cores"> {{ i + 1 }} -  {{ cor }}</li>
    </ul>
    <hr>
    <template v-for="(cor, i) in cores">
        <h2>{{ cor }}</h2>
        <p>{{ i + 1 }}</p>
    </template>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            cores: ['vermelho', 'verde', 'amarelo', 'azul'],
            pessoas: [
                {nome: 'Jose', idade: 36, peso: 90},
                {nome: 'Luciana', idade: 34, peso: 70},
            ]
        }
    });
</script>
```

53. Iterando em Objetos

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/53-Iterando-em-Objetos.html](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/53-Iterando-em-Objetos.html)

```vue

<div id="app">
  <ul>
    <li v-for="(cor, i) in cores"> {{ i + 1 }} -  {{ cor }}</li>
  </ul>
  <hr>
  <template v-for="(cor, i) in cores">
    <h2>{{ cor }}</h2>
    <p>{{ i + 1 }}</p>
  </template>

  <ul>
    <li v-for="pessoa in pessoas">
        <div v-for="(valor, chave, index) in pessoa">
          ({{ index + 1}}) - {{ chave }} = {{ valor }}
        </div>
    </li>
  </ul>

</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      cores: ['vermelho', 'verde', 'amarelo', 'azul'],
      pessoas: [
        {nome: 'Jose', idade: 36, peso: 90},
        {nome: 'Luciana', idade: 34, peso: 70},
      ]
    }
  });
</script>
```

54. Iterando em uma Lista de Números

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/54-Iterando-em-uma-Lista-de-Numeros.html](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/54-Iterando-em-uma-Lista-de-Numeros.html)

```vue

<div id="app">
   <div v-for="n in 10">{{ n }}</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            cores: ['vermelho', 'verde', 'amarelo', 'azul'],
            pessoas: [
                {nome: 'Jose', idade: 36, peso: 90},
                {nome: 'Luciana', idade: 34, peso: 70},
            ]
        }
    });
</script>
```

55. Identificando os Elementos no v-for

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/55-Identificando-os-Elementos-no-v-for.html](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/55-Identificando-os-Elementos-no-v-for.html)

```vue
<div id="app">
    <div v-for="(cor, i) in cores" :key="i">{{ i }} - {{ cor }}</div> <!-- No video usar "cor" - preferir usar o "i"-->
    <button @click="cores.push('branco')">Adicionar Cor Branca</button>
    <button @click="cores.push('Vermelho')">Adicionar Cor Vermelho</button>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            cores: ['vermelho', 'verde', 'amarelo', 'azul'],
            pessoas: [
                {nome: 'Jose', idade: 36, peso: 90},
                {nome: 'Luciana', idade: 34, peso: 70},
            ]
        }
    });
</script>
```

56. Hora de Praticar: Condicionais & Listas

57. Hora de Praticar: Condicionais & Listas (Resposta)

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/56-Hora-de-Praticar-Condicionais_Listas/index.html](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/56-Hora-de-Praticar-Condicionais_Listas/index.html)

```vue
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Seção 3</title>
</head>
<body>

<div id="desafio">
  <!-- 1) Ligue o botão para alternar a exibição dos dois
    parágrafos. Use ambos v-if e v-show e inspecione os elementos
    para ver a diferença -->
  <h2>#01</h2>
  <div>
    <button @click="expressao = !expressao">Alternar</button>
    <p v-if="expressao">Você quer me ver ...</p>
    <p v-else="expressao">...ou eu</p>
    <p v-show="expressao">Você quer me ver ...</p>
    <p v-show="!expressao">...ou eu</p>
  </div>

  <!-- 2) Exiba em uma <ul> um array de elementos da sua escolha.
    Imprima também o índice de cada elemento. -->
  <h2>#02</h2>
  <ul>
    <li v-for="(nome, i) in nomes">{{ i }} - {{ nome }}</li>
  </ul>

  <!-- 3) Imprimir todos os pares de valor-chave do objeto a seguir:
    {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		}
    Imprima também o índice de cada item. -->
  <h2>#03</h2>
  <ul>
    <li v-for="(valor, chave, index) in livro">
      {{chave}}: {{ valor }} {{index + 1}}
    </li>
  </ul>

  <!-- 4) Imprima o seguinte objeto (somente os valores) e
    também crie um loop aninhado para o array:
    {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		}
    (dica: use v-for e v-if na resolução) -->
  <h2>#04</h2>
  <ul>
    <li v-for="valor in aluno">
      <template v-if="!Array.isArray(valor)">
        {{valor}}
      </template>
      <template v-else="Array.isArray(valor)">
      Notas:
        <ul><li v-for="notas in valor">{{notas}}</li></ul>
      </template>
    </li>
  </ul>
</div>


<script src="https://unpkg.com/vue"></script>
<script src="app.js"></script>
</body>
</html>




```

- [Secao-03-Usando-Condicionais-Renderizacao-de-Listas/56-Hora-de-Praticar-Condicionais_Listas/app.js](Secao-03-Usando-Condicionais-Renderizacao-de-Listas/56-Hora-de-Praticar-Condicionais_Listas/app.js)

```javascript
new Vue({
    el: '#desafio',
    data: {
        expressao: true,
        array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
        livro: {
            titulo: 'O Senhor dos Anéis',
            autor: 'J.R.R. Tolkiens',
            volume: '3'
        },
        aluno: {
            id: 10,
            nome: 'Maria',
            notas: [7.67, 8.33, 6.98, 9.21]
        },
        nomes: ['jose', 'luciana', 'marcus']
    }
});

```

58. Conclusão do Módulo

59. Recursos do Módulo & Links Úteis

Links Úteis:

Documentação Oficial - Renderização Condicional: https://br.vuejs.org/v2/guide/conditional.html

Documentação Oficial - Renderização de Listas: https://br.vuejs.org/v2/guide/list.html


[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - Seção 4: Projeto #01 - O Matador de Monstros </a>

-  [Secao-04-Projeto-01-O-Matador-de-Monstros](Secao-04-Projeto-01-O-Matador-de-Monstros)

[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - Seção 5: Entendendo a Instância Vue </a>

72. Introdução do Módulo

73. Noções básicas sobre a Instância Vue

74. Usando Múltiplas Instâncias Vue

- [Secao-05-Entendendo-a-Instancia-Vue/74-UsandoMultiplas-Instancias-Vue.html](Secao-05-Entendendo-a-Instancia-Vue/74-UsandoMultiplas-Instancias-Vue.html)

```html

<div id="app1">
  <p>{{titulo_1}}</p>
  <button @click="alterar">Alterar</button>
</div>

<div id="app2">
  <p>{{titulo_2}}</p>
  <button @click="alterar">Alterar</button>
</div>

<script src="../lib/vue.js"></script>
<script>
  new Vue({
    el: '#app1',
    data: {
      titulo_1: 'Usando Vue JS 2 !'
    },
    methods: {
      alterar(){
        this.titulo_1 += '!!!' ;
      }
    }
  });

  new Vue({
    el: '#app2',
    data: {
      titulo_2: 'Usando Vue JS 2 !'
    },
    methods: {
      alterar(){
        this.titulo_2 += '!?!?!?!' ;
      }
    }
  });
</script>
```

75. Acessando a Instância Vue Externamente

- [Secao-05-Entendendo-a-Instancia-Vue/75-Acessando-a-Instancia-Vue-Externamente.html](Secao-05-Entendendo-a-Instancia-Vue/75-Acessando-a-Instancia-Vue-Externamente.html)

```html

<div id="app1">
  <p>{{titulo_1}}</p>
  <button @click="alterar">Alterar</button>
</div>

<div id="app2">
  <p>{{titulo_2}}</p>
  <button @click="alterar">Alterar</button>
</div>

<script src="../lib/vue.js"></script>
<script>
  const vm1 = new Vue({
    el: '#app1',
    data: {
      titulo_1: 'Usando Vue JS 2 !'
    },
    methods: {
      alterar(){
        vm2.titulo_2 += '!!!' ;
      }
    }
  });

  const vm2 = new Vue({
    el: '#app2',
    data: {
      titulo_2: 'Usando Vue JS 2 !'
    },
    methods: {
      alterar(){
        vm1.titulo_1 += '!?!?!?!' ;
      }
    }
  });

  setTimeout(() => {
    vm1.titulo_1 = 'Alterado Pelo TIMER!';
  }, 2000)

</script>
```

76. Como o VueJS Gerencia os Dados e Métodos

77. Meu Vue Framework

- [https://www.youtube.com/watch?v=REqVImw8Wgo](https://www.youtube.com/watch?v=REqVImw8Wgo)

- [Secao-05-Entendendo-a-Instancia-Vue/77-Meu-Vue-Framework.html](Secao-05-Entendendo-a-Instancia-Vue/77-Meu-Vue-Framework.html)

```html

<div id="app">
  {{ nome }} {{ sobrenome }} {{ 100 - 55 }} {{ Math.pow(2, 3) }}
</div>

<!--<script src="../lib/vue.js"></script>-->

<script>
  function MeuVue(params) {
    this.$el = document.querySelector(params.el)
    this.$data = params.data

    for(let atr in this.$data) {
      Object.defineProperty(this, atr, {
        get: () => {
          return this.$data[atr]
        },
        set: value => {
          this.$data[atr] = value
        }
      })
    }

    // interpolar
    const regex = /\{\{([\s\w)(,.+*-]*)\}\}/g
    this.$el.innerHTML = this.$el.innerHTML.replace(regex, (match, $1) => {
      const value = this[$1.trim()]
      return value ? value : eval($1)
    })
  }

  const vm = new MeuVue({
    el: '#app',
    data: {
      nome: 'Maria',
      sobrenome: 'Silva'
    }
  })

  console.log(vm.nome)
  console.log(vm.$data.nome)

  vm.nome = 'Pedro'
  console.log(vm.nome)
  console.log(vm.$data.nome)

  // vm.$data.idade = 31
  // console.log(vm.idade)
</script>
```

78. Uma Análise Mais Detalhada de $el e $data

79. Colocando $refs e Usando nos Templates

- [Secao-05-Entendendo-a-Instancia-Vue/79-Colocando-refs-e-Usando-nos-Templates.html](Secao-05-Entendendo-a-Instancia-Vue/79-Colocando-refs-e-Usando-nos-Templates.html)

```html
<div id="app">
    <h1 ref="aulaRef">{{ aula }}</h1>
    <button @click="alterarAula">Alterar AULA</button>

    <h2>{{ modulo }}</h2>
    <button @click="alterarModulo">Alterar MODULO</button>
</div>

<script src="../lib/vue.js"></script>
<script>
    const vm = new Vue({
        el: '#app',
        data: {
            aula: 'AULA',
            modulo: 'MODULO',
        },
        methods: {
            alterarAula() {
                this.aula += '!!!';
            },
            alterarModulo() {
                this.modulo += '###';
                console.log(this.$refs.aulaRef.innerHTML);
            }
        }
    });

    vm.$refs.aulaRef.innerText = "ALTERADO DIRETAMENTE"
    console.log(vm.$refs)
    /*
    {aulaRef: h1}aulaRef: h1__proto__: Object
     vue.js:9064 You are running Vue 
    * */

</script>
```

80. Onde Aprender Mais sobre a API do Vue

81. Montando um Template

- [Secao-05-Entendendo-a-Instancia-Vue/81-Montando-um-Template.html](Secao-05-Entendendo-a-Instancia-Vue/81-Montando-um-Template.html)

```html

<div id="app">

</div>
<script src="../lib/vue.js"></script>
<script>
    const vm = new Vue({
        /*el: '#app',*/
        template: `
              <div>
                  <h1>{{ aula }}</h1>
                  <button @click="alterarAula">Alterar AULA</button>
                  <h2>{{ modulo }}</h2>
                  <button @click="alterarModulo">Alterar MODULO</button>
              </div>
        `,
        data: {
            aula  : 'AULA',
            modulo: 'MODULO',
        },
        methods: {
            alterarAula() {
                this.aula += '!!!';
            },
            alterarModulo() {
                this.modulo += '###';
            }
        }
    });

    //vm.$mount('#app');
    vm.$mount()
    document.querySelector('#app').appendChild(vm.$el)

</script>
```


82. Usando Componentes

- [Secao-05-Entendendo-a-Instancia-Vue/82-Usando-Componentes.html](Secao-05-Entendendo-a-Instancia-Vue/82-Usando-Componentes.html)

```html

<div id="app">
    <comp></comp>
    <comp></comp>

</div>

<script src="../lib/vue.js"></script>
<script>
    Vue.component('comp', {
        template: `
              <div>
                  <h1>{{ aula }}</h1>
                  <button @click="alterarAula">Alterar AULA</button>
                  <h2>{{ modulo }}</h2>
                  <button @click="alterarModulo">Alterar MODULO</button>
              </div>
        `,
        data: function (){
            return {
                aula  : 'AULA',
                modulo: 'MODULO',
            }
        },
        methods: {
            alterarAula() {
                this.aula += '!!!';
            },
            alterarModulo() {
                this.modulo += '###';
            }
        }
    })


    const vm = new Vue({
        el: '#app',
    });

</script>
```

83. Limitações dos Templates

84. Como o VueJS Atualiza o DOM

85. O Ciclo de Vida da Instância Vue #01

86. O Ciclo de Vida da Instância Vue #02

- [Secao-05-Entendendo-a-Instancia-Vue/86-O-Ciclo-de-Vida-da-Instancia.html](Secao-05-Entendendo-a-Instancia-Vue/86-O-Ciclo-de-Vida-da-Instancia.html)

```html
<div id="app">
    <h1>{{ titulo }}</h1>
    <button @click="titulo += '#'">Alterar Título</button>
    <button @click="$destroy()">Destruir</button>
</div>
<script src="../lib/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            titulo: 'Ciclo de Vida'
        },
        beforeCreate() {
            console.log('Antes de Criar')
        },
        created() {
            console.log('Criado')
        },
        beforeMount() {
            console.log('Antes de Montar (DOM)')
        },
        mounted() {
            console.log('DOM Montada')
        },
        beforeUpdate() {
            console.log('Antes de Atualizar')
        },
        updated() {
            console.log('Atualizado')
        },
        beforeDestroy() {
            console.log('Antes de destruir')
        },
        destroyed() {
            console.log('Destruido')
        }
    })
</script>
```

87. Conclusão do Módulo

88. Recursos do Módulo & Links Úteis

- Documentação Oficial - A Instância Vue: https://br.vuejs.org/v2/guide/instance.html

[Voltar ao Índice](#indice)

---


## <a name="parte6">6 - Seção 6: Fluxo de Desenvolvimento "Real" Usando Vue CLI </a>

89. Introdução do Módulo

90. Por que Precisamos de um Servidor Web?

91. O que "Fluxo de Desenvolvimento" Significa?

92. Usando o Vue CLI para Criar Projetos

93. Instalando o Vue CLI e Criando um Novo Projeto

    - [Secao-06-Fluxo-de-Desenvolvimento-Real-Usando-Vue-CLI/93-instalando-projeto1](Secao-06-Fluxo-de-Desenvolvimento-Real-Usando-Vue-CLI/93-instalando-projeto1)

94. Uma Visão Geral sobre a Estrutura de Pastas

95. Entendendo os Arquivos ".vue"

96. Como Construir sua APP para Produção

97. Criando um Projeto e Salvando Template

98. Adicionando Plugins ao Projeto

- [https://vuetifyjs.com/en/](https://vuetifyjs.com/en/)
- [https://simulatedgreg.gitbooks.io/electron-vue/content/pt_BR/](https://simulatedgreg.gitbooks.io/electron-vue/content/pt_BR/)
- [https://github.com/nklayman/vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder)

```
vue add vuetify
vue add electron-builder
```

99. Conclusão do Módulo

100. Mais sobre Arquivos ".vue" e o CLI

    O Arquivo ".vue"
    
    Você pode aprender mais sobre o arquivo ".vue" nesse artigo da documentação oficial: https://br.vuejs.org/v2/guide/single-file-components.html
    
    Você pode aprender mais sobre o método  render()  nesse outro artigo na documentação oficial: https://br.vuejs.org/v2/guide/render-function.html
    
    The CLI
    
    Aprenda mais sobre o Vue CLI aqui: https://cli.vuejs.org/

101. Depurando Projetos VueJS

    Duas ferramentas que você pode usar:
    
    1) Ferramenta de Desenvolvimento Vue (https://github.com/vuejs/vue-devtools)
    
    2) A ferramenta de Desenvolvedor do Chrome
    
    Quando estiver trabalhando com projetos criados com o CLI , você pode facilmente debugar a sua aplicação abrindo o a ferramenta de desenvolvimento (abaixo exemplo no Chrome) abrir a aba sources. Você deverá ver a pasta webpack:// e dentro você encontrará todos os arquivos do projeto (área em destaque vermelha).
    
    Agora é só abrir os arquivos e colocar os breakpoints para debugar a sua aplicação em execução.

102. Recursos do Módulo & Links Úteis


[Voltar ao Índice](#indice)

---


## <a name="parte7">7 - Seção 7: Introdução aos Componentes </a>

103. Introdução do Módulo

104. Revisão Sobre Componentes

- [Secao-07-IntroducaoaosComponentes/104-RevisaoSobreComponentes.html](Secao-07-IntroducaoaosComponentes/104-RevisaoSobreComponentes.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Seção 07</title>
</head>
<body>

<div id="app">
<contador></contador>
<contador></contador>
<contador></contador>
</div>

<script src="../lib/vue.js"></script>
<script>

    Vue.component('contador', {
        template: `
          <div>
          <span>{{contador}}</span>
          <button @click="contador++"> + </button>
          <button @click="contador--"> - </button>
          </div>
        `,
        data(){
            return {
                contador: 0
            }
        }
    });


    new Vue({
        el: '#app',
    });
</script>
</body>
</html>
```

105. Registrar Componentes (Global e Local)

- [Secao-07-IntroducaoaosComponentes/105-Registrar-Componentes-GlobaleLocal.html](Secao-07-IntroducaoaosComponentes/105-Registrar-Componentes-GlobaleLocal.html)

```html

<div id="app1">
    <contador1></contador1>
    <contador1></contador1>
    <contador1></contador1>
</div>
<hr>
<div id="app2">
    <contador2></contador2>
    <contador2></contador2>
    <contador2></contador2>
</div>

<script src="../lib/vue.js"></script>
<script>
    // Registro GLobal
    // Vue.component('contador', {
    //     template: `
    //       <div>
    //       <span>{{contador}}</span>
    //       <button @click="contador++"> + </button>
    //       <button @click="contador--"> - </button>
    //       </div>
    //     `,
    //     data(){
    //         return {
    //             contador: 0
    //         }
    //     }
    // });

    const contador = {
        template: `
          <div>
          <span>{{contador}}</span>
          <button @click="contador++"> + </button>
          <button @click="contador--"> - </button>
          </div>
        `,
        data(){
            return {
                contador: 0
            }
        }
    };

    new Vue({
        el: '#app1',
        // REGISTRO LOCAL
        components:{
            contador1: contador
        }
    });


    new Vue({
        el: '#app2',
        // REGISTRO LOCAL
        components:{
            contador2: contador
        }
    });
</script>
```

106. Criar Projeto Usando Vue CLI

- [Secao-07-IntroducaoaosComponentes/106-criar-projeto-usando-vue-cli](Secao-07-IntroducaoaosComponentes/106-criar-projeto-usando-vue-cli)

107. Criar um Componente

- [Secao-07-IntroducaoaosComponentes/106-criar-projeto-usando-vue-cli/src/components/Contador.vue](Secao-07-IntroducaoaosComponentes/106-criar-projeto-usando-vue-cli/src/components/Contador.vue)

108. Usando Componentes

- [Secao-07-IntroducaoaosComponentes/106-criar-projeto-usando-vue-cli/src/components/Contadores.vue](Secao-07-IntroducaoaosComponentes/106-criar-projeto-usando-vue-cli/src/components/Contadores.vue)

109. Usando CSS com Escopo de Componente

```html
<style scoped>
span {
  border-bottom: 1px solid #CCC;
  height: 30px;
  padding: 5px 25px;
}

button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: coral;
  color: #fff;
  margin-left: 10px;
  outline: none;
}
</style>
```

110. Hora de Praticar: Organizar Projeto em Componentes

- [Secao-07-IntroducaoaosComponentes/111-Hora-de-Praticar-Organizar-Projeto-em-Componentes](Secao-07-IntroducaoaosComponentes/111-Hora-de-Praticar-Organizar-Projeto-em-Componentes)

111. Hora de Praticar: Organizar Projeto em Componentes (Resposta)

112. Organizando os Componentes em Pastas

```
import Menu from      "@/components/template/Menu.vue";
import Footer from    "@/components/template/Footer.vue";
import Caroussel from "@/components/widgets/Caroussel.vue";
import Toolbar from   "@/components/template/Toolbar.vue";

```

113. Regras de Nomes de Componentes

- [Secao-07-IntroducaoaosComponentes/111-Hora-de-Praticar-Organizar-Projeto-em-Componentes/componente-desafio/src/App.vue](Secao-07-IntroducaoaosComponentes/111-Hora-de-Praticar-Organizar-Projeto-em-Componentes/componente-desafio/src/App.vue)

```vue
<template>
  <v-app>

    <Menu />

    <Toolbar />

    <v-content>
      <Caroussel />
    </v-content>

    <Footer />

  </v-app>
</template>

<script>
import Menu from      "@/components/template/Menu.vue";
import Footer from    "@/components/template/Footer.vue";
import Caroussel from "@/components/widgets/Caroussel.vue";
import Toolbar from   "@/components/template/Toolbar.vue";

export default {
  components: {
     Footer,
     Caroussel,
     Toolbar,
     Menu
  },
}
</script>

```

114. Conclusão do Módulo

115. Recursos do Módulo & Links Úteis

Se você quiser aprender mais sobre componentes Vue JS, você talvez queira olhar esse artigo da documentação oficial:

https://br.vuejs.org/v2/guide/components.html

Importante: Alguns assuntos serão abordados nos próximos módulos do curso!

Também ver: https://br.vuejs.org/v2/guide/components-registration.html



[Voltar ao Índice](#indice)

---


## <a name="parte8">8 - Seção 8: Comunicação Entre Componentes </a>

116. Introdução do Módulo

117. Comunicação Entre Componentes

- [Secao-08-Comunicacao-Entre-Componentes/117-Comunicacao-Entre-Componentes/comunicacao](Secao-08-Comunicacao-Entre-Componentes/117-Comunicacao-Entre-Componentes/comunicacao)

118. Comunicação Direta com Props #01

119. Comunicação Direta com Props #02

120. Nome das Propriedades são Case-Sensitive

121. Usando Props no Componente Filho

122. Validando Props #01

123. Validando Props #02

```javascript
<script>
export default {
  //props: ['nome'],
  props: {
    sobrenome: String,
    nome: {
      type: String,
      default: 'Anônimo',
      // default: function(){
      //   return Array(5).fill(0).join(',')
      // },
      required: true
    },
    idade: [Number, String]
  },
  methods: {
    inverterNome() {
      return this.nome.split('').reverse().join('')
    }
  }
}
</script>
```

124. Comunicação Indireta com Eventos Personalizados

125. Comunicação Indireta com Callback

126. Problema da Comunicação entre Componentes Irmãos

127. Comunicação entre Componentes Irmãos

128. Usando Event Bus para Comunicação entre Componentes Irmãos #01

129. Usando Event Bus para Comunicação entre Componentes Irmãos #02

130. Adicionando Métodos no Event Bus

- [Secao-08-Comunicacao-Entre-Componentes/117-Comunicacao-Entre-Componentes/comunicacao/src/barramento.js](Secao-08-Comunicacao-Entre-Componentes/117-Comunicacao-Entre-Componentes/comunicacao/src/barramento.js)

```javascript
import Vue from 'vue';

export default new Vue({

    methods: {
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    }


});
```

131. Hora de Praticar: Comunicação entre Componentes

132. Hora de Praticar: Comunicação entre Componentes (Resposta)

133. Props por Valor vs Props por Referência

134. Conclusão do Módulo

135. Recursos do Módulo & Links Úteis

    Links Úteis:
    
    Documentação Oficial - Props: https://br.vuejs.org/v2/guide/components.html#Passando-Dados-aos-Filhos-com-Props
    
    Documentação Oficial - Eventos Personalizados: https://br.vuejs.org/v2/guide/components.html#Enviando-Mensagens-ao-Pai-com-Eventos

[Voltar ao Índice](#indice)

---


## <a name="parte9">9 - Seção 9: Uso Avançado de Componentes </a>

136. Introdução do Módulo

137. Configurando Projeto do Módulo

138. Como Passar Conteúdo no Corpo do Componente?

139. Passando Conteúdo com Slots

140. Como o Conteúdo do Slot é Estilizado

141. Usando Múltiplos Slots (Slots Nomeados)

- [Secao-09-Uso-Avancado-de-Componentes/137-Configurando-Projeto-do-Modulo/citacoes/src/components/Citacao.vue](Secao-09-Uso-Avancado-de-Componentes/137-Configurando-Projeto-do-Modulo/citacoes/src/components/Citacao.vue)

```vue
<template>
    <div class="citacao">
      <slot name="autor"></slot>
      <slot name="texto"></slot>
      <slot name="fonte"></slot>
    </div>
</template>
```

- [Secao-09-Uso-Avancado-de-Componentes/137-Configurando-Projeto-do-Modulo/citacoes/src/components/Citacoes.vue](Secao-09-Uso-Avancado-de-Componentes/137-Configurando-Projeto-do-Modulo/citacoes/src/components/Citacoes.vue)

```vue
    <Citacao>
      <h1 slot="autor">{{citacoes[indice].autor}}</h1>
      <p slot="texto">{{ citacoes[indice].texto }}</p>
      <h6 slot="fonte">{{citacoes[indice].fonte}}</h6>
    </Citacao>
```

142. Usando Slot Padrão

143. Resumo sobre Slots

144. Alternando entre Múltiplos Componentes com Componentes Dinâmicos

- [Secao-09-Uso-Avancado-de-Componentes/137-Configurando-Projeto-do-Modulo/citacoes/src/App.vue](Secao-09-Uso-Avancado-de-Componentes/137-Configurando-Projeto-do-Modulo/citacoes/src/App.vue)

```vue
<template>
  <div id="app">
    <!--		<Citacoes />
        <Sobre />-->
    <span>
      <button @click="componente = 'Citacoes'">Citações</button>
      <button @click="componente = 'Sobre'">Sobre</button>
    </span>
    <component :is="componente"/>
  </div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
  components: {Citacoes, Sobre},
  data() {
    return {
      componente: 'Citacoes'
    }
  }
}
</script>
```

145. Entendendo o Comportamento do Componente Dinâmico

146. Mantendo o Componente Dinâmico Vivo

```vue
    <keep-alive>
      <component :is="componente"/>
    </keep-alive>
```

147. Métodos de Ciclo de Vida de um Componente Dinâmico

- [Secao-09-Uso-Avancado-de-Componentes/137-Configurando-Projeto-do-Modulo/citacoes/src/components/Citacao.vue](Secao-09-Uso-Avancado-de-Componentes/137-Configurando-Projeto-do-Modulo/citacoes/src/components/Citacao.vue)

```vue
<script>
export default {
  /*props:['texto']*/
  created() {
    console.log('created');
  },
  destroyed() {
    console.log('destroyed');
  },
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  }
}
</script>
```

148. Hora de Praticar - Slots e Componentes Dinâmicos

149. Hora de Praticar - Slots e Componentes Dinâmicos (Resposta)

150. Conclusão do Módulo

151. Recursos do Módulo & Links Úteis

Links Úteis:

- Documentação Oficial - Slots: https://br.vuejs.org/v2/guide/components.html#Distribuicao-de-Conteudo-com-Slots

- Documentação Oficial - Componentes Dinâmicos: https://br.vuejs.org/v2/guide/components.html#Componentes-Dinamicos

[Voltar ao Índice](#indice)

---


## <a name="parte10">10 - Seção 10: Projeto #02 - Tarefas (TODO) </a>

152. Introdução do Módulo

153. Configurar Projeto

- [Secao-10-Projeto-02-Tarefas-TODO/tarefas](Secao-10-Projeto-02-Tarefas-TODO/tarefas)

154. Componente Lista de Tarefas #01

155. Componente Tarefa #01

156. Componente Lista de Tarefas #02

157. Componente Nova Tarefa #01

158. Componente Nova Tarefa #02

159. Componente Tarefa #02

160. Componente Tarefa #03

161. Componente Progresso

162. Usando Local Storage

163. Conclusão do Módulo

164. Recursos do Módulo & Links Úteis


[Voltar ao Índice](#indice)

---


## <a name="parte11">11 - Seção 11: Manipulando Entrada de Usuário com Formulários </a>

165. Introdução do Módulo

166. Configurando Projeto do Módulo

- [Secao-11-ManipulandoEntrada-de-UsuariocomFormularios/formulario-exercicios](Secao-11-ManipulandoEntrada-de-UsuariocomFormularios/formulario-exercicios)

167. Ligação básica em Formulário usando <input>

168. Agrupando Dados e Pré-populando Inputs

169. Modificar Entrada de Usuário com Modificadores de Input

170. Usando textarea e Salvando Quebras de Linha

171. Usando Checkboxes e Salvando os Dados em um Array

172. Usando Botões Radio

173. Manipulando Combobox com select e option

174. O que o v-model faz e Como criar um Input Personalizado

175. Submetendo Formulário

176. Hora de Praticar - Formulários

177. Hora de Praticar - Formulários (Resposta)

- [Secao-11-ManipulandoEntrada-de-UsuariocomFormularios/176-Hora-de-Praticar-Formularios/formulario-desafio](Secao-11-ManipulandoEntrada-de-UsuariocomFormularios/176-Hora-de-Praticar-Formularios/formulario-desafio)

178. Conclusão do Módulo

179. Recursos do Módulo & Links Úteis

Links Úteis:

Documentação Oficial - Formulário: https://br.vuejs.org/v2/guide/forms.html

[Voltar ao Índice](#indice)

---


## <a name="parte12">12 - Seção 12: Usando e Criando Diretivas </a>

180. Introdução do Módulo

181. Entendendo Diretivas

-[Secao-12-Usando-e-Criando-Diretivas/181-Entendendo-Diretivas/diretivas-exercicios](Secao-12-Usando-e-Criando-Diretivas/181-Entendendo-Diretivas/diretivas-exercicios)

```vue
<template>
	<div id="app">
		<h1>Diretivas</h1>
    <hr>
    <p v-text="'Usando Directivas <strong>v-text</strong>'"></p>
    <p v-html="'Usando Directivas <strong>v-html</strong>'"></p>
	</div>
</template>
```

182. Como a Diretiva Funciona - Funções Gatilho (Hooks)

183. Criando uma Diretiva Simples

```javascript
Vue.directive('destaque', {
	bind(el, binding, vnode) {
		el.style.backgroundColor = 'lightgreen';
	}
})
```

184. Passando Valor para Diretiva Personalizada

```vue
<template>
	<div id="app">
		<h1>Diretivas</h1>
    <hr>
    <p v-text="'Usando Directivas <strong>v-text</strong>'"></p>
    <p v-html="'Usando Directivas <strong>v-html</strong>'"></p>
    <p v-destaque="'red'">Testando Directivas</p>
    <p v-destaque="cor">Testando Directivas</p>
	</div>
</template>

<script>
export default {
	data(){
	  return{
	    cor: 'green'
    }
  }
}
</script>
```

```javascript

Vue.directive('destaque', {
	bind(el, binding, vnode) {
		//el.style.backgroundColor = 'lightgreen';
		//el.style.backgroundColor = binding.value;
        let atraso = 0;
        if(binding.modifiers['atrasar']) atraso = 3000
        
        setTimeout(() => {
            if(binding.arg === 'fundo'){
                el.style.backgroundColor = binding.value
            }else{
                el.style.color = binding.value;
            }
        })
	}
})

```

185. Passando Argumento para Diretiva Personalizada

```vue
    <p v-destaque:fundo="'lightblue'">Testando Directivas</p>
    <p v-destaque="cor">Testando Directivas</p>
```

- [Secao-12-Usando-e-Criando-Diretivas/181-Entendendo-Diretivas/diretivas-exercicios/src/main.js](Secao-12-Usando-e-Criando-Diretivas/181-Entendendo-Diretivas/diretivas-exercicios/src/main.js)

```javascript

Vue.directive('destaque', {
	bind(el, binding, vnode) {
		//el.style.backgroundColor = 'lightgreen';
		//el.style.backgroundColor = binding.value;
		if(binding.arg === 'fundo'){
			el.style.backgroundColor = binding.value;
		}else{
			el.style.color = binding.value;
		}
	}
})
```

186. Modificando Diretivas Personalizadas com Modificadores

- [Secao-12-Usando-e-Criando-Diretivas/181-Entendendo-Diretivas/diretivas-exercicios/src/main.js](Secao-12-Usando-e-Criando-Diretivas/181-Entendendo-Diretivas/diretivas-exercicios/src/main.js)

```javascript
Vue.directive('destaque', {
    bind(el, binding, vnode) {

        // eslint-disable-next-line no-unused-vars
        let atraso = 0;

        if (binding.modifiers['atrasar']) {
            atraso = 3000;
        }
        setTimeout(() => {

            if (binding.arg === 'fundo') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        },atraso);
    }
})
```

```vue
    <p v-destaque:fundo.atrasar="'lightblue'">Testando Directivas</p>
    <p v-destaque.atrasar="cor">Testando...</p>
```


187. Resumo sobre Diretivas Personalizadas

188. Registrando Diretivas Localmente

- [Secao-12-Usando-e-Criando-Diretivas/181-Entendendo-Diretivas/diretivas-exercicios/src/App.vue](Secao-12-Usando-e-Criando-Diretivas/181-Entendendo-Diretivas/diretivas-exercicios/src/App.vue)

```vue

export default {
  components: {},
  directives: {
    'destaque-local': {
      bind(el, binding, vnode) {

        // eslint-disable-next-line no-unused-vars
        let atraso = 0;

        if (binding.modifiers['atrasar']) {
          atraso = 3000;
        }
        setTimeout(() => {

          if (binding.arg === 'fundo') {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        },atraso);
      }
    }
  },
  data() {
    return {
      cor: 'blue'
    }
  }
}

```

189. Usando Múltiplos Modificadores

```vue
export default {
  components: {},
  directives: {
    'destaque-local': {
      bind(el, binding, vnode) {

        const aplicarCor = cor => {
          if (binding.arg === 'fundo') {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        }

        let atraso = 0;

        const cor1 = binding.value;
        const cor2 = 'purple';
        let corAtual = cor1;

        if (binding.modifiers['atrasar']) {
          atraso = 3000;
        }

        setTimeout(() => {
          setInterval(() => {
            if (binding.modifiers['alternar']) {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual)
            } else {
              aplicarCor(binding.value)
            }
          }, 1000);
        }, atraso);
      }
    }
  },
  data() {
    return {
      cor: 'blue'
    }
  }
}
```

```vue
    <p v-destaque-local:fundo.atrasar.alternar="'lightblue'">Testando Directivas</p>
    <p v-destaque-local.atrasar="cor">Testando...</p>
```


190. Passando Valores mais Complexos para as Diretivas

```vue
export default {
  components: {},
  directives: {
    'destaque-local': {
      bind(el, binding, vnode) {

        const aplicarCor = cor => {
          if (binding.arg === 'fundo') {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        }

        let atraso = 0;

        const cor1 = binding.value.cor1;
        const cor2 = binding.value.cor2;
        let corAtual = cor1;

        if (binding.modifiers['atrasar']) {
          atraso = binding.value.atraso;
        }

        setTimeout(() => {
          if (binding.modifiers['alternar']) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual)
            }, binding.value.intervalo);
          } else {
            aplicarCor(binding.value.cor1)
          }
        }, atraso);
      }
    }
  },
  data() {
    return {
      cor: 'blue'
    }
  }
}
```

```vue
    <p v-destaque-local:fundo.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso:3000, intervalo: 2000}">Testando
      Directivas</p>
    <p v-destaque-local.atrasar="{cor1:'red', atraso: 5000}">Testando...</p>
```

191. Hora de Praticar - Diretivas

- [Secao-12-Usando-e-Criando-Diretivas/191-Hora-de-Praticar-Diretivas/diretivas-desafio](Secao-12-Usando-e-Criando-Diretivas/191-Hora-de-Praticar-Diretivas/diretivas-desafio)

192. Hora de Praticar - Diretivas (Resposta)

- [Secao-12-Usando-e-Criando-Diretivas/191-Hora-de-Praticar-Diretivas/diretivas-desafio/src/App.vue](Secao-12-Usando-e-Criando-Diretivas/191-Hora-de-Praticar-Diretivas/diretivas-desafio/src/App.vue)

```vue
   <button v-quando:click="acao">EXECUTAR</button>
    <p v-quando:mouseenter="mouseEnter" v-quando:mouseleave="mouseLeaver">Teste de mouse event</p>

```

```vue
export default {
  directives: {
    quando: {
      bind(el, binding) {
        // el.onclick = function (e) {
        //   binding.value();
        // }
        const tipo = binding.arg;
        const fn = binding.value;
        el.addEventListener(tipo, fn);
      }
    }
  },
  methods: {
    acao() {
      alert('Ação Executada');
    },
    mouseEnter(){
      console.log('Passou o mouse!')
    },
    mouseLeaver() {
      console.log('Saiu o mouse!')
    }
  }
}
```

193. Conclusão do Módulo

194. Recursos do Módulo & Links Úteis

Links Úteis:

Documentação Oficial - Diretivas Personalizadas: https://br.vuejs.org/v2/guide/custom-directive.html

[Voltar ao Índice](#indice)

---


## <a name="parte13">13 - Seção 13: Melhorando sua App com Filtros e Mixins </a>

195. Introdução do Módulo

- [Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/195-Introducao-do-Modulo/filtros-mixins-exercicios](Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/195-Introducao-do-Modulo/filtros-mixins-exercicios)

196. Criando um Filtro Local

```vue
<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>{{ cpf | cpf }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cpf: '09856723412'
    }
  },
  filters: {
    cpf(valor) {
      const arr = valor.split('');
      arr.splice(3,0, '.')
      arr.splice(7,0, '.')
      arr.splice(11,0, '-')
      return arr.join('')
    }
  }
}
</script>
```

197. Filtro Global e Como Encadear Múltiplos Filtros

- [Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/195-Introducao-do-Modulo/filtros-mixins-exercicios/src/main.js](Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/195-Introducao-do-Modulo/filtros-mixins-exercicios/src/main.js)

```javascript

Vue.filter('inverter', function (valor) {
	return valor.split('').reverse().join('');
});
```

198. Filtro & v-bind

```vue
<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>{{ cpfAluno | cpf | inverter}}</p>
    <input type="text" :value="cpfAluno | cpf | inverter">
  </div>
</template>
```

199. Duplicando Código para Usar os Mixins

200. Criando e Usando Mixins

```vue
<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>Usuário Logado: {{usuarioLogado}}</p>
    <p>{{ cpfAluno | cpf | inverter }}</p>
    <input type="text" :value="cpfAluno | cpf | inverter">
    <hr>
    <Fruta/>
    <hr>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import frutasMixin from './frutasMixin';
import Fruta from "./Fruta.vue";
import usuarioLogado from "./usuarioLogado";

export default {
  components: {Fruta},
  mixins : [frutasMixin, usuarioLogado],
  data() {
    return {
      cpfAluno: '09856723412',
      frutas: ['abacate']
    }
  },
  filters: {
    cpf(valor) {
      const arr = valor.split('');
      arr.splice(3, 0, '.')
      arr.splice(7, 0, '.')
      arr.splice(11, 0, '-')
      return arr.join('')
    }
  },
  methods: {

  }
}
</script>
```

201. Criando um Mixin Global (Caso Especial!)

202. Hora de Praticar - Filtros & Mixins

- [Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/202-Hora-de-Praticar-Filtros-Mixins/filtros-mixins-desafio](Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/202-Hora-de-Praticar-Filtros-Mixins/filtros-mixins-desafio)

203. Hora de Praticar - Filtros & Mixins (Resposta)

- [Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/202-Hora-de-Praticar-Filtros-Mixins/filtros-mixins-desafio/src/App.vue](Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/202-Hora-de-Praticar-Filtros-Mixins/filtros-mixins-desafio/src/App.vue)
  
```vue
<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <!-- Exercício 1 -->
    <!-- Construir um filtro local que troca espaços por vírgula -->
    <p>{{ frase | espaco-por-virgula }}</p>
    <p>{{ frase | espacoPorVirgula }}</p>


    <!-- Exercício 2 -->
    <!-- Filtro global que conta o tamanho de cada palavra e adiciona o
      valor na string final -->
    <!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
    <p>{{ frase | contar-palavras }}</p>
    <p>{{ frase | contarPalavras }}</p>

    <!-- Exercício 3 -->
    <!-- Implementar os exercicios 1 e 2 com propriedade computada -->
    <p>{{ fraseComVirgulas }}</p>
    <p>{{ fraseComTanhamo }}</p>

    <!-- Exercício 4 -->
    <!-- Compartilhe a propriedade computada via mixin -->
  </div>
</template>

<script>
import fraseMixin from "./fraseMixin";

export default {
  mixins:[fraseMixin] ,
  data() {
    return {
      frase: 'Essa é a frase que será usada nos desafios'
    }
  },
  filters: {
    espacoPorVirgula(valor) {
      return valor.replace(/\s/g, ',')
    }
  },
  computed: {
    // fraseComVirgulas() {
    //   return this.frase.replace(/\s/g, ',')
    // },
    // fraseComTanhamo(){
    //   return this.frase.split(' ').map(p => `${p} (${p.length})`).join(' ')
    // }
  }
}
</script>
```

- [Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/202-Hora-de-Praticar-Filtros-Mixins/filtros-mixins-desafio/src/fraseMixin.js](Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/202-Hora-de-Praticar-Filtros-Mixins/filtros-mixins-desafio/src/fraseMixin.js)

```javascript
export default {
    computed: {
        fraseComVirgulas() {
            return this.frase.replace(/\s/g, ',')
        },
        fraseComTanhamo(){
            return this.frase.split(' ').map(p => `${p} (${p.length})`).join(' ')
        }
    }
}

```

- [Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/202-Hora-de-Praticar-Filtros-Mixins/filtros-mixins-desafio/src/main.js](Secao-13-Melhorando-sua-App-com-Filtros-e-Mixins/202-Hora-de-Praticar-Filtros-Mixins/filtros-mixins-desafio/src/main.js)

```javascript
Vue.filter('contarPalavras', function (valor) {
    return valor.split(' ').map(p => `${p} (${p.length})`).join(' ')
});
```

204. Conclusão do Módulo

205. Recursos do Módulo & Links Úteis

Links Úteis:

- Documentação Oficial - Filtros: https://br.vuejs.org/v2/guide/filters.html

- Documentação Oficial - Mixins: https://br.vuejs.org/v2/guide/mixins.html

[Voltar ao Índice](#indice)

---


## <a name="parte14">14 - Seção 14: Adicionando Animações e Transições </a>

206. Introdução do Módulo

207. Entendendo as Transições

208. Preparando o Código para Usar Transições

- [Secao-14-Adicionando-Animacoes-e-Transicoes/208-Preparando-o-Codigo-para-Usar-Transicoes/animacoes-exercicios](Secao-14-Adicionando-Animacoes-e-Transicoes/208-Preparando-o-Codigo-para-Usar-Transicoes/animacoes-exercicios)

209. Configurando Transição

![img/transicao_css.png](img/transicao_css.png)

210. Definindo as Classes CSS para Transição

211. Criando Transição "Fade" com Propriedade CSS transition

```vue
    <transition name="fade">
      <b-alert variant="info" show v-if="exibir">{{ msn }}</b-alert>
    </transition>
// ...
<style>
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active  {
  transition: opacity 2s;
}

/*.fade-enter-to {
opacity: 1;
}

.face-leave {
opacity: 1;
}*/

/*.fade-leave-active {
transition: opacity 2s;
}*/

/*.fade-leave-to {
opacity: 0;
}*/
</style>

```

212. Criando Transição "Slide" com Propriedade CSS animation

213. Misturando as Propriedades transition e animation

```vue

<transition name="slide" type="animation">
<b-alert variant="info" show v-if="exibir">{{ msn }}</b-alert>
</transition>
// ....
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 6s;
}

.slide-enter, .slide-leave-to{
  opacity: 0;
}
</style>
```

214. Usando v-show

```vue
<transition name="slide" type="animation">
  <!--      <b-alert variant="info" show v-if="exibir">{{ msn }}</b-alert>-->
  <b-alert variant="info" show v-show="exibir">{{ msn }}</b-alert>
</transition>
```

215. Configurando Animação no Carregamento do Componente

```vue
    <transition name="fade" appear>
      <b-alert variant="info" show v-if="exibir">{{ msn }}</b-alert>
    </transition>
```

216. Usando Nomes Diferentes de Classes CSS

- [https://animate.style/](https://animate.style/)

```vue
<transition
  enter-active-class="animated bounce"
  leave-active-class="animated shake"
>
  <b-alert variant="info" show v-if="exibir">{{ msn }}</b-alert>
</transition>
```

217. Usando Nomes e Atributos Dinâmicos

```vue
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>
    <transition :name="tipoAnimacao">
      <b-alert variant="info" show v-show="exibir">{{ msn }}</b-alert>
    </transition>
```

218. Transicionar entre Múltiplos Elementos

```vue
    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info"    show key="info" v-if="exibir">{{ msn }}</b-alert>
      <b-alert variant="warning" show key="warn" v-else>{{ msn }}</b-alert>
    </transition>
```

219. Escutando a Eventos de Transição (Hooks)

![img/transicao_js.png](img/transicao_js.png)

220. Entendendo Animação em JavaScript

```vue
<button @click="exibir2 = !exibir2">Mostrar</button>
    <transition
      @before-enter="beforEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="caixa" v-if="exibir2"></div>
    </transition>
```

```vue
methods: {
    beforEnter(el){
      console.log('beforEnter')
    },
    enter(el, done){
      console.log('enter')
      done()
    },
    afterEnter(el){
      console.log('AfterEnter')
    },
    enterCancelled() {
      console.log('EnterCancelled');
    },
    beforeLeave(el) {
      console.log('beforLeave');
    },
    leave(el, done) {
      console.log('Leave');
      done()
    },
    afterLeave(el) {
      console.log(afterLeave)
    },
    leaveCancelled(){
      console.log('leaveCancelled')
    }
  }
```

221. Excluindo CSS da Animação

```vue
    <transition
        :css="false"
      @before-enter="beforEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="caixa" v-if="exibir2"></div>
    </transition>
```

222. Criando Animação em JavaScript

```vue
methods: {
    animar(el, done, negativo) {
      let rodada = 1
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase +
            (negativo ? -rodada * 10 : rodada * 10)
        el.style.width = `${novaLargura}px`
        rodada++
        if (rodada > 30) {
          clearInterval(temporizador)
          done()
        }
      }, 20)
    },
    beforEnter(el) {
      this.larguraBase = 0
      el.style.width = `${this.larguraBase}px`
    },
    enter(el, done) {
      this.animar(el, done, false)
    },
    /*    afterEnter(el){
          console.log('AfterEnter')
        },*/
    /*    enterCancelled() {
          console.log('EnterCancelled');
        },*/
    beforeLeave(el) {
      this.larguraBase = 300
      el.style.width = `${this.larguraBase}px`
    },
    leave(el, done) {
      this.animar(el, done, true)
    },
    /*    afterLeave(el) {
          console.log(afterLeave)
        },
        leaveCancelled(){
          console.log('leaveCancelled')
        }*/
  }
```

223. Animando Componentes Dinâmicos

```vue
<div class="mb-4">
      <b-button class="mr-2" variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
      <b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>
    </div>
    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition>
```


224. Animando Listas com <transition-group>

225. Usando <transition-group> - Preparações

226. Usando <transition-group> para Animar Listas

```vue
<b-button @click="adicionaAluno" class="mb-4">Admicionar Aluno</b-button>
    <transition-group name="slide" tag="div">
      <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
        <b-list-group-item @click="removeAluno(i)">{{ aluno }}</b-list-group-item>
      </b-list-group>
    </transition-group>
```

227. Entendendo a Aplicação

- [Secao-14-Adicionando-Animacoes-e-Transicoes/227-Entendendo-a-Aplicacao/super-quiz](Secao-14-Adicionando-Animacoes-e-Transicoes/227-Entendendo-a-Aplicacao/super-quiz)

228. Desenvolvendo a Aplicação #01

229. Desenvolvendo a Aplicação #02

230. Adicionando as Animações

231. Conclusão do Módulo

232. Recursos do Módulo & Links Úteis


[Voltar ao Índice](#indice)

---


## <a name="parte15">15 - Seção 15: Conectando com Servidor via HTTP </a>

233. Introdução do Módulo

234. Configuração do Firebase

235. Configuração Global do Axios

- [Secao-15-Conectando-com-Servidor-via-HTTP/http-exercicios](Secao-15-Conectando-com-Servidor-via-HTTP/http-exercicios)

```javascript
import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://**********c34-default-rtdb.firebaseio.com/';

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios;
    }
})

```

236. Criando Instância do Axios

```javascript
import Vue from 'vue';
import axios from 'axios';

//axios.defaults.baseURL = 'https://curso-vue-2-26c34-default-rtdb.firebaseio.com/';

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios;

        Vue.prototype.$http = axios.create({
            baseURL: 'https://c********-default-rtdb.firebaseio.com/'
        })

    }
})

```

237. Criando Formulário

238. Enviando POST

```javascript
 methods:{
    salvar(){
      this.$http.post('usuarios.json', this.usuario)
      .then(resp => {
        this.usuario.nome = ''
        this.usuario.email = ''
      })
    }
  }
```

239. Enviando GET

```javascript
obterUsuarios(){
      //this.$http.get()
      this.$http('usuarios.json')
      .then(res => {
        this.usuarios = res.data;
      })
    }
```

240. Usando Axios Localmente

```javascript
<script>
import axios from 'axios';

    obterUsuarios(){
    //this.$http.get()
    axios('https://curso-vue-2-26c34-default-rtdb.firebaseio.com/usuarios.json')
        //this.$http('usuarios.json')
        .then(res => {
            this.usuarios = res.data;
        })


```

241. Interceptando Requisições

- [Secao-15-Conectando-com-Servidor-via-HTTP/http-exercicios/src/plugins/axios.js](Secao-15-Conectando-com-Servidor-via-HTTP/http-exercicios/src/plugins/axios.js)

```javascript
Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios;

        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-2-26c34-default-rtdb.firebaseio.com/'
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method);

/*            if (config.method == 'post') {
                config.method = 'put'
            }*/

            return config;
        });

    }
})

```

242. Interceptando Resposta

- [Secao-15-Conectando-com-Servidor-via-HTTP/http-exercicios/src/plugins/axios.js](Secao-15-Conectando-com-Servidor-via-HTTP/http-exercicios/src/plugins/axios.js)

```javascript
Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios;

        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-2-26c34-default-rtdb.firebaseio.com/'
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method);

/*            if (config.method == 'post') {
                config.method = 'put'
            }*/

            return config;
        }, error => {Promise.reject(error)});

        Vue.prototype.$http.interceptors.response.use(res => {
            const array = []
            for(let chave in res.data){
                array.push({id: chave, ...res.data[chave]});
            }
            res.data = array;
            return res
        }, error => {Promise.reject(error)})

    }
})
```

243. Adicionando Headers Globais

````javascript
// axios.defaults.headers.common['Authorization'] = 'abc123';
// axios.defaults.headers.get['Accepts'] = 'application/json*';
````

244. Implementando CRUD

- [Secao-15-Conectando-com-Servidor-via-HTTP/http-exercicios/src/App.vue](Secao-15-Conectando-com-Servidor-via-HTTP/http-exercicios/src/App.vue)

245. Exibindo Mensagens

- [Secao-15-Conectando-com-Servidor-via-HTTP/http-exercicios/src/App.vue](Secao-15-Conectando-com-Servidor-via-HTTP/http-exercicios/src/App.vue)

```javascript

<b-alert show
         dismissible
         v-for="mensagem in mensagens"
             :key="mensagem.texto"
:variant="mensagem.tipo"
    >{{mensagem.texto}}
</b-alert>

salvar() {
      // this.$http.post('usuarios.json', this.usuario)
      //     .then(() => {
      //       this.limpar()
      //     })
      const metodo    = this.id ? 'patch' : 'post'
      const finalUrl  = this.id ? `/${this.id}.json`: '.json'
      this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
          .then(() => {
            this.limpar();
            this.mensagens.push({
              texto: 'Operação realizada com sucesso!',
              tipo: 'success'
            })
          });
    },
```

246. Conclusão do Módulo

247. Recursos do Módulo & Links Úteis


[Voltar ao Índice](#indice)

---


## <a name="parte16">16 - Seção 16: Rotas em uma Aplicação VueJS </a>

249. Introdução do Módulo

250. Instalação do vue-router

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios)

251. Configuração do vue-router

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js)

```javascript
import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Usuario from './components/usuario/Usuario';

Vue.use(Router);

export default new Router({
    routes:[{
        path: '/',
        component:Inicio
    },
        {
            path: '/usuario',
            component: Usuario
        }]
})

```

252. Entendendo os Modos de Rotas (Hash vs History)

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js)

```javascript
export default new Router({
    mode: 'history',
    routes:[{
        path: '/',
        component:Inicio
    },
        {
            path: '/usuario',
            component: Usuario
        }]
})
```

253. Navegando com Router Links

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/template/Menu.vue](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/template/Menu.vue)

```vue
<template>
    <nav class="menu">
        <router-link to="/">Início</router-link>
        <router-link to="/usuario">Usuário</router-link>
    </nav>
</template>
```

254. Onde estou? - Estilizando o Link Ativo

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/template/Menu.vue](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/template/Menu.vue)

```vue
<template>
  <nav class="menu">
    <ul>
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Início</a></router-link>
      <router-link to="/usuario" tag="li" active-class="active" >
        <a>Usuário</a></router-link>
    </ul>
  </nav>
</template>
```

255. Navegação via Código (Navegação Imperativa)

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/usuario/Usuario.vue](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/usuario/Usuario.vue)

```javascript
<template>
<div class="usuario">
  <h2>Usuário</h2>
  <hr>
  <button sucesso @click="irParaInicio">Voltar</button>
</div>
</template>

<script>
export default {
  name: "Usuario",
  methods:{
    irParaInicio(){
      //this.$router.push('/')
      this.$router.push({
        path: '/'
      });
    }
  }
}
</script>

<style scoped>

</style>

```

256. Configurando Parâmetros de Rotas

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js)

```javascript
export default new Router({
    mode: 'history',
    routes:[{
        path: '/',
        component:Inicio
    },
        {
            path: '/usuario/:id',
            component: Usuario
        }]
})
```

257. Lendo e Usando Parâmetros de Rotas

258. Reagindo a Mudanças em Parâmetros de Rotas

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/usuario/Usuario.vue](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/usuario/Usuario.vue)

```javascript
<template>
  <div class="usuario">
    <h2>Usuário</h2>
    <hr>
    <p><strong>Código:</strong>{{ id }}</p>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  name: "Usuario",
  data(){
    return{
      id: this.$route.params.id
    }
  },
  watch:{
    $route(to, from){
      this.id = to.params.id;
    }
  },
  methods: {
    irParaInicio() {
      //this.$router.push('/')
      this.$router.push({
        path: '/'
      });
    }
  }
}
</script>
```

259. Parâmetros de Rotas via "props"

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/usuario/Usuario.vue](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/usuario/Usuario.vue)

```javascript
export default {
  name: "Usuario",
  // data(){
  //   return{
  //     id: this.$route.params.id
  //   }
  // },
  // watch:{
  //   $route(to, from){
  //     this.id = to.params.id;
  //   }
  // },
  props: ['id'],
  methods: {
    irParaInicio() {
      //this.$router.push('/')
      this.$router.push({
        path: '/'
      });
    }
  }
}
</script>
```

260. Configurando Rotas Filhas (Rotas Aninhadas)

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js)

```javascript

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Inicio
    },
        {
            path: '/usuario',
            component: Usuario,
            props: true,
            children: [
                {path: '', component: UsuarioLista},
                {path: ':id', component: UsuarioDetalhe, props: true},
                {path: ':id/editar', component: UsuarioEditar, props: true},
            ]
        }]
})
```

261. Navegando para Rotas Aninhadas

262. Tornando Router Links mais Dinâmico

263. Criando Links com Rotas Nomeadas

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js)

```javascript
 {
            path: '/usuario',
            component: Usuario,
            props: true,
            children: [
                {path: '', component: UsuarioLista},
                {path: ':id', component: UsuarioDetalhe, props: true},
                {path: ':id/editar',
                    component: UsuarioEditar,
                    props: true,
                    name: 'editarUsuario'},
            ]
        }
```

264. Usando Parâmetros da Query

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/usuario/UsuarioDetalhe.vue](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/usuario/UsuarioDetalhe.vue)

```javascript
 <router-link primario
                 :to="{ name:'editarUsuario',
                        params: {id},
                        query: {
                          completo: true,
                          lingua: 'pt'
                    }
                        }"
                 tag="button">Editar
    </router-link>
```

````javascript
<template>
  <div class="usuario-editar">
    <h3>Usuário Ediatar</h3>
    <hr>
    <p><strong>Código: </strong>{{ id }}</p>
    <p><strong>Completo: </strong>{{$route.query.completo ? 'Sim' : 'Não'}}</p>
    <p><strong>Língua: </strong>{{$route.query.lingua}}</p>
  </div>
</template>
````

265. Múltiplos Router Views (Router Views Nomeados)

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js)

```javascript
 components: {
default: Usuario,
        menu: MenuAlt,
        menuInferior: Menu
},
```

```javascript
<template>
  <div id="app">
    <h1>Rotas com VueRouter</h1>
    <router-view name="menu"></router-view>
    <router-view />
    <router-view name="menuInferior"></router-view>
  </div>
</template>
```

266. Redirecionamento

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js)

```javascript
        {
            path: '/redirecionar',
            redirect: '/usuario'
        }
```

267. Configurando Rota "Pega Tudo"

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js)

```javascript
        {
            path: '*',
            redirect: '/'
        }
```

268. Animando Transições de Rotas

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/App.vue](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/App.vue)

```javascript
   <transition
        mode="out-in"
        enter-active-class="animated rubberBand"
        leave-active-class="animated rollOut"
    >
      <router-view />
    </transition>
```

269. Passando Fragmento Hash

270. Controlando o Comportamento de Rolagem (Scroll)

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js)

```javascript
  scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition;
        }else if(to.hash){
          return {selector: to.hash}
      }else{
            return {x: 0, y:o}
        }
    },
```

271. Protegendo Rotas

272. Usando o Evento "beforeEnter"

```javascript
 {path: ':id', component: UsuarioDetalhe, props: true,
                    beforeEnter: (to, from, next) => {
                        console.log('antes da rota -> usuario detalhe')
                        next();
                    }
                }
```

```javascript
 beforeRouteEnter(to, from, next) {
    //console.log(this.id) // erro
    console.log(' dentro do componente -> usuario detalhe')
    next(vm => {
      console.log(vm.id); // acesso ao id do componente
    })
    const autenticado = true;
    autenticado ? next() : next(false);
  }
```

273. Usando o Evento "beforeLeave"

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/usuario/UsuarioEditar.vue](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/components/usuario/UsuarioEditar.vue)

```javascript
beforeRouteLeave(to, from, next) {
    if (this.confirmou) {
      next();
    }else{
      if (confirm('Tem certeza?')) {
        next();
      }else{
        next(false);
      }
    }
  }
```

274. Carregando Rotas Tardiamente

- [Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js](Secao-16-Rotas-em-um- Aplicacao-VueJS/rotas-exercicios/src/router.js)

```javascript
import Menu from './components/template/Menu';
//import Usuario from './components/usuario/Usuario';
//import UsuarioLista from "./components/usuario/UsuarioLista";
//import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";
//import UsuarioEditar from "./components/usuario/UsuarioEditar";

import MenuAlt from "./components/template/MenuAlt";

Vue.use(Router);

const Usuario         = () => import(/* webpackChunkName: "usuario" */ './components/usuario/Usuario');
const UsuarioLista    = () => import(/* webpackChunkName: "usuario" */ './components/usuario/UsuarioLista')
const UsuarioDetalhe  = () => import(/* webpackChunkName: "usuario" */ '/components/usuario/UsuarioDetalhe')
const UsuarioEditar   = () => import(/* webpackChunkName: "usuario" */ '/components/usuario/UsuarioEditar')

```

275. Conclusão do Módulo

276. Recursos do Módulo & Links Úteis


[Voltar ao Índice](#indice)

---


## <a name="parte17">17 - Seção 17: Melhor Gerenciamento de Estado com Vuex </a>

277. Introdução do Módulo

278. Por que usar um Gerenciador de Estado?

279. Entendendo "Estado Centralizado"

![img/vuex_estado.png](img/vuex_estado.png)

280. Conhecendo o Projeto do Módulo

281. Usando Estado Centralizado

282. Por que Estado Centralizado Sozinho Não Resolve

283. Entendendo Getters

284. Usando Getters

- [Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/store.js](Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/store.js)

```javascript
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        produtos: [
            {id: 1, nome: 'Produto 1', quantidade: 7, preco: 14.55},
            {id: 2, nome: 'Produto 2', quantidade: 10, preco: 22.99},
           // {id: 3, nome: 'Produto 3', quantidade: 1, preco: 43.18},
        ]
    },
    getters:{
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    }
});

```

285. Mapeando Getters para Propriedades

- [Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/components/Resumo.vue](Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/components/Resumo.vue)

```javascript
<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: mapGetters({
      total: "valorTotal"
    })
    //computed:mapGetters(['valorTotal'])
    /*computed: {
        total() {
          return this.$store.getters.valorTotal;
        },
        produtos() {
          return this.$store.state.produtos;
        }
    },*/

}
</script>
```

286. Observação sobre o funcionamento da aplicação

Observação sobre o funcionamento da aplicação
Fala, pessoal!

Um breve esclarecimento sobre um "bug" apresentado no desenvolvimento da aplicação usada nesse capítulo. Caso você tente alterar interagir com os valores no componente Loja Virtual, o console do navegador apresentará a seguinte mensagem de erro:
```
Computed property "quantidade" was assigned to but it has no setter
```
Ou:

```
Computed property "preco" was assigned to but it has no setter
```
Isso acontece porque em Loja Virtual para os campos preco e quantidade definimos apenas os getters para capturar os dados da store e não definimos os setters para modificar esses dados na store.

Caso você queira permitir a alteração dos dados na store através do componente Loja Virtual, você deve implementar os setters, assim como foi feito em Parâmetros. Veja o exemplo:


```javascript
computed: {
    quantidade: {
        get () {
         return this.$store.state.parametros.quantidade
        },
        set (valor) {
            this.$store.commit('setQuantidade', valor)
        }
    },
    preco: {
        get () {
            return this.$store.state.parametros.preco
        },
        set (valor) {
            this.$store.commit('setPreco', valor)
        }
    }
},
```


Tenha em mente que agora o que for alterado em Loja Virtual será alterado em Parâmetros, mas esse não era o caso de uso planejado para essa aplicação. Tranquilo?

Esperamos que com essa aula artigo tenhamos esclarecido essa pequena confusão 😅



287. Entendendo Mutations

![img/mutattion.png](img/mutattion.png)

288. Usando Mutations

- [Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/store.js](Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/store.js)

```javascript
    mutations:{
        adicionarProduto(state, payload) {
            state.produtos.push(payload);
        }
    }
```

- [Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/components/Loja.vue](Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/components/Loja.vue)

```javascript
    methods: {
      ...mapMutations(["adicionarProduto"]),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            // eslint-disable-next-line
            //console.log(produto)

          //this.$store.state.produtos.push(produto)
          //this.$store.commit("adicionarProduto", produto);
          this.adicionarProduto(produto);

        }
    }
```

289. Por que existem Mutations e Actions?

290. Como Actions Complementam as Mutation

![img/actions.png](img/actions.png)

291. Usando Actions

- [Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/store.js](Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/store.js)

```javascript
actions:{
        //adicionarProduto(context, payload) {
        adicionarProduto({commit}, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload);
            }, 1000)
        }
```

```javascript
import {mapActions} from 'vuex';

methods: {
...mapActions(["adicionarProduto"]),
        adicionar() {
        const produto = {
            id: this.sequencia,
            nome: `Produto ${this.sequencia}`,
            quantidade: this.quantidade,
            preco: this.preco
        }
        this.sequencia++
        // eslint-disable-next-line
        //console.log(produto)

        //this.$store.state.produtos.push(produto)
        //this.$store.commit("adicionarProduto", produto);

        this.adicionarProduto(produto);
        //this.$store.dispatch('adicionarProduto', produto);

    }

```

292. Mapeando Actions para Métodos

```javascript
    methods: {
      ...mapActions(["adicionarProduto"]),

/*      adicionarProduto(){
        this.$store.dispatch('adicionarProduto', produto);
      },*/
```

293. Vuex e Two-Way-Binding (v-model)

```javascript
 mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload);
        },
        setQuantidade(state, payload) {
            state.quantidade = payload;
        },
        setPreco(state, payload) {
            state.preco = payload;
        }
    },
```

- [Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/components/Parametros.vue](Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/components/Parametros.vue)

```javascript
export default {
  computed:{
   quantidade: {
     get() {
       return this.$store.state.quantidade;
     },
     set(valor) {
       this.$store.commit('setQuantidade', valor);
     }
   },
    preco:{
      get() {
        return this.$store.state.preco;
      },
      set(valor) {
        this.$store.commit('setPreco', valor);
      }
    }
  }
}
```

- [Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/components/Loja.vue](Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/components/Loja.vue)

```javascript
    computed:{
      quantidade() {
        return this.$store.state.quantidade;
      },
      preco(){
        return this.$store.state.preco;
      }
    },
```


294. Resumo do Vuex

295. Melhorando a Estrutura de Pastas

296. Modularizando o Gerenciador de Estado

297. Usando Arquivos Separados

- [Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/getters.js](Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/getters.js)

```javascript
export const getNome = state => state.nome
export const getNomeCompleto = state => state.nome + state.sobrenome

```

- [Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/store.js](Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/store.js)

```javascript

import carrinho from "./modules/carrinho";
import parametros from "./modules/parametros";

import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        nome: 'Jose',
        sobrenome: 'Malcher'
    },
    //getters,
    getters:{
      ...getters
    },
    modules:{carrinho, parametros}
});
```

```javascript
          // eslint-disable-next-line
          console.log(this.$store.getters.getNome)
          // eslint-disable-next-line
          console.log(this.$store.getters.getNomeCompleto)
```

298. Usando Namespaces para Evitar Conflitos de Nomes

- [Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/modules/carrinho.js](Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/store/modules/carrinho.js)

```javascript
export default{
    namespaced: true,
```

- [Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/components/Carrinho.vue](Secao-17-Melhor-Gerenciamento-de-Estado-com-Vuex/vuex-exercicios/src/components/Carrinho.vue)

```javascript
export default {
    computed: {
      ...mapGetters('carrinho',{
        total: 'valorTotal'
      }),
```

299. Conclusão do Módulo

300. Recursos do Módulo & Links Úteis


[Voltar ao Índice](#indice)

---


## <a name="parte18">18 - Seção 18: Projeto #03 - The Stock Trader </a>

301. Introdução do Projeto

302. Debugando Vuex com Vue Developer Tools

303. Configuração do Projeto

- [Secao-18-Projeto-03-The-Stock-Trader/stock-trader](Secao-18-Projeto-03-The-Stock-Trader/stock-trader)

304. Criando os Primeiros Componentes

305. Configurando as Rotas do Projeto

306. Adicionando Cabeçalho e Navegação

307. Criando o Componente de Ações (Stocks)

308. Adicionando o Botão Comprar

309. Configurando o Vuex no Projeto

310. Adicionando o Módulo Portfolio ao Vuex

311. Trabalhando com Ações do Portfolio

312. Conectando o Portfolio ao Vuex

313. Exibindo o Saldo

314. Adicionando Validações

315. Aplicando Filtro de Valor Monetário no Saldo

316. Finalizando Dia - Alterando Preço das Ações

317. Animando a Transição de Rotas

318. Configurando Axios & Firebase

319. Salvando Dados (Requisição PUT)

320. Obtendo Dados (Requisição GET)

321. Conclusão do Módulo

322. Recursos do Módulo & Links Úteis


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

