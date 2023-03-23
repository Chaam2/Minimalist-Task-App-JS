const lunch = [
  {
    menu:'로제떡볶이',
    brand:'배떡, 배달',
  },
  {
    menu:'허니콤보',
    brand:'교촌치킨, 배달',
  },
  {
    menu:'에비텐동',
    brand:'에도마에텐동, 종각',
  },
  {
    menu:'카라이 미소라멘 + 계란추가',
    brand:'초이라멘, 동대문',
  },
  {
    menu:'차돌 양지 쌀국수',
    brand:'미분당',
  },
  {
    menu:'차돌박이 쭈꾸미',
    brand:'쭈꾸미랩소디, 강남',
  },
  {
    menu:'육회 연어 비빔밥',
    brand:'육회연어하우스',
  },
  {
    menu:'꿔바로우',
    brand:'샤오바오우육면',
  },
  {
    menu:'순살 콘소메이징',
    brand:'푸라닭',
  },
  {
    menu:'슈비버거',
    brand:'맥도날드',
  },
]

const menu = document.querySelector('#lunch span:first-child')
const brand = document.querySelector('#lunch span:last-child')

const todaysLunch = lunch[Math.floor(Math.random()*lunch.length)]

menu.innerText = todaysLunch.menu
brand.innerText = todaysLunch.brand