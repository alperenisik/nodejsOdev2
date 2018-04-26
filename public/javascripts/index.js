function sil(firstname) {
  fetch(`/sil/${firstname}`)
    .then(res => res.json())
    .then(({status}) => {
      if (status) {
        let row = document.getElementById(`${firstname}-row`)
        row.parentNode.removeChild(row)
      }
    })
    .catch(console.log)
}
