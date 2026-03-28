import Image from 'next/image'
 
function CustomImage(props) {
  return <Image {...props} alt={props.alt || ''} />
}
 
export function useMDXComponents(components) {
  return {
    img: CustomImage,
    ...components,
  }
}
