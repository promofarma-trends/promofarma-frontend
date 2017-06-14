import React from 'react';
import Hero from '../Common';
import MostSpokenTopicsList from "./MostSpokenTopicsList";
import LatestPost from "./LatestPost";
import MostRatedTopicsList from "./MostRatedTopicsList";

class InsightsPage extends React.Component {
    render() {
        return (
            <section className="InsightsPage">
                {/*Hero with input on it*/}
                <Hero title={'Promofarma Trends'} />

                {/*Result section*/}
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <MostSpokenTopicsList/>
                            </div>
                            <div className="column">
                                <MostRatedTopicsList/>
                            </div>
                            <div className="column">
                                <LatestPost/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default InsightsPage;