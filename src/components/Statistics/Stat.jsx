import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Stat = ({ label, percentage }) => {
    return <li style={{ backgroundColor: getRandomHexColor() }} className={css.item}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>     
    </li>
}

Stat.protoTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}