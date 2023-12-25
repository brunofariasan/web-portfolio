import React from "react";
import { LinkTextContainer, TextContainer } from "./styles";
import { TextProps } from "./types";

const Text = ({
	variant = "title-banner",
	richText = false,
	color,
	text,
	component = "p",
	link,
	children,
	...rest
}: TextProps) => {
	if (link) {
		return (
			<LinkTextContainer href={link}>
				<TextContainer
					color={color}
					variant={variant}
					component={component}
					{...rest}
				>
					{children ? children : richText }
				</TextContainer>
			</LinkTextContainer>
		);
	}
	return (
		<TextContainer
			color={color}
			variant={variant}
			component={component}
			{...rest}
		>
			{children ? children : richText && text}
		</TextContainer>
	);
};

export default Text;
