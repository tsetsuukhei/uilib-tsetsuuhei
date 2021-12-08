import React from "react";

import { HeadingProps } from "./Typography.types";
import styles from "./Heading.module.css";

export default function Heading({
	el,
	children,
	style,
	className,
}: HeadingProps) {
	const Component = el;
	let classes = [styles.heading];

	if (className) {
		classes.push(className);
	}

	return (
		<Component style={style} className={classes.join(" ")}>
			{children}
		</Component>
	);
}
