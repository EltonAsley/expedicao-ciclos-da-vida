const NOME_ABA = 'Respostas';

function doGet() {
  return ContentService.createTextOutput('Expedição Ciclos da Vida: API ativa')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    if (p.acao !== 'salvar') return json_({ok:false, mensagem:'Ação inválida.'});
    const d = JSON.parse(p.dados || '{}');
    if (!String(d.nome || '').trim() || !String(d.turma || '').trim()) {
      return json_({ok:false, mensagem:'Nome e turma são obrigatórios.'});
    }

    const id = PropertiesService.getScriptProperties().getProperty('PLANILHA_ID');
    if (!id) throw new Error('Configure a propriedade PLANILHA_ID nas configurações do projeto.');
    const ss = SpreadsheetApp.openById(id);
    let sh = ss.getSheetByName(NOME_ABA);
    if (!sh) {
      sh = ss.insertSheet(NOME_ABA);
      sh.appendRow(['Data de envio','Nome','Turma','Pontuação','Questões corretas','Etapas concluídas','Respostas objetivas (JSON)','Respostas abertas (JSON)','Versão']);
      sh.setFrozenRows(1);
    }

    sh.appendRow([
      new Date(), String(d.nome).slice(0,160), String(d.turma).slice(0,80),
      Number(d.pontuacao || 0), Number(d.questoesCorretas || 0),
      JSON.stringify(d.etapasConcluidas || []), JSON.stringify(d.respostasObjetivas || {}),
      JSON.stringify(d.respostasAbertas || {}), String(d.versao || '')
    ]);
    return json_({ok:true});
  } catch (err) {
    return json_({ok:false, mensagem:String(err && err.message || err)});
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
