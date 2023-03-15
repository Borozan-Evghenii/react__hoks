import React ,{ useRef } from 'react'
import { useHover } from '../hooks/useHover'

export default function Hover() {
  const target = useRef()
  const isHover = useHover(target)
  return (
    <div ref={target} style={{ width: 50, height: 50, backgroundColor: isHover? 'red': 'blue'}}>
    </div>
  )
}
