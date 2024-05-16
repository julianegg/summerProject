import React from 'react'

type Props = {title:string, number?: number}

export default function Button({title, number=5}: Props) {
  return (
    <div>
        Button:{title}
        Number:{number}
    </div>
  )
}