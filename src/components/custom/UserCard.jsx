import {
    Button,
} from "reactstrap";
import React, { Component } from "react";
import Carousel_slider from "./Carousel_slider";
import "./styles.css"
class UserCards extends Component {
    state = {
        data: [],
        per: 9,
        page: 1,
        total_pages: null
    };

    uppercase = word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    loadData = () => {
        const { per, page, data } = this.state;
        const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
        fetch(endpoint)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: [...data, ...json.results],
                    scrolling: false,
                    total_pages: json.info.results
                });
            });
    };

    loadMore = () => {
        this.setState(
            prevState => ({
                page: prevState.page + 1,
                scrolling: true
            }),
            this.loadData
        );
    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        console.log('data :>> ', this.state.data);
        let data = this.state.data[0]
        if (data) {
            return (
                <div className="clearfix">
                    <div className="row mt-5">

                        <div className="col-md-4 animated fadeIn " key={data.id.value}>
                            <div className="card m-5">
                                <div className="card-body ">
                                    <div className="avatar">
                                        <img
                                            src={data.picture.large}
                                            className="card-img-top"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="card-title mt-5">
                                        {this.uppercase(data.name.first) +
                                            " " +
                                            this.uppercase(data.name.last)}
                                    </h5>
                                    <p className="card-text">
                                        {data.location.city +
                                            ", " +
                                            this.uppercase(data.location.state)}
                                        <span className="phone">{data.phone}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="signalCards">
                        <div className="asd">hnbb</div>
                        <hr className="hrTag"></hr>
                        <div className="userCard userData "><h2 className="mr-4">محسن حسنی</h2>
                            <h3 className="mr-4">2 روز</h3>
                            <h4 className="mr-4"> 3 لات</h4>
                            <Button className="btn btn-secondary center">اطلاعات بیشتر</Button>
                        </div>


                    </div>
                    <div>
                        <Carousel_slider />
                    </div>
                </div>
            );


        } else {
            return <h1></h1>
        }
    }
}

export default UserCards;
