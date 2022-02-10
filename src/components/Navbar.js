import React from "react";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;

  display: flex;
  align-items : center
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Languege = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h2`
  font-weight: bold;
  font-size: 25px;
  text-align: center;
`;

const MenuItem = styled.div` 

font-size : 14px
cursor : pointer;
margin-left : 20px
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Languege>EN</Languege>
            <SearchContainer>
              <Input /> <Search style={{ color: "grey", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>Nicksy.</Logo>
          </Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>
              {" "}
              <Badge badgeContent={4} color="success">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
