import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px auto;
  display: flex;
`;

export const Content = styled.div`
  background: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 323px;
  width: 270px;
  border-radius: 3px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }

  &::before {
    content: '';
    background: #0e346a;
    position: absolute;
    top: 0;
    width: 100%;
    height: 10px;
    border-radius: 3px 3px 0px 0px;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-decoration: none;
    height: 100%;
    width:100%;
  }

  img {
    width: 100%;
    height: 200px;
    box-shadow: 10px;
  }

  div {
    width: 100%;
    height: 100%;
    padding:20px;
    display: flex;
    flex-direction:column;
  }

  h1 {
      text-align: left;

      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #444444;
    }
    strong {
      text-align: left;
      margin-top: 5px;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #0e346a;
    }
    span {
      text-align: left;
      font-style: italic;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
      color: #0e346a;
    }
`;
