import React from 'react'

import PropTypes from 'prop-types'

import './test.css'

const Test = (props) => {
  return (
    <div className={`test-container ${props.rootClassName} `}>
      <img alt={props.image_alt} src={props.image_src} className="test-image" />
    </div>
  )
}

Test.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Test.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default Test
