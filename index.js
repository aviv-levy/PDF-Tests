let send = async () => {

    let img;
    await html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
        img = canvas.toDataURL("image/png");
    });
    console.log('clicked');
    fetch('http://localhost:3000/createPDF',{
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({myimg: img})
    })
}


let download = async () => {

    console.log('Download');
    await fetch('http://localhost:3000/downloadFile',{
        method:'GET'
    })
}