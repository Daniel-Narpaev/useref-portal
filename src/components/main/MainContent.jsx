import React from 'react'
import Content from '../content/Content'

const MainContent = ({movies, deleteHandler, onShowModal}) => {
  return (
    <div>
      {movies.map((el) => {
        return(
        <Content key={el.id}
            title={el.title}
            image={el.image}
            rating={el.rating}
            id={el.id}
            deleteHandler={deleteHandler}
            onShowModal={onShowModal}/>
            )
      })}
    </div>
  )
}

export default MainContent