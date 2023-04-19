import { Navigate, StyledLink } from './NavBar.styled';

export const Navigation = () => {
  return (
    <Navigate>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="movies">Movies</StyledLink>
    </Navigate>
  );
};
