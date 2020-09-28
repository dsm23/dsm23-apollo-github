import tw, { styled } from 'twin.macro';

interface Props {
  isGrey: boolean;
}

const TableRow = styled.tr<Props>`
  ${({ isGrey }) => (isGrey ? tw`bg-gray-50` : tw`bg-white`)}
`;

export default TableRow;
