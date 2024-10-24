import { Investimento } from "../models/investimento";

export const InvestimentoMock : Investimento[] = [
    {
        nome: 'Sistema Aquaviário',
        unidade: '35101 - SEMOBI',
        planoOrcamentario: 1676,
        previsto: 34569423,
        homologado: 20769423,
        autorizado: 34569423,
        disponivel: 34569423,
        descricao: 'Contratação de empresa especializada em serviços de engenharia para construção dos quatro novos pontos de embarque e desembarque de passageiros',
        areaTematica: 'Infraestrutura'
    },{
        nome: 'Integra ES',
        unidade: '22101 - SEFAZ',
        planoOrcamentario: 1703,
        previsto: 12430971.1,
        homologado: 8320456,
        autorizado: 34569423,
        disponivel: 34569423,
        descricao: 'Sistema online para compartilhamentos de informações fiscais com os Municipios',
        areaTematica: 'Gestão Pública Inovadora'
    },{
        nome: 'Gerenciamento de Barragens',
        unidade: '31101 - SEAG',
        planoOrcamentario: 2389,
        previsto: 21111600,
        homologado: 11563582,
        autorizado: 34569423,
        disponivel: 34569423,
        descricao: 'Contratação de empresa de Supervisão com o objetivo de apoio à Gerência de Infraestrutura e Obras Rurais - GIOR/SUBINF/SEAG-ES',
        areaTematica: 'Agricultura e Meio Ambiente'
    },{
        nome: 'Restauração do Antigo Arquivo Público',
        unidade: '40101 - SECULT',
        planoOrcamentario: 2236,
        previsto: 10100300,
        homologado: 10100300,
        autorizado: 34569423,
        disponivel: 34569423,
        descricao: 'Projeto exercutivo de restauração da nova sede da Galeria Homero Massena: Projetar  soluções de acessibilidadde, de modernização das instalações',
        areaTematica: 'Cultura, Turismo, Esporte e Lazer'
    }
]