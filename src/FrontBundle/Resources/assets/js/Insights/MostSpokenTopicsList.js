import React from 'react';
import Trend from 'react-trend';

class MostSpokenTopicsList extends React.Component {
    constructor() {
        super();
        this.trends = [
            {name:'Crema Solar', data:[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]},
            {name:'Crema hidratante', data:[4,2,5,1,5,1,1,1,3,0,1,8,4,8,9]},
            {name:'Champú piojos', data:[4,2,5,1,5,1,1,1,3,0,1,8,4,8,9]},
            {name:'Operación bikini', data:[0,2,2,1,7,9,1,1,3,8,1,1,4,8,2]},
            {name:'Vida sana', data:[4,9,3,1,3,0,1,1,1,0,1,0,4,4,4]}
        ]
    }

    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <strong>Latest trending topics</strong>
                            <hr />
                            <table className="table is-narrow">
                                <tbody>
                                {this.trends.map((trend, i) =>
                                    <tr>
                                        <td width="60%">
                                            <b>#{i + 1}</b> {trend.name}
                                        </td>
                                        <td>
                                            <Trend
                                                smooth
                                                autoDraw
                                                autoDrawDuration={2200}
                                                autoDrawEasing="ease-out"
                                                data={trend.data}
                                                gradient={['#09fb7b', '#0dbd30']}
                                                radius={17}
                                                strokeWidth={2.8}
                                                strokeLinecap={'round'}
                                            />
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>

                            <div className="has-text-centered">
                                <a href="#">Show all</a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default MostSpokenTopicsList;