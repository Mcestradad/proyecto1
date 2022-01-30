const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#trucazo')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      $buttonMailto.setAttribute('href', `mailto:juan.galeanoh@upb.edu.co?subject=Nombre: ${form.get('name')} , Correo: ${form.get('email')}&body=${form.get('message')}`)
      $buttonMailto.click()
    }