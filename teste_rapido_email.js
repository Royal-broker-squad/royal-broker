// Teste rápido da validação de email
console.log('🧪 Testando validação de email...\n');

// Emails inválidos mencionados no bug
const emailsInvalidos = ['mm', 'bbb', 'kadujbsb'];

// Emails válidos para comparação
const emailsValidos = ['usuario@dominio.com', 'teste@empresa.com.br'];

console.log('📧 Testando emails INVÁLIDOS (devem ser rejeitados):');
emailsInvalidos.forEach(email => {
  try {
    const resultado = validarEmail(email);
    console.log(`  ${email}: ${resultado.valido ? '✅ VÁLIDO' : '❌ INVÁLIDO'} - ${resultado.mensagem}`);
  } catch (error) {
    console.log(`  ${email}: ❌ ERRO - ${error.message}`);
  }
});

console.log('\n📧 Testando emails VÁLIDOS (devem ser aprovados):');
emailsValidos.forEach(email => {
  try {
    const resultado = validarEmail(email);
    console.log(`  ${email}: ${resultado.valido ? '✅ VÁLIDO' : '❌ INVÁLIDO'} - ${resultado.mensagem}`);
  } catch (error) {
    console.log(`  ${email}: ❌ ERRO - ${error.message}`);
  }
});

console.log('\n🎯 Resultado esperado:');
console.log('  - Emails inválidos (mm, bbb, kadujbsb) devem ser REJEITADOS');
console.log('  - Apenas emails .com ou .com.br devem ser APROVADOS');
console.log('  - Qualquer outro formato deve ser REJEITADO');

// Teste adicional com outros formatos inválidos
console.log('\n🔍 Teste adicional com outros formatos:');
const outrosTestes = [
  'usuario@dominio.org',
  'usuario@dominio.net',
  'usuario@dominio.com.extra',
  'usuario@dominio.com.br.extra',
  'teste',
  'usuario@',
  '@dominio.com'
];

outrosTestes.forEach(email => {
  try {
    const resultado = validarEmail(email);
    console.log(`  ${email}: ${resultado.valido ? '✅ VÁLIDO' : '❌ INVÁLIDO'} - ${resultado.mensagem}`);
  } catch (error) {
    console.log(`  ${email}: ❌ ERRO - ${error.message}`);
  }
});

console.log('\n✅ Teste concluído!');
