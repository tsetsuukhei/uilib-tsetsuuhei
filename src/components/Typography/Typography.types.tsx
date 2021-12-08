import { ReactNode } from "react";

export type HeadingProps = {
	children: ReactNode;
	el: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	className?: string;
	style?: React.CSSProperties;
};

export type TextProps = {
	children: ReactNode;
	el: "p1" | "p2" | "p3";
	className?: string;
	style?: React.CSSProperties;
};
