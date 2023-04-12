navigator.geolocation.getCurrentPosition(success,error)

function success(position){
  const lat = position.coords.latitude //위도
  const lon = position.coords.longitude //경도
  const API_KEY =window.env.API_KEY
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(URL)
  .then(res=>res.json())
  .then(data=>{
    const city = document.querySelector('.city')
    const weather = document.querySelector('.weather')
    city.innerText = '/'+data.name
    weather.innerText = data.main.temp.toFixed(0)+'°C'
   //아이콘 넣기
    const icon = data.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
    const iconImg = document.createElement('img')
    iconImg.setAttribute('src',iconUrl)
    const iconContainer = document.querySelector('.icon')
    iconContainer.appendChild(iconImg)
  })

}
function error(){
  alert('위치 액세스를 허용하시면, 날씨를 알려드립니다😊')
}