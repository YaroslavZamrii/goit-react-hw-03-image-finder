import { ButtonLoad } from './Button.styled';

function Button({ onClick }) {
  return (
    <ButtonLoad type="button" onClick={onClick}>
      Load more
    </ButtonLoad>
  );
}

export default Button;
