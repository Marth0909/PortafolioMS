document.addEventListener('DOMContentLoaded', function () {
    const changeMode = document.querySelector('#toggleModeBtn')
    const modeText = document.querySelector('#modeText');
  
    //boton de camnbio de tema
  
    const body = document.querySelector('body')
    //seleccion del body
  
  
    changeMode.addEventListener('click', function () {
      // console.log('estas intentando cambiar el modo?');
  
      const currentMode = changeMode.textContent.trim()
      // console.log(currentMode);
  
      if (currentMode === 'light_mode') {
        changeMode.textContent = 'dark_mode';
        body.classList.remove('body--dark')
      } else {
        changeMode.textContent = 'light_mode';
        body.classList.add('body--dark')
      }
  
    });

    

})