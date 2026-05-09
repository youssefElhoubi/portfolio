import { useEffect, useState } from 'react'

export function useTyping(text, speed = 115, startDelay = 350) {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    let index = 0
    let intervalId
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1
        setTypedText(text.slice(0, index))

        if (index >= text.length) {
          window.clearInterval(intervalId)
        }
      }, speed)
    }, startDelay)

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [text, speed, startDelay])

  return typedText
}