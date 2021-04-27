import { Container, CssBaseline } from "@material-ui/core";

import { GSAppBar } from "layouts/components";

export const MainLayout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <GSAppBar />
      <Container maxWidth="md">
        {children}
      </Container>
    </>
  );
};
