const toast = document.querySelector("#toast") as HTMLDivElement 
let toastAnimation: Animation

export const showToast = (msg = "Default Info", isError = false) => {
  const content = toast.firstElementChild as HTMLDivElement
  const dismissBtn = toast.lastElementChild as HTMLDivElement
  content.innerText = msg
  if (isError) {
    toast.classList.add("toast--error")
  }
  dismissBtn.addEventListener("click", dismissToast)
  toastAnimation = toast.animate([
    { transform: 'translateY(-100%)' },
    { transform: 'translateY(0)'}
  ], {
    duration: 160,
    easing: 'ease-in-out'
  })
  
  toast.style.display = "block"
}

const dismissToast = async () => {
  toastAnimation.reverse()
  await toastAnimation.finished
  toast.style.display = "none"
}