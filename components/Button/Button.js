import Link from 'next/link';

export default function Button(props) {
  
  const style = props.size === 'large' ? 'btn--large btn--alter btn  cs--btn' : 'btn--primary btn  cs--btn';
  return (
    <Link href={props.to}>
      <a className={style}>{props.text}</a>
    </Link>
  )
}
