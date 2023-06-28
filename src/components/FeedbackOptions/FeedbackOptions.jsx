import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <> 
    

   {/* // mapowanie elem tablicy */}
    {options.map((name, index) => {
     const capitalized = name.charAt(0).toUpperCase() + name.slice(1);

      return (
        <div>
          <button
            type="button"
            onClick={onLeaveFeedback}
            name={name}
            key={index}
            className={css.button}
          >
            {capitalized}
          </button>
        </div>
      );
    })}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
