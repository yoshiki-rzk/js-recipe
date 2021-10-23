const memo = document.getElementById("memo-container")
const memoinput = document.getElementById("memo-input")
const button1 = document.getElementById("add-button")

//console.dir(memoinput.textContent)

button1.onclick = function() {
  console.log(memoinput.value)
  const card = document.createElement("div")

  card.textContent = memoinput.value

  const btn = document.createElement("button")
  memo.append(card)
  card.append(btn)

  btn.innerHTML = "削除"
  btn.setAttribute("onclick", "pushButton()")
  memoinput.value = null

  btn.onclick = function() {
    card.textContent = ""
    btn.remove()
    card.remove()
  }
}
