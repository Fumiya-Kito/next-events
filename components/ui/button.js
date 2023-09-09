import Link from "next/link";

import classes from './button.module.css'

function Button(props) {
  // Next < v13では aタグを追加してそれにスタイリングを適用する必要がある
  return (
    <Link href={props.link} className={classes.btn}>
      {props.children}
    </Link>
  );
}

export default Button;