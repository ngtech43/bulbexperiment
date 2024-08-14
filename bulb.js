function buttonOn() {
    document.getElementById('my-image').src='image/pic_bulbon.gif'
    document.getElementById('indicator').innerHTML='Power On'
    document.getElementById('led-On').style.color='blue'
    document.getElementById('led-Off').style.color='black'
}
function buttonOff() {
     document.getElementById('my-image').src='image/pic_bulboff.gif' 
     document.getElementById('indicator').innerHTML='power Off'
     document.getElementById('led-Off').style.color='red'
     document.getElementById('led-On').style.color='black'
}