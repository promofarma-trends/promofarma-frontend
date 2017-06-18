import React from 'react';
import Trend from 'react-trend';
import Topic from "./Topic";

class TrendingTopics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (typeof this.props.data.trends === 'undefined') {
            return false;
        }

        return (
            <div className="box">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <strong>Latest trending topics</strong>
                            <hr />
                            <table className="table is-narrow">
                                <tbody>
                                {this.props.data.trends.map((trend, index) =>
                                    <Topic
                                        key={index}
                                        trend={trend}
                                        index={index}
                                    />
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

export default TrendingTopics;
