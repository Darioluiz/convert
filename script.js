const USD = 5.5
const EUR = 6.37
const GBP = 7.45

const form = document.querySelector('form')
const currency = document.getElementById('currency')
const amount = document.getElementById('amount')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

amount.addEventListener('input', () => {
  const notNumber = /\D+/g

  amount.value = amount.value.replace(notNumber, '')
})

form.onsubmit = event => {
  event.preventDefault()

  switch (currency.value) {
    case 'USD':
      convert(amount.value, USD, 'US$')
      break

    case 'EUR':
      convert(amount.value, EUR, '€')
      break

    case 'GBP':
      convert(amount.value, GBP, '£')
      break
  }
}

function convert(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrency(price)} `
    let total = amount * price

    result.textContent = `${formatCurrency(total).replace('R$', '')} Reais`

    footer.classList.add('show-result')
  } catch (error) {
    footer.classList.remove('show-result')
    alert('Não foi possivel converter. tente mais tarde.')
  }
}

function formatCurrency(value) {
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}
