import React from 'react'

import { Helmet } from 'react-helmet'

import Question from '../components/question'
import './testing.css'

const Testing = (props) => {
  return (
    <div className="testing-container">
      <Helmet>
        <title>Testing - Third Late Wolverine</title>
        <meta property="og:title" content="Testing - Third Late Wolverine" />
      </Helmet>
      <Question rootClassName="question-root-class-name"></Question>
    </div>
  )
}

export default Testing
