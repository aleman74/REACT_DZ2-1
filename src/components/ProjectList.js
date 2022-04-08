import React from 'react'
import PropTypes from 'prop-types'


function ProjectList(props) {
    const view_projects = props.view_projects;
//    console.log('ProjectList view_projects = ' + view_projects);

    // Определяем кол-во картинок в столбце
    let count1 = Math.ceil(view_projects.length / 3);
    console.log('ProjectList  view_projects.length = ' + view_projects.length + '    count1 = ' + count1);


    return (
        <table>
            <tbody>
            <tr>
                <td>
                    {view_projects.filter((o, index) => index < count1).map((o, index) => <img key={index} src= {o.img} />)}
                </td>
                <td>
                    {view_projects.filter((o, index) => index >= count1 && index < count1 * 2).map((o, index) => <img key={index} src= {o.img} />)}
                </td>
                <td>
                    {view_projects.filter((o, index) => index >= count1 * 2).map((o, index) => <img key={index} src= {o.img} />)}
                </td>
            </tr>
            </tbody>
        </table>
    );
}

ProjectList.propTypes = {
    view_projects: PropTypes.array.isRequired
}

export default ProjectList;
