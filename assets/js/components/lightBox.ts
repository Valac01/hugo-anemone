const images = document.querySelectorAll(".lightbox__target") as NodeListOf<HTMLImageElement>
const post = document.querySelector(".post") as HTMLDivElement

const lightbox = document.createElement('div') as HTMLDivElement

const scaleAnimation = [
  {transform: "scale(0.9)"},
  {transform: "scale(1)"},
] as Keyframe[]

if (post) {
  lightbox.classList.add("lightbox")
  post.appendChild(lightbox)
}

images.forEach((image: HTMLImageElement) => {
  image.addEventListener("click", () => {
    const lightboxImage = document.createElement("img") as HTMLImageElement
    
    lightbox.dataset.visible = "true"
    
    lightboxImage.classList.add("lightbox__image");
    lightboxImage.src = image.src
    
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    
    lightbox.appendChild(lightboxImage);

    lightboxImage.animate( scaleAnimation, {
      duration: 120,
      easing: "ease-out"
    })
  })
})

lightbox.addEventListener("click", async (e: Event) => {
  if (e.target !== e.currentTarget) {
    return
  }
  
  const lightboxImage = lightbox.firstChild as HTMLImageElement
  
  lightboxImage.animate( scaleAnimation, {
    direction: "reverse",
    duration: 80,
    easing: "ease-out"
  })

  const animation = lightbox.animate( [
    {opacity: "1"},
    {opacity: "0"},
  ], {
    duration: 180,
    easing: "ease-out"
  })

  await animation.finished
  
  lightbox.dataset.visible = "false"
})