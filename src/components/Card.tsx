import './Card.css'

const Card = (props: any) => {
  const className = 'card ' + props.className
  return (<div className={className}>{props.children}</div>)
}

export default Card