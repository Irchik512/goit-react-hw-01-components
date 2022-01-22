import PropTypes from 'prop-types'
import { Section, Title} from './Statistics.styled'

export default function Statistics({title, children}) {
  return (
    <Section>
      {title && <Title className="title">{title}</Title>}
      {children}
    </Section>)
};

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};