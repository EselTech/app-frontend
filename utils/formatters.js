function formatarData(data) {
    const d = new Date(data);
    const dia = String(d.getDate()).padStart(2, '0');
    const mes = String(d.getMonth() + 1).padStart(2, '0');
    const ano = d.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function formatarImposto(imp) {
    return `Data Registro: ${formatarData(imp.dataRegistro)} — Nome: ${imp.nomeImposto} — Valor: ${formatarValorImposto(imp)}`;
}

function formatarValorImposto(imp) {
    return (imp.valor * 100).toFixed(2) + '%';
}
