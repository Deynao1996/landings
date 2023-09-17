import { PROMO_DISCOUNT, PROMO_SECRET } from '../main'

const servicesObj = {
  'Select painting size': 'size',
  'Select painting material': 'material',
  'Additional services': 'services'
}
const defaultMessage =
  'To calculate, you need to select the size of the painting and the material of the painting'

function percentage(number, per) {
  return (number * per) / 100
}

export default function calculator({ formSelector } = {}) {
  const currentForm = document.querySelector(formSelector),
    selects = currentForm.querySelectorAll('select'),
    totalMessage = currentForm.querySelector('#calc-msg'),
    promoInput = currentForm.querySelector('input[type=text]')

  let totalObj = {
    size: null,
    material: null,
    services: null,
    discount: false
  }

  function setTotalObj(e) {
    const currentLabel = servicesObj[e.target.children[0].textContent]
    totalObj[currentLabel] = getPrice(e.target.value)
  }

  function setDiscount(e) {
    const value = e.target.value
    if (value.toLowerCase() === PROMO_SECRET) {
      totalObj.discount = true
      totalMessage.classList.add('text-primary', 'font-bold')
    } else {
      totalObj.discount = false
      totalMessage.classList.remove('text-primary', 'font-bold')
    }
  }

  function calcSum() {
    const { size, material, services, discount } = totalObj
    let sum = size + material + services
    if (discount) {
      const delta = percentage(sum, PROMO_DISCOUNT)
      sum -= delta
    }
    if (size && material) totalMessage.textContent = sum + ' UAH'
  }

  function getPrice(value) {
    switch (value) {
      case '40x50':
        return 5000
      case '50x70':
        return 10000
      case '70x70':
        return 15000
      case '70x100':
        return 20000
      case 'Fiber canvas':
        return 1000
      case 'Linen canvas':
        return 2000
      case 'Natural canvas':
        return 3000
      case 'Art gel coating':
        return 100
      case 'Express production':
        return 200
      case 'Delivery after finish':
        return 300
    }
  }

  function handleChange(e) {
    setTotalObj(e)
    calcSum()
  }

  function handleInput(e) {
    setDiscount(e)
    calcSum()
  }

  function handleSubmit() {
    totalMessage.classList.remove('text-primary')
    totalMessage.textContent = defaultMessage
  }

  selects.forEach((select) => {
    select.addEventListener('change', handleChange)
  })
  promoInput.addEventListener('input', handleInput)
  currentForm.addEventListener('submit', handleSubmit)
}
