import { styled } from 'styled-components';

export const StyledButton = styled.button`
	border-radius: 5px;
	border: 1px solid var(--vos-purple);
	padding: 0.5em 1em;
	background-color: var(--vos-purple);
	color: var(--vos-white);
	&.secondary {
		background-color: var(--vos-light-purple);
		color: var(--vos-black);
	}
`;
