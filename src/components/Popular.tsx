import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Popular: React.FC = () => {
  const [popular, setPopular] = useState<any[]>([]);

  const getPopular = async () => {
    const api = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = api.data;
    setPopular(data.recipes);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <Wrapper>
      {popular.map(recipe => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Popular;

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
