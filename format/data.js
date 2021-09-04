function data(all) {
	var hora = all.getHours()
	var minuto = all.getMinutes()
	var segundo = all.getSeconds()

  if(hora < 10) {
		hora = "0"+hora
	}
  if(minuto < 10) {
		minuto = "0"+minuto
	}
	if(segundo < 10) {
		segundo = "0"+segundo
	}

	var ano = all.getFullYear()
	var mes = all.getMonth() +1
	var dia = all.getDay()

	if(ano < 10) {
		ano = "0"+ano
	}
  if(mes < 10) {
		mes = "0"+mes
	}
  if(dia < 10) {
		dia = "0"+dia
	}

	return `${dia}-${mes}-${ano} As ${hora}:${minuto}:${segundo}`
}

module.exports = data