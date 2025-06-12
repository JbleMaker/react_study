/**@jsxImportSource @emotion/react */
import IndexHeader from "../IndexHeader/IndexHeader";
import * as s from "./styles";

function IndexLayout({
  filter,
  setFilter,
  searchText,
  setSearchText,
  children,
}) {
  return (
    <div css={s.layout}>
      <IndexHeader
        filter={filter}
        setFilter={setFilter}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      {children}
    </div>
  );
}

export default IndexLayout;
