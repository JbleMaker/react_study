/**@jsxImportSource @emotion/react */
import * as s from "./styles";

function RootLayout({ children }) {
  return <div css={s.layout}>{children}</div>;
}

export default RootLayout;
