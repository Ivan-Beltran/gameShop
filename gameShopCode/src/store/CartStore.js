import { ref } from "vue"

export const cart = ref(JSON.parse(localStorage.getItem("cart")) || [])

export function addToCart(product) {
  cart.value.push(product)
  localStorage.setItem("cart", JSON.stringify(cart.value))
}

export function removeFromCart(name) {
  cart.value = cart.value.filter(p => p.name !== name)
  localStorage.setItem("cart", JSON.stringify(cart.value))
}
