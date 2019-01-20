import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import loremIpsum from 'lorem-ipsum';
import config from "../../data/SiteConfig";

class Index extends React.Component {
    render() {
        return (
            <Layout location={this.props.location} title="Home">
                <div className="index-container">
                    <Helmet>
                        <title>{config.siteTitle}</title>
                        <link rel="canonical" href={`${config.siteUrl}`} />
                    </Helmet>

                    <div className="about-container md-grid mobile-fix">
                        <Card className="md-grid md-cell--8">
                            <div className="about-wrapper">
                                <CardText>
                                    <h2>ijzersterk familiebedrijf krijgt nieuwe uitstraling en structuur</h2>

                                    <p className="about-text md-body-1">
                                        In 2015 hebben wij aangekondigd ons bedrijf te verdelen in 3 business units zijnde Mechanical, Specialties en International. Dit om meer duidelijkheid te geven richting de markt waarin wij opereren. Dit was stap 1 van ons masterplan. Wij gaan nu de laatste fase in van ons masterplan en wel om de business units verder te formaliseren. Dit doen we om onze missie meer kracht bij te zetten, wat tot verdere internationale groei in de olie, gas en energie wereld zal leiden.
                                    </p>
                                    <p className="about-text md-body-1">
                                        Wij hebben de overtuiging dat we door de inrichting van onze business units, en daarin opererende afdelingen, internationaal sterker over komen en er meer kansen liggen voor de individuele groei van de business units. Wij zien middels het nemen van deze laatste stap de toekomst positief tegemoet, waarin wij tevens uitkijken naar een continuering van onze langdurige samenwerking met onze bestaande relaties.
                                    </p>
                                    <p>{loremIpsum({ units: 'paragraphs', count: 1 })}</p>
                                    <p>{loremIpsum({ units: 'paragraphs', count: 1 })}</p>
                                    <p>{loremIpsum({ units: 'paragraphs', count: 1 })}</p>
                                    <p>{loremIpsum({ units: 'paragraphs', count: 1 })}</p>
                                    <p>{loremIpsum({ units: 'paragraphs', count: 1 })}</p>
                                    <p>{loremIpsum({ units: 'paragraphs', count: 1 })}</p>
                                    <p>{loremIpsum({ units: 'paragraphs', count: 1 })}</p>
                                    <p>{loremIpsum({ units: 'paragraphs', count: 1 })}</p>
                                    <p>{loremIpsum({ units: 'paragraphs', count: 1 })}</p>
                                    <p>{loremIpsum({ units: 'paragraphs', count: 1 })}</p>
                                </CardText>
                            </div>
                        </Card>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Index;