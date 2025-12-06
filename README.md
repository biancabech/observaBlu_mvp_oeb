# 📊 **ObservaBlu — MVP do Observatório de Desenvolvimento Econômico de Blumenau**

Projeto desenvolvido durante o **Hackathon +Devs2Blu 2025**, com foco em criar um **portal unificado de indicadores econômicos**, reunindo informações dispersas em diversas fontes (IBGE, Prefeitura, CAGED, Receita Federal, etc.).

Este MVP utiliza **Angular 20** e **JSONs mockados** como substitutos temporários da API final.

---

## 🚀 **Tecnologias Utilizadas**

### **Front-end**

* Angular 20
* TypeScript
* TailwindCSS
* RxJS
* Angular Router
* Angular Reactive Forms

### **Mock de dados**

* Arquivos JSON em `src/assets/data/`
* Serviço Angular (`DataService`) para leitura dos mockups

---

## 📂 **Estrutura do Projeto**

```
observaBlu_mvp_oeb/
│
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── dashboard/
│   │   │   ├── filter/
│   │   │   ├── empresas/
│   │   │   │   ├── empresas.ts
│   │   │   │   ├── empresas.html
│   │   │   │   └── empresas.css (se aplicável)
│   │   ├── services/
│   │   │   └── data.ts
│   │   └── app.routes.ts
│   │
│   ├── Mock-db/
│   │       ├── empresas.json
│   │       ├── empregos.json
│   │       └── indicadores.json
│   │
│   ├── main.ts
│   ├── styles.css
│   └── index.html
│
├── angular.json
├── package.json
└── README.md
```

---

## 📦 **Como rodar o projeto**

### 1️⃣ Instalar dependências

```bash
npm install
```

### 2️⃣ Iniciar servidor local

```bash
ng serve
```

O projeto iniciará em:

```
http://localhost:4200/
```

---

## 📁 **Mock de Dados**

Os arquivos JSON utilizados temporariamente como fonte de dados estão em:

```
src/mock-db
```

* `empresas.json`
* `empregos.json`
* `indicadores.json`

O `DataService` centraliza o acesso aos dados:

```ts
getEmpresas() {
  return this.http.get<any>('assets/data/empresas.json');
}
```

---

## 🔍 **Funcionalidades do MVP**

### ✔ Dashboard inicial

Exibe dados gerais carregados dos mocks.

### ✔ Tela de empresas

* Busca textual
* Filtros numéricos
* Filtro por percentual
* Listagem dinâmica
* Tudo usando Reactive Forms e debounce

### ✔ Organização modular por páginas

Roteamento configurado em:

```
app.routes.ts
```

### ✔ Design responsivo com TailwindCSS

---

## 🧠 **Decisões de Arquitetura**

* Uso de JSONs mockados para permitir conclusão do MVP no tempo do Hackathon
* Arquitetura simples de serviços e páginas independentes
* Layout limpo focado na exibição de dados
* Angular 20 (standalone components + router + reactive forms)

---

## 📅 **Próximos Passos**

* Criar backend Spring Boot real consumindo APIs públicas
* Substituir JSON mock por endpoints reais
* Implementar agregação automática de dados
* Criar gráficos com bibliotecas (ng-apexcharts, ngx-echarts, charts.js)
* Autenticação e níveis de acesso
* Exportação de relatórios em PDF/Excel

---

## 👥 **Equipe ObservaBlu**

Projeto da equipe **ObservaBlu**, desafio 13 do Hackathon.

---

## 📝 Licença

Uso acadêmico e demonstrativo para o Hackathon +Devs2Blu.

---
