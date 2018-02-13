function lookFor(section) {
    var element = document.getElementById("continuation");
    if (section == "personalData") {
        element.innerHTML = "<h2>Personal Data</h2><p>Brasileiro, solteiro, 21 anos.<br> Rua. Jose  Elias Junqueira <br> B. FREGUESIA  DO  Ó - SÃO PAULO - SP <br> CEP: 02972-070 <br> Fone(s): (11)99010-1418 <br> E-mail: victorshgo@outlook.com</p><h3>Objective</h3><p>Programador – Desenvolvedor – Suporte Técnico</p>";
    } else if (section == "academicEducation") {
        element.innerHTML = "<h2>Academic Education</h2><p>• Analise e Desenvolvimento  de Sistemas - 2º semestre - Faculdade Impacta.</p><h3>Additional Formation</h3><p>• Java e Orientação a Objetos - Caelum.<br>• Java para Desenvolvimento Web - Caelum.<br>• Lab. Java com Testes, JSF e Design Patterns - Caelum.<br>• Intro  to Computer  Science - Udacity.<br>• Desenvolvendo  Android - Udacity.<br>• Git e Github - School of Net</p>";
    } else if (section == "professionalExperience") {
        element.innerHTML = "<h2>Professional Experience</h2><p><b>Cargo: </b>Operador de computador<br><b>Empresa: </b>Floricultura Treze Rosas<br><b>Período: </b>mai de 2014 – set de 2017<br><b>Localidade: </b>São Paulo e Região, Brasil<br><b>Funções: </b>Venda de produtos, contabilização de estoque, recebimento de mercadorias, controle de caixa, backup semanal da base de dados e envio de relatório de acesso do site a cada 3 meses (Analytics).</p><p><b>Cargo: </b>Jovem Aprendiz<br><b>Empresa: </b>Scopus Tecnologia<br><b>Período: </b>ago de 2013 – abr de 2014<br><b>Localidade: </b>São Paulo e Região, Brasil<br><b>Funções: </b>Cálculos de impostos, revisão de notas fiscais para envio a prefeitura de São Paulo, manutenção de banco de dados via Access e SQL.</p>";
    } else if (section == "skills") {
        element.innerHTML = "<h2>Skills</h2><p>Inglês: Técnico.<br>Linguagens de Programação: Java, Python, C++(Arduino), JavaScript e PHP.<br>Banco de Dados: MySQL e SQL Server.<br>Outros: HTML e CSS.</p>";
    } else if (section == "professionalProfile") {
        element.innerHTML = "<h2>Professional Profile</h2><p>Colaborar com a empresa utilizando meus conhecimentos e experiência, comunicativo, responsável e concentrado nas atividades as quais são demandadas, fácil interação em equipe para fazer com que todos sigam alinhados nos objetivos traçados e possamos entregar o melhor resultado, busco novos desafios no mercado da tecnologia.</p>";
    }
}