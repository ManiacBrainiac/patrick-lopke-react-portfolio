import React, {Component} from 'react' ;
import axios from 'axios';


export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state={
            portfolioItem: {}
        }
    }

    componentWillMount() {
        this.getPortfolioItem();
      }

    getPortfolioItem() {
        axios.get(`https://patricklopke.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, 
        {withCredentails: true}
        ).then(response => {
           this.setState({
               portfolioItem: response.data.portfolio_item
           })
        }). catch (error => {
            console.log("getPortfolioItem error", error)
        })
    }
    render() {
        
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
          } = this.state.portfolioItem;
    return (
<div className="portfolio-detail-wrapper">
<div className="images">
        <div className="background">
        <img src={banner_image_url}/>
        </div>
        <div className="logo">
        <img src={logo_url}/>
        </div>
    </div>
    <div className="bottom-text">
    <div className="title">
    <h2>{name}</h2>
    </div>
    <div className="content">
        <div className="text">
    <p>{description}</p>
    <div className="link">
        <a href={url} target="_blank">url</a>
    </div>
    </div>
    </div>
    
    </div>
</div>
    );
    }
}