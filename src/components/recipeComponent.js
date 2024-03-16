import styled from "styled-components";

export const Container=styled.div`
display:flex;
flex-direction:column;
`;

export const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
`;

export const  RecipeListContainer=styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
gap:30px;
flex-wrap:wrap;
`;

export const RecipeContainer=styled.div`
  display:flex;
  flex-direction:column;
  padding:20px;
  width:300px;
  box-shadow:0 3px 10px 3px grey;
  
`;
export const RecipeName=styled.div`
  font-size:18px;
  font-weight:bold;
  color:black;
  margin:10px;
`;

export const IngredientsText=styled.div`
  font-size:18px;
  border:solid 1px brown;
  margin:3px 0;
  cursor:pointer;
  padding:10px 15px;
  border-radius:4px;
  color:brown;
  text-align:center;
`;

export const CompleteRecipe=styled(IngredientsText)`
color: #eb3300;
font-size: 18px;
text-align: center;
border: solid 1px #eb3300;
border-radius: 3px;
padding: 10px 15px;
cursor: pointer;
`;