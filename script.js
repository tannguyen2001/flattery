if(screen.width>1024){
      var question = document.querySelector('.question')
      var no = document.querySelector('.no')
      no.onclick = function moveHover(){
            const i = Math.floor(Math.random()*1000) + 1
            const j = 490 + Math.floor(Math.random()*100) + 1
            question.style.left = i + 'px'
            question.style.top = j + 'px'
      }

      var thanks = document.querySelector('.thanks')

      var yes = document.querySelector('.yes').onclick = function(){
            thanks.classList.add('block')
      }

      document.querySelector('.btn-1').onclick = function(){
            question.classList.add('block')
      }
}
else if(screen.width<739){
      var question = document.querySelector('.question')
      var no = document.querySelector('.no')
      no.onclick = function moveHover(){
            const i = Math.floor(Math.random()*50) + 1
            const j = 300 + Math.floor(Math.random()*100) + 1
            question.style.left = i + 'px'
            question.style.top = j + 'px'
      }

      var thanks = document.querySelector('.thanks')

      var yes = document.querySelector('.yes').onclick = function(){
            thanks.classList.add('block')
      }

      document.querySelector('.btn-1').onclick = function(){
            question.classList.add('block')
            document.querySelector('.message-text').classList.add('block')
      }
}