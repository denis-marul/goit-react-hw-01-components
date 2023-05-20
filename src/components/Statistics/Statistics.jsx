import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { Stat } from './Stat';

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(stat => (
           
            <Stat
            key={stat.id}
            label={stat.label}
            percentage = {stat.percentage}
          />
        
      
        ))}
       
  </ul>
</section>
}

Statistics.protoTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    })),    
}