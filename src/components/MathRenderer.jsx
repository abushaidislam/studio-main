'use client'

import { useEffect, useRef, useState } from 'react'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export function MathRenderer({ math, block = false }) {
  const ref = useRef(null)
  const [html, setHtml] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!math) return

    try {
      const rendered = katex.renderToString(math, {
        throwOnError: false,
        displayMode: block,
        strict: false,
        trust: true,
      })
      setHtml(rendered)
      setError(null)
    } catch (err) {
      console.error('KaTeX render error:', err)
      setError(err.message)
    }
  }, [math, block])

  if (error) {
    return (
      <span className="text-red-500 text-sm">
        Math error: {error}
      </span>
    )
  }

  if (block) {
    return (
      <div 
        className="my-6 py-4 px-4 bg-neutral-50 rounded-lg overflow-x-auto flex justify-center"
        style={{ color: '#1a1a1a' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }

  return (
    <span 
      style={{ color: '#1a1a1a' }}
      dangerouslySetInnerHTML={{ __html: html }}
      className="inline"
    />
  )
}
