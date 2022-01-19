import PropTypes from 'prop-types'

export default function Statistics({title, children}) {
  return (
    <Statistics>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </Statistics>)
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};