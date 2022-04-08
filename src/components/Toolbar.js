import React from 'react'
import PropTypes from 'prop-types'


function Toolbar(props) {
    const filter_name = props.selected;

    // Заглушки для функций, сами функции определяются в родительском компоненте
    const onClickButton = (evt, param_filter_name) => {
        console.log('Toolbar - onClick', 'param_filter_name = ' + param_filter_name);

        props.onSelectFilter(evt, param_filter_name);     // передаём текущий фильтр
    }

    return (
        <div>
            {props.filters.map((o, index) =>
                <button
                    key={index}
                    className={(o == filter_name) && 'btn-select'}
                    onClick={evt => onClickButton(evt, o)}
                >
                    {o}
                </button>)
            }
        </div>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
}

export default Toolbar;
