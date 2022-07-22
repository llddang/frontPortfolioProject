import React, { useState } from 'react'

//local
import './project.css'
import './Bproject.css'

const Bproject = () => {
  const [isPaused, setIsPaused] = useState(false)

  const stopAnimation = e => {
    if (!isPaused) {
      for (let i of document.getElementById('Ani2').children) {
        i.style.animationPlayState = 'paused'
      }
    } else {
      for (let i of document.getElementById('Ani2').children) {
        i.style.animationPlayState = 'running'
      }
    }
    setIsPaused(!isPaused)
  }
  return (
    <>
      <div class="main">
        <div class="frame">
          <div class="content content2" id="Ani2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button class="stop" onClick={e => stopAnimation(e)}>
            {isPaused ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="description">
          9개의 정육면체 객체를 만들고, 중앙의 객체가 떠올랐다 가라앉는동안
          나머지 8개의 객체가 각자 <strong>딜레이</strong>를 가지고 낮게
          떠올랐다 가라앉는 로딩 애니메이션
        </div>
      </div>
    </>
  )
}

export default Bproject
