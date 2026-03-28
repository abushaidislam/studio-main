'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'strict',
  themeVariables: {
    primaryColor: '#74c0fc',
    primaryTextColor: '#1a1a1a',
    primaryBorderColor: '#495057',
    lineColor: '#495057',
    secondaryColor: '#69db7c',
    tertiaryColor: '#ffd43b',
    background: '#ffffff',
    mainBkg: '#ffffff',
    secondBkg: '#f8f9fa',
    tertiaryBkg: '#e9ecef',
  },
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis',
  },
  sequence: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    mirrorActors: true,
    bottomMarginAdj: 1,
    useMaxWidth: true,
    rightAngles: false,
    showSequenceNumbers: false,
  },
  gantt: {
    useMaxWidth: true,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    numberSectionStyles: 4,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    numberSectionStyles: 4,
    axisFormat: '%Y-%m-%d',
  },
  pie: {
    useMaxWidth: true,
    textPosition: 0.75,
  },
})

export function MermaidDiagram({ chart }) {
  const ref = useRef(null)
  const [svg, setSvg] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!chart || !ref.current) return

    const renderChart = async () => {
      try {
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
        const { svg } = await mermaid.render(id, chart)
        setSvg(svg)
        setError(null)
      } catch (err) {
        console.error('Mermaid render error:', err)
        setError(err.message)
      }
    }

    renderChart()
  }, [chart])

  if (error) {
    return (
      <div className="my-4 p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600 text-sm">Diagram render error: {error}</p>
        <pre className="mt-2 text-xs text-red-500 overflow-auto">{chart}</pre>
      </div>
    )
  }

  return (
    <div 
      ref={ref}
      className="my-6 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
      style={{ 
        minHeight: svg ? 'auto' : '100px',
      }}
    />
  )
}
