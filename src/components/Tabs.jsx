export function Tabs({ children, tabButtons, ButtonContainer="menu" }) {
  return (
    <>
      <ButtonContainer>{tabButtons}</ButtonContainer>
      {children}
    </>
  );
}
