//Sistema para gerar um relatório a partir de seleções no front-end
//Uso de array

const FormaContato = {
    Phone: 'Cliente entrou em contato via telefone, ',
    ChatOnline: 'Cliente entrou em contato via chat, '
}

const { Phone, ChatOnline } = FormaContato

const demanda = {
    adminstrativo: {
        AlterarDataPagamento: 'solicitou a alteração da data fixa do pagamento. Favor proceder com a solicitação.',
    },
    financeiro: {
        SegundaVia: 'solicitando 2º via de fatura.',
        Renegociacao: 'solicitando renegociação dos titulos em aberto.',
        InsufucienciaFundos: 'verificado que o débito em conta não ocorreu por insuficiência de fundos. Favor proceder com nova remessa bancária para efetuar o débito em conta da fatura do cliente.',
        BaixaFatura: ' título ainda se mostra em aberto no sistema, cliente informou que o pagamento já foi realizado, necessário realizar baixa na fatura. Cliente vai encaminhar o comprovante de pagamento para ser anexado no cadastro.',
        PagamentoDuplicado: 'informou que realizou duas vezes o pagamento de uma mesma fatura. Comprovantes de pagamento serão encaminhados para o email testes@testes.com.br. Favor proceder com a demanda.',
        CobrancaIndevida: 'informou que a cobrança em aberto está em desacordo com o valor pago todo mês, solicita verificação do valor da fatura mensal.',
        EmisaoNF: ' solicitou o envio de nota fiscal do serviço. Nota fiscal não foi localizada, favor emitir nota e encaminhar para o cliente.'

    },
    comercial: {}

}

const {
    adminstrativo: {
        AlterarDataPagamento
    },
    financeiro: {
        SegundaVia,
        Renegociacao,
        InsufucienciaFundos,
        BaixaFatura,
        PagamentoDuplicado,
        CobrancaIndevida,
        EmisaoNF
    }

} = demanda

//console.log(Phone + SegundaVia)


function FormaDeContato() {
    var Contato = document.getElementById('SelectContato')
    if (Contato.value === 'Telefone') {
        alert('Ligou')

    } else if (Contato.value === 'ChatOnline') {
        alert('Chatt')
    } else {
        alert('Selecione uma Opção válida')
    }
}