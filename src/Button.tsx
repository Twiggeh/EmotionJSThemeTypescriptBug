import React from 'react';
import styled from '@emotion/styled';
import { Theme } from '@emotion/react';

// Remove the intersection or the entire StyledProps from styled.a and Theme becomes empty object
type StyledProps = Pick<ButtonProps, 'bgColor' | 'fColor'> & { theme: Theme };

const StyledButton = styled.a<StyledProps>`
	${({ bgColor, fColor, theme }) =>
		`background-color: ${bgColor ? bgColor : theme.color.primary};
color: ${fColor};`}
`;

export interface ButtonProps {
	content: string;
	bgColor?: string;
	fColor?: string;
	type: HTMLButtonElement['type'];
	href: string;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({
	content = '',
	bgColor,
	fColor = 'white',
	onClick,
	type,
	href,
}) => {
	return (
		<StyledButton
			fColor={fColor}
			bgColor={bgColor}
			href={href}
			onClick={onClick}
			type={type}>
			{content}
		</StyledButton>
	);
};

export default Button;
