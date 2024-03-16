import styled from "styled-components";
import * as React from 'react';
import { Header, AppNameComponent, SearchComponent} from './components/headerComponent';
import { Container, RecipeListContainer, RecipeContainer, RecipeName, IngredientsText, CompleteRecipe, CoverImage } from './components/recipeComponent';
import './App.css';
import { useState,useEffect } from "react";
import Axios from "axios";
import { Search } from './components/Search';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const APP_ID = "e45618e6";
const APP_KEY = "a30c7a1dcbb2d6fea20f418531d75237";

const CompleteRecipeText = styled.span`
  cursor: pointer;
`;
const App = () => {
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchRecipe = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    updateRecipeList(response.data.hits);
  };

  useEffect(() => {
    if (searchTerm) {
      clearTimeout(timeoutId);
      const timeout = setTimeout(() => fetchRecipe(searchTerm), 500);
      updateTimeoutId(timeout);
    }
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Container>
      <Header>
        <AppNameComponent>Find Your Taste</AppNameComponent>
        <SearchComponent>
          <Search onSearch={handleSearch} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length > 0 && recipeList.map((recipeObj, index) => (
          <RecipeComponent key={index} recipeObj={recipeObj.recipe} />
        ))}
      </RecipeListContainer>
    </Container>
  );
};

const RecipeComponent = ({ recipeObj }) => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <RecipeContainer>
        <CoverImage src={recipeObj.image} />
        <RecipeName>{recipeObj.label}</RecipeName>
        <IngredientsText onClick={() => setShow(true)}>Ingredients</IngredientsText>
        <CompleteRecipe onClick={() => window.open(recipeObj.url)}>Complete Recipe</CompleteRecipe>
      </RecipeContainer>

      <Dialog open={show}>
        <DialogTitle id="customized-dialog-title">Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {recipeObj.ingredients.map((ingredientObj, index) => (
                <tr key={index}>
                  <td>{ingredientObj.text}</td>
                  <td>{ingredientObj.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <CompleteRecipeText onClick={() => setShow(false)}>Close</CompleteRecipeText>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default App;