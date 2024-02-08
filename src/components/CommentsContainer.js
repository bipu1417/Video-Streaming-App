import React from 'react';
import CommentList from './CommentList';

const commentsData = [
  {
    name: "Biplab Mahato",
    text: "Lorem ipsum dolor sit amnt, consectur adip",
    replies: [
      {
        name: "Biplab Mahato",
        text: "Lorem ipsum dolor sit amnt, consectur adip",
        replies: [

        ]
      }
    ],
  },
  {
    name: "Biplab Mahato",
    text: "Lorem ipsum dolor sit amnt, consectur adip",
    replies: [
      {
        name: "Biplab Mahato",
        text: "Lorem ipsum dolor sit amnt, consectur adip",
        replies: [
      {
        name: "Biplab Mahato",
        text: "Lorem ipsum dolor sit amnt, consectur adip",
        replies: [
      {
        name: "Biplab Mahato",
        text: "Lorem ipsum dolor sit amnt, consectur adip",
        replies: [

    ]
      }

    ]
      }
    ]
      }
    ]
  },
  {
    name: "Biplab Mahato",
    text: "Lorem ipsum dolor sit amnt, consectur adip",
    replies: [
      
    ]
  },
  {
    name: "Biplab Mahato",
    text: "Lorem ipsum dolor sit amnt, consectur adip",
    replies: [
      
    ]
  },
  {
    name: "Biplab Mahato",
    text: "Lorem ipsum dolor sit amnt, consectur adip",
    replies: [
      
    ]
  },
];

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-xl font-bold'>Comment:</h1>
      <CommentList comments={commentsData} />
    </div>
  )
};

export default CommentsContainer;