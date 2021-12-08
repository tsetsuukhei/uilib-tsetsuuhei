import React from "react";
import { TextProps } from "./Typography.types";
import styles from "./Text.module.css";

export default function Text({ className, el, style, children }: TextProps) {
	let classes = [styles.text];

	if (className) {
		classes.push(className);
	}

	if (el === "p1") {
		classes.push(styles["p1"]);
	}

	if (el === "p2") {
		classes.push(styles["p2"]);
	}

	if (el === "p3") {
		classes.push(styles["p3"]);
	}

	return (
		<p style={style} className={classes.join(" ")}>
			{children}
		</p>
	);
}
