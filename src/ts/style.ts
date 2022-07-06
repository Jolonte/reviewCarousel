export function styleDOM(image: string, title: string, job: string, quote: string): void {
  const img = document.querySelector('.card__img') as HTMLDivElement
  const name = document.querySelector('#name') as HTMLParagraphElement
  const profession = document.querySelector('#job') as HTMLParagraphElement
  const message = document.querySelector('#message') as HTMLParagraphElement

  img.style.backgroundImage = `url('${image}')`
  name.textContent = title
  profession.textContent = job
  message.textContent = quote
}