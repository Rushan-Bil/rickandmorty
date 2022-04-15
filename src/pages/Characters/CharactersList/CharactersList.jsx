import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Pagination, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CharactersItem from '../CharactersItem/CharactersItem';
import { getCharacters, setCurrentPage, getNewCharacters } from '../../../redux/actions/characters';

const CharactersList = () => {

  const characters = useSelector(state => state.charactersReducer.characters);
  const data = useSelector(state => state.charactersReducer.data);
  const currentPage = useSelector(state => state.charactersReducer.currentPage);

  const [input, setInput] = useState('');
  const [statusInFilter, setStatusInFilter] = useState('');
  const [genderInFilter, setGenderInFilter] = useState('');

  const totalCharactersCount = data?.info?.count;
  const pagesCount = data?.info?.pages;
  const charactersPerPage = Math.ceil(totalCharactersCount / pagesCount);;

  const onChangeInput = (event) => {
    setInput(event.target.value);
    dispatch(getNewCharacters(1, event.target.value, statusInFilter, genderInFilter));
    dispatch(setCurrentPage(1));
  }

  const handleChangeStatus = (event) => {
    setStatusInFilter(event.target.value);
    dispatch(getNewCharacters(1, input, event.target.value, genderInFilter));
    dispatch(setCurrentPage(1));

  };

  const handleChangeGender = (event) => {
    setGenderInFilter(event.target.value);
    dispatch(getNewCharacters(1, input, statusInFilter, event.target.value));
    dispatch(setCurrentPage(1));
  };

  const onChangePagination = (event, val) => {
    dispatch(getNewCharacters(val, input, statusInFilter, genderInFilter));
    dispatch(setCurrentPage(val));
    window.scrollTo(0, 0);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <TextField id="outlined-basic" size="large" style={{ minWidth: '30vw', margin: '20px 3px 3px' }} label="Type to search by name" type="search" onChange={onChangeInput} variant="outlined" />

        <FormControl style={{ minWidth: '20vw', margin: '20px 3px 3px' }}>
          <InputLabel id="statusLabel">Status</InputLabel>
          <Select
            labelId="statusLabel"
            id="status"
            value={statusInFilter}
            label="Status"
            onChange={handleChangeStatus}
          >
            <MenuItem value={''} sx={{ color: "text.secondary" }}>No matter</MenuItem>
            <MenuItem value={'Alive'}>Alive</MenuItem>
            <MenuItem value={'Dead'}>Dead</MenuItem>
            <MenuItem value={'unknown'}>unknown</MenuItem>
          </Select>
        </FormControl>

        <FormControl style={{ minWidth: '20vw', margin: '20px 3px 3px' }}>
          <InputLabel id="genderLabel">Gender</InputLabel>
          <Select
            labelId="genderLabel"
            id="gender"
            value={genderInFilter}
            label="Gender"
            onChange={handleChangeGender}
          >
            <MenuItem value={''} sx={{ color: "text.secondary" }}>No matter</MenuItem>
            <MenuItem value={'Male'}>Male</MenuItem>
            <MenuItem value={'Female'}>Female</MenuItem>
            <MenuItem value={'Genderless'}>Genderless</MenuItem>
            <MenuItem value={'unknown'}>unknown</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
      }>
        {
          characters
            ?.map(el => <CharactersItem key={el.id} id={el.id} name={el.name} imageURL={el.image} status={el.status} gender={el.gender} species={el.species} />)}
      </Box >
      {(characters.length < 1) ? <div style={{ margin: '20px', color: 'gray' }}>...no results...</div> : totalCharactersCount > charactersPerPage && <Pagination sx={{ margin: 2 }} page={currentPage} count={pagesCount || 1} onChange={onChangePagination} color="primary" />}
    </Box >
  );
}

export default CharactersList;
