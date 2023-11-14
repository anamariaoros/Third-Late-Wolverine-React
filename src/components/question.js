import React from 'react'

import PropTypes from 'prop-types'

import './question.css'

const Question = (props) => {
  return (
    <div className={`question-container ${props.rootClassName} `}>
      <span className="question-text heading4">{props.Question}</span>
      <span className="question-text1">{props.Answer}</span>
    </div>
  )
}

Question.defaultProps = {
  Answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  Question: 'What types of cars do you sell?',
  rootClassName: '',
}

Question.propTypes = {
  Answer: PropTypes.string,
  Question: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Question
